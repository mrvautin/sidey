(function($){
    $.fn.sidey = function(options){
        var element = this;

        $('.sidey-toggle').click(function(e){
            toggleSidebar($(this).data('toggle'));
        });

        function toggleSidebar(direction){
            if(direction === 'left'){
                $(element).toggleClass('sidey-leftactive');
                $('.sidey-content').toggleClass('sidey-leftpush');
            }

            if(direction === 'right'){
                $(element).toggleClass('sidey-rightactive');
                $('.sidey-content').toggleClass('sidey-rightpush');
            }
        }

        $(document).click(function(e){
            var target = $(e.target);
            if(!target.closest('a').is('.sidey-toggle')){
                if(!$(e.target).closest('.sidebar').length){
                    if($(element).hasClass('sidey-leftactive')){
                        toggleSidebar('left');
                    }
                    if($(element).hasClass('sidey-rightactive')){
                        toggleSidebar('right');
                    }
                }
            }
        });
    };
}(jQuery));
