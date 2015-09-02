require(["gitbook", "jquery"], function(gitbook, $) {

    var init = function() {
        $('fb-comments').data('href', window.location);
        FB.XFBML.parse();
    };

    gitbook.events.bind("start", init);
    gitbook.events.bind("page.change", init);

});
