# 2nd Swing · AI Toolkit & ROI Proposal

A working prototype + roadmap for AI tools that drive measurable ROI across a high-volume used-golf-club retail business.

> **What this is:** an independent project built to demonstrate, not just describe, how modern AI agents can speed up the parts of 2nd Swing's operation that scale with inventory and traffic. Every prototype here runs in a browser with zero setup. Built with AI coding tools — the exact "ship fast with agents" workflow the AI Engineer role calls for.
>
> **What this is not:** a copy of 2ndswing.com. No proprietary content, code, or data is included. All examples use public information and illustrative numbers.

---

## The thesis

A golf reseller makes money two ways: **moving inventory faster** (every club sitting unlisted is dead cash) and **converting more browsers into buyers**. Both are bottlenecked by manual, repetitive work that AI is unusually good at. This toolkit targets the five highest-leverage spots.

## The tools

| # | Tool | What it does | Primary ROI lever | Status |
|---|------|--------------|-------------------|--------|
| 1 | **Trade-In Listing Agent** | Turns a messy customer trade-in (text/photo) into a priced, graded, ready-to-post listing | Labor cost ↓ / listing speed ↑ | ✅ Prototype: `listing-agent.html` |
| 2 | **AI Club-Fit Assistant** | On-site chatbot that recommends the right used clubs to shoppers | Conversion rate ↑ | ✅ Prototype: `club-fit-assistant.html` |
| 3 | **Photo Condition Grader** | Vision model grades club wear from photos against the 10-point scale | Grading consistency / speed | 🗺️ Spec'd in roadmap |
| 4 | **Dynamic Pricing Engine** | Reprices inventory against live market signals | Margin / sell-through | ✅ Prototype: `pricing-engine.html` |
| 5 | **Bulk SEO Description Writer** | Generates unique, search-optimized copy for every SKU | Organic traffic ↑ | 🗺️ Spec'd in roadmap |

See **[ROI-analysis.md](ROI-analysis.md)** for the math behind each.

## Try the prototypes (no install)

Open either file in any web browser — just double-click:

- `listing-agent.html` — paste a sample trade-in, click **Run the agent**, watch it extract → grade → price → write the listing.
- `club-fit-assistant.html` — answer a few questions and get matched to clubs, the way an on-site assistant would convert a browser.
- `pricing-engine.html` — reprice live inventory against market signals; recover margin on underpriced clubs and flag stale stock to mark down.

## How the prototypes map to production

Each prototype runs on built-in logic so it works instantly and offline. The production versions keep the same pipeline but swap each step for:

- a **live LLM** (Claude / GPT) for reasoning and copywriting,
- a **vision model** for reading club photos,
- **tool/API calls** into inventory, pricing, and CMS systems.

Same architecture, smarter brain — and exactly the "multi-step, tool-calling workflow" pattern the engineering role describes.

## Repo structure

```
james-swing/
├── README.md                  ← you are here
├── index.html                 ← "James Swing" demo storefront (homepage)
├── listing-agent.html         ← Tool #1 prototype
├── club-fit-assistant.html    ← Tool #2 prototype
├── pricing-engine.html        ← Tool #4 prototype
├── ROI-analysis.md            ← the business case + assumptions
├── roadmap.md                 ← specs for tools #3–5
├── github-setup.md            ← how to publish this repo
├── LICENSE
└── .gitignore
```

## About

Built by **Jim** as a demonstration of applied-AI product thinking for 2nd Swing Golf. Open to a conversation any time.
