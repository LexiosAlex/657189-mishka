var menuMobile = document.querySelector(".main-nav__wrapper");
var menuToggle = document.querySelector(".main-nav__toggle");
var mobileScript = window.matchMedia("all and (max-width: 667px)");

  if (mobileScript.matches) {
    menuMobile.classList.add("main-nav__wrapper--hidden");
    menuToggle.classList.add("main-nav__toggle--on");

    menuToggle.addEventListener("click", function (event) {
    event.preventDefault();

    if (menuMobile.classList.contains('main-nav__wrapper--hidden')) {
      menuMobile.classList.remove('main-nav__wrapper--hidden');
      menuToggle.classList.remove('main-nav__toggle--on');
      menuToggle.classList.add('main-nav__toggle--off');
    }
    else {
      menuMobile.classList.add('main-nav__wrapper--hidden');
      menuToggle.classList.remove('main-nav__toggle--off');
      menuToggle.classList.add('main-nav__toggle--on');
    }
  });

  } else {

  };

var popup = document.querySelector(".overlay");
var modal = document.querySelector(".modal-add-item");
var WeeklyGood = document.querySelector(".weekly-goods__btn");
var CatalogBtns = document.querySelectorAll(".popup-show");

  if (WeeklyGood) {
    WeeklyGood.addEventListener("click", function(event) {
      event.preventDefault();
      modal.classList.add("modal-show");
      popup.classList.add("overlay-show");
    });
  }

  if (CatalogBtns.length !== 0) {
    for (var i = 0; i < CatalogBtns.length; i++) {
      CatalogBtns[i].addEventListener("click", function(event) {
        event.preventDefault();
        modal.classList.add("modal-show");
        popup.classList.add("overlay-show");
      });
    }
  }

  if (popup) {
    popup.addEventListener("click", function () {
      if (popup.classList.contains("overlay-show")) {
        modal.classList.remove("modal-show");
        popup.classList.remove("overlay-show");
      }
    });
  }

var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: new google.maps.LatLng(59.938508, 30.323126),
      mapTypeId: 'roadmap'
    });
    var marker = new google.maps.Marker({

    position: new google.maps.LatLng(59.938631, 30.323055),
    map: map,
    draggable:true,
    icon: "img/icon-map-pin.svg",
    size: new google.maps.Size(85, 140),
    scaledSize: new google.maps.Size(85, 140)

    });
  }
