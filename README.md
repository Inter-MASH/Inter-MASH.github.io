# InterMASH project page

Static GitHub Pages website for **InterMASH: A Unified Geometric Representation for Grasp Synthesis**, SIGGRAPH Asia 2026 Conference Papers.

## Preview

The original blue gradient, fonts, centered hero, 980px content width, and four rounded section cards (Teaser, Method, Results, BibTeX) are preserved. Added content and controls follow the same palette.

No build step or dependencies are required. From this directory, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. The page can also be opened directly as `index.html`; clipboard access may be restricted under `file://`, in which case the citation is selected for manual copying.

## Files and content

- `index.html`: author information, paper summary, method, results, and BibTeX.
- `styles.css`: responsive layout, typography, and accessibility styles.
- `script.js`: figure enlargement and citation copying, with plain HTML fallbacks.
- `assets/images/`: figures cropped from the supplied `gongzhonghao/mypaper.pdf` and exported to WebP. No generated or illustrative replacement research results are used.

The conference information, DOI, authors, and values in Tables 1–3 follow the supplied PDF. The overview and method text are summaries. Images correspond to paper Figures 1 (teaser), 2 (method), 3 (representation), 7 (comparison), 8 (grasps), and 9 (cross-hand). Figure links open an enlarged view and remain usable without JavaScript.

## Add missing resources

The paper, arXiv, code, and dataset resources are disabled buttons in `.quick-links`. When a URL is available, replace its button with an anchor containing the resource name and URL. Author names are plain text until homepage URLs are available. No placeholder `href="#"` links are used.

Publication metadata appears in the hero, HTML metadata, BibTeX, and footer. Update these together if the final publication details change. When the paper becomes publicly available, add its URL to the Paper resource and the `citation_pdf_url` metadata.

## GitHub Pages

Serve the repository root through GitHub Pages. Figure assets use relative paths. The original Google Fonts stylesheet supplies Space Grotesk and Source Serif 4, with local fallback fonts when unavailable. The paper PDF is not included in the website while its public link is pending.

## Browser compatibility and cached assets

The HTML includes a small image-size fallback so that figures remain within their containers while the external stylesheet is loading or if an older stylesheet is returned. The full stylesheet still controls the original colors, card layout, and result-thumbnail sizing.

CSS and JavaScript URLs use content-based version query parameters. After modifying either asset, run this before committing:

```sh
python3 tools/update_asset_versions.py
```

This makes the updated HTML request the corresponding asset version instead of reusing a cached older file. GitHub Pages and browsers can also briefly cache the HTML itself; a hard refresh retrieves the latest page after deployment.
