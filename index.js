import process from 'process'
import { installPackage } from '@antfu/install-pkg'
import { cyan } from 'kolorist'

process.env.NODE_ENV = 'production'
// process.env.NODE_ENV = 'development'

console.log(`env: ${cyan(process.env.NODE_ENV)}`)

installPackage('is-even')
