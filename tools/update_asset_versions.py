#!/usr/bin/env python3
"""Refresh cache keys after editing CSS or JS, before committing the static site."""

from hashlib import sha256
from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
page = root / "index.html"
markup = page.read_text(encoding="utf-8")
for attribute, filename in (("href", "styles.css"), ("src", "script.js")):
    version = sha256((root / filename).read_bytes()).hexdigest()[:12]
    pattern = rf'{attribute}="{re.escape(filename)}(?:\?v=[a-f0-9]+)?"'
    markup, count = re.subn(pattern, f'{attribute}="{filename}?v={version}"', markup)
    if count != 1:
        raise SystemExit(f"Expected exactly one {filename} reference; found {count}.")
page.write_text(markup, encoding="utf-8")
