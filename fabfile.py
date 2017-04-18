from fabric.api import *
from fabric.contrib.project import rsync_project

env.use_ssh_config = True

project_root = '/var/www/oliverdavies'

@task
def build_deploy():
    build()
    deploy()
    file_permissions()

def build():
    local('npm run init')
    local('npm run production')
    local('composer install --no-dev --optimize-autoloader')
    local('composer run production')
    local('echo %s > output_prod/version' % env.build_number)

def deploy():
    rsync_project(
        remote_dir='%s/web/' % project_root,
        local_dir='output_prod/',
        default_opts='-vzcrSLh',
        delete=True
    )
    sudo('service nginx configtest && service nginx reload')

def file_permissions():
    sudo('chown -R %s:%s %s/web' % (env.user, env.group, project_root))
    sudo('chmod -R 750 %s/web' % project_root)
