var menuMobile = document.querySelector(".main-nav__wrapper");
var menuToggle = document.querySelector(".main-nav__toggle");
var mobileScript = window.matchMedia("all and (max-width: 667px)");
var orderWeeklyGood = document.querySelector(".weekly-goods__btn");
var CartBtn = document.querySelector(".good__cart");
var popup = document.querySelector(".overlay");

  orderWeeklyGood.addEventListener("click", function (evt){
      evt.preventDefault();
      popup.classList.add("overlay-show");
  });

  CartBtn.addEventListener("click", function (evt){
      evt.preventDefault();
      popup.classList.add("overlay-show");
  });


  popup.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("overlay-show");
    });


  if (mobileScript.matches) {
    menuMobile.classList.add("main-nav__wrapper--hidden");
    menuToggle.classList.add("main-nav__toggle--on");

    menuToggle.addEventListener("click", function (evt){
      evt.preventDefault();
      menuMobile.classList.remove("main-nav__wrapper--hidden");
      menuToggle.classList.remove("main-nav__toggle--on");
      menuToggle.classList.add("main-nav__toggle--off");
    });

  } else {

  }

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(function () {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчнию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.939931, 30.323],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16
    });

    var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
        hintContent: "Санкт-Петербург, Ул.Большая Конюшенная 19/8, офис 101",
    },
    {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "../img/icon-map-pin.svg",
        // Размеры метки.
        iconImageSize: [85, 140],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-50, -140]
    });
    myMap.geoObjects.add(myPlacemark);
})

