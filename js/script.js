/**
 * Created by emit on 20.02.16.
 */
/**
 * Created by Елена on 26.06.2015.
 */
var link = document.querySelectorAll(".buy");
var popup = document.querySelector(".basket-add.modal-ok");
var close = document.querySelector(".basket-add .close");
var close_2 = document.querySelector(".basket-add .white-button");

for (var index = 0, len = link.length; index < len; ++index) {
  link[index].addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-ok-show");
  });
}

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-ok-show");
});

close_2.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-ok-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("modal-ok-show")) {
      popup.classList.remove("modal-ok-show");
    }
  }
});

var link_lost = document.querySelector(".more-map");
var popup_lost = document.querySelector(".lost.modal-ok");
var close_lost = document.querySelector(".lost .close");
var close_2_lost = document.querySelector(".lost .white-button");
var form = popup_lost.querySelector("form");
var nameHelp = popup_lost.querySelector("[name='name']");
var email = popup_lost.querySelector("[name='email']");
var comment = popup_lost.querySelector("[name='comment']");
var storage = localStorage.getItem("name");

link_lost.addEventListener("click", function (event) {
  event.preventDefault();
  popup_lost.classList.add("modal-ok-show");
  if (storage) {
    nameHelp.value = storage;
    email.focus();
  } else {
    nameHelp.focus();
  }
});

form.addEventListener("submit", function (event) {
  if (!(nameHelp.value && email.value && comment.value)) {
    event.preventDefault();
    popup_lost.classList.remove("modal-error");
    popup_lost.classList.add("modal-error");
  } else {
    localStorage.setItem("name", nameHelp.value);
  }
});

close_lost.addEventListener("click", function (event) {
  event.preventDefault();
  popup_lost.classList.remove("modal-ok-show");
});

close_2_lost.addEventListener("click", function (event) {
  event.preventDefault();
  popup_lost.classList.remove("modal-ok-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    if (popup_lost.classList.contains("modal-ok-show")) {
      popup_lost.classList.remove("modal-ok-show");
    }
  }
});

var mapOpen = document.querySelector(".open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".close");

mapOpen.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.add("modal-ok-show");
});

mapClose.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-ok-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    if (mapPopup.classList.contains("modal-ok-show")) {
      mapPopup.classList.remove("modal-ok-show");
    }
  }
});
