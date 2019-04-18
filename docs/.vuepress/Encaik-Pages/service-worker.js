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
    "revision": "27057a3f5a405833dee81ed83b52d966"
  },
  {
    "url": "about/index.html",
    "revision": "674445b7c68d9135e5ef39939c19ed12"
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
    "url": "assets/js/13.6cedc5a1.js",
    "revision": "3b58d1b77574d05919c32ac3cff50d59"
  },
  {
    "url": "assets/js/14.5a093972.js",
    "revision": "686028f45b8225904b6cd186c6a61502"
  },
  {
    "url": "assets/js/15.e1e306ac.js",
    "revision": "0b0be829ed4a5dadd2c28daefe65548e"
  },
  {
    "url": "assets/js/16.fa82f9ea.js",
    "revision": "bdba3a9a6bf1479ee033074532d0c5fa"
  },
  {
    "url": "assets/js/17.5fe488eb.js",
    "revision": "83bcf274ef6a263609b589a3e9a4fa6c"
  },
  {
    "url": "assets/js/18.3f3315c5.js",
    "revision": "97b12b37c4eee8469b8fa7c9e1dba484"
  },
  {
    "url": "assets/js/19.e029b80c.js",
    "revision": "63397de1180d4479e7c034ac8014699c"
  },
  {
    "url": "assets/js/2.1e799125.js",
    "revision": "e93ba2f2b0f7f9e076ba9708072e26fc"
  },
  {
    "url": "assets/js/20.eeb0a992.js",
    "revision": "bac8d6ac29fcd4512d4552e5f4474b7d"
  },
  {
    "url": "assets/js/21.46a7b0d9.js",
    "revision": "a7feeb0bc831d68d443f01f1d9e9b1d3"
  },
  {
    "url": "assets/js/22.7e5cc5a8.js",
    "revision": "d98aeaaa0b2abd3cde3ce2f19f827a85"
  },
  {
    "url": "assets/js/23.5169e61a.js",
    "revision": "562cb32e657eed44d5852bc4ed43127d"
  },
  {
    "url": "assets/js/24.82a8d6a5.js",
    "revision": "f764d70cd4551abe2be1f6c422cbf4f5"
  },
  {
    "url": "assets/js/25.c99fb592.js",
    "revision": "53df4c0b9a2bcf0641cab223727a0db2"
  },
  {
    "url": "assets/js/26.419bb51e.js",
    "revision": "e42a324df2f0c5fe852b6256b153861c"
  },
  {
    "url": "assets/js/3.946c6119.js",
    "revision": "9a239a912d826b83929fd44135c060b5"
  },
  {
    "url": "assets/js/4.04635204.js",
    "revision": "fdc91ac3182e14f4fd61ca95bd4e93d5"
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
    "url": "assets/js/8.8ed62a6c.js",
    "revision": "ecc43714f8af4fe173bb5baceb099d68"
  },
  {
    "url": "assets/js/9.a9fef874.js",
    "revision": "2af47a7488a8b25e8fbc8d711f046613"
  },
  {
    "url": "assets/js/app.f3801e3a.js",
    "revision": "47896a2820de235a61592e9f872637dc"
  },
  {
    "url": "back-end/django/index.html",
    "revision": "7f8992f6b232ca537c87a313a8713802"
  },
  {
    "url": "back-end/python/index.html",
    "revision": "9cc5afb9246279930e7377df06150fa9"
  },
  {
    "url": "blog/index.html",
    "revision": "eca6e71cfc7705fbdbac91516cceb383"
  },
  {
    "url": "front-end/css/css3/index.html",
    "revision": "5235d8790cbbfdc2fd265e3ccb2196fe"
  },
  {
    "url": "front-end/css/index.html",
    "revision": "268ebb0741a3024d6ae2920dec6cb847"
  },
  {
    "url": "front-end/css/scss/index.html",
    "revision": "7242189d65409292c045984975bfc1c1"
  },
  {
    "url": "front-end/html/html5/index.html",
    "revision": "10ee053563881084dc1cd360fa70db6d"
  },
  {
    "url": "front-end/html/index.html",
    "revision": "819a96c1df00b067edd36d092225ef2b"
  },
  {
    "url": "front-end/js/index.html",
    "revision": "a442488e513453d0973af810d5240270"
  },
  {
    "url": "front-end/node/index.html",
    "revision": "3a62d5c75e98e8b18a56e30697025884"
  },
  {
    "url": "front-end/sass/index.html",
    "revision": "7ee17b9191e7f37755404ace3ffdf69a"
  },
  {
    "url": "front-end/vue/index.html",
    "revision": "8c4f33e30fa2ae362c08584eee85796d"
  },
  {
    "url": "front-end/vue/vue-cil.html",
    "revision": "5aeea43ace3e172ecb2d041332a2cce5"
  },
  {
    "url": "front-end/vue/vuecli/vuecli-base.html",
    "revision": "0efa20b7b46ffebe7efbc3d32b916297"
  },
  {
    "url": "front-end/vue/vuecli/vuecli-guide.html",
    "revision": "35b0595270a5bb266bb11b3bdd8aa6f1"
  },
  {
    "url": "front-end/vue/vuecli/vuecli-install.html",
    "revision": "82232e81c37571c367d4d049acdda276"
  },
  {
    "url": "front-end/vue/vuepress.html",
    "revision": "f1fd7602658dd1025466603b7ccbcca2"
  },
  {
    "url": "front-end/vue/vuepress/vuepress-config.html",
    "revision": "85263395f7b73e917090dfa3c0e883a3"
  },
  {
    "url": "front-end/vue/vuepress/vuepress-guide.html",
    "revision": "81efc5a13f048873f5eeb7294d34c336"
  },
  {
    "url": "front-end/vue/vuepress/vuepress-theme.html",
    "revision": "a967fbb174ae4d29941deb5594560295"
  },
  {
    "url": "img/icon.png",
    "revision": "a82100eb0d1dc969be5a4e30cff4f17c"
  },
  {
    "url": "index.html",
    "revision": "e2e1ab2af52c85a1fd0cf13bace3e700"
  },
  {
    "url": "note/index.html",
    "revision": "6c95d980e9889d9ec42fec5b47bab02c"
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
