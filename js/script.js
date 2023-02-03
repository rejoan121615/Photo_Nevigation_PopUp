// input img list here -------------------------------------------
const imageList = [
    "img/prod-img- (20).webp",
    "img/prod-img- (1).webp",
    "img/prod-img- (2).webp",
    "img/prod-img- (3).webp",
    "img/prod-img- (4).webp",
    "img/prod-img- (5).webp",
    "img/prod-img- (6).webp",
    "img/prod-img- (7).webp",
    "img/prod-img- (8).webp",
    "img/prod-img- (9).webp",
    "img/prod-img- (10).webp",
    "img/prod-img- (11).webp",
    "img/prod-img- (12).webp",
    "img/prod-img- (13).webp",
    "img/prod-img- (14).webp",
    "img/prod-img- (15).webp",
    "img/prod-img- (16).webp",
    "img/prod-img- (17).webp",
    "img/prod-img- (18).webp",
    "img/prod-img- (19).webp",
    "img/prod-img- (21).webp",
    "img/prod-img- (22).webp",
    "img/prod-img- (23).webp",
    "img/prod-img- (24).webp",
    "img/prod-img- (25).webp",
    "img/prod-img- (26).webp",
    "img/prod-img- (27).webp",
    "img/prod-img- (28).webp",
];

// your mount point
const mountPoint = "body"; // please use css selector

// slider arrow icons replace your arrow icon here
const leftBlackArrow = "./img/icons/left-arrow.png";
const rightBlackArrow = "./img/icons/right-arrow.png";
const leftWhiteArrow = "./img/icons/left-arrow-white.png";
const rightWhiteArrow = "./img/icons/right-arrow-white.png";

// html markup creator ----------------------------------------------------------------------------

function EleCreator(parent, className, type = "div") {
    const div = document.createElement(type);
    className ? div.classList.add(className) : null;
    parent ? parent.appendChild(div) : null;
    return div;
}

