import json
# import urllib.request
import os
# import wget
from pprint import pprint

with open('cards.json') as f:
    data = json.load(f)

for card in data:
    pprint(card["name"])
    # wget.download(card["image"])
    os.system("wget -O \"{0}\" \"{1}\"".format(card["name"] + ".png", card["image"]))
    # urllib.request.urlretrieve (card["image"], card["name"] + ".png")
pass
