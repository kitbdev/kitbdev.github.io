window.onload = fiximages => {
    /* fix images with gitlfs
    username/project/branch/file 
    todo check actual gitlfs content instead
    no need to do this if local
    todo cache imgs?
    */
    const LOCAL_DOMAINS = ["localhost", "127.0.0.1", "", "[::1]", "::1"];
    if (LOCAL_DOMAINS.includes(location.hostname)) {
        console.log("local, no gitlfs img fix needed");
        return;
    }
    let imgs = document.getElementsByTagName("img");
    const prefix = "https://media.githubusercontent.com/media/kitbdev/kitbdev.github.io/master/";
    const supportedFormats = ["png", "jpg", "gif"];
    for (let i = 0; i < imgs.length; i++) {
        let filetype = imgs[i].src.substr(imgs[i].src.length - 3);
        if (!supportedFormats.includes(filetype)) continue;
        let oind = imgs[i].src.indexOf("/images");
        if (oind < 0) continue;
        oind++;
        imgs[i].src = prefix + imgs[i].src.substr(oind);
    }
    console.log("fixing gitlfs imgs");
}