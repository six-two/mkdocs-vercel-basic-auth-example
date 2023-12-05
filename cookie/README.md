# Cookie authentication for MkDocs on Vercel

You very likely will want to add some code for setting the cookie to the page being served when a user is not logged in.
To prevent leaking information like the navigation bar, your site's title, etc, you will want to create a HTML file (**not** Markdown) in your `docs/` folder.
Mine is `docs/login.html`.
The HTML page usually should contain:

- An HTML form that will set the cookie when you fill it out (basically a login page).
- For automatic login: Code that handles supplying the credentials via an URL parameter or the URL hash.

If you want users to be "logged out" after a certain time instead of when closing the browser you should set the [Max-Age attribute](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#max-agenumber) when you set the cookie.
In my demo code this should be done in set_cookie.
If you do not set Max-Age, the cookie will by default be deleted when you close the browser. 

You may also want to provide an logout page or button.
The easiest way is adding a Markdown page (so that it gets added to the navigation) that sets the cookie to an empty value or removes it.

## vercel.json

To prevent any problems with characters like spaces, semicolons, etc in the access key my implementation base64 encodes it.
You could also only allow safe characters or encoding it with another scheme (like URL encoding), but base64 is deterministic (only one way to encode a string) and many tools support it.

To convert your access key to base64, use the following command (should work on Mac and Linux):
```bash
echo -n 'YOUR_ACCESS_KEY' | base64 | tr -d '='
```

You will want to replace the `YTph` in the following section of `vercel.json` with the base64 encoded access key (output of previous command):
```json
    "missing": [
      {
        "type": "header",
        "key": "cookie",
        "value": ".*credentials=YTph.*"
      }
    ]
```

The `.*` at the beginning and end matches any extra characters and handles the case where there are some additional cookies, that are maybe set by your page.
You should probably keep it.

If you are unsure what password you used in the past, you can decode the base64 string like this:
```bash
echo YOUR_VALUE_IN_VERCEL_JSON | base64 -d
```

For example:
```
$ echo YTph | base64 -d
a:a
```
