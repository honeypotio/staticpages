Staticpages
----------

honeypot.io static pages. maintenance, error and others


Development
-----------

## starting server in dev mode

```shell
npm start
```

Deployment
----------

All deployment is done automatically by Travis-CI during build time

In order to reconfigure S3 or force push changes to cloudfront
add `[#s3 configure]`, `[#s3 force]` or both `[#s3 force configure]`
to the commit message.

### Feature Stagings

Are being uploaded to a sub folder on the staging server containing
the number of the PR eg `https://staging.honeypot.co/pr-10/`

### Release staging

All pull requests that are accepted get deployed to `https://staging.honeypot.io`
automatically (the deployment could take up to 15 min)

### Production

For production we use release based deploys. Every commit tagged with
a version like `v1.0.X` will be deployed to production `www.honeypot.io`

License
-------

Staticpages is Copyright © 2015 Honeypot GmbH.
