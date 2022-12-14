#!/bin/sh

node ./node_modules/.bin/typeorm migration:run -f src/typeorm-migration.config.js
