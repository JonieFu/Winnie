import string from "./css.js";
const player = {
  n: 1,
  id: undefined,
  time: 100,
  str: "",
  ui: {
    $demo: $("#demo"),
    $style: $(".css"),
  },
  init: () => {
    if (string[player.n] === "\n") {
      player.str = player.str + "<br>";
    } else if (string[player.n] === " ") {
      player.str = player.str + "&nbsp";
    } else {
      player.str = player.str + string[player.n];
    }
    player.ui.$demo.html(player.str);
    player.ui.$style.html(string.substr(0, player.n));
    player.play();
    player.bindEvent();
  },
  events: {
    "#btnStop": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnFast": "fast",
    "#btnNormal": "normal",
  },
  bindEvent: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key];
        console.log(value);
        console.log(key);
        $(key).click(player[value]);
      }
    }
  },
  run: () => {
    player.n = player.n + 1;
    if (player.n < string.length) {
      if (string[player.n] === "\n") {
        player.str = player.str + "<br>";
      } else if (string[player.n] === " ") {
        player.str = player.str + "&nbsp";
      } else {
        player.str = player.str + string[player.n];
      }
      player.ui.$demo.html(player.str);
      player.ui.$demo.scrollTop(10000);
      player.ui.$style.html(string.substr(0, player.n));
    } else {
      clearInterval(player.id);
    }
  },
  play: () => {
    console.log("播放");
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    console.log("暂停");
    clearInterval(player.id);
  },

  fast: () => {
    console.log("快速");
    player.pause(), (player.time = 0), player.play();
  },
  normal: () => {
    console.log("正常");
    player.pause(), (player.time = 100), player.play();
  },
  slow: () => {
    console.log("慢");
    player.pause(), (player.time = 200), player.play();
  },
};
player.init();
