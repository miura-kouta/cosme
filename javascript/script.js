//スムーススクロールはindex.htmlの一番下に記述

// ハンバーガ―メニュー
const hamburgerNav = document.querySelector(".bl_hamburger_nav");
const hamburgerBox = document.querySelector(".bl_hamburger_box");
const hamburgerMenu = document.querySelector(".bl_hamburger_menu");
const hamburgerItem = document.querySelector(".bl_hamburger_item");
// ↑.bl_hamburger_itemをquerySelectorで取得しているので、ページ内の最初の要素の一つしか取得できていません。querySelectorAllで全ての要素を取得してfor文などでループで回して処理する必要があります。

hamburgerBox.addEventListener("click", function () {
    hamburgerNav.classList.toggle("active");
    hamburgerBox.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
});

hamburgerItem.addEventListener("click", function () {
    hamburgerNav.classList.toggle("active");
    hamburgerBox.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
});
