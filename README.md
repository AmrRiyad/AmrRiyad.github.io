# My Personal Blog

Welcome to my personal blog! This is a modern, content-focused website built with [Astro](https://astro.build/), a powerful static site generator. Feel free to use this as a starting point and make it your own - customize the design, add your content, and make it uniquely yours!

## 🚀 Features

- ✅ Modern, clean design
- ✅ Markdown and MDX support
- ✅ Responsive layout
- ✅ Fast performance
- ✅ SEO-friendly
- ✅ RSS feed
- ✅ GitHub Pages deployment ready

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🚀 Deployment

This blog is configured to be deployed to GitHub Pages. To deploy:

1. Update the `GITHUB_USERNAME` and `REPO_NAME` variables in `astro.config.mjs` with your GitHub username and repository name.
2. Push your code to the `main` branch of your GitHub repository.
3. Enable GitHub Pages in your repository settings, selecting the GitHub Actions option.
4. The GitHub Actions workflow will automatically build and deploy your site.

## 📝 Adding Content

To add a new blog post:

1. Create a new Markdown or MDX file in `src/content/blog/`
2. Add frontmatter with title, description, publication date, and hero image
3. Write your content using Markdown

Example:

```md
---
title: "My New Blog Post"
description: "A short description of the post"
pubDate: "Jul 22 2024"
heroImage: "/blog-placeholder-3.jpg"
---

# My New Blog Post

Content goes here...
```

## 🧪 Customization

- Update site title and description in `src/consts.ts`
- Customize the header and footer in `src/components/Header.astro` and `src/components/Footer.astro`
- Modify the homepage in `src/pages/index.astro`
- Update the About page in `src/pages/about.astro`

```sh
npm create astro@latest -- --template blog
```