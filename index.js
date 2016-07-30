module.exports = {
  website: {
    assets: "./assets",
    css: [
      "facebook.css"
    ],
    js: [
      "facebook.js"
    ]
  },

  hooks: {
    "page": function (page) {
      page.content += '<br><div class="fb-comments" data-numposts="5" data-width="100%"></div>';
      return page;
    }
  }
};