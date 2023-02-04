// input img list here -------------------------------------------
const imageList = [
    "https://picsum.photos/id/1/1250/750",
    "https://picsum.photos/id/1/1250/750",
    "https://picsum.photos/id/1/1250/750",
    "https://picsum.photos/id/1/1250/750",
    "https://picsum.photos/id/1/1250/750",
    "https://picsum.photos/id/1/1250/750",
    "https://picsum.photos/id/1/1250/750",
    "https://picsum.photos/id/1/1250/750",
    "https://picsum.photos/id/1/1250/750",
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
    // pagiGallLeftBtnIcon.src = leftBlackArrow;
    // pagiGallLeftBtnIcon.alt = "slider arrow icon";
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
    // pagiGallRightBtnIcon.src = rightBlackArrow;
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
    // allImgOverlayBack.src = leftBlackArrow;
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
    // backBtnImg.src = leftWhiteArrow;
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
    // lightBoxLeftIcon.src = leftWhiteArrow;
    // lightBoxLeftIcon.alt = "slider arrow icon";
    const lightBoxpagiRightBtn = EleCreator(
        lightBoxPagination,
        "right-btn",
        "button"
    );
    const lightBoxRightIcon = EleCreator(lightBoxpagiRightBtn, false, "img");
    // lightBoxRightIcon.src = rightWhiteArrow;
    // lightBoxRightIcon.alt = "slider arrow icon";
}

CreateImgGallery();


// css functionality ------------------------------------------------------------- 
function StyleLoader() {
    const bodyTag = document.querySelector('body');
    const styleTag = EleCreator(bodyTag, '', 'style');
    styleTag.innerHTML = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.img-wrap {
  width: 100%;
}
.img-wrap img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.slider .slider-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.slider .slider-wrap {
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
}
.slider .slider-wrap .slides {
  width: 100%;
  transition: all 0.9s;
}
.slider .slider-wrap .slides img {
  width: 100%;
  display: inline-block;
  aspect-ratio: 3/2;
}
.slider button {
  background-color: transparent;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}
.slider button img {
  width: 50%;
}

.img-gallery {
  width: 100%;
  max-width: 1120px;
  position: relative;
}
@media only screen and (min-width: 768px) {
  .img-gallery {
    width: 90%;
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
  }
}
.img-gallery .img-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  border-radius: 10px;
  overflow: hidden;
}
@media only screen and (min-width: 768px) {
  .img-gallery .sm-img-list-slider {
    display: none;
  }
}
.img-gallery .sm-img-list-slider .pagination {
  position: absolute;
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  width: 90%;
  bottom: 30px;
  left: 5%;
  z-index: 50;
}
.img-gallery .lg-img-list {
  display: none;
}
@media only screen and (min-width: 768px) {
  .img-gallery .lg-img-list {
    display: grid;
  }
}
.img-gallery .img-wrap {
  width: 100%;
  display: none;
}
@media only screen and (min-width: 768px) {
  .img-gallery .img-wrap {
    display: block;
  }
}
.img-gallery .img-wrap:nth-child(1) {
  display: block;
}
@media only screen and (min-width: 768px) {
  .img-gallery .img-wrap:nth-child(1) {
    grid-column: span 2;
    grid-row: span 2;
  }
}
.img-gallery .img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 3/2;
}
@media only screen and (min-width: 768px) {
  .img-gallery .img-wrap img {
    aspect-ratio: 1/1;
  }
}
.img-gallery .swiper-pagination {
  color: white;
  font-weight: 500;
  display: inline-block;
  background-color: #514f50;
  padding: 6px 0px;
  width: 60px;
  border-radius: 6px;
  font-size: 14px;
  left: initial;
  right: 20px;
  bottom: 20px;
}
.img-gallery #show-all-photos {
  display: none;
  cursor: pointer;
  padding: 5px 15px;
  justify-content: center;
  align-items: center;
  column-gap: 7px;
  font-size: 13px;
  border-radius: 5px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  border: 1px solid #514f50;
}
@media only screen and (min-width: 768px) {
  .img-gallery #show-all-photos {
    display: flex;
  }
}

.overlay, .light-box {
  width: 100%;
  height: 100vh;
  display: grid;
  display: none;
  grid-template: "title" 100px "img-list" calc(100vh - 100px);
  background-color: white;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 100;
  transition: all 0.5s;
  transform: translateY(100%);
  opacity: 0;
}
.overlay .overlay-header, .light-box .overlay-header {
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  height: 60px;
}
.overlay .overlay-header .btn-wrap, .light-box .overlay-header .btn-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.overlay .overlay-header .btn-wrap button, .light-box .overlay-header .btn-wrap button {
  border: none;
  background-color: white;
  display: flex;
  column-gap: 8px;
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;
}
.overlay .overlay-header .btn-wrap button svg, .light-box .overlay-header .btn-wrap button svg {
  background-color: white;
}
.overlay .overlay-header .btn-wrap .share-save, .light-box .overlay-header .btn-wrap .share-save {
  display: flex;
  align-items: center;
  column-gap: 20px;
}
.overlay .img-list, .light-box .img-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
@media only screen and (min-width: 768px) {
  .overlay .img-list, .light-box .img-list {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    max-width: 740px;
  }
}
.overlay .img-list .img-wrap, .light-box .img-list .img-wrap {
  opacity: 0;
  transition-property: opacity;
  transition-duration: 0.3s;
  transition-delay: 600ms;
}
.overlay .img-list .img-wrap img, .light-box .img-list .img-wrap img {
  display: inline-block;
}
.overlay.active, .active.light-box {
  transform: translateY(0%);
  opacity: 1;
}
.overlay.active .img-wrap, .active.light-box .img-wrap {
  opacity: 1;
}

.back {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.back img {
  width: 100%;
}

.light-box {
  position: fixed;
  z-index: 100;
  transform: translate(0);
  background-color: black;
}
@media only screen and (min-width: 768px) {
  .light-box {
    grid-template: "title" 60px "img-list" calc(100vh - 60px);
  }
}
.light-box .back {
  background-color: black !important;
}
.light-box .slider {
  display: flex;
  align-items: center;
}
.light-box .slider .slider-pagi-wrap {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.light-box .slider .slider-container {
  width: 100%;
  max-width: 650px;
}
.light-box .slider .pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  left: 0px;
  top: calc(50% - 25px);
  padding-left: 20px;
  padding-right: 20px;
}
@media only screen and (min-width: 768px) {
  .light-box .slider .pagination {
    padding-left: 80px;
    padding-right: 80px;
  }
}
.light-box .slider .pagination button {
  background-color: transparent !important;
  border: 2px solid white;
}
@media only screen and (min-width: 768px) {
  .light-box .slider .pagination button {
    width: 50px;
    height: 50px;
  }
}
.light-box .share-save button {
  background-color: transparent !important;
  color: white;
}

/*# sourceMappingURL=style.css.map */
`;
}


StyleLoader()

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
