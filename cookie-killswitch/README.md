# Cookie authentication with kill switch for MkDocs on Vercel

This is basically the same as the cookie authentication, but with the extra feature of only the latest deployment (via your production deployment's URL) being accessible.
This should prevent old deployments with vulnerabilities in their authentication code from being exploited, if you fixed the problem in your current deployment.
Note: By default vercel keeps all your deployments, but with their unique deployment URLs like for example `mkdocs-vercel-basic-auth-example-cookie-6zehv24sd-six-two.vercel.app`.
An attacker that can guess branch names or commit ids could thus potentially access your old deployments.

The kill switch can be added to any authentication method and works by adding a rewrite at the top of the list in `vercel.json`, that will redirect to the kill switch page if the requested hostname does not match the production URL.
Foe example:

```json
{
  ...
  "routes": [
    {
      "src": "/.*",
      "dest": "/killswitch.html",
      "status": 500,
      "missing": [
        {
          "type": "header",
          "key": "host",
          "value": "mkdocs-vercel-cookie-killswitch-auth-example-six-two.vercel.app"
        }
      ]
    },
    ...
  ],
  ...
}
```


