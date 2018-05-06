import json
import urllib
from pprint import pprint

with open('cards.json') as f:
    data = json.load(f)

for card in data:
    pprint(card["name"])
    urllib.urlretrieve (card["image"], card["name"] + ".png")
pass
