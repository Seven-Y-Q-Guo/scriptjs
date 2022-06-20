let finalScript;
let callback;

function $script(arr, cb) {
  callback = cb;

  arr.forEach(item => {
    const script = document.createElement('script');
    script.src = item;
    script.setAttribute('async', '');
    finalScript = script;
    if (typeof cb === 'function') {
      handleOnload(cb);
    }

    document.head.append(script);
  });
}

function handleOnload(cb) {
  finalScript.onload = () => {
    cb();
  }
}

$script.ready = (name, cb) => {
  handleOnload(cb);

  return $script;
}
