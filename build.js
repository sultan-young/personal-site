const shell = require('shelljs')
shell.exec('git submodule update')
shell.exec('cd ./themes/sultan-icarus && yarn')
shell.exec('hexo generate')