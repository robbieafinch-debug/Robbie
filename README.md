# Pacific Voice — Prototype

A prototype landing page and submission form for the Pacific Legal Network portal concept. Built as a static site so it can be hosted free on GitHub Pages with no backend.

## What this is

- **index.html** — the public landing page explaining the portal and its value proposition
- **submit.html** — a multi-step submission form
- **styles.css** — the stylesheet (PLN brand palette, mobile-first)
- **form.js** — form validation and success-state handling

The form is currently **prototype-only**: nothing is actually submitted anywhere. On submit, the form shows a confirmation page with a fake reference number. This is intentional for the Omni Bridgeway demo.

## Preview locally

Open `index.html` in any browser. No build step. No server needed.

## Publish to GitHub Pages

1. Create a new public repository on GitHub (e.g. `pacific-voice-prototype`)
1. Upload all four files from this folder to the repo root
1. In the repo, go to **Settings → Pages**
1. Under “Build and deployment”, set:
- Source: **Deploy from a branch**
- Branch: **main** / root (`/`)
1. Click **Save**
1. Wait 1–2 minutes. Your site will be live at:
   `https://[your-github-username].github.io/pacific-voice-prototype/`

That’s it. No further configuration needed.

## Custom domain (optional)

If PLN wants a custom URL like `pacificvoice.pln.com.au` or `voice.pln.com.au`:

1. In GitHub Pages settings, enter your custom domain
1. Update your DNS records to point to GitHub Pages (GitHub provides the IP addresses)
1. Wait for DNS propagation (up to 24 hours)
1. Enable HTTPS in the Pages settings

## Wiring up real submissions later

When the prototype graduates to actually capturing submissions, the simplest options are:

- **Formspree** (formspree.io): Free for low volumes. Add `action="https://formspree.io/f/your-form-id"` to the `<form>` tag and submissions go to email.
- **Netlify Forms**: If you switch hosting to Netlify, forms work automatically with `data-netlify="true"` on the form tag.
- **Custom backend**: For real production, build a proper backend (Node + database) with proper authentication, encryption at rest, and access controls. This would be a Phase 2 piece of work.

## What’s intentionally not in the prototype

- Multi-language support (English only — flagged in the footer as coming)
- Real file upload (the upload box is a visual placeholder)
- User accounts or login
- Case tracking after submission
- Real lawyer triage interface
- Analytics

These are all things to think about in Phase 2.

## Brand and design notes

- **Palette**: PLN’s teal (`#5BA3C7` and `#2E7A92`) with warm off-white background
- **Typography**: Iowan Old Style / Garamond fallback for display (echoes PLN’s existing serif wordmark), system sans-serif for body
- **Mobile-first**: tested at 375px, 768px, and 1280px breakpoints
- **Accessibility**: semantic HTML, proper labels, focus states, keyboard-navigable
- **No external dependencies**: no CDN fonts, no analytics, no third-party scripts (deliberate, for low-bandwidth Pacific reality)