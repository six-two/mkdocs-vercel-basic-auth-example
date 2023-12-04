# Vercel authentication for MkDocs sites

These rely on vercel's routing capabilities to route all unauthenticated requests to an error page.
See the subfolders for different approaches.

## Demos

Basic auth:

- Manual login (user `a`, password `a`): <https://mkdocs-vercel-basic-auth-example.vercel.app/>
- Automatic login: <https://a:a@mkdocs-vercel-basic-auth-example.vercel.app/>

Cookie:

- Manual login (user `a`, password `a`): <https://mkdocs-vercel-cookie-auth-example-six-two.vercel.app/>
- Automatic login: <https://mkdocs-vercel-cookie-auth-example-six-two.vercel.app/#a:a>


## HTTP basic auth

HTTP basic auth will show an popup by the browser.
It should be supported by all browsers and the authentication can usually be included in the URL (`https://username:password@example.com` for stuff like bookmarks).
But this way at least Firefox will show a warning due to this sometimes being abused for phishing.
And Safari on iOS seems to not support this at all for me, but other browsers such as DuckDuckGo work as expected.
Depending on how you browser handles the URL, you might copy the credentials when copying the URL.
After you close the browser, the credentials will be forgotten.

## Cookie

You need to implement a login form or small page that sets the cookie from URL parameters to allow non-technical users to log in / create a bookmark that logs you in.
Depending on the browser's settings cookies either exist until they expire or the browser is closed.
You can also create a button or page that deletes the cookie and thus logs the user out.

Cookies are well supported although they may have regulatory problems due to them often being misused for tracking.
I am no lawyer, but using a cookie for simply storing the authentication data and not being used for tracking should be fine.
But feel free to annoy visitors with a `We use a cookie!` message they need to click away ;D

If you only want people in the know to log in, you can also in theory remove the login page.
Then you can modify your error page to look like your server misfunctions (502 Gateway Error, 500 Internal Server Error, etc).
This can provide some plausible deniability / make the site appear like a worthless target.
Users knowing the cookie can just open the site, set the cookie manually via the Browser's developer tools and should be logged in.
