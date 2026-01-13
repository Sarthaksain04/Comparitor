# import asyncio
# import json
# import os
# import sys
# import urllib.parse
# from datetime import datetime
# import time
# from typing import List

# from fastapi import FastAPI, Query, HTTPException
# from pymongo import MongoClient
# from pydantic import BaseModel, Field
# from dotenv import load_dotenv

# # --- 1. IMPORT YOUR EXISTING MODULES ---
# from amazon_scraper import scrape_amazon
# from flipkart_scraper import scrape_flipkart
# from jiomart_scraper import scrape_jiomart
# from meesho_scraper import scrape_meesho
# from croma_scraper import scrape_croma
# from myntra_scraper import scrape_myntra
# from fastapi.middleware.cors import CORSMiddleware


# class SearchRequest(BaseModel):
#     query: str
#     language: str = "en"
#     country: str = "in"


# load_dotenv()

# if sys.platform == 'win32':
#     asyncio.set_event_loop_policy(asyncio.WindowsProactorEventLoopPolicy())

# app = FastAPI(title="Comparitor Aggregator")
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:5173"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


# def _bucket_dir() -> str:
#     now = datetime.now()
#     bucket = now.replace(minute=(now.minute // 5) * 5, second=0, microsecond=0)
#     return os.path.join("results", bucket.strftime("%Y%m%d_%H%M"))

# # --- 2. MONGODB ATLAS SETUP ---
# MONGO_URI = os.getenv("MONGODB_URI") 
# client = MongoClient(MONGO_URI)
# db = client["comparitor_db"]
# collection = db["products"]

# # @app.get("/search")
# # async def search_and_aggregate(q: str = Query(..., description="Product to search")):
# #     start_time = time.perf_counter()
# #     print(f"📡 Starting parallel search for: {q}")
    
# #     try:
# #         results_batches = await asyncio.gather(
# #             scrape_amazon(q),
# #             scrape_flipkart(q),
# #             scrape_jiomart(q),
# #             scrape_meesho(q),
# #             scrape_croma(q),
# #             scrape_myntra(q),
# #             return_exceptions=True 
# #         )
# #     except Exception as e:
# #         print(f"❌ Aggregator Error: {e}")
# #         raise HTTPException(status_code=500, detail="Error during parallel execution")

# #     # --- 3. FLATTEN EVERYTHING CAREFULLY ---
# #     all_products = []
# #     for i, batch in enumerate(results_batches):
# #         if isinstance(batch, list):
# #             limited = batch[:10]
# #             print(f"📦 Batch {i} returned {len(limited)} items")
# #             all_products.extend(limited)
# #         else:
# #             print(f"⚠️ Batch {i} failed or returned no list: {batch}")

# #     if not all_products:
# #         return {"status": "no_results", "data": []}

# #     # --- 4. SAVE TO SINGLE JSON FILE (TOTAL DATA) ---
# #     out_dir = _bucket_dir()
# #     os.makedirs(out_dir, exist_ok=True)
# #     filename = f"aggregated_{q.replace(' ', '_')}.json"
# #     out_path = os.path.join(out_dir, filename)
# #     with open(out_path, "w", encoding="utf-8") as f:
# #         json.dump(all_products, f, indent=4)
# #     print(f"📁 Local JSON saved: {out_path} with {len(all_products)} items.")

# #     # --- 5. PREPARE & UPLOAD TO MONGODB ---
# #     # Create a deep copy for MongoDB to avoid modifying the original list prematurely
# #     enriched_data = []
# #     for item in all_products:
# #         # Create a new dict for each item to ensure no shared references
# #         new_item = item.copy() 
# #         new_item["search_query"] = q
# #         new_item["created_at"] = datetime.utcnow().isoformat()
# #         enriched_data.append(new_item)

# #     try:
# #         if enriched_data:
# #             # PUSH TOTAL DATA
# #             collection.insert_many(enriched_data)
# #             print(f"💾 Successfully uploaded {len(enriched_data)} total items to MongoDB Atlas.")
            
# #             # Remove the ObjectId before returning to FastAPI
# #             for item in enriched_data:
# #                 item.pop('_id', None)
# #     except Exception as e:
# #         print(f"⚠️ MongoDB Upload Failed: {e}")

# #     elapsed = time.perf_counter() - start_time
# #     return {
# #         "status": "success",
# #         "total_results": len(enriched_data),
# #         "file_saved": filename,
# #         "elapsed_seconds": round(elapsed, 3),
# #         "results": enriched_data
# #     }
# @app.post("/search")
# async def search_and_aggregate(payload: SearchRequest):
#     q = payload.query.strip()
#     if not q:
#         raise HTTPException(status_code=400, detail="Query cannot be empty")

