(function ($) {

    function loading() {

        $('.circle strong').html('');
        $('.circle').removeClass('fade-in');

        function makeCircle(c, p, t) {

            var p100 = p * 100;
            var colorArr = [];

            (function () {
                if (p100 > 89) {
                    colorArr = ['#fad961', '#f76b1c']
                } else if (p100 > 69) {
                    colorArr = ['#b3eb50', '#429421']
                } else if (p100 > 59) {
                    colorArr = ['#15f5fd', '#036cda']
                } else {
                    colorArr = ['#c6c6c6', '#5d6874']
                }
            })();

            setTimeout(() => {
                c.circleProgress({
                    value: 0,
                    fill: {
                        gradient: colorArr
                    }
                });
                c.on('circle-animation-progress', function (event, progress) {
                    $(this).find('strong').html(Math.round((p * 100) * progress) + '<i>%</i>');
                });
                c.circleProgress('value', p);
                c.addClass('fade-in');
            }, t);

        }
        console.log(1);

        var c1 = {
            el: $('.c1.circle'),
            per: 0.9
        }
        c2 = {
                el: $('.c2.circle'),
                per: 0.9
            },
            c3 = {
                el: $('.c3.circle'),
                per: 0.8
            },
            c4 = {
                el: $('.c4.circle'),
                per: 0.7
            },
            c5 = {
                el: $('.c5.circle'),
                per: 0.7
            },
            c6 = {
                el: $('.c6.circle'),
                per: 0.8
            },
            c7 = {
                el: $('.c7.circle'),
                per: 0.6
            },
            c8 = {
                el: $('.c8.circle'),
                per: 0.5
            };

        var arr = [c1, c2, c3, c4, c5, c6, c7, c8];

        for (var i = 0; i < arr.length; i++) {
            makeCircle(arr[i].el, arr[i].per, i * 650);
        }
    }

    $('body').on('loading', function (e) {
        loading();
    });

})(jQuery);