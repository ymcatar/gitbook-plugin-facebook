require(["gitbook", "jquery"], function(gitbook, $) {

    gitbook.events.bind("page.change", function() {

        $('fb-comments').data('href', window.location);
        FB.XFBML.parse();

    });

});
