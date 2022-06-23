const $script = require('../scriptjs');
mocha.setup("bdd");

describe("scriptjs", function () {
   it("all files are loaded", function (done) {
     $script(['foo.js', 'bar.js', 'test.js'], 'bundle');

     $script.ready('bundle', function() {
       chai.assert.equal(foo, 'foo');
       chai.assert.equal(bar, 'bar');
       chai.assert.equal(test, 'test');

       done();
     });
   });

   it("ready to excute once the file is loaded", function (done) {
     $script('a.js', 'a')
     $script('b.js', 'b')
     $script
       .ready('a', function() {
         // foo.js is ready
         chai.assert.equal(a, 'a');
       })
       .ready('b', function() {
         // bar.js is ready
         chai.assert.equal(b, 'b');

       });
     // assume a.js & b.js will be loaded in less than 1s
     setTimeout(() => {
       done();
     }, 1000);
   });
});

// run tests
mocha.run();
