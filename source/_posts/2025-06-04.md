---
date: 2025-06-04
title: Picking cherries
permalink: /daily/2025/06/04/picking-cherries
---

<p>If you''re working on a feature branch, or a <a href="/daily/2025/06/01/good-commit-messages-dont-always-matter">temporary branch for pair or mob programming</a>, what do you do if you accidentally commit a change to the wrong branch?</p><p>Do you reset your changes, switch to the correct branch and re-create the same changes manually?</p><p>You don''t need to.</p><p>Git has a solution for this.</p><p>Create the commit as you would on the correct branch and copy the commit SHA.</p><p>Use <code>git checkout</code> or <code>git switch</code> to move to the correct branch and use <code>git cherry-pick</code> with the commit SHA.</p><p>It will pluck the commit from the branch and re-apply the changes with the same commit message.</p><p>Then, if you merge or rebase your temporary branch, Git will know the change has already been applied and skip that commit.</p><p>No need to re-do the same changes again manually.</p>
