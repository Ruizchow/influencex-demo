# Deploy and log in

## Local setup

Follow the README. `npm run setup:local` generates a fresh `.env` and prints local
credentials. It never overwrites an existing file. Starting the server creates the
admin only when both `ADMIN_EMAIL` and `ADMIN_PASSWORD` are present.

SQLite is the default. Native Node stores it in `influencex.db`; the Docker Compose
example stores it in the `influencex_data` named volume. The Compose app is bound to
localhost by default. Put a reverse proxy with HTTPS in front of it for public hosting.

## Render Blueprint

1. Fork this repository, or use the Deploy to Render button on the README.
2. Connect your Git provider and select the repository containing `render.yaml`.
3. Give the Blueprint a name. If Render reports a service-name collision, change the
   `name` field under `services` in your own `render.yaml` to a unique name and sync.
4. Supply `ADMIN_EMAIL` and `ADMIN_PASSWORD`. These are application login credentials;
   they are not your Render or GitHub login. Use your own password.
5. Confirm the service uses **Free**, then deploy. The Blueprint generates the encryption key.
6. Wait for **Live**. Logs should include `Default admin account created:` and
   `auto-created workspace`. Open the service's `.onrender.com` address and sign in.

The free Blueprint has no persistent disk. Its SQLite database may reset when the
instance restarts, redeploys, or spins down. The configured administrator is recreated
on an empty database. Free hosting does not make external AI or scraping APIs free.

For durable use, select a persistent database/storage option appropriate to your needs;
that can cost money. Do not treat this disposable Blueprint as a production datastore.

## “Invalid email or password”

First check the service's **Environment** page:

| KEY | VALUE |
| --- | --- |
| ADMIN_EMAIL | The exact email you will enter on the app login page |
| ADMIN_PASSWORD | Your chosen application password |

If only `MAILBOX_ENCRYPTION_KEY`, `NODE_ENV`, and `PORT` are present, click **Edit** and
**Add variable** twice to add the two admin keys. Leave the original three values intact.
Save and redeploy, wait for **Live**, then check the startup logs for admin creation.
Typing into the app's Sign In form does not create an account.

If the account already exists in the database, changing the environment password does
not update its stored password. Use the configured password-reset flow. Do not delete
real data merely to reset a password.

## Inviting visitors

Use the admin's Invite Codes page to create invitations for visitors to register their
own accounts. The hosted project's admin credentials are not part of this repository.
A future public read-only sandbox is on the roadmap.

## Checks

- `/healthz`: liveness endpoint.
- `/api/docs`: API reference.
- The live homepage verifies serving works; an authenticated workspace verifies account setup.
