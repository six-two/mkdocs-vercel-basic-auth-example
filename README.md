# Basic auth for MkDocs on Vercel

This is based on <https://github.com/flawyte/vercel-basic-auth>.

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
