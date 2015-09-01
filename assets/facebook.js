require(["gitbook", "jquery"], function(gitbook, $) {

    var init = function() {
        FB.XFBML.parse();
    };

    gitbook.events.bind("page.change", init);

});
