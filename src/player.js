'use strict';

import audio from 'audio';

var debouncedTimeouts = Array.apply(null, { length: audio.synths.length });

function play(i, pattern, iterations) {
  audio.generate(i, pattern, iterations);
}

function playDebounced(i, pattern, iterations, timeout = 250) {
  clearTimeout(debouncedTimeouts[i]);
  debouncedTimeouts[i] = setTimeout(
    () => play(i, pattern, iterations),
    timeout
  );
}

export default { play, playDebounced };