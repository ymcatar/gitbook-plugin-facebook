require(["gitbook", "jquery"], function (gitbook, $) {
  var init = function () {
    $('fb-comments').data('href', window.location);
    if (FB) {
      FB.XFBML.parse();
    }
  };

  gitbook.events.bind("page.change", init);
});
