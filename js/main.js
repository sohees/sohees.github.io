(function ($) {

    var ScrollLayout = {

        init: function () {
            this.viewScroll();
        },

        viewScroll: function(){
            var elm = ".box";
            $(elm).each(function (index) {

                // 개별적으로 Wheel 이벤트 적용
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();

                    var delta = 0;
                    if (!event) event = window.event;
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } else if (event.detail)
                        delta = -event.detail / 3;
                    var moveTop = $(window).scrollTop();
                    var elmSelecter = $(elm).eq(index);

                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {
                        if ($(elmSelecter).next() != undefined) {
                            try {
                                moveTop = $(elmSelecter).next().offset().top;
                            } catch (e) {}
                        }
                        // 마우스휠을 아래에서 위로
                    } else {
                        if ($(elmSelecter).prev() != undefined) {
                            try {
                                moveTop = $(elmSelecter).prev().offset().top;
                            } catch (e) {}
                        }
                    }

                    ScrollPosition.setPosition(moveTop);
                    ScrollPosition.getPosition();

                    $("html,body").stop().animate({
                        scrollTop: moveTop + 'px'
                    }, {
                        duration: 800,
                        complete: function () {}
                    });

                });
            });
        }
    }


    var ScrollPosition = {

        position: 0,
        height: $(window).height(),
        section: 0,
        setctionCount2: 0,
        setctionCount3: 0,
        setctionCount4: 0,

        setPosition: function (p) {
            this.position = p;
        },

        getPosition: function () {

            if (this.height > this.position) {
                this.section = 1;
            } else if (this.height * 2 > this.position) {
                this.section = 2;
            } else if (this.height * 3 > this.position) {
                this.section = 3;
            } else if (this.height * 4 > this.position) {
                this.section = 4;
            } else if (this.height * 5 > this.position) {
                this.section = 5;
            } else if (this.height * 6 > this.position) {
                this.section = 6;
            }

            if (this.section === 3) {
                $('.profile .transparent').on('click', function () {
                    IframeLoading.profile();
                })
            }

            if (this.section === 4 && !this.setctionCount3) {
                this.setctionCount3 = 1;
                IframeLoading.skill();
            }

            if (this.section === 5 && !this.setctionCount4) {
                this.setctionCount4 = 1;
                IframeLoading.career();
            }

            if (this.section === 6) {
                $('.contact .transparent').on('click', function () {
                    window.open(
                        'https://github.com/sohees',
                        '_blank'
                    );
                })
            }

            return this.section;
        },

    }


    var SlideControl = {
        init: function () {
            $('#slider__left').on('click', function () {
                $('.work iframe')[0].contentWindow.$('body').trigger('left');
            });
            $('#slider__right').on('click', function () {
                $('.work iframe')[0].contentWindow.$('body').trigger('right');
            });
        }
    }


    var IframeLoading = {

        skill: function () {
            $('.skill iframe')[0].contentWindow.$('body').trigger('loading');
        },

        career: function () {
            $('.career iframe')[0].contentWindow.$('body').trigger('loading');
        },

        profile: function () {
            $('.profile iframe')[0].contentWindow.$('body').trigger('click');
        }
    }


    var intro = {

        init: function(){
            this.videoResize();
            this.typing();
        },

        typing: function(){
            var typed = new Typed('.typed', {
                strings: ['^100안녕하세요.^1500 박소희 입니다.^1500', '저는^1500 웹 개발자 입니다.^1500',
                    '반응형^500 웹^500,^1500 웹^500 퍼블리싱^500,^1500 프론트엔드^500, 백엔드^500, 하이브리드 앱^500 등^1500',
                    '다양한^500 작업을^1500 하고 있습니다.^1500', '언제나^500 겸손하고^1500 성실하게^500 노력하겠습니다.^1500',
                    '방문해주셔서^500 감사합니다.^5000'
                ],
                loop: true
            });
        },

        videoResize: function(){
            var ratio = $(window).height() / $(window).width() * 100;

            if(ratio > 177 || ratio < 55){
                if(ratio < 170){
                    $('video').removeClass('video_height')
                }

                if(ratio < 55 ){
                    $('video').addClass('video_width');//
                }else{
                    $('video').removeClass('video_width');
                }

            }else{
                $('video').addClass('video_height');
                $('video').removeClass('video_width');
            }
        }
    }
    

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    window.onload = function () {
        intro.init();
        ScrollLayout.init();
        SlideControl.init();
    }

    window.onresize = function () {
        ScrollPosition.height = $(window).height();
        intro.videoResize();
    }

})(jQuery);