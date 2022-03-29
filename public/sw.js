const FakeHulu_mainCache_key = "FakeHulu_mainCache_key";

const assets = [
    "/welcome",
    "/assets/accountPage-assets/icons/home.png",
    "/assets/accountPage-assets/icons/github.png",
    "/assets/accountPage-assets/icons/menu.png",
    "/assets/accountPage-assets/icons/movie.png",
    "/assets/accountPage-assets/icons/return-arrow.png",
    "/assets/accountPage-assets/icons/search.png",
    "/assets/accountPage-assets/icons/tv-show.png",
    "/assets/accountPage-assets/icons/video-playlist.png",
    "/assets/accountPage-assets/icons/users.png",
    "/assets/accountPage-assets/icons/loading.gif",
    "/assets/accountPage-assets/logos/hulu-white.png",
    "/assets/welcomePage-assets/logos/logo.png",
    "/assets/welcomePage-assets/backgrouds/desktop-backgrounds/biggest-events[desktop].jpg",
    "/assets/welcomePage-assets/backgrouds/mobile-backgrounds/biggest-events[mobile].jpg",
    "/assets/welcomePage-assets/backgrouds/mobile-backgrounds/breaking-news[mobile].jpg",
    "/assets/welcomePage-assets/backgrouds/mobile-backgrounds/live-sports[mobile].jpg",
    "/assets/welcomePage-assets/biggest-events-logos/emmys-logo-full.png",
    "/assets/welcomePage-assets/biggest-events-logos/golden-globe-logo-full.png",
    "/assets/welcomePage-assets/biggest-events-logos/grammys-logo-full.png",
    "/assets/welcomePage-assets/biggest-events-logos/oscars-logo-full.png",
    "/assets/welcomePage-assets/breaking-news-logos/abc-news-live-network-logo.png",
    "/assets/welcomePage-assets/breaking-news-logos/cnn-network-logo.svg",
    "/assets/welcomePage-assets/breaking-news-logos/foxnews-network-logo.svg",
    "/assets/welcomePage-assets/breaking-news-logos/msnbc-network-logo.png",
    "/assets/welcomePage-assets/covers/cover-1.jpg",
    "/assets/welcomePage-assets/covers/cover-2.jpg",
    "/assets/welcomePage-assets/covers/cover-3.jpg",
    "/assets/welcomePage-assets/covers/cover-4.jpg",
    "/assets/welcomePage-assets/icons/Pricing_Checkmark_black.svg",
    "/assets/welcomePage-assets/icons/close.svg",
    "/assets/welcomePage-assets/icons/down-arrow.svg",
    "/assets/welcomePage-assets/icons/facebook.svg",
    "/assets/welcomePage-assets/icons/info.png",
    "/assets/welcomePage-assets/icons/instagram.svg",
    "/assets/welcomePage-assets/icons/twitter.svg",
    "/assets/welcomePage-assets/icons/youtube.svg",
    "/assets/welcomePage-assets/live-sports-logos/live-sports-logo-1.png",
    "/assets/welcomePage-assets/live-sports-logos/live-sports-logo-2.png", 
    "/assets/welcomePage-assets/live-sports-logos/live-sports-logo-3.png",
    "/assets/welcomePage-assets/live-sports-logos/live-sports-logo-4.png",
    "/assets/welcomePage-assets/logos/bundles.svg",
    "/assets/welcomePage-assets/logos/dplus-logo[full].png",
    "/favicon.ico",
]

self.addEventListener("install", evt => {
    evt.waitUntil(
        caches.open(FakeHulu_mainCache_key).then(cache => {
            cache.addAll(assets);
        })
    )

    self.skipWaiting();
});

self.addEventListener("activate", evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.filter(key => key !== FakeHulu_mainCache_key ).map(key => caches.delete(key)));
        })
    )

    self.clients.claim();
});

self.addEventListener("fetch", evt => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request)
        })
    )
});
