/* Cлайд-шоу */
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    } 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); // Изменение картинки каждые 2 секунды
}
/* Cлайд-шоу */

/* Кнопка "вверх" */
$(function() {
    // при нажатии на кнопку scrollup
    $('.scrollup').click(function() {
      // переместиться в верхнюю часть страницы
      $("html, body").animate({
        scrollTop:0
      },1000);
    })
  })
  // при прокрутке окна (window)
  $(window).scroll(function() {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop()>200) {
      // то сделать кнопку scrollup видимой
      $('.scrollup').fadeIn();
    }
    // иначе скрыть кнопку scrollup
    else {
      $('.scrollup').fadeOut();
    }
  });
/* Кнопка "вверх" */