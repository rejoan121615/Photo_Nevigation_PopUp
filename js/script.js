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

// js functionality ------------------------------------------------------------------------------

// global state
var showOverlay = false;
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
        console.log('please create a slider div inside slider-container name slider-wrap')
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

ProductGallery();
OverlayImgLoader();
