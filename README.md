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

## Project resources

The `.quick-links` navigation links to the [paper PDF](https://arxiv.org/pdf/2609.18504), [arXiv abstract](https://arxiv.org/abs/2609.18504), and [code repository](https://github.com/TheVaticanCameos/InterMASH). The Dataset button has been removed. Author names are plain text until homepage URLs are available. No placeholder `href="#"` links are used.

Conference information appears in the hero and HTML metadata. The BibTeX block currently cites the arXiv preprint (2609.18504), pending formal conference publication. Review the publication details when the proceedings become available. The `citation_pdf_url` metadata points to the public arXiv PDF.

## GitHub Pages

Serve the repository root through GitHub Pages. Figure assets use relative paths. The original Google Fonts stylesheet supplies Space Grotesk and Source Serif 4, with local fallback fonts when unavailable. The paper PDF is hosted on arXiv and linked from the website.

## Browser compatibility and cached assets

The HTML includes a small image-size fallback so that figures remain within their containers while the external stylesheet is loading or if an older stylesheet is returned. The full stylesheet still controls the original colors, card layout, and result-thumbnail sizing.

CSS and JavaScript URLs use content-based version query parameters. After modifying either asset, run this before committing:

```sh
python3 tools/update_asset_versions.py
```

This makes the updated HTML request the corresponding asset version instead of reusing a cached older file. GitHub Pages and browsers can also briefly cache the HTML itself; a hard refresh retrieves the latest page after deployment.
