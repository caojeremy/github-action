# github-action

github action

```sh
npm init -y
npm install @actions/core @actions/github
npm install -D @vercel/ncc

npx ncc build index.js -o dist # build to dist/index.js

git tag v3
git push origin main
git push origin v3
```

```yaml
name: Test Action

on: [push]

jobs:
  hello:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: caojeremy/github-action@v3
        with:
            name: Jeremy
```