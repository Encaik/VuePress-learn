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
    "revision": "0ad44a8214455f7fc0145a4a2429bf1b"
  },
  {
    "url": "about/index.html",
    "revision": "7533e7da18d0e72b1b9f96df069a20d8"
  },
  {
    "url": "assets/css/0.styles.f8e2fc97.css",
    "revision": "cbdc77f24454bcaa1fde2d3ceabc8a7e"
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
    "url": "assets/js/app.a1a106aa.js",
    "revision": "394a1db050fbaf1ececa1f3cda1f5414"
  },
  {
    "url": "back-end/crawler/index.html",
    "revision": "52b52c64e3f9021f7325b617f2552fa1"
  },
  {
    "url": "back-end/django/index.html",
    "revision": "a53e12041be2ac034b97557dd427f987"
  },
  {
    "url": "fore-end/css/index.html",
    "revision": "7a4ced8003c51c0af1eb7f880b79ab4e"
  },
  {
    "url": "fore-end/html/index.html",
    "revision": "d3eb9af0ae56c7a48077edaf0634f6bd"
  },
  {
    "url": "fore-end/js/index.html",
    "revision": "a467dc045e547acc17f6064a44175100"
  },
  {
    "url": "fore-end/node/index.html",
    "revision": "b354a3f1d175acac7ba3f4602f05eeda"
  },
  {
    "url": "fore-end/sass/index.html",
    "revision": "db53d7354269ce6668307dfb979b10f1"
  },
  {
    "url": "fore-end/vue/index.html",
    "revision": "dcb70eef06c4f9df9a8b8c23c91f3973"
  },
  {
    "url": "fore-end/vue/vue-cil.html",
    "revision": "f117bd70039b5770e8e9d2cdec590adf"
  },
  {
    "url": "fore-end/vue/vuepress.html",
    "revision": "96701776426e2518be2e62cbe1a22a94"
  },
  {
    "url": "fore-end/vue/vuepress/vuepress-config.html",
    "revision": "1bc6aba848c9754debc4d2183e0941ec"
  },
  {
    "url": "fore-end/vue/vuepress/vuepress-guide.html",
    "revision": "a71ac668fba274f2aedf59bdb4966b15"
  },
  {
    "url": "fore-end/vue/vuepress/vuepress-theme.html",
    "revision": "ec088d8840e1ae80da2c8ab645c45896"
  },
  {
    "url": "img/icon.png",
    "revision": "140be8c7488d653a829616d5acda7e96"
  },
  {
    "url": "index.html",
    "revision": "c681bc6790233d221f80b6d4f54aed7d"
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
