import json
import os
from pprint import pprint

# load cards.json made by casper.js
with open('cards.json') as f:
    data = json.load(f)

# iterate through json object and load card objects
for card in data:
    pprint(card["name"])

    directory = "cards/" + card["faction"] + "/" + card["type"]
    filename = card["number"] + " " + card["name"] + ".png"

    # create directory if doesn't exist yet
    os.system("mkdir -p \"{0}\"".format(directory))

    # download and save image
    os.system("wget -O \"{0}\" \"{1}\"".format(directory + "/" + filename, card["image"]))
pass
