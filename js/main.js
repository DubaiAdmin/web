'use strict';
 
svg4everybody();
 
// Show the progress bar
NProgress.start();
 
// Increase randomly
var interval = setInterval(function() {
    NProgress.inc();
}, 1000);
 
// Trigger finish when page fully loaded
$(window).on('load', function() {
    NProgress.start();
    clearInterval(interval);
    NProgress.done();
});
 
// Trigger bar when exiting the page
$(window).on("unload", function() {
    NProgress.start();
});
 
// Modules
// header
(function() {
 
    $(function() {
        $(".scroll-to").click(function() {
            $('.main-menu_home__link').removeClass('active');
            $(this).addClass('active');
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
 
})();
 
// module__accordion
(function() {
 
 
    // Accordion
    function navGoco(accordion) {
        var jsAccordion = $(accordion);
        jsAccordion.navgoco({
            accordion: true
        });
    }
 
    navGoco('.jsAccordion');
 
 
})();
 
// module__dash-deposits
(function() {
 
    var table = $('.card-table');
 
    table.basictable({
        breakpoint: 1024
    });
 
})();
 
// module__dash-invest
(function() {
 
    var btn = $('.jsAlt');
 
    btn.click(function(event) {
        $(this).closest('.module__dash-invest__alt-pay').toggleClass('active');
    });
 
})();
 
// module__dash-stat
(function() {
 
    var slider = $('.jsSlick');
 
    slider.slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true
    });
 
})();
 
// module__home-stat
(function() {
 
    functionTabs('.jsTab', 'jsActive', '.jsCont', '.jsParent');
    var btc = 'assets/common/img/btc.png',
        ltc = '/assets/common/img/ltc.png',
        doge = '/assets/common/img/doge.png',
        pa = '/assets/common/img/pa.png',
        pm = '/assets/common/img/pm.png',
        btcColor = '#ff79b0',
        ltcColor = "#d1d1d1",
        dogeColor = '#ffba51',
        paColor = '#3b99d8',
        pmColor = '#e54e43',
        imagelink = btc,
        lineColor = btcColor;
 
    var config = {
        "particles": {
            "number": {
                "value": 24,
                "density": {
                    "enable": true,
                    "value_area": 801.7060304327614
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "triangle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.30776758023658635,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 0.48724632738080703,
                    "opacity_min": 0.17865698670629593,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 96.20472365193136,
                "color": "#ffffff",
                "opacity": 0.3286994724774322,
                "width": 1.1048066982851816
            },
            "move": {
                "enable": true,
                "speed": 0.6,
                "direction": "bottom-left",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }
    if ($('#particles-js').length && $(window).width() >= 1024) {
        particlesJS('particles-js', config, function() {
            console.log('callback - particles.js config loaded');
        });
    }
 
 
 
})();
 
// module__lang
(function() {
 
 
    var container = $('.jsContainer'),
        btn = $('.jsBtn'),
        langBtn = $('.jsLang'),
        scrollContainer = $('.jsLangScroll');
 
 
    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            langBtn.find('.jsBtn').removeClass('active')
            langBtn.find('.jsContainer').removeClass('active')
        }
    });
 
 
    btn.click(function(event) {
        $(this).closest('.jsContPar').find('.jsContainer').toggleClass('active'),
            $(this).toggleClass('active');
    });
 
 
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".jsContPar").length) {
            container.removeClass('active');
            btn.removeClass('active');
        }
        e.stopPropagation();
    });
 
 
    scrollContainer.mCustomScrollbar({
        setHeight: 270,
        autoHideScrollbar: true
    });
 
 
})();
 
