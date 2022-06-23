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
