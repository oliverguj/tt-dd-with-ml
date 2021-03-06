/**
 * User agent string samples e.g. for usage in tests to mock different devices
 *
 * @constant {Object.<string, string>}
 */
 module.exports = [
    // **************** Mobile devices ****************
    {
      name: "iPhone X",
      userAgent:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1",
      expected: {
        isInApp: false,
        isIOS: true,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "iPhone XR",
      userAgent:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/605.1 NAVER(inapp; search; 1000; 11.6.3; XR)",
      expected: {
        isInApp: false,
        isIOS: true,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "iPhone 8",
      userAgent:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1",
      expected: {
        isInApp: false,
        isIOS: true,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "iPhone 7",
      userAgent:
        "Mozilla/5.0 (iPhone9,3; U; CPU iPhone OS 10_0_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14A403 Safari/602.1",
      expected: {
        isInApp: false,
        isIOS: true,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    // Android
    {
      name: "Samsung Galaxy S7",
      userAgent:
        "Mozilla/5.0 (Linux; Android 8.0.0; SM-G930F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy S7 Edge",
      userAgent:
        "Mozilla/5.0 (Linux; Android 8.0.0; SM-G935F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy S8",
      userAgent:
        "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G950F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/15.0 Chrome/90.0.4430.210 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy S8+",
      userAgent:
        "Mozilla/5.0 (Linux; Android 9; SM-G955F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy S9",
      userAgent:
        "Mozilla/5.0 (Linux; Android 10; SM-G960F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.98 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy S9+",
      userAgent:
        "Mozilla/5.0 (Linux; Android 9; SM-G965F Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.157 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy S10",
      userAgent:
        "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/15.0 Chrome/90.0.4430.210 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy S10+",
      userAgent:
        "Mozilla/5.0 (Linux; Android 10; SAMSUNG SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/10.2 Chrome/71.0.3578.99 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy S10e",
      userAgent:
        "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-G970F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy S20",
      userAgent:
        "Mozilla/5.0 (Linux; Android 10; SAMSUNG SM-G980F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/12.1 Chrome/79.0.3945.136 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy S20+",
      userAgent:
        "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-G985F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/15.0 Chrome/90.0.4430.210 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy S20 FE",
      userAgent:
        "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-G780F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/13.2 Chrome/83.0.4103.106 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy S21 5G",
      userAgent:
        "Mozilla/5.0 (Linux; Android 12; SAMSUNG SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy A10",
      userAgent:
        "Mozilla/5.0 (Linux; Android 9; SM-A105FN) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.136 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy A20e",
      userAgent:
        "Mozilla/5.0 (Linux; Android 10; SAMSUNG SM-A202F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/12.1 Chrome/79.0.3945.136 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy A21s",
      userAgent:
        "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-A217F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/15.0 Chrome/90.0.4430.210 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy A3 2017",
      userAgent:
        "Mozilla/5.0 (Linux; Android 8.0.0; SAMSUNG SM-A320FL Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/7.4 Chrome/59.0.3071.125 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy A40",
      userAgent:
        "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-A405FN) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/15.0 Chrome/90.0.4430.210 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy A41",
      userAgent:
        "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-A415F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy A50",
      userAgent:
        "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-A505FN) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy A5",
      userAgent:
        "Mozilla/5.0 (Linux; Android 8.0.0; SM-A520F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy A51",
      userAgent:
        "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-A515F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy A52 4G",
      userAgent:
        "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-A525F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy A6",
      userAgent:
        "Mozilla/5.0 (Linux; Android 10; SAMSUNG SM-A600FN) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/15.0 Chrome/90.0.4430.210 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy A7",
      userAgent:
        "Mozilla/5.0 (Linux; Android 10; SAMSUNG SM-A750FN) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy A70",
      userAgent:
        "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-A705FN) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy A71",
      userAgent:
        "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-A715F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/13.0 Chrome/83.0.4103.106 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy J3",
      userAgent:
        "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-J330F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/12.1 Chrome/79.0.3945.136 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy J5 2017",
      userAgent:
        "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-J530F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/12.1 Chrome/79.0.3945.136 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Huawei P Smart",
      userAgent:
        "Mozilla/5.0 (Linux; Android 8.0.0; FIG-LX1 Build/HUAWEIFIG-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Huawei P Smart 2019",
      userAgent:
        "Mozilla/5.0 (Linux; Android 10; POT-LX1 Build/HUAWEIPOT-LX1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Huawei P10 Lite",
      userAgent:
        "Mozilla/5.0 (Linux; Android 7.0; WAS-LX1A Build/HUAWEIWAS-LX1A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.137 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Huawei P20",
      userAgent:
        "Mozilla/5.0 (Linux; Android 8.1.0; EML-L29 Build/HUAWEIEML-L29) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Huawei P20 Pro",
      userAgent:
        "Mozilla/5.0 (Linux; Android 10; CLT-L29 Build/HUAWEICLT-L29; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/84.0.4147.125 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Huawei P20 Lite",
      userAgent:
        "Mozilla/5.0 (Linux; Android 8.0.0; ANE-LX1 Build/HUAWEIANE-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Huawei P30 Lite",
      userAgent: "Deezer/6.2.44.32 (Android; 10; Mobile; nl) HUAWEI MAR-LX1A",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Huawei P30 Lite New Edition",
      userAgent:
        "Mozilla/5.0 (Linux; Android 10; MAR-LX1B Build/HUAWEIMAR-L21B; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36 Instagram 216.1.0.21.137 Android (29/10; 480dpi; 1080x2107; HUAWEI; MAR-LX1B; HWMAR; kirin710; fr_FR; 339335857)",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Huawei P30",
      userAgent:
        "Mozilla/5.0 (Linux; Android 10; ELE-L29 Build/HUAWEIELE-L29; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Huawei P30 Pro",
      userAgent:
        "Mozilla/5.0 (Linux; Android 10; VOG-L29; HMSCore 6.3.0.327; GMSCore 21.48.15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.105 HuaweiBrowser/12.0.0.303 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Huawei Mate 10 lite",
      userAgent:
        "Mozilla/5.0 (Linux; Android 7.0; RNE-L21 Build/HUAWEIRNE-L21) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Huawei Mate 20 lite",
      userAgent:
        "Mozilla/5.0 (Linux; Android 8.1.0; SNE-LX1 Build/HUAWEISNE-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Huawei Mate 20 Pro",
      userAgent:
        "Mozilla/5.0 (Linux; Android 10; LYA-L29 Build/HUAWEILYA-L29; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.66 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Xiaomi Redmi Note 5A",
      userAgent:
        "Mozilla/5.0 (Linux; U; Android 7.1.2; ru-ru; Redmi Note 5A Build/N2G47H) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/71.0.3578.141 Mobile Safari/537.36 XiaoMi/MiuiBrowser/12.4.3-g",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Xiaomi Redmi Note 8 Pro",
      userAgent:
        "Mozilla/5.0 (Linux; Android 11; Redmi Note 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "Xiaomi Redmi Note 9 Pro",
      userAgent:
        "Mozilla/5.0 (Linux; Android 10; Redmi Note 9 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    // **************** Tablet devices ****************
    {
      name: "iPad",
      userAgent:
        "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
      platform: "iPad",
      expected: {
        isInApp: false,
        isIOS: true,
        isMobile: false,
        isTablet: true,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy Tab A 10.1",
      userAgent:
        "Mozilla/5.0 (Linux; Android 8.1.0; SM-T580) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: false,
        isTablet: true,
        isTouch: true,
      },
    },
    {
      name: "Samsung Galaxy Tab A 10.1 (2019)",
      userAgent:
        "Mozilla/5.0 (Linux; Android 11; SM-T510) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: false,
        isTablet: true,
        isTouch: true,
      },
    },
    // **************** Mobile devices with app ****************
    {
      name: "iosHybridAppStern",
      userAgent:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1 sternapp_ios_hybrid/4.0.0",
      expected: {
        appVersion: "4.0.0",
        isInApp: true,
        isIOS: true,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "androidHybridAppStern",
      userAgent:
        "Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/60.0.3112.107 Mobile Safari/537.36 sternapp_android_hybrid/4.0.0",
      expected: {
        appVersion: "4.0.0",
        isInApp: true,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "iosAppStern",
      userAgent:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1 sternapp_ios_4.0.0-SNAPSHOT app_no_header",
      expected: {
        appVersion: "4.0.0-SNAPSHOT",
        isInApp: true,
        isIOS: true,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    {
      name: "androidAppStern",
      userAgent:
        "Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/60.0.3112.107 Mobile Safari/537.36 sternapp_android_4 app_no_header",
      expected: {
        appVersion: "4",
        isInApp: true,
        isIOS: false,
        isMobile: true,
        isTablet: false,
        isTouch: true,
      },
    },
    // **************** Desktop devices ****************
    {
      name: "Desktop",
      userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:78.0) Gecko/20100101 Firefox/78.0",
      expected: {
        isInApp: false,
        isIOS: false,
        isMobile: false,
        isTablet: false,
        isTouch: false,
      },
    },
  ];
