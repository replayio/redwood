#!/usr/bin/env node
import { createRequire } from 'module'

const requireFromCrossEnv = createRequire(
  require.resolve('cross-env/package.json')
)

const bins = requireFromCrossEnv('./package.json')['bin']

// Most package.json's list their bins as relative paths, but not cross-env.
requireFromCrossEnv(`./${bins['cross-env']}`)
