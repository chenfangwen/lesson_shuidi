function chageObjProperty(o) {
    o.siteUrl = "http://www.baidu.com";
    o = new Object();
    o.siteUrl = "http://www.google.com";
    console.log(o.siteUrl)
}


let webSite = new Object();
chageObjProperty(webSite);
console.log(webSite.siteUrl);
