
const menu_btn = document.querySlector('.hamburger');
const mobile_menu = document.querySlector('.mobile-nav');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    menu_menu.classList.toggle('is-active');

})

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if(dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHtml = "Read More";
    moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
}

}



