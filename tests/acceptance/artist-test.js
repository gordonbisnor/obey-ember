import { test } from 'qunit';
import moduleForAcceptance from 'obey-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | artist');

test('visiting /artist', function(assert) {
  visit('/artist/1');

  andThen(function() {
    assert.equal(currentURL(), '/artist/1');
    assert.equal(find('h1:contains("David Barclay")').length, 1);
  });


});
