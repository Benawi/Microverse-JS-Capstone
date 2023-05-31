const { JSDOM } = require('jsdom');
const itemsCounter = require('../modules/itemCounter.js');
describe('Itemcounter', () => {
  test('counts the items', () => {
    const dom = new JSDOM(` <ul> <li>1</li> <li>2</li> <li>3</li> </ul> `);
    const container = dom.window.document.querySelector('ul');
    expect(itemsCounter(container)).toBe(3);
  });
});
