#!/bin/bash

echo "Removed dist directory and potential old archive"
rm -rf dist
rm openprocurement.auction.insider-js.tar.gz

echo "Created new build package"
npm run build

echo "Created archive"
tar -cvzf openprocurement.auction.insider-js.tar.gz ./dist/*

echo "Created release"
# https://developer.github.com/v3/repos/releases/#create-a-release