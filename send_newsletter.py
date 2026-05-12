#!/usr/bin/env python3
"""
send_newsletter.py — Send a Buttondown newsletter for a published article.

Usage:
    python send_newsletter.py                     # latest article (by date)
    python send_newsletter.py some-article-slug   # specific article
"""

import sys
import os
import re
import requests

API_KEY      = "696e212e-3d70-4936-b53a-9b36c44ca756"
SITE_URL     = "https://juanbracho.com/#/writing"
ARTICLES_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "src", "articles")


def parse_article(path):
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()

    def get_field(field):
        m = re.search(rf"{field}:\s*'((?:[^'\\]|\\.)*)'", text)
        return m.group(1).replace("\\'", "'") if m else ""

    def get_content():
        m = re.search(r"content:\s*`(.*?)`", text, re.DOTALL)
        if not m:
            return ""
        raw = m.group(1).strip()
        raw = re.sub(r"[#*`_~]", "", raw)
        raw = re.sub(r"\s+", " ", raw)
        return raw[:160].rsplit(" ", 1)[0] + "…"

    description = get_field("description")

    return {
        "slug":        get_field("id"),
        "title":       get_field("title"),
        "description": description if description else get_content(),
        "date":        get_field("date"),
    }


def load_all_articles():
    articles = []
    for fname in os.listdir(ARTICLES_DIR):
        if fname.endswith(".js"):
            article = parse_article(os.path.join(ARTICLES_DIR, fname))
            if article["slug"]:
                articles.append(article)
    return sorted(articles, key=lambda a: a["date"], reverse=True)


def build_email(article):
    url     = f"{SITE_URL}/{article['slug']}"
    subject = f"New essay: {article['title']}"
    body    = f"""Hey,

I just published something new on the desk.

**{article['title']}**
{article['description']}

Read it here → {url}

As always, reply to this if anything resonates.

— Juan"""
    return subject, body


def send_email(subject, body):
    res = requests.post(
        "https://api.buttondown.email/v1/emails",
        headers={"Authorization": f"Token {API_KEY}", "X-Buttondown-Live-Dangerously": "true"},
        json={"subject": subject, "body": body, "status": "about_to_send"},
    )
    return res.status_code, res.json()


def main():
    articles = load_all_articles()
    if not articles:
        print("No articles found in src/articles/")
        sys.exit(1)

    if len(sys.argv) == 2:
        slug    = sys.argv[1]
        article = next((a for a in articles if a["slug"] == slug), None)
        if not article:
            print(f"Article not found: {slug}")
            print("\nAvailable slugs:")
            for a in articles:
                print(f"  {a['slug']}  ({a['date']})")
            sys.exit(1)
    else:
        article = articles[0]

    url = f"{SITE_URL}/{article['slug']}"
    print(f"\nArticle:     {article['title']}")
    print(f"Date:        {article['date']}")
    print(f"Description: {article['description'][:80]}...")
    print(f"URL:         {url}")

    subject, body = build_email(article)

    print(f"\n--- Email preview ---")
    print(f"Subject: {subject}\n")
    print(body)
    print(f"---------------------\n")

    confirm = input("Send to all subscribers? (y/n) [n]: ").strip().lower()
    if confirm != "y":
        print("Cancelled.")
        sys.exit(0)

    print("Sending...")
    status, data = send_email(subject, body)

    if status in (200, 201):
        print(f"Done! Email ID: {data.get('id', '???')}")
    else:
        print(f"Error {status}: {data}")
        sys.exit(1)


if __name__ == "__main__":
    main()
