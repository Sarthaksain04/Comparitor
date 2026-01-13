import os
import random
from dotenv import load_dotenv
from serpapi import GoogleSearch

load_dotenv()

SERPAPI_KEY = os.getenv("SERPAPI_KEY")

# 🛒 Ecommerce-focused video queries
ECOMMERCE_VIDEO_QUERIES = [
    "iPhone review short video",
    "smart watch unboxing short",
    "wireless earbuds review reel",
    "running shoes try on short",
    "gaming keyboard sound test",
    "bluetooth speaker bass test",
    "fashion sneakers on feet",
    "mens fashion outfit reel",
    "womens fashion try on",
    "beauty product review short",
]

def get_product_reels(limit: int = 10):
    if not SERPAPI_KEY:
        return []

    query = random.choice(ECOMMERCE_VIDEO_QUERIES)
    print("🎥 Short video query:", query)

    params = {
        "engine": "google_short_videos",
        "q": query,
        "api_key": SERPAPI_KEY,
    }

    try:
        search = GoogleSearch(params)
        results = search.get_dict()

        videos = results.get("short_video_results", [])
        if not videos:
            return []

        reels = []
        for v in videos[:limit]:
            reels.append({
                "id": v.get("video_id") or str(random.random()),
                "title": v.get("title"),
                "thumbnail": v.get("thumbnail"),
                "videoUrl": v.get("link"),   # 🔥 external short video
                "source": v.get("source"),
                "rating": 4.5,
                "reviews": random.randint(50, 500),
                "price": "—",
                "isNew": True,
            })

        return reels

    except Exception as e:
        print("❌ SerpAPI short video error:", e)
        return []
