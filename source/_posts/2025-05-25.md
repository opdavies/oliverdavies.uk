---
date: 2025-05-25
title: Why I prefer a rolling Linux distribution
permalink: /daily/2025/05/25/why-i-prefer-rolling-linux-distribution
---

<p>I use NixOS as the Linux distribution on my laptop and home server, and specifically the unstable channel.</p><p>This is the "rolling" version of NixOS that is continuously updated with the newest and latest packages, compared to the stable releases like 24.11 and 25.05 that are released twice a year.</p><p>I don't necessarily do this to get the latest packages.</p><p>I do it to keep on top of configuration changes.</p><p>I run "nix flake update" usually once a week to download the latest updates.</p><p>If there are breaking changes or notices since I last updated, I can address them and do it iteratively rather than waiting to do them every six months.</p><p>Similar to application deployments, <a href="/daily/2023/05/14/releasing-small-changes-often-is-less-risky">I update early and often</a>.</p><p>One of the great things about NixOS is, if there is an application that breaks on the unstable branch, I can pin it to the stable release until it works again.</p><p>This means I get the benefits of both the rolling and stable approaches.</p><p>If you want to see my NixOS configuration, it's <a href="https://code.oliverdavies.uk/opdavies/nix-config">publicly available on my Forgejo instance</a>.</p>
