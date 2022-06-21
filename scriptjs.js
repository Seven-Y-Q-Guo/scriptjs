let finalScript;
let callback;
let evets = {};

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
        evets[cb]();
      }
    }

    document.head.append(script);
  });
}

$script.ready = (name, cb) => {
  evets[name] = cb;

  return $script;
}
