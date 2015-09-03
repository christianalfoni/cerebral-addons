var copyInputToState = require('../../factories/copyInputToState');

module.exports = {

  copyInputValueToState: function (test) {
    test.expect(2);

    var action = copyInputToState('node', 'node');

    action({ node: 'test' }, {
      set: function (path, value) {
        test.equal(path, 'node');
        test.equal(value, 'test');
        test.done();
      }
    });
  },

  copyNestedInputValueToState: function (test) {
    test.expect(2);

    var action = copyInputToState('node', ['parent', 'node']);

    action({ parent: { node: 'test' } }, {
      set: function (path, value) {
        test.equal(path, 'node');
        test.equal(value, 'test');
        test.done();
      }
    });
  }

};
