# @valbo/redirect-to-https-middleware

Express middleware that redirects HTTP to HTTPS.

![npm (scoped)](https://img.shields.io/npm/v/@valbo/redirect-to-https-middleware)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![Build Status](https://img.shields.io/github/workflow/status/valverdealbo/redirect-to-https-middleware/CI)
[![Coverage Status](https://coveralls.io/repos/github/valverdealbo/redirect-to-https-middleware/badge.svg?branch=main)](https://coveralls.io/github/valverdealbo/redirect-to-https-middleware?branch=main)
[![Known Vulnerabilities](https://snyk.io/test/github/valverdealbo/redirect-to-https-middleware/badge.svg?targetFile=package.json)](https://snyk.io/test/github/valverdealbo/redirect-to-https-middleware?targetFile=package.json)

## Install

```bash
npm install @valbo/redirect-to-https-middleware
```

## Usage

Add this middleware to your express app. To make it work behind a reverse proxy set **trust proxy** to **true**:

```typescript
import { redirectToHttpsMiddleware } from '@valbo/redirect-to-https-middleware';

app.set('trust proxy', true);
app.use(redirectToHttpsMiddleware);
```

The middleware will redirect any request with the HTTP protocol to the same URL but with the HTTPS protocol, except if the server is **localhost** or **127.0.0.1**.
