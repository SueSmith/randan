# randan
Coding learning tools

## Overview

This repository contains:
- A simple static landing page at the root
- An Eleventy-powered blog in the `/blog` subdirectory

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
```

### Building the Site

To build the site:

```bash
npm run build
```

This will generate the site in the `_site` directory with:
- Landing page at `_site/index.html`
- Blog at `_site/blog/`

### Development

To run Eleventy's development server with hot reloading:

```bash
npm run serve
```

Then open your browser to `http://localhost:8080`

## Project Structure

```
randan/
├── index.html              # Static landing page
├── blog/                   # Eleventy blog source
│   ├── _layouts/           # Page layouts
│   ├── css/               # Blog styles
│   ├── posts/             # Blog posts
│   └── index.njk          # Blog home page
├── _site/                 # Generated output (not in repo)
├── .eleventy.js           # Eleventy configuration
└── package.json           # Project dependencies
```

## Adding Blog Posts

Create a new markdown file in `blog/posts/` with the following front matter:

```markdown
---
layout: post.njk
title: Your Post Title
date: YYYY-MM-DD
tags: 
  - posts
  - your-tag
description: A brief description of your post
---

Your content here...
```

## License

MIT License - see LICENSE file for details

