(function ($) {

  var btn = document.querySelector('.js-message-btn');
  var timer = 0;
  var text;

  function getButton () {
    text = $('.tmi').text() === 'CLOSE' ? 'TMI' : 'CLOSE';

    if (text === 'CLOSE') {
      $('.overlay').fadeIn(500);
    } else {
      $('.overlay').fadeOut(500);
    }

    $('.tmi').fadeOut();

    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      $('.tmi').text(text);
      $('.tmi').fadeIn();
    }, 500);

  }

  btn.addEventListener('click', function (e) {
    e.preventDefault();
  });

  $('body').on('click', function (e) {
    getButton();
  });

})(jQuery);