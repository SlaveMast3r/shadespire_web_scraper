import json
import os
from pprint import pprint

with open('cards.json') as f:
    data = json.load(f)

# os.system("mkdir -p \"{0}\"".format("cards/" + data[0]["faction"] + "/" + data[0]["type"]))
# os.system("wget -O \"{0}\" \"{1}\"".format("cards/" + data[0]["faction"] + "/" + data[0]["type"] + "/" + data[0]["name"] + ".png", data[0]["image"]))

for card in data:
    pprint(card["name"])
    # wget.download(card["image"])
    # os.system("wget -O \"{0}\" \"{1}\"".format(card["name"] + ".png", card["image"]))
    # urllib.request.urlretrieve (card["image"], card["name"] + ".png")

    os.system("mkdir -p \"{0}\"".format("cards/" + card["faction"] + "/" + card["type"]))
    os.system("wget -O \"{0}\" \"{1}\"".format("cards/" + card["faction"] + "/" + card["type"] + "/" + card["name"] + ".png", card["image"]))
pass
