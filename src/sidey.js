/*! sidey v1.0.4 | MIT License | github.com/mrvautin/sidey */
(function($){
    $.extend({
        sidey: function(options){
            // get the options
            var settings = $.extend({
                backgroundBlur: true
            }, options);

            $('.sidey-toggle').unbind().click(function(e){
                var element = $($(this).data('element'));

                // if already open then we close it
                if($(element).hasClass('sidey-leftactive')){
                    toggleSidebar(element, 'left');
                    return;
                }

                // if already open then we close it
                if($(element).hasClass('sidey-rightactive')){
                    toggleSidebar(element, 'right');
                    return;
                }

                // close any active sidebars
                closeSidebars();

                // open the chosen sidebar
                if($(element).hasClass('sidey-left')){
                    $(element).addClass('sidey-leftactive');
                    $('.sidey-content').addClass('sidey-leftpush');
                    if(settings.backgroundBlur === true){
                        $('.sidey-content').toggleClass('sidey-blur');
                    }
                }else if($(element).hasClass('sidey-right')){
                    $(element).toggleClass('sidey-rightactive');
                    $('.sidey-content').toggleClass('sidey-rightpush');
                    if(settings.backgroundBlur === true){
                        $('.sidey-content').toggleClass('sidey-blur');
                    }
                }
            });

            // anything outside of the sidebar and toggle clicked
            $(document).unbind().click(function(e){
                if(!$(e.target).hasClass('sidey-toggle')){
                    if(!$(e.target).closest('.sidey-leftactive').length || $(e.target).closest('.sidey-rightactive').length){
                        closeSidebars();
                    }
                }
            });

            // close all open sidebars
            function closeSidebars(){
                $('.sidey-left').each(function(index){
                    $(this).removeClass('sidey-leftactive');
                });
                $('.sidey-right').each(function(index){
                    $(this).removeClass('sidey-rightactive');
                });
                $('.sidey-content').each(function(index){
                    $(this).removeClass('sidey-rightpush');
                    $(this).removeClass('sidey-leftpush');
                    $(this).removeClass('sidey-blur');
                });
            }

            // toggle a sidebar
            function toggleSidebar(element, direction){
                if(direction === 'left'){
                    $(element).toggleClass('sidey-leftactive');
                    $('.sidey-content').toggleClass('sidey-leftpush');
                    if(settings.backgroundBlur === true){
                        $('.sidey-content').toggleClass('sidey-blur');
                    }
                }

                if(direction === 'right'){
                    $(element).toggleClass('sidey-rightactive');
                    $('.sidey-content').toggleClass('sidey-rightpush');
                    if(settings.backgroundBlur === true){
                        $('.sidey-content').toggleClass('sidey-blur');
                    }
                }
            }
        }
    });
}(jQuery));
