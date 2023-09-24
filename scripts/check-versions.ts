#!/usr/bin/node
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(fileURLToPath(import.meta.url), '..', '..')

function read(...parts: string[]): string {
  return readFileSync(join(ROOT, ...parts)).toString()
}
let pkg = read('package.json')
let toolVersions = read('.tool-versions')

let nodeMinor = toolVersions.match(/nodejs (\d+\.\d+)\./)![1]

if (!pkg.includes(`"node": "~${nodeMinor}.`)) {
  process.stderr.write(
    '.tool-versions and package.json have different Node.js minor version\n'
  )
  process.exit(1)
}