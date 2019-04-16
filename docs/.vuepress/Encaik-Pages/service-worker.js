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
    "revision": "b3cd06541a85162d096ee6b06d18b1e4"
  },
  {
    "url": "about/index.html",
    "revision": "87d5cfafca7e08df48e4832609a772cb"
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
    "url": "assets/js/10.e52ff7b5.js",
    "revision": "51010b0406e944ba994b5edef2dd958c"
  },
  {
    "url": "assets/js/11.60a5a624.js",
    "revision": "cb0045b68af9a7e7c0437c806a05169d"
  },
  {
    "url": "assets/js/12.a8a09713.js",
    "revision": "507bd3b4de9584cbe7d18de546ffdc38"
  },
  {
    "url": "assets/js/13.f654ff72.js",
    "revision": "84f2b60be2a8825232d9c9ffc42a180e"
  },
  {
    "url": "assets/js/14.54f73450.js",
    "revision": "5a68c5690861992aca8bf2487d10a86c"
  },
  {
    "url": "assets/js/15.7bce1741.js",
    "revision": "c793cdcec83d7843efa84225b95c8feb"
  },
  {
    "url": "assets/js/16.987e2993.js",
    "revision": "b1c8555f0af410f8f353df22ae859b78"
  },
  {
    "url": "assets/js/17.4ca1a609.js",
    "revision": "bf0e465ddaa046ea2711e0a5cd435221"
  },
  {
    "url": "assets/js/18.3d229db0.js",
    "revision": "dc0b70d5dfaf35cd7911eb45c50ae1eb"
  },
  {
    "url": "assets/js/19.57a7b69b.js",
    "revision": "a1afa9b5b9ff51282c883b16c23e4513"
  },
  {
    "url": "assets/js/2.8788b0d5.js",
    "revision": "0632f67a0961ebfce2b87bd3c37c0406"
  },
  {
    "url": "assets/js/20.33a221a0.js",
    "revision": "543005fc080a4b389733b10bb06dde5c"
  },
  {
    "url": "assets/js/21.1728a248.js",
    "revision": "12400bc0bab01c500fa1d84aecac02c1"
  },
  {
    "url": "assets/js/22.09b5b9b9.js",
    "revision": "399c21cf31e4a90b748351c4dfc83a98"
  },
  {
    "url": "assets/js/23.726486bd.js",
    "revision": "320794107baf5bc7aa6e33eab2512997"
  },
  {
    "url": "assets/js/3.09683a03.js",
    "revision": "389b563b446e5e033f1d4e4b45bc02e4"
  },
  {
    "url": "assets/js/4.21007214.js",
    "revision": "f8ee06cc6f582795915ea9173e02b73b"
  },
  {
    "url": "assets/js/5.c41b33e8.js",
    "revision": "72b1a77e17d3e336cf146e4b896cb1aa"
  },
  {
    "url": "assets/js/6.4b264446.js",
    "revision": "ab183a8da404702202d1ebf689a225a7"
  },
  {
    "url": "assets/js/7.ba4aff9e.js",
    "revision": "71237bb6db8ad75c7a2fd4ab747e8f68"
  },
  {
    "url": "assets/js/8.3d17ffb0.js",
    "revision": "355e08502acab42e15a622197624bfb6"
  },
  {
    "url": "assets/js/9.adba160a.js",
    "revision": "f7c547fdbd7dfc40d504775baac5e855"
  },
  {
    "url": "assets/js/app.8b9c2de7.js",
    "revision": "f2f7bdfc3c56a16db44c8ec9ffa598ec"
  },
  {
    "url": "back-end/django/index.html",
    "revision": "320e7922a554d7132464d650524c4a04"
  },
  {
    "url": "back-end/python/index.html",
    "revision": "befe749efde6b6190db38cf34792fe58"
  },
  {
    "url": "blog/index.html",
    "revision": "a28ed4b9a3c0a791683dbdfa196fe45f"
  },
  {
    "url": "front-end/css/css3/index.html",
    "revision": "75fd6d513798363faf825efaaa9c19ea"
  },
  {
    "url": "front-end/css/index.html",
    "revision": "94d0d32b37baefe49cd2b948f94b32b5"
  },
  {
    "url": "front-end/css/scss/index.html",
    "revision": "2d62f3a26a206502ad8d42502aeee5b3"
  },
  {
    "url": "front-end/html/html5/index.html",
    "revision": "af365fff999fe785f28edce8ec62f09a"
  },
  {
    "url": "front-end/html/index.html",
    "revision": "4918426de1bf4704d48fbe59ee507996"
  },
  {
    "url": "front-end/js/index.html",
    "revision": "d63c0cfa8e45d7e18e03264c8f10a498"
  },
  {
    "url": "front-end/node/index.html",
    "revision": "289c82b4b9e92701ebd7b6a80d132d72"
  },
  {
    "url": "front-end/sass/index.html",
    "revision": "5e879bcaf0b5f26db63f3a6e434e631b"
  },
  {
    "url": "front-end/vue/index.html",
    "revision": "90562f54aef40e2adfde85e897067b3d"
  },
  {
    "url": "front-end/vue/vue-cil.html",
    "revision": "9cbbfae289074284b57fdd8b24bf63b6"
  },
  {
    "url": "front-end/vue/vuepress.html",
    "revision": "1286790e7f1d9f593bc7ac04d8250186"
  },
  {
    "url": "front-end/vue/vuepress/vuepress-config.html",
    "revision": "b8296ae5c7d8cebc45f9c8d0dfa18ec9"
  },
  {
    "url": "front-end/vue/vuepress/vuepress-guide.html",
    "revision": "3feba51ea415b09e312a47638b650895"
  },
  {
    "url": "front-end/vue/vuepress/vuepress-theme.html",
    "revision": "7d3ab340169616e937712005aebd69e5"
  },
  {
    "url": "img/icon.png",
    "revision": "a82100eb0d1dc969be5a4e30cff4f17c"
  },
  {
    "url": "index.html",
    "revision": "bf8438661a82497e44b6e42d104f3e2a"
  },
  {
    "url": "note/index.html",
    "revision": "57075d0acb6e72ee7cc562374b8e02e8"
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