function CreateImgGallery() {
    const bodyTag = document.querySelector(mountPoint);
    // image gallery slider for small screen -----------------------
    const imageGallery = EleCreator(bodyTag, "img-gallery", "div");
    // console.log(bodyTag);
    const smImgListSlider = EleCreator(imageGallery, "");
    smImgListSlider.classList.add("slider", "sm-img-list-slider");

    // slider container
    const gallerySliderContainer = EleCreator(
        smImgListSlider,
        "slider-container"
    );
    // slider wrap
    const gallerySliderWrap = EleCreator(gallerySliderContainer, "slider-wrap");
    // pagination
    const galleryPagination = EleCreator(gallerySliderContainer, "pagination");
    // append element into slider container
    gallerySliderContainer
        .appendChild(gallerySliderWrap)
        .appendChild(galleryPagination);
    // pagination buttons
    // left icon
    const pagiGallLeftBtn = EleCreator(galleryPagination, "left-btn", "button");
    const pagiGallLeftBtnIcon = EleCreator(pagiGallLeftBtn, "", "img");
    pagiGallLeftBtnIcon.src = leftBlackArrow;
    pagiGallLeftBtnIcon.alt = "slider arrow icon";
    // left btn
    // pagiGallLeftBtn.appendChild(pagiGallLeftBtnIcon);
    // right icon
    // right btn
    const pagiGallRightBtn = EleCreator(
        galleryPagination,
        "right-btn",
        "button"
    );
    const pagiGallRightBtnIcon = EleCreator(pagiGallRightBtn, "", "img");
    pagiGallRightBtnIcon.src = rightBlackArrow;
    pagiGallRightBtnIcon.alt = "slider arrow icon";
    // large screen image gallery -------------------------------
    const galleryLgImgList = EleCreator(imageGallery, "");
    galleryLgImgList.classList.add("img-list", "lg-img-list");
    // show all button
    const galleryShowAllBtn = EleCreator(imageGallery, false, "button");
    galleryShowAllBtn.id = "show-all-photos";
    const showAllText = document.createTextNode("Show all photos");
    galleryShowAllBtn.appendChild(showAllText);

    // over lay page --------------------------
    const overlayAllImgList = EleCreator(bodyTag, false);
    overlayAllImgList.classList.add("overlay", "all-img-list");

    const allImgListHeader = EleCreator(overlayAllImgList, "overlay-header");
    const allImgBtnWrap = EleCreator(allImgListHeader, "btn-wrap");
    const allImgBackBtn = EleCreator(allImgBtnWrap, "back", "button");
    allImgBackBtn.id = "overlay-back-btn";
    const allImgOverlayBack = EleCreator(allImgBackBtn, false, "img");
    allImgOverlayBack.src = leftBlackArrow;
    const allImgShareSave = EleCreator(allImgBtnWrap, "share-save");
    const shareBtn = EleCreator(allImgShareSave, false, "button");
    shareBtn.innerText = "Share";
    const saveBtn = EleCreator(allImgShareSave, false, "button");
    saveBtn.innerText = "Save";
    // all img list img list
    const allImgListImgList = EleCreator(overlayAllImgList, "img-list");

    // slider light box --------------------------------------
    const overlayLightBox = EleCreator(bodyTag, false);
    overlayLightBox.classList.add("overlay", "light-box");
    const lightBoxHeader = EleCreator(overlayLightBox, "overlay-header");
    const lightBoxBtnWrap = EleCreator(lightBoxHeader, "btn-wrap");
    const lightBackBtn = EleCreator(lightBoxBtnWrap, "back", "button");
    lightBackBtn.id = "light-back-btn";
    const backBtnImg = EleCreator(lightBackBtn, false, "img");
    backBtnImg.src = leftWhiteArrow;
    const shareSave = EleCreator(lightBoxBtnWrap, "share-save");
    shareSave.appendChild(saveBtn).appendChild(shareBtn);

    // image list
    const lightBoxSlider = EleCreator(overlayLightBox, "slider");
    const sliderPagiWrap = EleCreator(lightBoxSlider, "slider-pagi-wrap");
    const lightBoxSliderContainer = EleCreator(
        sliderPagiWrap,
        "slider-container"
    );
    const lightBoxSliderWrap = EleCreator(
        lightBoxSliderContainer,
        "slider-wrap"
    );
    // light box pagination
    const lightBoxPagination = EleCreator(sliderPagiWrap, "pagination");
    const lightBoxPagiLeftBtn = EleCreator(
        lightBoxPagination,
        "left-btn",
        "button"
    );
    const lightBoxLeftIcon = EleCreator(lightBoxPagiLeftBtn, false, "img");
    lightBoxLeftIcon.src = leftWhiteArrow;
    lightBoxLeftIcon.alt = "slider arrow icon";
    const lightBoxpagiRightBtn = EleCreator(
        lightBoxPagination,
        "right-btn",
        "button"
    );
    const lightBoxRightIcon = EleCreator(lightBoxpagiRightBtn, false, "img");
    lightBoxRightIcon.src = rightWhiteArrow;
    lightBoxRightIcon.alt = "slider arrow icon";
}

CreateImgGallery();

// js functionality ------------------------------------------------------------------------------

// global state
var showOverlay = false;
var showLightBox = false;
// image galllery -----------------------
// elements
const showAllBtn = document.querySelector("#show-all-photos");

// this function create img tag and append
function ImgCreator(imgUrl) {
    // create element
    const img_wrap = document.createElement("div");
    img_wrap.classList.add("img-wrap");
    // img component
    const img_tag = document.createElement("img");
    img_tag.src = imgUrl;
    // push child to ite's parent
    img_wrap.appendChild(img_tag);
    return img_wrap;
}

