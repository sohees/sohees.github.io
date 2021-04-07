(function ($) {

  var messageBox = document.querySelector('.js-message');
  var btn = document.querySelector('.js-message-btn');
  var card = document.querySelector('.js-profile-card');
  var closeBtn = document.querySelectorAll('.js-message-close');

  var timer = 0;
  var text;

  var getButton = function () {
    text = $('.tmi').text() === 'CLOSE' ? 'TMI' : 'CLOSE';

    if (text === 'CLOSE') {
      $('.overlay').fadeIn(800);
    } else {
      $('.overlay').fadeOut(800);
    }

    $('.tmi').fadeOut();

    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      $('.tmi').text(text);
      $('.tmi').fadeIn();
    }, 800);

  }

  btn.addEventListener('click', function (e) {
    e.preventDefault();
  });

  $('body').on('click', function (e) {
    getButton();
  });

})(jQuery);