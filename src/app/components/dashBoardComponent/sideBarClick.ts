declare var $: any

export const sideBarClickLogic = () => {
    /* eslint-disable */

    const that: any = this

    $(document).ready(function(){
        $('#sidebarToggle, #sidebarToggleTop').on('click', function (e: any) {
            $('body').toggleClass('sidebar-toggled'),
                $('.sidebar').toggleClass('toggled'),
                $('.sidebar').hasClass('toggled') &&
                    $('.sidebar .collapse').collapse('hide')
        }),
            $(window).resize(function () {
                $(window).width() < 768 && $('.sidebar .collapse').collapse('hide'),
                    $(window).width() < 480 &&
                        !$('.sidebar').hasClass('toggled') &&
                        ($('body').addClass('sidebar-toggled'),
                        $('.sidebar').addClass('toggled'),
                        $('.sidebar .collapse').collapse('hide'))
            }),
            $('body.fixed-nav .sidebar').on(
                'mousewheel DOMMouseScroll wheel',
                function (e: any) {
                    if (768 < $(window).width()) {
                        var o = e.originalEvent,
                            l = o.wheelDelta || -o.detail
                        ;(that.scrollTop += 30 * (l < 0 ? 1 : -1)),
                            e.preventDefault()
                    }
                }
            ),
            $(document).on('click', 'a.scroll-to-top', function (e: any) {
                var o = $(that)
                $('html, body')
                    .stop()
                    .animate(
                        { scrollTop: $(o.attr('href')).offset().top },
                        1e3,
                        'easeInOutExpo'
                    ),
                    e.preventDefault()
            })
        
        });

}
