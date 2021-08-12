---
id: intro
title: Setup your development environment
sidebar_position: 1
slug: /
---

:::caution
This resource is for educational purposes only. Use at your own risk.
:::

## VSCode and Windows Subsystem for Linux
  
[VSCode](https://code.visualstudio.com/) connected to a [Debian](https://www.microsoft.com/en-us/p/debian/9msvkqc78pk6) virtual machine on [Windows Subsystem for Linux (WSL2)](https://docs.microsoft.com/en-us/windows/wsl/). This requires a development machine that supports [Hyper-V Virtualization](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v).

Launch VSCode and on the left hand panel open the Remote Explorer to connect to your WSL virtual machine. From the menu bar select Terminal > New Terminal or use the shortcut ``` Ctrl+Shift+` ```. This opens a [Bash](https://www.gnu.org/software/bash/manual/bash.html) shell prompt in a bottom panel that should look something like this ```username@computer:~$```. Cool, now you can enter Linux commands on your virtual machine straight from VSCode. After installing a couple of dependencies you'll reach a point where a lot of tutorials [like the Docusaurus one](./docs/docusaurus/intro) start, so let's go!

Remember to download and and install the latest updates using [apt](https://www.debian.org/doc/manuals/apt-guide/index.en.html)

```sudo apt update && sudo apt upgrade```

## Node

Install [curl](https://curl.se/) to help install nvm

```sudo apt-get install curl```

Install Node Version Manager [nvm](https://github.com/nvm-sh/nvm)

```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash```

You may need to restart your Debain terminal or run ```source ~/.bashrc```

Check that your install returns a version number

```nvm --version```

Install and set your default Node.js version

```shell
$ nvm install 14.15.0
$ nvm use 14.15.0
```

Check that it's all good

```shell
$ npm --version
$ node --version
```

## Git

:::danger
Never ```git add```, ```commit```, or ```push``` sensitive information to a remote repository.
:::

:::info todo
Add info about setting up a remote repository
:::

  Install [Git](https://git-scm.com/)

```sudo apt-get install git```

Verify that it's all good

```git --version```

Configure you username and email address

```shell
$ git config --global user.name "Jane Doe"
$ git config --global user.email "jdoe@example.org"
```

To start a new local repository

- ```git init```
- write some code
- ```git add src/modified.js```
- ```git add .``` to add all changes
- ```git commit -m "useful decription of changes"```

Check status of changes and new files

- ```git status```

See changes

- ```git diff```
- ```git diff src/modified.js```

Configure ```.gitignore```

**References**

- [Git](https://git-scm.com/)

- [Getting Git Right](https://www.atlassian.com/git)
