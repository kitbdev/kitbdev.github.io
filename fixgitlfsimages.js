window.onload = fiximages => {
    /* fix images with gitlfs
    username/project/branch/file 
    todo check actual gitlfs content instead
    */
    let imgs = document.getElementsByTagName("img");
    const prefix = "https://media.githubusercontent.com/media/kitbdev/kitbdev.github.io/master/";
    const supportedFormats = ["png", "jpg", "gif"];
    for (let i = 0; i < imgs.length; i++) {
        let filetype = imgs[i].src.substr(imgs[i].src.length-3);
        if (!supportedFormats.includes(filetype)) continue;
        let oind = imgs[i].src.indexOf("/images");
        if (oind < 0) continue;
        oind++;
        imgs[i].src = prefix + imgs[i].src.substr(oind);
    }
    console.log("fixing gitlfs imgs");
}