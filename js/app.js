
window.addEventListener('DOMContentLoaded', () => {
   let menu = document.querySelector('.menu__body'),
      hamburger = document.querySelector('.icon-menu'),

      button = document.querySelector('.menu__btn'),
      header = document.querySelector('.header-hero');

   hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('icon-menu_active');
      menu.classList.toggle('menu__body_active');
      button.classList.toggle('hiden');
      header.classList.toggle('hiden');

   });
   let close = document.querySelector('.icon-menu_active');
   close.addEventListener('click', () => {
      hamburger.classList.toggle('icon-menu_active');
      menu.classList.toggle('menu__body_active');
      button.classList.toggle('hiden');
      header.classList.toggle('hiden');
   });
});
new Swiper('.services-slider', {

   slidesPerView: 3,
   spaceBetween: 18,
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      992: {
         slidesPerView: 3,
         spaceBetween: 0,
      },
      640: {
         slidesPerView: 2,
         spaceBetween: 40,
      },
      320: {
         slidesPerView: 1,
      },
   }
});


new Swiper('.result-slider', {

   slidesPerView: 1,

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },


});
new Swiper('.feedback-slider', {

   slidesPerView: 2,
   spaceBetween: 30,

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      //// when window width is >= 320px
      //320: {
      //  slidesPerView: 2,
      //  spaceBetween: 20
      //},
      //// when window width is >= 480px
      //480: {
      //  slidesPerView: 3,
      //  spaceBetween: 30
      //},
      //// when window width is >= 640px
      992: {
         slidesPerView: 2,
         spaceBetween: 30
      },
      640: {
         slidesPerView: 1,
         spaceBetween: 40
      },
      320: {
         slidesPerView: 1,
         spaceBetween: 20
      },

   }


});


$('[data-modal=consultation]').on('click', function () {
   $('.overlay, #consultation').fadeIn('slow');

});
$('.modal__close').on('click', function () {
   $('.overlay, #consultation, #thanks').fadeOut('slow');
});
$('form').submit(function (e) {
   e.preventDefault();
   $.ajax({
      type: "POST",
      url: "../mailer/smart.php",
      data: $(this).serialize()
   }).done(function () {
      $(this).find("input").val("");
      $('#consultation').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
   });
   return false;
});
//const modalTrigger = document.querySelectorAll('.services__cart-btn'),
//   modal = document.querySelector('.modal'),
//   modalCloseBtn = document.querySelector('.modal__close'),
//   body = document.querySelector('body');
//services = document.querySelector('.services__cart-wrapper'),
//   overflow = document.querySelector('.overflow')





//function openModal() {
//   modal.classList.add('show');
//   modal.classList.remove('hide');
//   body.style.background = 'rgba(0, 0, 0, 0.3)';
//   services.forEach(services => {
//      services.style.background = 'rgba(0, 0, 0, 0.3)';
//   });
//}
//function closeModal() {
//   modal.classList.add('');
//   modal.classList.remove('show');
//   overflow.classList.add('hide');
//   overflow.classList.remove('show');
//   services.style.background = '';
//}


//modalTrigger.forEach(btn => {
//   btn.addEventListener('click', openModal);
//});

//modalCloseBtn.addEventListener('click', closeModal);

//modal.addEventListener('click', (e) => {
//   if (e.target === modal) {
//      closeModal();
//   }
//});

//document.addEventListener('keydown', (e) => {
//   if (e.code === "Escape" && modal.classList.contains('show')) {
//      closeModal();
//   }
//});
