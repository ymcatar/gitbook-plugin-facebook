require(["gitbook", "jquery"], function(gitbook, $) {

    var init = function() {
        if(typeof FB === 'function') // needed because sometimes Facebook sdk is not loaded
            FB.XFBML.parse();
    };

    gitbook.events.bind("page.change", init);

});
