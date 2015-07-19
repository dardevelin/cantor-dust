'use strict';

import midi from 'midi';
window.midi = midi;


import initLaunchpad from 'launchpad';
window.initLaunchpad = initLaunchpad;

import initLaunchControl from 'novation-launchcontrol'
window.initLaunchControl = initLaunchControl


import audio from 'audio';
window.audio = audio;
window.load     = audio.load;
window.generate = audio.generate;
