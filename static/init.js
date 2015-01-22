/**
 * Created by Administrator on 2015/1/22.
 */
        $(function(){
            $('.nyroModal').nyroModal({
                showCloseButton:false
            });
            var $container = $('#tags-wrap');
            // initialize
            $container.masonry({
                itemSelector: '.tags-mod'
            });
            $container.css({"visibility":"visible"})
        })