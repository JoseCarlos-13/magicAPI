import { MTG } from './main'

class Card {
  static getCardsList (card) {
    return MTG.get(`cards/search?q=${card}`)
  }

  static getCard (card) {
    return MTG.get(`https://api.scryfall.com/cards/named?fuzzy=${card}`)
  }
}

export { Card }
