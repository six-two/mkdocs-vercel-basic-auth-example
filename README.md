# Vercel authentication for MkDocs sites

These rely on vercel's routing capabilities to route all unauthenticated requests to an error page.
See the subfolders for different approaches.

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

Cookies are well supported although they may have regulatory problems due to them often being misused for tracking.
I am no lawyer, but using a cookie for simply storing the authentication data and not being used for tracking should be fine.
But feel free to annoy visitors with a `We use a cookie!` message they need to click away ;D
