
$(document).ready(function() {

    // Lazy Loading
    // -------------------------------------- //

    if (!Modernizr.touch) {
        $('[data-lazy-desktop-src]').each(function(index) {
            var lazySrc = $(this).attr('data-lazy-desktop-src');
            console.log(lazySrc);
            $(this).attr('src', lazySrc);
        });
    }
    $('[data-lazy-src]').each(function(index) {
        var lazySrc = $(this).attr('data-lazy-src');
        console.log(lazySrc);
        $(this).attr('src', lazySrc);
    });

    // Circles
    // -------------------------------------- //

    $('#circle-zahnarzt').circleProgress({
        value: .75,
        size: 40,
        lineCap: 'round',
        fill: {
            color: "#333"
        }
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').text(String(stepValue.toFixed(2).substr(2)) + '%');
    });
    $('#circle-krebs').circleProgress({
        value: .25,
        size: 40,
        lineCap: 'round',
        fill: {
            color: "#333"
        }
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').text(String(stepValue.toFixed(2).substr(2)) + '%');
    });


    // Initialize YouTube-Videos only when visible
    $('.content-section.videos-links').visibility({
        onTopVisible: function() {
            $(this)
                .append('<div class="ui three column stackable grid"> <div class="column"> <div class="video-container"> <iframe width="560" height="315" src="https://www.youtube.com/embed/NXOJSs_0Qa8" frameborder="0" allowfullscreen></iframe> </div> </div> <div class="column"> <div class="video-container"> <iframe width="560" height="315" src="https://www.youtube.com/embed/Pbb9xjDKzMc" frameborder="0" allowfullscreen></iframe> </div> </div> <div class="column"> <div class="video-container"> <iframe width="560" height="315" src="https://www.youtube.com/embed/o6Wlt8cIqq0" frameborder="0" allowfullscreen></iframe> </div> </div> </div>')
                .find('.spinner')
                .remove();
        }
    });



    // Semantic-Ui
    // -------------------------------------- //

    // VDS-Switch
    // -------------------------------------- //
    $('.ui.checkbox').checkbox({
        onChange : function() {
            if ($('.ui.checkbox').checkbox('is checked')) {
                $('html').addClass('vds-mode');
                // $('[data-vds-element="true"]').transition('hide');
            } else {
                $('html').removeClass('vds-mode');
                // $('[data-vds-element="true"]').transition('show');

            }
        }
    });


    // Popovers
    // -------------------------------------- //
    $('.popup-info').popup({
        position: 'top center'
    });

    // Tabs
    // -------------------------------------- //

    $('.menu .item').tab();

    if (!Modernizr.touch) {
        setTimeout(function() {
            $('.head-map-overlay-image')
              .transition({
                animation : 'fade down',
                reverse   : 'false', // default setting
                interval  : 200,
                onComplete : function() {
                    $('.head-map-overlay-content h2')
                      .transition({
                        animation : 'fade down',
                        reverse   : 'false', // default setting
                        interval  : 200,
                        onComplete : function() {
                            $('.head-map-overlay-content p')
                              .transition({
                                animation : 'fade down',
                                reverse   : 'false', // default setting
                                interval  : 200,
                                onComplete : function() {

                                }
                            });
                        }
                    });
                }
              });
        }, 200);
    } else {
        $('.head-map-overlay-image, .head-map-overlay-content h2, .head-map-overlay-content p').removeClass('transition hidden');
    }






    // Mobile Optim
    // -------------------------------------- //


    var windowWidth = $(window).width();

    $(window).resize(function() {
        // Save current window width global.
        var windowWidth = $(window).width();
        if(this.resizeTO) {
            clearTimeout( this.resizeTO );
        }
        this.resizeTO = setTimeout(function() {
            $(this).trigger('endofwindowresize');
        }, 200);
    });

    if (Modernizr.mq('(max-width: 767px)')) {
        $('.tags .tag.labels').removeClass('big');
    } else {
        $('.tags .tag.labels').addClass('big');
    }

    $(window).bind('endofwindowresize', function() {
        var windowWidth = $(window).width();
        if (Modernizr.mq('(max-width: 767px)')) {
            $('.tags .tag.labels').removeClass('big');
        } else {
            $('.tags .tag.labels').addClass('big');
        }
    });




    // Simple Preloader & Splash-Screen
    // -------------------------------------- //

    $('#preloader .persona-nav a').click(function(event) {
        removePreloader();
    });

    $('.preloader').removeClass('preloader');

    function removePreloader() {
        $('.preloader').removeClass('preloader');
        $('#preloader').fadeOut('slow', function() {
        });
    }


    // Share-Buttons
    $('.sharewidget').sharrre({
        share: {
          twitter: true,
          facebook: true,
          googlePlus: true
        },
        urlCurl: 'js/libs/sharrre.php',
        template: '<div class="share-counter">{total}</div><a href="#" class="share-element share-facebook clearfix"><i class="icon facebook"></i>teilen</a><a href="#" class="share-element share-twitter clearfix"><i class="icon twitter"></i>tweet</a><a href="#" class="share-element share-googleplus clearfix"><i class="icon google plus"></i>+1</a><a href="#" class="share-element share-mail clearfix"><i class="icon envelope"></i>e-mail</a>',
        enableHover: false,
        enableTracking: true,
        render: function(api, options){
          $(api.element).on('click', '.share-twitter', function() {
            api.openPopup('twitter');
            return false;
          });
          $(api.element).on('click', '.share-facebook', function() {
            api.openPopup('facebook');
            return false;
          });
          $(api.element).on('click', '.share-googleplus', function() {
            api.openPopup('googlePlus');
            return false;
          });
        }
    });
});
