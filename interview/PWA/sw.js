const CACHE_NAME = 'sw-' + 0;

self.addEventListener('install',(event) => {
    let cacheComplete = caches.open(CACHE_NAME).then(cache => {
        return cache.addAll([
            './',   //根路径
            './in.png'  //资源
        ])
    })

    event.waitUntil()
})