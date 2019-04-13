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
    "revision": "83b20e8f37c69ac08d1f3a004bdddd07"
  },
  {
    "url": "about/index.html",
    "revision": "0ea8e051a0e2478d31e6206ac6873d22"
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
    "url": "assets/js/10.11a10e8a.js",
    "revision": "e718de9ab782217b54dce21c1b3f50d9"
  },
  {
    "url": "assets/js/11.0e480c01.js",
    "revision": "20f971a37d63fca3de23fd9f594693d3"
  },
  {
    "url": "assets/js/12.6e06cc4e.js",
    "revision": "314fcdda60d5bbee207e65a3cb8f8a9e"
  },
  {
    "url": "assets/js/13.ba542ee7.js",
    "revision": "f0cffc1f547fd9f2f69a3c48b9036c26"
  },
  {
    "url": "assets/js/14.f7fa110f.js",
    "revision": "686028f45b8225904b6cd186c6a61502"
  },
  {
    "url": "assets/js/15.6b37dfcb.js",
    "revision": "a8ebc485293b60c161d9cca2a12d891e"
  },
  {
    "url": "assets/js/2.bd1ac155.js",
    "revision": "0642827d077378b6401c7d48c576bc4a"
  },
  {
    "url": "assets/js/3.13457c7b.js",
    "revision": "4de2908cbfe7d7bb1e14525a0aa65aec"
  },
  {
    "url": "assets/js/4.f7a9a7bc.js",
    "revision": "6f663c95c59b3538f9aec8c98073e9dc"
  },
  {
    "url": "assets/js/5.4d727dbf.js",
    "revision": "9539bb3364ba0d8e0a0cc6ebcfc47740"
  },
  {
    "url": "assets/js/6.3f3508ed.js",
    "revision": "5df2c1dc7c391b700150dce3be45495b"
  },
  {
    "url": "assets/js/7.e43fb3fb.js",
    "revision": "8dd39a52915cb1b7d2d77815fb55f17f"
  },
  {
    "url": "assets/js/8.abb73b03.js",
    "revision": "355e08502acab42e15a622197624bfb6"
  },
  {
    "url": "assets/js/9.74ce3cef.js",
    "revision": "a46129e83a4719ebdf2d4b3150dd01df"
  },
  {
    "url": "assets/js/app.30272275.js",
    "revision": "bf74483b5de4a54f53b5fc6d9f467456"
  },
  {
    "url": "back-end/crawler/index.html",
    "revision": "c40d03896a771e1cad39479676b74435"
  },
  {
    "url": "back-end/django/index.html",
    "revision": "bfc717dfbfd0ba1c76ba35a0706c5745"
  },
  {
    "url": "fore-end/css/index.html",
    "revision": "4f271c61c660e149476b281f0fb6a022"
  },
  {
    "url": "fore-end/html/index.html",
    "revision": "fd0b25a2bb61e85d7b1bc1497e34534c"
  },
  {
    "url": "fore-end/js/CommondJs.html",
    "revision": "049874e81e6ad06724850a64abf7d60c"
  },
  {
    "url": "fore-end/js/ES.html",
    "revision": "c39a5ebfb7e64934b57af9f5c2c9a6fb"
  },
  {
    "url": "fore-end/js/index.html",
    "revision": "0d3abeb024004f7ed3c25a99165a3157"
  },
  {
    "url": "fore-end/node/index.html",
    "revision": "e7edd21e5aef251ee38b4026417900d2"
  },
  {
    "url": "fore-end/sass/index.html",
    "revision": "36ca23b48b6686200918042003f114e8"
  },
  {
    "url": "fore-end/vue/index.html",
    "revision": "0b675dc0cfbc5eb2b1fd465d970b1b43"
  },
  {
    "url": "img/icon.png",
    "revision": "140be8c7488d653a829616d5acda7e96"
  },
  {
    "url": "index.html",
    "revision": "2774c90a2c4a81637df244818e6e0ab9"
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