// module__left-bar
(function() {
 
    // var columnHeight = $('.jsAutoHeight'),
    //     scrollContent = $('.jsLeftScroll'),
    //     dashContainer = $('.jsDashContainer');
 
    // function heightDetect() {
    //     if(dashContainer.height() >= $(window).height()) {
    //         columnHeight.css(
    //             'height' , dashContainer.height()
    //         )
    //     } else {
    //         columnHeight.css(
    //             'height' , $(window).height() - 30
    //         )
    //     }
    // }
 
 
    // $(window).on('load resize', function(){
    //     if($(window).width() > 1250) {
    //         heightDetect();
    //         scrollContent.mCustomScrollbar({
    //             setHeight: false,
    //             autoHideScrollbar: true
    //         });
    //     } else if($('.page__wrapper_account').lenght) {
    //         scrollContent.mCustomScrollbar("disable")
    //         columnHeight.css({
    //             'height' : '100%'
    //         })
    //     }
    //     scrollContent.addClass('loaded');
    // })
 
})();
 
// module__lightbox
(function() {
 
 
    // Lightbox
    function lightBox() {
        $('.jsLightBox').simpleLightbox({
            nextOnImageClick: false
        });
    }
 
    //lightBox()
 
 
})();
 
// module__notification
(function() {
 
 
    // Load modals
    if ($('div').is('.module__notification')) {
        init();
    }
 
 
    // Init modals
    function init() {
 
        iziToast.error({
            title: 'Error notification',
            message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            theme: 'light',
            position: 'topRight',
            titleSize: '16',
            messageSize: '13',
            maxWidth: '364',
            icon: true,
            timeout: 30000
        });
 
        iziToast.success({
            title: 'Success notification',
            message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            theme: 'light',
            position: 'topRight',
            titleSize: '16',
            messageSize: '13',
            maxWidth: '364',
            icon: true,
            timeout: 30000
        });
 
        iziToast.warning({
            title: 'Worning notification',
            message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            theme: 'light',
            position: 'topRight',
            titleSize: '16',
            messageSize: '13',
            maxWidth: '364',
            icon: true,
            timeout: 30000
        });
 
        iziToast.info({
            title: 'Information notification',
            message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            theme: 'light',
            position: 'topRight',
            titleSize: '16',
            messageSize: '13',
            maxWidth: '364',
            icon: true,
            timeout: 30000
        });
    }
 
})();
 
// module__popup
(function() {
 
 
    function successModal() {
        var successModal = $('#successModal');
        if (successModal.length) {
            successModal.iziModal({
                autoOpen: true,
                closeButton: true
            });
        }
    }
 
 
    function errorModal() {
        var errorModal = $('#errorModal');
        if (errorModal.length) {
            errorModal.iziModal({
                autoOpen: true,
                closeButton: true
            });
        }
    };
 
 
    errorModal();
    successModal();
 
 
})();
 
// Sandwitch
// Modules
(function() {
 
    $('.jsMobileDropdown').click(function(event) {
 
        $('html').toggleClass('page_mobile-menu');
 
    });
 
 
    $(window).on('load resize', function() {
 
        // if($(window).width() < 1024) {
        //         $('.page_dash').removeClass('page_mobile-menu')
        //     }
 
        if ($(window).width() > 1240) {
            $('html').removeClass('page_mobile-menu')
        }
 
    });
 
})();
 
// custom select
(function() {
 
 
    function formatState(state) {
 
        if (!state.id) {
            return state.text;
        }
 
        var baseUrl = "icon_";
        var $state = $(
 
            '<svg class="icon_crypto" width="=20" height="20" role="img"><use xlink:href="#bm_icon_mini_logos_colored_' + state.element.value.toLowerCase() + '"></use></svg><span class="icon_text">' + state.text + '</span>'
            // '<span class="icon_crypto ' + state.element.value.toLowerCase() + '" /><span class="icon_text"> ' + state.text + '</span>'
        );
 
        return $state;
    };
 
 
    function initSelectWithIcons() {
 
        $('.select_crypto').select2({
            // dir: "rtl",
            width: 'auto',
            dropdownAutoWidth: true,
            templateSelection: formatState,
            templateResult: formatState,
            minimumResultsForSearch: -1,
            allowHtml: true,
            dropdownCssClass: "select2_crypto-dropdown animated fadeIn",
            containerCssClass: "select2_crypto-container"
        });
 
    }
 
    initSelectWithIcons()
 
})();
