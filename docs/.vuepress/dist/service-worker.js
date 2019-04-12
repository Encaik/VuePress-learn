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
    "revision": "255af8a5c19626f735c6ee4551d61ee5"
  },
  {
    "url": "about/index.html",
    "revision": "fb56b30e79adf785eb1cb7f0b814ccb2"
  },
  {
    "url": "android/google.html",
    "revision": "e7e03a6d08184c0072444937af616630"
  },
  {
    "url": "android/index.html",
    "revision": "ab98a8cdf2c16e9643eede6eac336737"
  },
  {
    "url": "android/xposed.html",
    "revision": "a311ee07986d8288229611adf3efa6e4"
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
    "url": "assets/js/10.186106ec.js",
    "revision": "c955c2e5018dbc3eebbee5f627fbe482"
  },
  {
    "url": "assets/js/11.ba1a685a.js",
    "revision": "0c4126796eeb677bacf8a8394d31bbfc"
  },
  {
    "url": "assets/js/12.dde64b17.js",
    "revision": "6aedfa90ef365c1e289223a3394bb8cb"
  },
  {
    "url": "assets/js/13.f033f5a5.js",
    "revision": "f4b080d7b3007df475679bcb98f8b6ea"
  },
  {
    "url": "assets/js/14.c3b63a3e.js",
    "revision": "13fd93156c65514cc97de0f3684ba82f"
  },
  {
    "url": "assets/js/2.cc2b0317.js",
    "revision": "6c6af4bafcd66b0c31c7a0c5e80075d5"
  },
  {
    "url": "assets/js/3.a6acb0ef.js",
    "revision": "ab5feeb4266f84b5721f2124129b5ed2"
  },
  {
    "url": "assets/js/4.d136d76a.js",
    "revision": "9ca6d752d9cbd2b2a6590686f22b8958"
  },
  {
    "url": "assets/js/5.8b7f4e17.js",
    "revision": "b25398f0978942b4edfa916a214e5b4b"
  },
  {
    "url": "assets/js/6.b3dce6dc.js",
    "revision": "75e1f65bdbc9f0e3d6b04fe7fa18e46d"
  },
  {
    "url": "assets/js/7.a4b61dc4.js",
    "revision": "2ee7a2d3bee5b9e86916a5c5106c7b69"
  },
  {
    "url": "assets/js/8.eb8c8c87.js",
    "revision": "3336e214f6696c8177bc3fdd60652d1a"
  },
  {
    "url": "assets/js/9.f92fa439.js",
    "revision": "2af47a7488a8b25e8fbc8d711f046613"
  },
  {
    "url": "assets/js/app.efcbf1fa.js",
    "revision": "1967994c088939adfe7af9fee99cd52c"
  },
  {
    "url": "img/icon.png",
    "revision": "140be8c7488d653a829616d5acda7e96"
  },
  {
    "url": "index.html",
    "revision": "33a22bc187155d5b562dd8260b68b789"
  },
  {
    "url": "ios/appstore.html",
    "revision": "19d998570e006785f495c776860c5274"
  },
  {
    "url": "ios/index.html",
    "revision": "6f8c20101745bfb3faaf4db5a5a38b9c"
  },
  {
    "url": "ios/swift.html",
    "revision": "3ee711d56a09b04d8283f4cabe86ede5"
  },
  {
    "url": "web/index.html",
    "revision": "092dcb2cda192e87edcc324b5e8193bb"
  },
  {
    "url": "web/vue.html",
    "revision": "2222ccedb9755f3e8946f1a3d68c7dee"
  },
  {
    "url": "web/webpack.html",
    "revision": "8aa6b956bccafb0762202e6c08293acc"
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
