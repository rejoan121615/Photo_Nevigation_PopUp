// input img list
const imageList = [
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
    "img/prod-img- (20).webp",
    "img/prod-img- (21).webp",
    "img/prod-img- (22).webp",
    "img/prod-img- (23).webp",
    "img/prod-img- (24).webp",
    "img/prod-img- (25).webp",
    "img/prod-img- (26).webp",
    "img/prod-img- (27).webp",
    "img/prod-img- (28).webp",
];

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

// img gallery sm screen slider
function smImgGallerySlider() {
    const swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          type: 'fraction'
        },

    });
  return swiper;
}

// load img into the
function ProductGallery() {
    const imgGallery = document.querySelector(".img-gallery");

    // small screen -----------------
    const swiperWrapper = imgGallery.querySelector(
        ".sm-img-list .swiper-wrapper"
    );
    imageList.map((img) => {
        // create swiper slider div
        const swiperSlider = document.createElement("div");
        swiperSlider.classList.add("swiper-slide");
        swiperSlider.appendChild(ImgCreator(img));
        swiperWrapper.appendChild(swiperSlider);
    });
  
  smImgGallerySlider();
    // initialize the small screen swiper slider
    // large screen --------------
    // slice img list
    const highlightImg = imageList.slice(0, 5);
    highlightImg.map((img, index) => {
        const parentTag = document.querySelector(".img-gallery .lg-img-list");
        parentTag.appendChild(ImgCreator(img, ".img-gallery .lg-img-list"));
    });
}

ProductGallery();
