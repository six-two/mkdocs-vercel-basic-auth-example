# Basic auth for MkDocs on Vercel

This is based on <https://github.com/flawyte/vercel-basic-auth>.

Obviously this only adds security if your source code is not public, but if it were public attackers could build the site themselves anyways.

You will want to replace the `YTph` in the following section of `vercel.json` with the output of `echo -n 'YOUR_USERNAME:THE_PASSWORD' | base64`:
```json
        "missing": [
          {
            "type": "header",
            "key": "authorization",
            "value": "Basic YTph"
          }
        ]
```

The value specifies the username and password that are valid, separated by a colon and then base64 encoded.
Fore example to use `admin` as bot the username and password use `YWRtaW46YWRtaW4=`, becuase:
```
$ echo -n 'admin:admin' | base64
YWRtaW46YWRtaW4=
```

So your config should contain this text:
```json title="vercel.json"
        "missing": [
          {
            "type": "header",
            "key": "authorization",
            "value": "Basic YWRtaW46YWRtaW4="
          }
        ]
```

You should also look at `docs/401.html` and customize it if you want (at least remove the hint with the password :D).
It should probably not be generated from MkDocs, since then it would disclose your site's navigation, etc.


## Local testing

Somehow the header handling does not work well locally (always get 401 even with correct request).

Build:
```
vercel build
```

Serve with live reload:
```
vercel dev --listen 8000
```
