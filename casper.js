var casper = require('casper').create();
var fs = require('fs')

var tabs;
var cards = [];

// alternative: https://warhammerunderworlds.com/wp-json/wp/v2/cards/?ver=13&per_page=1000
var url = "https://warhammerunderworlds.com/card-library/";

function collectCards() {
  var rows = document.querySelectorAll('div.card-list__table-list-item')

  return Array.prototype.map.call(rows, function(e) {
    var number = e.querySelector('div.card-list__table-cell.card-list__table-cell--number span.ng-binding').innerText
    var name = e.querySelector('div.card-list__table-cell.card-list__table-cell--name span.ng-binding').innerText
    var image = e.querySelector('div.card-list__table-cell.card-list__table-cell--name img.card-deck__overlay-image').getAttribute('src')
    var faction = e.querySelector('div.card-list__table-cell.card-list__table-cell--faction div.card-list__table-item-value.ng-binding').innerText
    var type = e.querySelector('div.card-list__table-cell.card-list__table-cell--type div.card-list__table-item-value.ng-binding').innerText
    var location = e.querySelector('div.card-list__table-cell.card-list__table-cell--location span.card-list__location.ng-binding').innerText

    var card = {
      number: number,
      name: name,
      image: image,
      faction: faction,
      type: type,
      location: location
    }

    return card;
  });
}

function tabsCount() {
  return document.querySelector('span.card-list__pagination-location--total.ng-binding').innerText
}

casper.start(url);

casper.wait(5000, function() {
  tabs = casper.evaluate(tabsCount)
  console.log("Tabs: " + tabs);
})

casper.then(function() {
  for (var i = 0; i < tabs; i++) {
    casper.wait(5000, function() {
      var tempCards = this.evaluate(collectCards);

      for (var i = 0; i < tempCards.length; i++) {
        cards.push(tempCards[i])
      }

      console.log("Cards: ", cards.length);
    }).then(function() {
      casper.click('a.card-list__pagination-nav.card-list__pagination-nav--next.icon-next')
    });
  };
});

casper.then(function() {
  // for (var i in cards) {
  //   console.log(JSON.stringify(cards[i]));
  // }

  fs.write("./cards.json", JSON.stringify(cards, null, 4), function(err) {
    if (err) {
      console.error(err);
      return;
    };

    console.log("File has been created");
  });
})

casper.run();
