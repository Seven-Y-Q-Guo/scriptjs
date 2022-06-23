(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let finalScript;
let callback;
let evets = {};
let count = 1;

function $script(arr, cb) {
  callback = cb;

  (typeof arr === 'string' ? [arr] : arr).forEach(item => {
    const script = document.createElement('script');
    script.src = item;
    script.setAttribute('async', '');
    finalScript = script;

    script.onload = () => {
      if (typeof cb === 'function') {
        cb()
      } else {
        if (typeof arr === 'string') {
          evets[cb]();
        } else {
          if (arr.length === count) {
            evets[cb]();
          }
          count++;
        }
      }
    }

    document.head.append(script);
  });
}

$script.ready = (name, cb) => {
  evets[name] = cb;

  return $script;
}

module.exports = $script

},{}],2:[function(require,module,exports){
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

},{"../scriptjs":1}]},{},[2]);
