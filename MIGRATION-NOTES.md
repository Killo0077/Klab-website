# Kacerys catalogue migration

The `/projects` catalogue now uses `src/content/projects/*.md` and `ProjectCard.astro`.
Add a Markdown entry with `title`, `image`, `price`, `material`, `description`, `category`, `url`, and `order` to add a card automatically.
Existing product detail `.astro` pages are intentionally retained to preserve their individual image galleries, options, Etsy links, and descriptions. A Markdown entry links to each existing page via `url`.

**Not yet converted:** product detail pages are not generated from Content Collections. They remain individually editable. This is a safe first-stage migration.

Test with `npm ci && npm run build && npm run dev`, then inspect `/projects` and several product pages. No deployment has been performed.
