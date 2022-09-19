const shell = require('shelljs')
shell.exec('git submodule update')
shell.exec('git submodule foreach yarn install')