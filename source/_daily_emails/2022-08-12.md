---
permalink: daily/2022/08/12/git-worktrees-docker-compose
title: Git Worktrees and Docker Compose
pubDate: 2022-08-12
---

I've recently started trialing Git worktrees again as part of my development workflow.

If you are unfamiliar with Git worktrees, they allow you to have muliple branches of a repository checked out at the same time in different directories.

For example, this is what I see within my local checkout of my website repository:

```
.
├── config
├── HEAD
├── main
│   ├── ansible
│   ├── nginx
│   ├── README.md
│   └── website
├── new-post
│   ├── ansible
│   ├── nginx
│   ├── README.md
│   └── website
├── objects
│   ├── info
│   └── pack
├── packed-refs
├── refs
│   ├── heads
│   └── tags
└── worktrees
    ├── main
    └── new-post
```

The first thing that you'll notice is, because it's a bare clone, it looks a little different to a what you usually see in a Git repository.

Each worktree has it's own directory, so my "main" branch inside the `main` directory.

If I need to work on a different branch, such as `new-post`, then I can create a new worktree, move into that directory and start working. I don't need to commit or stash any in-progress work and switch branches.

## Complications with Docker Compose

I use Docker and Docker Compose for my projects, and this caused some issues for me the last time that I tried using worktrees.

By default, Docker Compose will use the name of the directory that the Compose file is in to name its containers. If the directory name is "oliverdavies-uk", then the containers will be `oliverdavies-uk-web_1`, `oliverdavies-uk-db_1` etc.

This doesn't work so well if the directory is a worktree called "main" or "master" as you'll have containers called `main_web_1` or `master_db_1`.

The way to solve this is to use the `COMPOSE_PROJECT_NAME` environment variable.

If you prefix Docker Compose commands with `COMPOSE_PROJECT_NAME=your-project`, or add it to an `.env` file (Docker Compose will load this automatically), then this will override the prefix in the container names to be `your-project-{service}`.

## Container names per worktree

Whilst you could use the same Compose project name within all of your worktrees, I prefer to include the worktree name as a suffix - something like `my-project-main` or `my-project-staging` - and keep these stored in an `.env` file in each worktree's directory.

As each worktree now has unique container names, I can have multiple instances of a project running at the same time, and each worktree will have it's own separate data - meaning that I can make changes and test something in one worktree without affecting any others.

You can also use the `COMPOSE_PROJECT_NAME` variable inside Docker Compose files.

For example, if you use Traefik and needed to override the host URL for a service, the string will be interpolated and the project name would be injected as you'd expect.

```language-yaml
labels:
    - "traefik.http.routers.${COMPOSE_PROJECT_NAME}.rule=Host(
        `${COMPOSE_PROJECT_NAME}.docker.localhost`,
        `admin.${COMPOSE_PROJECT_NAME}.docker.localhost`
      )"
```

This means that Traefik would continue to use a different URL for each worktree without you needing to make any changes to your Docker Compose file.
