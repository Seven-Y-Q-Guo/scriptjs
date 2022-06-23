var sink = require('sink-test')
var start = sink.start
sink = sink.sink

sink('some module', function (test, ok, before, after, assert) {
  // write tests
  test('a failure', 1, function () {
    assert('', 'success', 'should have success')
  })
})

sink('another module', function (test, ok, before, after, assert) {
  // write tests
  test('b failure', 1, function () {
    assert('', 'success', 'should have success')
  })
})

start()
