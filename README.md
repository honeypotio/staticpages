# THIS PROJECT IS DEPRECATED WITH THE EXCEPTION OF [LANDING PAGES](https://github.com/honeypotio/staticpages/tree/master/app/lp) FOLDER WHICH NEEDS TO BE MIGRATED TO THE [NEW WEBSITE](https://github.com/honeypotio/website/)

Staticpages [![Build Status](https://travis-ci.org/honeypotio/staticpages.svg?branch=master)](https://travis-ci.org/honeypotio/staticpages)
----------

honeypot.io static pages. maintenance, error and others


Development for old handlebars pages
-----------

## starting server in dev mode

```shell
npm start
```

Development for new gatsby/react SSR pages
-----------

## WARNING: ALWAYS MAKE SURE YOU DELETE THE RESPECTIVE HANDLEBARS PAGE BEFORE ADDING A NEW ONE FOR GATSBY/REACT

## starting server in dev mode

```shell
npm run gdev
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

Staticpages is Copyright © 2018 Honeypot GmbH.
