---
title: "Automating Ansible deployments in CI"
pubDate: 2022-09-10
permalink: "daily/2022/09/10/automating-ansible-deployments-ci"
tags: ["ansible"]
---

Once you have a deployment that's run using Ansible, rather than running it manually, it's easy to automate it as part of a continuous integration pipeline and have your changes pushed automatically by tools like GitHub Actions and GitLab CI.

You'll need to configure SSH by adding a known hosts file and a private key so the tool can connect to your server, but after that, it's just running the same Ansible commands.

If you're using Ansistrano or other roles, you can install dependencies by using `ansible-galaxy`, and `ansible-vault` to decrypt and use any encrypted variables - securely storing the Vault password and any other secrets as environment variables within your pipeline.

Here's an example using GitHub Actions:

```
- name: Download Ansible roles
  run: ansible-galaxy install -r requirements.yml

- name: Export the Ansible Vault password
  run: echo $ANSIBLE_VAULT_PASS > .vault-pass.txt
  env:
    ANSIBLE_VAULT_PASS: ${{ secrets.ANSIBLE_VAULT_PASS }}

- name: Deploy the code
  run: >
    ansible-playbook deploy.yml
    -i inventories/$INVENTORY_FILE.ini
    -e "project_git_branch=$GITHUB_SHA"
    --vault-password-file=.vault-pass.txt

- name: Remove the Ansible Vault password file
  run: rm .vault-pass.txt
```

Before these steps, I've added the SSH key and determined which inventory file to use by the updated branch. The Vault password is exported and then removed once it has been used.

Automated tests and other code quality checks can be run in prior job, ensuring that the deployment only happens if those checks pass, but assuming that all is good, the playbook will be run and the changes will be deployed automatically.
