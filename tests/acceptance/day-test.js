import { test } from 'qunit';
import moduleForAcceptance from 'obey-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | day');

test('visiting /day/1', function(assert) {
  visit('/day/1');

  andThen(function() {
    assert.equal(currentURL(), '/day/1');
    assert.equal(find('h1:contains("Thursday")').length, 1);
  });
});


test('visiting /day/2', function(assert) {
  visit('/day/2');

  andThen(function() {
    assert.equal(currentURL(), '/day/2');
    assert.equal(find('h1:contains("Friday")').length, 1);
  });
});
