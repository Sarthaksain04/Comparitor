import os
import requests
from typing import List
from dotenv import load_dotenv

load_dotenv()

SERPAPI_KEY = os.getenv("SERPAPI_KEY")

def scrape_google_shopping(query: str, country="in", language="en") -> List[dict]:
    url = "https://serpapi.com/search.json"

    params = {
        "engine": "google_shopping",
        "q": query,
        "hl": language,
        "gl": country,
        "api_key": SERPAPI_KEY
    }

    response = requests.get(url, params=params, timeout=20)
    response.raise_for_status()

    data = response.json()
    shopping_results = data.get("shopping_results", [])

    cleaned = []
    for item in shopping_results:
        cleaned.append({
            "title": item.get("title"),
            "price": item.get("price"),
            "rating": item.get("rating"),
            "reviews": item.get("reviews"),
            "source": item.get("source"),
            "link": item.get("link"),
            "thumbnail": item.get("thumbnail"),
        })

    return cleaned
