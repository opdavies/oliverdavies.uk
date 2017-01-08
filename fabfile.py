from fabric.api import *
from fabric.contrib.project import rsync_project

env.hosts = ['production']
env.use_ssh_config = True

project_root = '/var/www/oliverdavies'

@task
def deploy():
    build_assets()
    build_site()
    deploy_site()
    fix_file_permissions()

def build_site():
    local('composer install --no-dev --optimize-autoloader')
    local('composer run production')
    local('echo %s > output_prod/version' % env.build_number)

def build_assets():
    local('npm run init')
    local('npm run production')

def deploy_site():
    rsync_project(
        remote_dir='%s/web/' % project_root,
        local_dir='output_prod/',
        default_opts='-vzcrSLh',
        delete=True
    )
    run('sudo service nginx configtest && sudo service nginx reload')

def fix_file_permissions():
    run('sudo chown -R %s:%s %s/web' % (env.user, env.group, project_root))
    run('sudo chmod -R 750 %s/web' % project_root)
