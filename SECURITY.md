# Security reporting

This repository is an experimental self-hosted marketing workspace. It is not
presented as security-audited production software.

Do not post passwords, tokens, personal contact exports, or exploit details in public
issues. Use GitHub's private vulnerability reporting if the repository's Security tab
offers it. If it is unavailable, open an issue titled “Private security contact requested”
with no vulnerability details and ask the maintainer for a private channel.

For your deployment:

- Use your own admin credentials and a random 32-byte base64 `MAILBOX_ENCRYPTION_KEY`.
- Keep `.env` and databases outside version control.
- Give demo visitors separate, limited accounts instead of sharing the administrator.
- Configure provider credentials only for the features you intend to use.
- Use persistent storage and backups before storing work you need to keep.

Changing `ADMIN_PASSWORD` does not reset an existing database user's password.
Use the application's password-reset flow when configured. See the deployment guide
for first-start troubleshooting.
