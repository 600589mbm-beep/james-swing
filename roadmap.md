# Roadmap — Tools #3–5 (specs)

These are spec'd, not yet built. Each follows the same pattern as the working demos: a multi-step agent that takes messy input, calls tools, and returns a structured result a human approves.

## Tool #3 — Photo Condition Grader
**Input:** customer/intake photos of a club (face, sole, crown/topline, grip).
**Pipeline:** vision model detects wear features → maps to the 10-point scale (Brand New → Poor) → returns a proposed grade with the evidence ("sky marks on crown → caps at 7") → human confirms.
**Build notes:** start with a vision LLM and few-shot examples per club type; later fine-tune on labeled intake photos. Keep a human in the loop for grade approval.

## Tool #4 — Dynamic Pricing Engine  ✅ prototype built (`pricing-engine.html`)
**Input:** SKU, condition, current inventory age, competitor/market signals.
**Pipeline:** pull comparable sold prices → factor condition + age + demand → propose a price band → flag clubs to mark down before they go stale.
**Build notes:** rules engine first (transparent, easy to trust), then layer ML once there's sell-through data. Always show the "why" behind a price.

## Tool #5 — Bulk SEO Description Writer
**Input:** structured product attributes (already produced by Tool #1).
**Pipeline:** generate unique, keyword-aware copy per SKU → run a duplicate-content/quality check → queue for review → publish.
**Build notes:** template the structure, let the LLM fill the voice; batch-process the catalog overnight.

## Sequencing
1. **Tool #1 (built)** — highest, fastest payback; everything else reuses its structured output.
2. **Tool #3** — removes the intake bottleneck, compounds #1.
3. **Tool #5** — cheap to run, steady organic upside, feeds off #1's data.
4. **Tool #2 (built)** — conversion lever; bigger lift but more measurement work.
5. **Tool #4** — highest trust bar; deploy once data and buy-in exist.
