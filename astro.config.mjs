// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Replace 'your-username' with your actual GitHub username
const GITHUB_USERNAME = 'AmrRiyad7';
const REPO_NAME = 'verdant-virgo';

// https://astro.build/config
export default defineConfig({
	site: `https://${GITHUB_USERNAME}.github.io`,
	// base: `/${REPO_NAME}`,
	integrations: [mdx(), sitemap()],
});
