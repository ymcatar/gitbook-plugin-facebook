This is a plugin that allows you to add Facebook comments plugin in your GitBook.

# Usage
To add Facebook comments into your GitBook, you need to first obtain your personal Application ID from Facebook. To do so, you can follow the guide [here](http://support.heateor.com/how-to-get-facebook-app-id/).

After obtaining the ID, add the following config into your `book.json` and you should be good to go:

```
"plugins": ["facebook"],
"pluginsConfig": {
    "facebook": {
        "appKey": {{YOUR ID SHOULD BE INSERTED HERE}}
    }
}
```

Note that the Facebook comment plugins is quite slow and will add a few seconds to the page load time.
