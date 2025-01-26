const assert = require('assert');
const { textToMorse, morseToText } = require('./index.js');

describe('Morse Code Converter', () => {
  describe('textToMorse', () => {
    it('should convert single letters to morse code', () => {
      assert.equal(textToMorse('A'), '.-');
      assert.equal(textToMorse('B'), '-...');
      assert.equal(textToMorse('E'), '.');
    });

    it('should convert words to morse code', () => {
      assert.equal(textToMorse('HELLO'), '.... . .-.. .-.. ---');
      assert.equal(textToMorse('SOS'), '... --- ...');
    });

    it('should handle spaces between words', () => {
      assert.equal(textToMorse('HELLO WORLD'), '.... . .-.. .-.. ---   .-- --- .-. .-.. -..');
    });

    it('should be case insensitive', () => {
      assert.equal(textToMorse('hello'), '.... . .-.. .-.. ---');
    });
  });

  describe('morseToText', () => {
    it('should convert morse code to single letters', () => {
      assert.equal(morseToText('.-'), 'A');
      assert.equal(morseToText('-...'), 'B');
      assert.equal(morseToText('.'), 'E');
    });

    it('should convert morse code to words', () => {
      assert.equal(morseToText('.... . .-.. .-.. ---'), 'HELLO');
      assert.equal(morseToText('... --- ...'), 'SOS');
    });

    it('should handle spaces between words', () => {
      assert.equal(morseToText('.... . .-.. .-.. ---   .-- --- .-. .-.. -..'), 'HELLO WORLD');
    });
  });
}); 