// screen slider
function Slider(parentTag, imgUrlList) {
    const sliderContainer = parentTag.querySelector(".slider-container");
    const sliderImgWrap = parentTag.querySelector(".slider-wrap");
    // set wrapper width
    if (sliderImgWrap) {
        sliderImgWrap.style.width = `${imgUrlList.length * 100}%`;
        sliderImgWrap.style.paddingBottom = `67%`;
        sliderImgWrap.style.height = `0`;

        // load img

        // all img
        imgUrlList.map((item, index) => {
            const slidesDiv = document.createElement("div");
            slidesDiv.classList = "slides";
            const slideImg = document.createElement("img");
            slideImg.src = `${item}`;
            slidesDiv.appendChild(slideImg);
            sliderImgWrap.appendChild(slidesDiv);
            // overlay toggler
            slidesDiv.onclick = () => {
                OverlayToggler();
            };
        });
        // slider counter ------------------------
        var counter = 0;
        //  slide
        const leftBtn = parentTag.querySelector(".left-btn");
        const rightBtn = parentTag.querySelector(".right-btn");
        // move left
        const moveLeft = () => {
            if (-(imgUrlList.length - 1) < counter) {
                --counter;
            }
            const allImg = document.querySelectorAll(".slider .slides");
            allImg.forEach((img) => {
                img.style.transform = `translateX(${100 * counter}%)`;
            });
        };
        // move right
        const moveRight = () => {
            if (!(counter == 0)) {
                ++counter;
            }
            const allImg = document.querySelectorAll(".slider .slides");
            allImg.forEach((img) => {
                img.style.transform = `translateX(${100 * counter}%)`;
            });
        };
        // move left on click

        rightBtn.onclick = function () {
            moveRight();
        };

        // move right on click

        leftBtn.onclick = function () {
            moveLeft();
        };
    } else {
        console.log(
            "please create a slider div inside slider-container name slider-wrap"
        );
    }
}

// Slider();
const allSlide = document.querySelectorAll(".slider");
allSlide.forEach((sliderTag) => {
    Slider(sliderTag, imageList);
});

// load img into the
function ProductGallery() {
    const imgGallery = document.querySelector(".img-gallery");
    const highlightImg = imageList.slice(0, 5);
    highlightImg.map((img, index) => {
        const parentTag = document.querySelector(".img-gallery .lg-img-list");
        const imgWrap = ImgCreator(img, ".img-gallery .lg-img-list");
        // click handler
        imgWrap.onclick = function () {
            OverlayToggler();
        };
        // push img wrap inside parent
        parentTag.appendChild(imgWrap);
    });
}

// overlay page on click ----------------------
function OverlayImgLoader() {
    const overlay = document.querySelector(".overlay");
    const overlayImgList = overlay.querySelector(".img-list");
    // large img number
    const largeImgIndex = [];
    for (let i = 1; i <= imageList.length; i += 3) {
        largeImgIndex.push(i);
    }
    imageList.map((image, index) => {
        const imgWrap = ImgCreator(image);
        imgWrap.onclick = () => {
            LightBoxToggler();
        };
        // if (index === index+)
        if (Boolean(largeImgIndex.find((num) => num === index + 1))) {
            imgWrap.style.gridColumn = "span 2";
            imgWrap.style.gridRow = "span 2";
        }
        overlayImgList.appendChild(imgWrap);
    });
}

// overlay toggler  --------------------------------------
// overlay back button
function overlayBackBtn() {
    const backbtn = document.querySelector("#overlay-back-btn");
    const showAllPhotos = document.querySelector("#show-all-photos");
    [backbtn, showAllPhotos].map((btn) => {
        btn.onclick = function () {
            OverlayToggler();
        };
    });
}

overlayBackBtn();

function OverlayToggler() {
    const overlay = document.querySelector(".overlay");
    // back button

    // controller
    if (showOverlay) {
        overlay.classList.remove("active");
        showOverlay = false;
        setTimeout(() => {
            overlay.style.display = "none";
        }, 400);
    } else {
        showOverlay = true;
        overlay.style.display = "grid";
        setTimeout(() => {
            overlay.classList.add("active");
        }, 10);
    }
}

function LightBoxBackBtn() {
    const backbtn = document.querySelector("#light-back-btn");
    backbtn.onclick = function () {
        LightBoxToggler();
    };
}

LightBoxBackBtn();

function LightBoxToggler() {
    const lightBox = document.querySelector(".light-box");
    // back button

    // controller
    if (showLightBox) {
        lightBox.classList.remove("active");
        showLightBox = false;
        setTimeout(() => {
            lightBox.style.display = "none";
        }, 400);
    } else {
        showLightBox = true;
        lightBox.style.display = "grid";
        setTimeout(() => {
            lightBox.classList.add("active");
        }, 10);
    }
}

ProductGallery();
OverlayImgLoader();
