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
4. The included workflow builds and deploys the website automatically.

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
