require(["gitbook", "jquery"], function(gitbook, $) {

    var started = false;
    var appKey;

    var init = function() {

        if (!started) return;

        $('body').prepend('<div id="fb-root"></div><script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=' + appKey + '"; fjs.parentNode.insertBefore(js, fjs);}(document, "script", "facebook-jssdk"));</script>');

        $('.page-inner').append('<br><div class="fb-comments" data-href="' + window.location.href + '" data-numposts="5"></div>');
    };

    gitbook.events.bind('start', function(e, config) {
        started = true;
        appKey = config.facebook.appKey;
        init();
    });

    gitbook.events.bind("page.change", init);

});
