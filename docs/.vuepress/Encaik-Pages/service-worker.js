/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dd07c10a17a4840532de970b7b85e566"
  },
  {
    "url": "about/index.html",
    "revision": "80f03e9e846375234fe4ccbdd1c6ac5d"
  },
  {
    "url": "assets/css/0.styles.8dcb70cf.css",
    "revision": "db8fddf7410966fc2597dfdd728f069a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.361c2dda.js",
    "revision": "03ee3911056b4574bac51243e6e5aff0"
  },
  {
    "url": "assets/js/11.a262e41c.js",
    "revision": "9de1810c49d3902840097244bc108171"
  },
  {
    "url": "assets/js/12.7660b4f9.js",
    "revision": "1afb48c5745e43309813ee1929c78de4"
  },
  {
    "url": "assets/js/13.c5a01022.js",
    "revision": "091130372e7a7a6ea0a58397475c7d91"
  },
  {
    "url": "assets/js/14.ba13598c.js",
    "revision": "72543e1eb76d16a9c98fb0ffb8aeffb1"
  },
  {
    "url": "assets/js/15.5e0ed679.js",
    "revision": "30101b5e73683d0234ee28bdf12311fe"
  },
  {
    "url": "assets/js/16.93397a37.js",
    "revision": "c43f70b1c79bfcf8570e83d8e3d6bd24"
  },
  {
    "url": "assets/js/17.23ec3fa0.js",
    "revision": "f6429bed20c70e6067f52559f1ac88d1"
  },
  {
    "url": "assets/js/18.d3ce1bc4.js",
    "revision": "d9467212f623bbd7537697ecad90e58e"
  },
  {
    "url": "assets/js/2.f459fc09.js",
    "revision": "c70ef97076387e3285719834bc6aada9"
  },
  {
    "url": "assets/js/3.f5fad636.js",
    "revision": "9cbfb2e16e1abcf5f4e6442ace7fce9c"
  },
  {
    "url": "assets/js/4.ffaa78b9.js",
    "revision": "801c0353a40e3e6ed10fac04bab954f6"
  },
  {
    "url": "assets/js/5.ba1084cf.js",
    "revision": "8ce752e1dd11ea724fb52c267a476927"
  },
  {
    "url": "assets/js/6.1f27d7bb.js",
    "revision": "fb1dc3a42ac502708e0767f95b115fb0"
  },
  {
    "url": "assets/js/7.db6ecf83.js",
    "revision": "d7c8e4b6373dc61f8268f8998be68923"
  },
  {
    "url": "assets/js/8.02d89215.js",
    "revision": "ecf62a3e3aae429b14e2df121791594c"
  },
  {
    "url": "assets/js/9.8a14d0d3.js",
    "revision": "2c070ea178905931a5860649962b6a80"
  },
  {
    "url": "assets/js/app.d8ccf693.js",
    "revision": "c6ba0d063a60c32bdec1c63aa1c4f946"
  },
  {
    "url": "back-end/crawler/index.html",
    "revision": "2515a33675fc8c5a14f2af1a3e32247b"
  },
  {
    "url": "back-end/django/index.html",
    "revision": "38056f4589025b556e5b5afa28aeabb5"
  },
  {
    "url": "fore-end/css/index.html",
    "revision": "4771df064a44f508ff0d930e7b7c9bba"
  },
  {
    "url": "fore-end/html/index.html",
    "revision": "83bc19f1e1b4998d7ae76465138556c3"
  },
  {
    "url": "fore-end/js/index.html",
    "revision": "4a18250458d7b884420e44b8971bb291"
  },
  {
    "url": "fore-end/node/index.html",
    "revision": "f43de89015c4dee63707f26296f77124"
  },
  {
    "url": "fore-end/sass/index.html",
    "revision": "abd33f54fbda9ece6be30dc389f0e490"
  },
  {
    "url": "fore-end/vue/index.html",
    "revision": "5e75ea2e577b9baab83b99cc7817f7a6"
  },
  {
    "url": "fore-end/vue/vue-cil.html",
    "revision": "25dcc87007c3c7dc0c9cb22721820451"
  },
  {
    "url": "fore-end/vue/vuepress.html",
    "revision": "f87151a13bd509e9b21102806a52b2cf"
  },
  {
    "url": "fore-end/vue/vuepress/vuepress-config.html",
    "revision": "a67992cbde9c15313f55c01524a06fb5"
  },
  {
    "url": "fore-end/vue/vuepress/vuepress-guide.html",
    "revision": "e8d9d8b59056386a55e42daf506c034c"
  },
  {
    "url": "fore-end/vue/vuepress/vuepress-theme.html",
    "revision": "80c1c55e40f814d89a7d3a7f94241fee"
  },
  {
    "url": "img/icon.png",
    "revision": "140be8c7488d653a829616d5acda7e96"
  },
  {
    "url": "index.html",
    "revision": "afebaa85fe298cdd703affc69db21d62"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