#     start_time = time.perf_counter()
#     print(f"📡 Starting parallel search for: {q}")

#     try:
#         results_batches = await asyncio.gather(
#             scrape_amazon(q),
#             scrape_flipkart(q),
#             scrape_jiomart(q),
#             scrape_meesho(q),
#             scrape_croma(q),
#             scrape_myntra(q),
#             return_exceptions=True
#         )
#     except Exception as e:
#         print(f"❌ Aggregator Error: {e}")
#         raise HTTPException(status_code=500, detail="Error during parallel execution")

#     # --- FLATTEN ---
#     all_products = []
#     for i, batch in enumerate(results_batches):
#         if isinstance(batch, list):
#             limited = batch[:10]
#             print(f"📦 Batch {i} returned {len(limited)} items")
#             all_products.extend(limited)
#         else:
#             print(f"⚠️ Batch {i} failed or returned no list: {batch}")

#     if not all_products:
#         return {"cleaned_products": []}

#     # --- SAVE JSON LOCALLY ---
#     out_dir = _bucket_dir()
#     os.makedirs(out_dir, exist_ok=True)
#     filename = f"aggregated_{q.replace(' ', '_')}.json"
#     out_path = os.path.join(out_dir, filename)
#     with open(out_path, "w", encoding="utf-8") as f:
#         json.dump(all_products, f, indent=4)
#     print(f"📁 Local JSON saved: {out_path} with {len(all_products)} items.")

#     # --- PREPARE & UPLOAD TO MONGODB ---
#     enriched_data = []
#     for item in all_products:
#         new_item = item.copy()
#         new_item["search_query"] = q
#         new_item["created_at"] = datetime.utcnow().isoformat()
#         enriched_data.append(new_item)

#     try:
#         if enriched_data:
#             result = collection.insert_many(enriched_data)
#             print(f"💾 Successfully uploaded {len(result.inserted_ids)} items to MongoDB.")
#             # remove _id keys to avoid serialization issues
#             for item in enriched_data:
#                 item.pop("_id", None)
#     except Exception as e:
#         print(f"⚠️ MongoDB Upload Failed: {e}")

#     elapsed = time.perf_counter() - start_time
#     return {
#         "cleaned_products": enriched_data
#     }


# # --- TERMINAL SEARCH MODE ---
# async def search_from_terminal():
#     q = input("🔍 Enter product to search: ").strip()
#     if not q:
#         print("❌ Empty search query")
#         return

#     result = await search_and_aggregate(q)

#     print("\n✅ Search Completed")
#     print(f"🔢 Total Results: {result['total_results']}")
#     print(f"⏱ Time Taken: {result['elapsed_seconds']}s\n")

#     for i, item in enumerate(result["results"][:5], 1):
#         print(f"{i}. {item.get('title', 'N/A')} | ₹{item.get('price', 'N/A')}")


# if __name__ == "__main__":
#     mode = input("Choose mode (api / terminal): ").strip().lower()

#     if mode == "terminal":
#         asyncio.run(search_from_terminal())
#     else:
#         import uvicorn
#         print("🚀 Comparitor Aggregator is running on http://localhost:8000/docs")
#         uvicorn.run(app, host="0.0.0.0", port=8000)



import os
import time
from datetime import datetime
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient
from dotenv import load_dotenv
from bson import ObjectId
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from reels_api import get_product_reels

from serpapi_shopping import scrape_google_shopping

load_dotenv()

# ---------------- APP ----------------
app = FastAPI(title="Google Shopping Aggregator")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- DB ----------------
MONGO_URI = os.getenv("MONGODB_URI")
client = MongoClient(MONGO_URI)
db = client["comparitor_db"]
collection = db["google_shopping_products"]

# ---------------- MODELS ----------------
class SearchRequest(BaseModel):
    query: str
    language: str = "en"
    country: str = "in"

# ---------------- API ----------------
@app.post("/search")
def search_products(payload: SearchRequest):
    query = payload.query.strip()

    if not query:
        raise HTTPException(status_code=400, detail="Query cannot be empty")

    products = scrape_google_shopping(
        query=query,
        country=payload.country,
        language=payload.language
    )

    if not products:
        return {"results": []}

    for item in products:
        item["search_query"] = query
        item["created_at"] = datetime.utcnow()

    collection.insert_many(products)

    # ✅ REMOVE ObjectId
    for item in products:
        item.pop("_id", None)

    return {
        "query": query,
        "total_results": len(products),
        "results": products
    }

@app.get("/reels")
def reels_api():
    return get_product_reels()
# ---------------- RUN ----------------
if __name__ == "__main__":
    import uvicorn
    print("🚀 Server running at http://localhost:8000/docs")
    uvicorn.run(app, host="0.0.0.0", port=8000)
