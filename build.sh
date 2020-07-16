#!/bin/bash
rm -rf dist
mkdir dist
cp -r src/static/* ./dist/
npx esbuild --bundle src/index.tsx --outdir=dist --sourcemap