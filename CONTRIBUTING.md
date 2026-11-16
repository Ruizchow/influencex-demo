# Contributing

Start with the [local setup](README.md#quick-start). Use Node.js 24 LTS.
This is a downstream edition of [oratis/influencex](https://github.com/oratis/influencex);
please keep upstream attribution intact.

## Before opening a pull request

1. Open an issue describing the user problem for substantial changes.
2. Create a branch, keep the change focused, and include a before/after example.
3. Run the relevant checks:

```bash
npm test
npm --prefix client test
npm --prefix client run build
```

Add meaningful tests for behavior changes. Documentation-only changes should have
working links and commands. Never include `.env`, credentials, real creator contact
exports, database files, or screenshots of private accounts.

## Where to work

- `client/src/pages/`: routed UI pages.
- `client/src/components/`: shared components.
- `client/src/i18n.jsx`: English and Chinese UI strings.
- `server/index.js`: HTTP routes and application startup.
- `server/agents-v2/`: specialist agents.
- `server/agent-runtime/`: orchestration.
- `server/database.js` and `server/migrations.js`: storage and migrations.
- `packages/social-ops/`: platform capability adapters.

Good starting areas: translation corrections, accessible form labels, useful empty
states, reproducible connector errors, and setup documentation. Avoid unsolicited
large dependency upgrades or unrelated formatting changes.

Use the bug / feature templates. For suspected vulnerabilities, read [SECURITY.md](SECURITY.md).
Contributions are under the existing MIT license. Be respectful, give useful context,
and discuss the work rather than the person.
