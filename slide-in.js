;(function ($) {
  // 動態添加 Google 字體連結
  var googleFontLink = document.createElement("link");
  googleFontLink.rel = "preconnect";
  googleFontLink.href = "https://fonts.googleapis.com";
  document.head.appendChild(googleFontLink);

  var googleFontLink2 = document.createElement("link");
  googleFontLink2.rel = "preconnect";
  googleFontLink2.href = "https://fonts.gstatic.com";
  googleFontLink2.crossorigin = "anonymous";
  document.head.appendChild(googleFontLink2);

  var googleFontLink3 = document.createElement("link");
  googleFontLink3.rel = "stylesheet";
  googleFontLink3.href =
    "https://fonts.googleapis.com/css2?family=Chocolate+Classical+Sans&family=Figtree:ital,wght@0,300..900;1,300..900&family=Noto+Sans+TC:wght@100..900&display=swap";
  document.head.appendChild(googleFontLink3);

  // 動態添加 Bootstrap Bundle
  var bootstrapScript = document.createElement("script");
  bootstrapScript.src =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
  bootstrapScript.crossorigin = "anonymous";
  document.head.appendChild(bootstrapScript);

  // 動態添加 Bootstrap scoped CSS
  var bootstrapScopedStyle = document.createElement("style");
  bootstrapScopedStyle.id = "slide-in-bootstrap-scoped";
  document.head.appendChild(bootstrapScopedStyle);
  // 動態添加自定 CSS
  var customCSS = document.createElement("style");
  customCSS.type = "text/css";
  customCSS.innerHTML = `@charset "UTF-8";
  :root {
    --dark-yellow: rgba(59, 59, 50, 1);
    --dark-yellow-14: rgba(59, 59, 50, 0.14);
    --ideal-outline-18: rgba(59, 59, 50, 0.18);
    --super_light_yellow: rgba(243, 243, 239, 1);
    --dark-gray: rgba(51, 51, 51, 1);
  }
  
  #slide-in-ad-container {
    margin: 8px;
    padding: 12px;
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.15);
    border-radius: 30px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    background: rgba(255, 255, 255, 0.6);
    border: none;
  }
  #slide-in-ad-container label{
   margin: 0;
  }
  #slide-in-ad-container h3,
  #slide-in-ad-container p {
    padding: 0;
    margin: 0;
  }

  .slide-main{
    opacity: 0;
  }

  #slide-in-ad-container.offcanvas.offcanvas-bottom {
    min-height: -webkit-fit-content;
    min-height: -moz-fit-content;
    min-height: fit-content;
    position: fixed;
    bottom: 18px;
    left: 1.5%;
    right: 1.5%;
    width: 97%;
    margin: 0 auto;
    z-index: 99999;
    height: 340px;
        animation: slideInFromBottom .8s ease-out;
    @keyframes slideInFromBottom {
      0% {
        transform: translateY(100%);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
  }

  #slide-in-ad-container.offcanvas.offcanvas-bottom .ad-item:hover {
    opacity: 1 !important;
    transition: opacity 0.3s ease-out;
    -webkit-transition: opacity 0.3s ease-out;
    -moz-transition: opacity 0.3s ease-out;
    -ms-transition: opacity 0.3s ease-out;
    -o-transition: opacity 0.3s ease-out;
  }
  
  #slide-in-ad-container .offcanvas-header,
  #slide-in-ad-container .offcanvas-body {
    padding: 0;
  }
  
  #slide-in-ad-container .offcanvas-body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
        flex-direction: column;
    width: 100%;
    -ms-flex-pack: start;
        justify-content: flex-start;
    -ms-flex-align: center;
        align-items: center;
    row-gap: 20px;
  }
  
  #slide-in-ad-container #ad-icon--close {
    position: absolute;
    right: 16px;
    top: 10px;
    padding: 10px;
    font-size: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
.custom-slideIn-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  display: none;
  background-color: rgba(0, 0, 0, 0.3);
}

  /* pill button  */
  #slide-in-ad-container .ad-container__header {
    max-width: 100%;
    border: 1px solid var(--ideal-outline-18, rgba(59, 59, 50, 0.18));
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 0.3);
    padding: 8px;
    border-radius: 50px;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    -ms-border-radius: 50px;
    -o-border-radius: 50px;
    overflow-x: auto;
    margin-top: 16px;
    margin-left: 1px;
    margin-right: 1px;
  }
  
  #slide-in-ad-container .ad-container__header > .pill-container {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
        justify-content: center;
    -ms-flex-align: center;
        align-items: center;
    gap: 0 8px;
  }
  
  .pill-button {
    display: none;
  }
  
  .pill-label {
    display: block;
    padding: 8px 12px;
    letter-spacing: 0.48px;
    background: var(--super_light_yellow, #f3f3ef);
    color: rgba(51, 51, 51, 0.5);
    border-radius: 20px;
    /* margin: 0 5px; */
    font-size: 12px;
    font-family: "Noto Sans TC", "Figtree", sans-serif;
    cursor: pointer;
    transition: background-color 0.3s ease;
    -webkit-transition: background-color 0.3s ease;
    -moz-transition: background-color 0.3s ease;
    -ms-transition: background-color 0.3s ease;
    -o-transition: background-color 0.3s ease;
    text-wrap: nowrap;
  }
  
  .pill-label:hover {
    opacity: 0.85;
  }
  
  .pill-button:checked + .pill-label {
    background: var(--dark-yellow, #3b3b32);
    color: white;
  }
  
  #slide-in-ad-container .owl-carousel .item img {
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
  }
  
  /* carousel */
  .carousel-container {
    display: none;
  }
  
  .carousel-container.active {
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
        flex-direction: column;
    -ms-flex-pack: center;
        justify-content: center;
    -ms-flex-align: center;
        align-items: center;
  }
  
  #slide-in-ad-container .owl-carousel .item img {
    scale: 1;
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    max-height: 160px;
    -o-object-fit: cover;
       object-fit: cover;
    -o-object-position: center;
       object-position: center;
  }
  
  #slide-in-ad-container .owl-carousel .ad-item {
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid var(--dark-yellow-14);
    cursor: pointer !important;
    opacity: 1;
    position: relative;
    z-index : 1;
  }
  
  #slide-in-ad-container .owl-carousel .ad-item img {
    aspect-ratio: 0.5;
  }
  
  #slide-in-ad-container .owl-carousel .ad-item--cover {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
  
  #slide-in-ad-container .owl-carousel .ad-item--cover .item-img {
    overflow: hidden;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  }
  
  #slide-in-ad-container .owl-carousel .item-img {
    background-color: #fff;
    /* background-color: var(--dark-yellow-14); */
    border-radius: 8px 8px 0px 0px;
    -webkit-border-radius: 8px 8px 0px 0px;
    -moz-border-radius: 8px 8px 0px 0px;
    -ms-border-radius: 8px 8px 0px 0px;
    -o-border-radius: 8px 8px 0px 0px;
  }
  
  #slide-in-ad-container .owl-carousel .ad-item--cover .item-img {
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
  }
  
  #slide-in-ad-container .owl-carousel .ad-item .item-info {
    padding: 8px;
    padding-top: 0px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
        flex-direction: column;
    background: #fff;
    gap: 14px;
  }
  
  #slide-in-ad-container .owl-carousel .ad-item .item-info .item-title {
    color: var(--dark-gray, #333);
    font-family: "Noto Sans TC", "Figtree", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.2px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    line-height: 1.2;
    height: 2.4em;
  }
  
  #slide-in-ad-container .owl-carousel .ad-item .item-info .item-price--original {
    color: #3B3B32;
    font-family: "Figtree", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  
  #slide-in-ad-container .owl-carousel .ad-item .item-info .discount-content {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: baseline;
        align-items: baseline;
    -ms-flex-pack: justify;
        justify-content: space-between;
  }
  
  #slide-in-ad-container .owl-carousel .ad-item .item-info .discount-content > .item-price {
    color: #eb7454;
    font-family: "Figtree", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  
  #slide-in-ad-container .owl-carousel .ad-item .item-info .discount-content > .item-price--original {
    color: #3b3b32;
    font-family: "Figtree", sans-serif;
    font-size: 8px;
    font-style: normal;
    font-weight: 500;
    line-height: 11px;
    /* 137.5% */
    opacity: 0.3;
  }
  
  #slide-in-ad-container .owl-carousel .item {
    position: relative;
  }
  
  #slide-in-ad-container .owl-carousel .item:hover .ad-item {
    opacity: 1;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--dark-yellow-14, rgba(59, 59, 50, 0.14));
    background: rgba(255, 255, 255, 0.7);
  }
  
  #slide-in-ad-container .owl-carousel .item:hover .item-img {
    background: rgba(255, 255, 255, 0.7);
  }
  
  /* 縮小動畫 */
  @-webkit-keyframes scaleDown {
    0% {
      padding-bottom: 8px;
      border-radius: 0;
      -webkit-border-radius: 0;
      -moz-border-radius: 0;
      -ms-border-radius: 0;
      -o-border-radius: 0;
    }
    100% {
      padding: 8px 8px 8px 8px;
      border-radius: 12px;
      -webkit-border-radius: 12px;
      -moz-border-radius: 12px;
      -ms-border-radius: 12px;
      -o-border-radius: 12px;
    }
  }
  @keyframes scaleDown {
    0% {
      padding-bottom: 8px;
      border-radius: 0;
      -webkit-border-radius: 0;
      -moz-border-radius: 0;
      -ms-border-radius: 0;
      -o-border-radius: 0;
    }
    100% {
      padding: 8px 8px 8px 8px;
      border-radius: 12px;
      -webkit-border-radius: 12px;
      -moz-border-radius: 12px;
      -ms-border-radius: 12px;
      -o-border-radius: 12px;
    }
  }
  #slide-in-ad-container .owl-carousel .ad-item img {
    box-sizing: border-box;
    padding: 8px;
    border-radius: 12px;
  }
  
  @media screen and (min-width: 992px) {
      #slide-in-ad-container.offcanvas.offcanvas-bottom {
        height: 280px;
    }
    #slide-in-ad-container .owl-carousel .ad-item img {
      box-sizing: border-box;
      padding: 0 0 8px 0;
      border-radius: 0;
      -webkit-border-radius: 0;
      -moz-border-radius: 0;
      -ms-border-radius: 0;
      -o-border-radius: 0;
    }
    #slide-in-ad-container #ad-icon--close {
      font-size: 16px;
      top: 12px;
    }
    .offcanvas-backdrop.show {
      opacity: 0.5 !important;
      backdrop-filter: blur(0px) !important;
      -webkit-backdrop-filter: blur(0) !important;
      background-color: transparent !important;
    }
    #slide-in-ad-container .owl-carousel .ad-item img {
      box-sizing: border-box;
      padding-bottom: 0 0 8px 0;
      border-radius: 0;
    }
    #slide-in-ad-container .owl-carousel .ad-item:hover img {
      animation: scaleDown 500ms ease-out both;
      -webkit-animation-delay: 100ms;
              animation-delay: 100ms;
      -webkit-animation: scaleDown 500ms ease-out both;
    }
    #slide-in-ad-container .owl-carousel .ad-item {
      opacity: 0;
      position: absolute;
      z-index: -1;
    }
    #slide-in-ad-container .owl-carousel .ad-item--cover {
      opacity: 1;
      position: relative;
      z-index: 1;
    }
    #slide-in-ad-container.offcanvas.offcanvas-bottom:hover .ad-item--cover {
      opacity: 0;
      position: absolute;
      z-index: -1;
      transition: all 0.5s ease-out;
      -webkit-transition: all 0.5s ease-out;
      -moz-transition: all 0.5s ease-out;
      -ms-transition: all 0.5s ease-out;
      -o-transition: all 0.5s ease-out;
    }
    #slide-in-ad-container.offcanvas.offcanvas-bottom:hover .ad-item {
      opacity: 0.6;
      position: relative;
      z-index: 1;
      transition: opacity 0.5s ease-out;
      -webkit-transition: opacity 0.5s ease-out;
      -moz-transition: opacity 0.5s ease-out;
      -ms-transition: opacity 0.5s ease-out;
      -o-transition: opacity 0.5s ease-out;
    }
    #slide-in-ad-container.offcanvas.offcanvas-bottom:hover {
      height: 420px;
      transition: height 0.3s ease-out;
      -webkit-transition: height 0.3s ease-out;
      -moz-transition: height 0.3s ease-out;
      -ms-transition: height 0.3s ease-out;
      -o-transition: height 0.3s ease-out;
    }
    #slide-in-ad-container .owl-carousel .ad-item .item-info .item-title {
      font-size: 14px;
      letter-spacing: 1.4px;
    }
    #slide-in-ad-container .owl-carousel .ad-item .item-info .item-price {
      font-size: 14px;
    }
    #slide-in-ad-container .owl-carousel .ad-item .item-info .discount-content > .item-price {
      color: #eb7454;
      font-family: "Figtree", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    #slide-in-ad-container .owl-carousel .ad-item .item-info .discount-content > .item-price--original {
      color: #3b3b32;
      font-family: "Figtree", sans-serif;
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: 13px;
      /* 130% */
      opacity: 0.3;
    }
    #slide-in-ad-container .owl-carousel .ad-item .item-info .item-price--original {
      color: #3B3B32;
      font-family: "Figtree", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
  @media screen and (min-width: 768px) {
    #slide-in-ad-container {
      margin: 10px;
      margin-bottom: 18px;
      padding: 18px;
    }
    #slide-in-ad-container .pill-container {
      padding: 10px;
      gap: 0 10px;
    }
    #slide-in-ad-container .ad-container__header {
      padding: 0;
    }
    #slide-in-ad-container .pill-label {
      padding: 10px 15px;
      font-size: 14px;
    }
    #slide-in-ad-container .owl-carousel .item img {
      max-height: 194px;
    }
  }
    `;
  document.head.appendChild(customCSS);
  var Brand = "TDA";
  var tags_chosen = {
    彈性: [
      {
        Description: "example",
        Imgsrc: "https://example.com/imageB1.png",
        Name: "example",
        Tag: "1721875900838",
        TagGroup: "彈性",
      },
    ],
    場合: [
      {
        Description: "example",
        Imgsrc: "https://example.com/imageB1.png",
        Name: "example",
        Tag: "1721875746070",
        TagGroup: "場合",
      },
    ],
    材質: [
      {
        Description: "example",
        Imgsrc: "https://example.com/imageB1.png",
        Name: "example",
        Tag: "1721875867435",
        TagGroup: "材質",
      },
    ],
  };
  var slideInOwl;

  // 定義每個標籤對應的圖片
  var tagImages = {
    彈性: [],
    材質: [],
    場合: [],
  };
  $(function () {
    console.log("DOM is ready");
    // Fetch the Bootstrap CSS from CDN
    fetch(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    )
      .then((response) => response.text())
      .then((css) => {
        // Scope the Bootstrap CSS to only work under .custom-scope class
        const scopedCSS = css.replace(
          /(^|\})\s*([^{]+)\s*\{/g,
          function (match, p1, p2) {
            // Ignore keyframes and other special rules
            if (p2.startsWith("@") || p2.startsWith(":root")) {
              return match;
            }
            return p1 + " #slide-in-ad-container " + p2 + " {";
          }
        );

        // Inject the scoped CSS into the page
        document.getElementById("slide-in-bootstrap-scoped").textContent =
          scopedCSS;
      });
    $(document).on("click", ".ad-item", function () {
      console.log("ad-item clicked");
      console.log($(this));
      const title = $(this).data("title"); // 取得 data-title 屬性
      const link = $(this).data("link"); // 取得 data-link 屬性

      // 觸發 Google Analytics 的事件追蹤
      gtag("event", "click_slideIn_item", {
        send_to: "G-PQQRC09ZPS",
        event_category: "slideIn",
        event_label: title,
        event_value: link,
      });
    });
    $(document).on("click", ".pill-label", function () {
      console.log("ad-item category clicked");
      console.log($(this));
      const tag = $(this).data("tag"); // 取得 data-tag 屬性

      // 觸發 Google Analytics 的事件追蹤
      gtag("event", "click_slideIn_item", {
        send_to: "G-PQQRC09ZPS",
        event_category: "slideIn_category",
        event_label: tag,
      });
    });
    // 添加 html template
    var slideInTemplate = `<div class="slide-main" style="position: relative;"><div
            class="offcanvas offcanvas-bottom"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabindex="-1"
            id="slide-in-ad-container"
            aria-labelledby="offcanvasBottomLabel"
          >
            <div class="offcanvas-header">
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                id="ad-icon--close"
              ></button>
            </div>
            <div class="offcanvas-body small">
              <div>
                <div class="ad-container__header">
                  <div class="pill-container">
                    <div>
                      <input
                        type="radio"
                        id="pill1"
                        name="pill"
                        class="pill-button"
                        checked
                      />
                      <label for="pill1" class="pill-label" data-tag="彈性"
                        >適合您的商品</label
                      >
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="pill2"
                        name="pill"
                        class="pill-button"
                      />
                      <label for="pill2" class="pill-label" data-tag="材質"
                        >New Arrivals</label
                      >
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="pill3"
                        name="pill"
                        class="pill-button"
                      />
                      <label for="pill3" class="pill-label" data-tag="場合"
                        >50% off sales</label
                      >
                    </div>
                  </div>
                </div>
              </div>
  
              <div
                id="slide-in-carousel"
                class="carousel-container owl-carousel owl-theme owl-loaded"
                style="max-width: 1054px; width: 85vw"
              >
                <!-- 輪播內容將由 JavaScript 動態生成 -->
              </div>
            </div>
          </div>
        </div>
         <div class="custom-slideIn-backdrop"></div>
    `;
    document.body.insertAdjacentHTML("beforeend", slideInTemplate);

    // 初始化 Owl Carousel
    slideInOwl = $("#slide-in-carousel").owlCarousel({
      items: 1,
      slideBy: "page",
      loop: true,
      margin: 30,
      autoplay: true,
      autoPlayTimeout: 250,
      autoplayHoverPause: true,
      smartSpeed: 500,
      stagePadding: 25,
      responsiveClass: true,
      nav: false,
      dots: false,
      lazyLoad: true,
      responsive: {
        0: {
          items: 2,
          margin: 48,
          // slideBy: 2,
        },
        600: {
          items: 4,
          autoplaySpeed: 15000,
          // slideBy: 2,
        },
        992: {
          items: 6,
          autoplaySpeed: 15000,
          // slideBy: 2,
        },
      },
    });

    var selectedTag = "彈性"; // 這裏可以根據實際選擇動態設置

    var breakpoint = 992;

    // 監聽窗口大小變化
    window.addEventListener("resize", handleWindowResize);

    // 首次載入時執行檢查
    handleWindowResize();
    function handleWindowResize() {
      var adContainer = document.getElementById("slide-in-ad-container");
      // 取得當前視窗寬度
      var windowWidth = window.innerWidth;

      // 當視窗寬度大於等於 992px (桌面版)
      if (windowWidth >= breakpoint) {
        // adContainer.setAttribute("data-bs-backdrop", "false");
      } else {
        // adContainer.setAttribute("data-bs-backdrop", "static");
      }
    }
    // 監聽 radio 按鈕變化
    if ("ontouchstart" in window) {
      $(".pill-button").on("touchstart", function () {
        selectedTag = $(this).next("label").attr("data-tag"); // 使用自定義屬性 data-tag 獲取當前選擇的標籤
        updateCarousel(tagImages[selectedTag]);
      });
    } else {
      $(".pill-button").on("change", function () {
        selectedTag = $(this).next("label").attr("data-tag"); // 使用自定義屬性 data-tag 獲取當前選擇的標籤
        updateCarousel(tagImages[selectedTag]);
      });
    }

    getSlideInAd();
  });

  function getSlideInAd() {
    var options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        Brand: Brand,
        Tags: tags_chosen,
        NUM: 18,
      }),
    };
    console.log("tags chosen:", tags_chosen);
    fetch(
      "https://ldiusfc4ib.execute-api.ap-northeast-1.amazonaws.com/v0/extension/recom_product",
      options
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        var jsonData = response.Item;
        // 填充每個標籤對應的圖片
        jsonData.forEach(function (item) {
          for (var tag in item.Tags) {
            if (item.TagsInclude.includes(tag)) {
              tagImages[tag].push({
                src: item.Imgsrc,
                alt: item.ItemName,
                price: item.price,
                link: item.Link,
              });
            }
          }
        });
        // 初始加載 "彈性" 標籤的圖片
        updateCarousel(tagImages["彈性"]);
      })
      //將 response.Item 的內容更新成頁面中的商品推薦版位
      .catch(function (err) {
        console.error(err);
      });
  }

  // 更新輪播圖片的函數
  function updateCarousel(images) {
    // Ensure 'images' is an array and not empty
    if (!Array.isArray(images) || images.length === 0) {
      console.warn("No images to display");
      if (typeof slideInOwl !== "undefined") {
        slideInOwl
          .trigger("replace.owl.carousel", [])
          .trigger("refresh.owl.carousel");
      } else {
        console.error("Owl Carousel instance not found.");
      }
      return;
    }
    var fakeData = [
      {
        alt: "鱷魚皮革磚色背包",
        price: "NT 3,990",
        original_price: "4,990",
        src: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.tendamotor.com/products/mt-60%E2%84%A2-rs",
      },
      {
        alt: "時尚米白風衣外套",
        price: "NT 1,990",
        original_price: "4,990",
        src: "https://images.unsplash.com/photo-1712570193685-1fb1bddfafda?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.tendamotor.com/products/mt-60%E2%84%A2-rs",
      },
      {
        alt: "純白西裝套裝",
        price: "",
        original_price: "4,990",
        src: "https://images.unsplash.com/photo-1583686543381-2608547b3963?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.tendamotor.com/products/mt-60%E2%84%A2-rs",
      },
      {
        alt: "莫蘭迪藍西裝套裝",
        price: "NT 2,990",
        original_price: "4,990",
        src: "https://images.unsplash.com/photo-1561357747-a5ebd644c2d6?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.tendamotor.com/products/mt-60%E2%84%A2-rs",
      },
      {
        alt: "簡約午夜黑背心",
        price: "NT 1,890",
        original_price: "4,990",
        src: "https://images.unsplash.com/photo-1551833726-b6549cd73566?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.tendamotor.com/products/mt-60%E2%84%A2-rs",
      },
    ];
    var items = fakeData
      // var items = images
      .map(
        (img) => `
        <div class="item">
            <div class="ad-item--cover">
                <div class="item-img">
                    <img class="image-responsive" src="${img.src}" data-src="${
          img.src
        }" alt="${img.alt || "Image"}" />
                </div>
            </div>
            <div class="ad-item" onclick="window.open('${
              img.link
            }')" data-title="${img.alt}" data-link="${img.link}">
                <div class="item-img">
                    <img class="image-responsive" src="${img.src}" data-src="${
          img.src
        }" alt="${img.alt || "Image"}" />
                </div>
                  <div class="item-info">
                    <h3 class="item-title">${img.alt}</h3>
                 ${
                   img.price
                     ? `
               <div class="discount-content">
                    <p class="item-price">$${img.price}</p>
                    <p class="item-price--original">$${img.original_price}</p>
                    </div>
                `
                     : ` <p class="item-price--original">$${img.original_price}</p>`
                 }
                </div>
            </div>
        </div>
    `
      )
      .join("");

    // Ensure 'owl' instance exists before triggering
    if (typeof slideInOwl !== "undefined") {
      slideInOwl
        .trigger("replace.owl.carousel", items)
        .trigger("refresh.owl.carousel");
    } else {
      console.error("slideInOwl Carousel instance not found.");
    }
    var mySlideInOffcanvas = document.getElementById("slide-in-ad-container");
    var bsSlideInOffcanvas = new bootstrap.Offcanvas(mySlideInOffcanvas);
    setTimeout(function () {
      // 取得當前視窗寬度
      var windowWidth = window.innerWidth;
      if (windowWidth < 992) {
        $(".custom-slideIn-backdrop").fadeIn(300);
      }
      $(".slide-main").css("opacity", "1");
      bsSlideInOffcanvas.show();
    }, 800);
    mySlideInOffcanvas.addEventListener("hide.bs.offcanvas", function () {
      $("#slide-in-ad-container").hide();
      var windowWidth = window.innerWidth;
      if (windowWidth < 992) {
        $(".custom-slideIn-backdrop").hide();
      }
    });
    mySlideInOffcanvas.addEventListener("hidden.bs.offcanvas", function () {
      // do something...
      $("#slide-in-carousel").hide();
    });
  }
})(jQuery);
