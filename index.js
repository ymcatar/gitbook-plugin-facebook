module.exports = {

    website: {
        assets: "./assets",
        css: [
            "facebook.css"
        ],
        js: [
            "facebook.js"
        ],
        html: {
            "body:start": function() {
                var appKey = this.options.pluginsConfig.facebook.appKey;
                return '<script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=' + appKey + '"; fjs.parentNode.insertBefore(js, fjs);}(document, "script", "facebook-jssdk"));</script>';
            }
        }
    },

    hooks: {
        "page": function(page) {
            page.sections[0].content += '<br><div class="fb-comments" data-numposts="5" data-width="100%"></div>';
            return page;
        }
    }
};
