Utility for 'Warhammer Underworld: Shadespire' web scraping of card library using casperjs. Result is stored in 'cards.json' file. [linux only] Include python script to download each card image (require 'cards.json').


Install:
- npm install phantomjs
- npm install casperjs


Execute (create cards.json, from shadespire deck library):
- casperjs casper.js


Execute (download cards image for linux, need cards.json):
- python3.6 downloader.py
