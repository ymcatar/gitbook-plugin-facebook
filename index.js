module.exports = {

    website: {
        assets: "./assets",
        css: [
            "facebook.css"
        ],
        js: [
            "https://connect.facebook.net/en_US/all.js",
            "facebook.js"
        ],
        html: {
            "body:start": function() {
                var appKey = this.options.pluginsConfig.facebook.appKey;
                return '<div class="fb_id" data-id="' + appKey +'"></div>';
            }
        }
    },

    hooks: {
        "page": function(page) {
            page.content += '<br><div class="fb-comments" data-numposts="5" data-width="100%"></div>';
            return page;
        }
    }
};
