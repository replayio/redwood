import yargs from 'yargs'

import {
  standardAuthBuilder,
  standardAuthHandler,
} from '@redwoodjs/cli-helpers'

export const command = 'okta'
export const description = 'Generate an auth configuration for Okta'
export const builder = (yargs: yargs.Argv) => {
  return standardAuthBuilder(yargs)
}

interface Args {
  rwVersion: string
  force: boolean
}

export const handler = async ({ rwVersion, force: forceArg }: Args) => {
  standardAuthHandler({
    basedir: __dirname,
    rwVersion,
    forceArg,
    provider: 'okta',
    authDecoderImport:
      "import { oktaAuthDecoder as authDecoder } from '@redwoodjs/auth-providers-api'",
    webPackages: ['@okta/okta-auth-js', '@redwoodjs/auth-providers-web'],
    apiPackages: ['@okta/jwt-verifier', '@redwoodjs/auth-providers-api'],
  })
}
