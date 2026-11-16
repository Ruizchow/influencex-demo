#!/usr/bin/env node
// Only creates local configuration. Never overwrites existing credentials.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const target = path.join(__dirname, '..', '.env');
const password = crypto.randomBytes(18).toString('base64url');
const key = crypto.randomBytes(32).toString('base64');
const text = [
  'NODE_ENV=development', 'PORT=8080', 'BASE_PATH=',
  'ADMIN_EMAIL=admin@example.com', `ADMIN_PASSWORD=${password}`,
  'ADMIN_NAME=Demo Admin', `MAILBOX_ENCRYPTION_KEY=${key}`, ''
].join('\n');
try {
  fs.writeFileSync(target, text, { flag: 'wx', mode: 0o600 });
  console.log('Created .env. Keep this file private.');
  console.log('Local URL: http://localhost:8080/#/login');
  console.log('Email: admin@example.com');
  console.log(`Password: ${password}`);
  console.log('Start with npm start (or docker compose up --build -d).');
} catch (err) {
  if (err.code === 'EEXIST') {
    console.error('.env already exists; left unchanged. Use the credentials in that file.');
    process.exitCode = 1;
  } else {
    throw err;
  }
}
