# rachittyagi.github.io

Personal portfolio of **Rachit Tyagi**, Senior Full Stack Engineer · Angular · React · Node.js · .NET · Cloud & AI Assisted Systems.

**Live site:** https://rachittyagi.github.io/

A single-page site in plain HTML, CSS and JavaScript. There's no framework and no build step, so what's in the repo is what GitHub Pages serves.

## What's on the page

| Section | What it shows |
| --- | --- |
| Hero | A `README.md`-style editor window with headline, focus and stack, plus links to the resume PDF and the Ask box |
| About | Summary and three focus cards: Agentic AI, System Architecture, Leadership |
| Skills | Grouped skill tags, from Agentic AI and spec-driven tooling to frontend, backend, data, cloud and security |
| Work | Enterprise highlights (confidential client work) and open engineering work with tech stacks |
| How I Work | The spec-driven delivery model: Specification = source of truth, Code = implementation, CI = enforcer |
| Writing | Latest articles from the *Engineering in the Age of AI* series on Medium |
| Experience | Roles from 2012 to the present |
| Education | B.Tech (Computer Science) and internships |
| Ask | "Ask about my experience": a grounded Q&A box (see below) |
| Contact | Email, LinkedIn, GitHub, Medium |

Dark and light themes are included. The visitor's choice is remembered in the browser.

## Project structure

```
.
├── index.html                         # The whole page: markup, meta tags, JSON-LD, scripts
├── style.css                          # All styles (light + dark theme)
├── sitemap.xml                        # For search engines
├── robots.txt                         # Points crawlers at the sitemap
└── assets/
    ├── resume-rachit-tyagi-v1.8.pdf   # Linked from the hero button
    └── profile-preview.png            # 1200×630 social preview (Open Graph / Twitter)
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

GitHub Pages publishes the `master` branch automatically. Push and the site updates within a minute or two.

```bash
git add -A
git commit -m "Describe the change"
git push
```

## Common updates

### Update the resume PDF
The resume source lives in [rachit-tyagi-resume](https://github.com/rachittyagi/rachit-tyagi-resume). After generating a new PDF there:

1. Copy it into `assets/`.
2. If the file name changes (for example, a new version number), update the `href` of the **View Resume (PDF)** button in `index.html` and the entry in `sitemap.xml`.

### Update the "Ask about my experience" box
The box doesn't use an AI model. It matches the visitor's question against a small knowledge base and only ever shows answers written in advance, so it can't invent facts. If nothing matches, it says so and points to email.

To add or change an answer, edit the `KB` array near the bottom of `index.html`:

```js
{
  k: ['kubernetes', 'k8s', 'containers'],   // keywords that trigger this answer
  a: "The answer shown to the visitor.",     // keep it factual, from the resume
  s: 'Skills · Projects'                     // "Source:" label shown under the answer
}
```

Broad words such as `experience` or `design` score lower (see `GENERIC`), so specific keywords win.

### Add a Medium article
Copy an `<a class="article-card">` block in the **Writing** section of `index.html` and change the link, title and one-line description.

### Change the headline or title
The title appears in several places. Keep them in sync:

- `<title>`, `og:title` and `twitter:title` in the `<head>`
- `jobTitle` in the JSON-LD block
- The hidden `<p class="sr-only">` and the `##` line in the hero editor window
- `assets/profile-preview.png` (the social preview image)

After changing the preview image, check how links look with the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/). It also refreshes LinkedIn's cached preview.

## SEO

- Meta description, canonical URL, Open Graph and Twitter card tags
- JSON-LD `Person` + `WebSite` structured data with `sameAs` links to GitHub, LinkedIn and Medium
- `sitemap.xml` and `robots.txt`

When content changes meaningfully, update `<lastmod>` in `sitemap.xml`.

## Links

- Website: https://rachittyagi.github.io/
- LinkedIn: https://www.linkedin.com/in/tyagirachit/
- GitHub: https://github.com/rachittyagi
- Medium: https://medium.com/@rachittyagi

© 2026 Rachit Tyagi
