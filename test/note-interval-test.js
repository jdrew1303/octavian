const chai = require('chai');
const assert = chai.assert;

const Note = require('../lib');

describe('Note intervals', function () {

  it('should shift to the correct note', function () {
    const note = new Note('A4');
    assert.equal(note.interval(2).signature, 'B4');
  });

  it('should shift up a minor second', function () {
    assert.equal(new Note('C4').minorSecond().signature, 'C#4');
  });

  it('should shift up a major second', function () {
    assert.equal(new Note('C4').majorSecond().signature, 'D4');
  });

  it('should shift up a minor third', function () {
    assert.equal(new Note('C4').minorThird().signature, 'D#4');
  });

  it('should shift up a major third', function () {
    assert.equal(new Note('C4').majorThird().signature, 'E4');
  });

  it('should shift up a perfect fourth', function () {
    assert.equal(new Note('C4').perfectFourth().signature, 'F4');
  });

  it('should shift up a dimished fifth', function () {
    assert.equal(new Note('C4').diminishedFifth().signature, 'F#4');
  });

  it('should shift up an augmented fourth', function () {
    assert.equal(new Note('C4').augmentedFourth().signature, 'F#4');
  });

  it('should shift up a perfect fifth', function () {
    assert.equal(new Note('C4').perfectFifth().signature, 'G4');
  });

  it('should shift up a minor sixth', function () {
    assert.equal(new Note('C4').minorSixth().signature, 'G#4');
  });

  it('should shift up a major sixth', function () {
    assert.equal(new Note('C4').majorSixth().signature, 'A4');
  });

  it('should shift up a minor seveth', function () {
    assert.equal(new Note('C4').minorSeventh().signature, 'A#4');
  });

  it('should shift up a major seventh', function () {
    assert.equal(new Note('C4').majorSeventh().signature, 'B4');
  });

  it('should shift up an octave', function () {
    assert.equal(new Note('C4').perfectOctave().signature, 'C5');
  });

  it('should shift up a major third with .third', function () {
    assert.equal(new Note('C4').third().signature, 'E4');
  });

  it('should shift up a major fifth with .fifth', function () {
    assert.equal(new Note('C4').fifth().signature, 'G4');
  });

});