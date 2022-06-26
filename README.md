# [build-your-own] scriptjs
Inspired from https://github.com/ded/script.js

### Exhaustive list of ways to use $script.js

```javascript
// excute finally
$script(['foo.js', 'bar.js', 'test.js'], 'bundle')
$script.ready('bundle', function() {
  // foo.js & bar.js & test.js are ready
})

// excute accordingly
$script('foo.js', 'foo')
$script('bar.js', 'bar')
$script
  .ready('foo', function() {
    // foo.js is ready
  })
  .ready('bar', function() {
    // bar.js is ready
  })
```
