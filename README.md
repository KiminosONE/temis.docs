# Temis Docs

Public legal website for the Temis browser extension, built with Vite and React.

## Pages

- `/`: legal hub.
- `/privacy/`: privacy policy and Chrome Web Store Limited Use disclosure.
- `/terms/`: terms of use.
- `/data-deletion/`: local and cloud data deletion instructions.

Every page supports English and Spanish. The first visit follows the browser language and later visits remember the selected language locally.

## Development

```bash
npm install
npm run dev
```

## Checks and production build

```bash
npm run lint
npm run build
```

The production site is generated in `dist/` with the `/temis.docs/` base path.

## GitHub Pages

1. Create a GitHub repository named `temis.docs`.
2. Push this project to its `main` branch.
3. In **Settings → Pages**, select **GitHub Actions** as the source.
4. The included workflow builds and deploys the website automatically on pushes to `main`. If the first run failed before Pages was enabled, open **Actions > Deploy Temis Docs to GitHub Pages > Run workflow** and select `main`.

### Troubleshooting deployment

If **Setup Pages** fails with `Get Pages site failed` or `HttpError: Not Found`, open [the repository's Pages settings](https://github.com/KiminosONE/temis.docs/settings/pages) and select **Build and deployment > Source > GitHub Actions**, then run the workflow again. This setup is required before the first deployment; the workflow alone does not enable Pages.

Do not add `enablement: true` with the default `GITHUB_TOKEN`: automatic enablement requires a separate token with additional permissions, as documented in [configure-pages](https://github.com/actions/configure-pages/blob/v6/action.yml). Manual setup avoids adding a deployment secret.

The workflow pins Ubuntu 24.04 and uses Node 24-based JavaScript actions. The application build still uses Node 22, selected separately by `setup-node`.

Expected public URLs:

```text
https://kiminosone.github.io/temis.docs/
https://kiminosone.github.io/temis.docs/privacy/
https://kiminosone.github.io/temis.docs/terms/
https://kiminosone.github.io/temis.docs/data-deletion/
```

Use the privacy URL in the Chrome Web Store privacy-policy field.

## Before publishing

- Confirm that `https://github.com/KiminosONE/temis` is the official repository.
- Preferably replace the GitHub Issues contact method with a dedicated support or privacy email.
- Keep the documents synchronized with changes to permissions, Firebase data, analytics, advertising, sharing, and third-party services.
- Ensure the Chrome Web Store **Privacy practices** answers match the privacy policy.

These documents are a technical starting point and do not replace legal advice tailored to the developer's jurisdiction.
