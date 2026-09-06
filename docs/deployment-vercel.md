# Vercel client preview

This deployment exports the existing frontend with Next.js to `out/`. It does not deploy the Cloudflare Worker, backend placeholders, database, or authentication helpers. The existing Vite development commands remain unchanged.

## Import

1. Open https://vercel.com/new and connect GitHub.
2. Import `DalmasG/FearlessFF`, using `main` and the repository root.
3. Use framework preset **Other**. `vercel.json` supplies the build and output settings:
   - Build command: `node scripts/build-vercel.mjs`
   - Output directory: `out`
   - Install command: `npm ci`
4. No environment variables are needed. Deploy and open the generated URL.
5. Check the URL in a signed-out browser before sharing with the client. If deployment protection requires login, use Vercel's sharing controls to grant the intended access.

The build script enables `FEARLESS_STATIC_EXPORT` for its child process only. Run `node scripts/build-vercel.mjs` locally to reproduce the export. No global environment configuration is necessary.

The static export was verified to contain all page sections and referenced local assets. Tickets, submissions and trailer actions retain their existing placeholder behavior. Daniel's portrait is hosted externally and requires that source to remain available.

`X-Robots-Tag: noindex, nofollow` discourages indexing of this client review site; it does not make the URL private. Remove that header for a public launch when appropriate.

After connecting GitHub, pushes to the production branch trigger new deployments. Backend work later will need a separate deployment decision; static exports cannot execute server API routes.
