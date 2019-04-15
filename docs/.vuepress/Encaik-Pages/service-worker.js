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
    "revision": "8c917752bcb7a7e717eaea2ac5bd76ba"
  },
  {
    "url": "about/index.html",
    "revision": "1f12055e0516524af3980e80312892f4"
  },
  {
    "url": "assets/css/0.styles.0d67a1dc.css",
    "revision": "03d985f522f5b8352430e0040df7c155"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.668ca6ac.js",
    "revision": "54c127f7837009c18530061f5ce4eb3a"
  },
  {
    "url": "assets/js/11.36ee5f35.js",
    "revision": "0f07c82723ad6950313b95bdeae3cb14"
  },
  {
    "url": "assets/js/12.11e2027e.js",
    "revision": "61bdbaf1e7a503eeb1875694f1e89548"
  },
  {
    "url": "assets/js/13.054f67b7.js",
    "revision": "51fb5fac7524c63692e2139b8df7475b"
  },
  {
    "url": "assets/js/14.f0d00d07.js",
    "revision": "8ba830dff7dd501c9127a7bf44810660"
  },
  {
    "url": "assets/js/15.62642f0e.js",
    "revision": "d273f54ee141d8da9d4feb21ef2ce733"
  },
  {
    "url": "assets/js/16.9cf6a4fb.js",
    "revision": "e8a1355200938d3e337d3f6eb133b84b"
  },
  {
    "url": "assets/js/17.77ec8434.js",
    "revision": "9a854dcf08381619c5e6588eabe92e39"
  },
  {
    "url": "assets/js/18.5ecdb847.js",
    "revision": "3cbf7c0b7c7a70180857c0be2c6e9192"
  },
  {
    "url": "assets/js/19.69a34c7f.js",
    "revision": "e3290b5642048a80754f5f01043b0b0d"
  },
  {
    "url": "assets/js/2.07f19179.js",
    "revision": "d456d93dac5469c907a397be898fa5af"
  },
  {
    "url": "assets/js/20.b839f694.js",
    "revision": "9fb6e1d900bc036b27b1fe7af0a4d964"
  },
  {
    "url": "assets/js/21.d0824cc7.js",
    "revision": "d503d0655decca4970c5fdf800a2a093"
  },
  {
    "url": "assets/js/22.51dad6e8.js",
    "revision": "ff55fd5e2c9ebc7911ef0588f7e20dc0"
  },
  {
    "url": "assets/js/23.ce67d2df.js",
    "revision": "30250cf808b672ab6e6f9ff2e7584c13"
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
    "url": "assets/js/5.df1a1a19.js",
    "revision": "ac8760e21f6a8e2301c39f83be787222"
  },
  {
    "url": "assets/js/6.941ccf42.js",
    "revision": "d655f54269321abb83ac92e2ed81474d"
  },
  {
    "url": "assets/js/7.906fad43.js",
    "revision": "8dd39a52915cb1b7d2d77815fb55f17f"
  },
  {
    "url": "assets/js/8.6a4d9852.js",
    "revision": "4fa42c2caf1d1f7261bb6194a9f2a979"
  },
  {
    "url": "assets/js/9.73bae318.js",
    "revision": "82bf4863e5db95f5cf1941fbc8506b5d"
  },
  {
    "url": "assets/js/app.afad8863.js",
    "revision": "75095e05bebbe599e05b1e1650dc9150"
  },
  {
    "url": "back-end/crawler/index.html",
    "revision": "caf3e5269992a5d32fb7af5b6ff2dee3"
  },
  {
    "url": "back-end/django/index.html",
    "revision": "d149684d25b168a6a952c3ab28fc24dd"
  },
  {
    "url": "blog/index.html",
    "revision": "cd2def1e61d24ed7e76dd82107259112"
  },
  {
    "url": "front-end/css/css3/index.html",
    "revision": "aa883910a51eae83f5f3b97299c0a09a"
  },
  {
    "url": "front-end/css/index.html",
    "revision": "0e987a38fee68d0d1fcd3dca34677dda"
  },
  {
    "url": "front-end/css/scss/index.html",
    "revision": "dc7c5a081392033d16694f42f48f1506"
  },
  {
    "url": "front-end/html/html5/index.html",
    "revision": "fb93bf647c17086e4770f9054edccf25"
  },
  {
    "url": "front-end/html/index.html",
    "revision": "7fe921507ebd625e569a1275b2655b9e"
  },
  {
    "url": "front-end/js/index.html",
    "revision": "c0d0588f67f0952383475c5b1cb523ed"
  },
  {
    "url": "front-end/node/index.html",
    "revision": "99adc9a7d690464fce9fee87c8c95cb9"
  },
  {
    "url": "front-end/sass/index.html",
    "revision": "1dfdcaaec6a9a2eabef03b3efa580b8a"
  },
  {
    "url": "front-end/vue/index.html",
    "revision": "151c39091ff01a5f4153eebdc3f26f71"
  },
  {
    "url": "front-end/vue/vue-cil.html",
    "revision": "a33c88479d041c4344afc3fb7cea0d7a"
  },
  {
    "url": "front-end/vue/vuepress.html",
    "revision": "ecbb68fcca98c059f5bc669750713b00"
  },
  {
    "url": "front-end/vue/vuepress/vuepress-config.html",
    "revision": "5d67bfa38aeabebc54cf2d010fe1129e"
  },
  {
    "url": "front-end/vue/vuepress/vuepress-guide.html",
    "revision": "ba10620d9b80f98a70983d3cf36dd7f0"
  },
  {
    "url": "front-end/vue/vuepress/vuepress-theme.html",
    "revision": "2e05a54ca093a518d47ad179f53d6bcc"
  },
  {
    "url": "img/icon.png",
    "revision": "a82100eb0d1dc969be5a4e30cff4f17c"
  },
  {
    "url": "index.html",
    "revision": "0a3f9d4627b17e21270627b0677e5da7"
  },
  {
    "url": "note/index.html",
    "revision": "016821d0a63bacaa7e58690c0f313c2a"
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
