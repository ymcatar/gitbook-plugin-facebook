require(["gitbook", "jquery"], function(gitbook, $) {

    var init = function() {
        FB.init({
            appId: $('.fb_id').data('id'),
            xfbml: true
        });

        $('fb-comments').data('href', window.location);
        FB.XFBML.parse();
    };

    gitbook.events.bind("page.change", init);
});
