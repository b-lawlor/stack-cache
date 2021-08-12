---
id: contribute
title: How to contribute
sidebar_position: 2
---

This site is built with [Docusaurus](https://docusaurus.io/), a static site generator that is built with [React](https://reactjs.org/) and powered by [Markdown](https://daringfireball.net/projects/markdown/) and [JSX](https://reactjs.org/docs/introducing-jsx.html).

You don't need to know any [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) to start your Docusaurus journey, but it would prove useful along the way.

If you would like to see something added, updated, or removed from here there are many paths to contributing!

## For the casual adventurer

Just post a message in the [Sierra ILS Slack](https://sierra-ils.slack.com/ssb/redirect) and someone will help!

## For intrepid documentalist

[Create an issue](https://github.com/brendanlawlor/stack-cache/issues/new) on Github.

## For the hardcore hacker

:::info todo
Document the process of updating this site with references the official docs
:::

```
GIT_USER=<GITHUB_USERNAME> USE_SSH=true yarn deploy
```

<!--
### Rough steps

1. Clone this repo and the build repo
  ```shell
  git clone git@github.com:brendanlawlor/stack-cache.git
  cd stack-cache
  git clone git@github.com:brendanlawlor/stack-cache.github.io.git build
  ```

2. Edit files with your favorite text editor

3. Build the site
  ```
  npm run build
  ```

4. Push the project source and static html to Github 
  ```shell
  git add .
  git commit  -m 'add useful description of changes'
  git push origin main
  cd build
  git add .
  git commit  -m 'add useful description of changes'
  git push origin main
  ```
-->