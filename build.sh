#!/bin/sh
yui-compressor --type js  -o res/site.min.js  res/site.js
yui-compressor --type css -o res/site.min.css res/site.css