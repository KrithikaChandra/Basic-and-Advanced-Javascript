"""
Generate day-1 and day-4..day-15 html/*.html from shared layout + js/day N sources.
(Days 2–3 use hand-authored day-N/html; this script still syncs js/day N → day-N/js.)
Copies scripts into day-N/js (lesson.js from exercise.js or lesson.js).
Run: python tools/generate_day_html.py
"""
from __future__ import annotations

import html
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
JS_OLD = ROOT / "js"

# (day, "Day N — Topic") — topic part after colon in h1 / title
CURRICULUM: list[tuple[int, str]] = [
    (1, "Day 1 — Basics"),
    (2, "Day 2 — Variables"),
    (3, "Day 3 — Operators"),
    (4, "Day 4 — Control Flow"),
    (5, "Day 5 — Loops"),
    (6, "Day 6 — Functions"),
    (7, "Day 7 — Arrays"),
    (8, "Day 8 — Objects"),
    (9, "Day 9 — Modern Syntax"),
    (10, "Day 10 — DOM Basics"),
    (11, "Day 11 — Events"),
    (12, "Day 12 — Error Handling"),
    (13, "Day 13 — Hoisting & TDZ"),
    (14, "Day 14 — Practice"),
    (15, "Day 15 — Practice"),
]

SUMMARY_BY_DAY = {n: s for n, s in CURRICULUM}

# Days with hand-authored day-N/html/*.html — still sync js/day N → day-N/js, but do not overwrite HTML.
SKIP_GENERATED_HTML_DAYS = frozenset({2, 3})


def topic_short(summary: str) -> str:
    """'Day 9 — Modern Syntax' -> 'Modern Syntax'"""
    if "—" in summary:
        return summary.split("—", 1)[1].strip()
    return summary


def title_bar(n: int, summary: str) -> str:
    rest = topic_short(summary)
    return f"Day {n} {rest}"


def old_day_dir(n: int) -> Path:
    return JS_OLD / f"day {n}"


def sync_js(n: int) -> None:
    src = old_day_dir(n)
    dst = ROOT / f"day-{n}" / "js"
    dst.mkdir(parents=True, exist_ok=True)
    if not src.is_dir():
        return
    ex = src / "exercise.js"
    le = src / "lesson.js"
    ho = src / "hands-on.js"
    hw = src / "hw.js"
    if ex.is_file():
        shutil.copy2(ex, dst / "lesson.js")
    elif le.is_file():
        shutil.copy2(le, dst / "lesson.js")
    if ho.is_file():
        shutil.copy2(ho, dst / "hands-on.js")
    if hw.is_file():
        shutil.copy2(hw, dst / "homework.js")
    # Legacy layout (e.g. Gokul): homework lived in day-N/js/hw.js
    if not (dst / "homework.js").is_file() and (dst / "hw.js").is_file():
        shutil.copy2(dst / "hw.js", dst / "homework.js")


def render_aside(current_day: int, current_page: str) -> str:
    """current_page: lesson | hands-on | homework"""
    blocks: list[str] = []
    blocks.append('                <aside class="site-outline">')
    blocks.append("            <h2>Curriculum</h2>")
    blocks.append("            <nav>")
    blocks.append("                <ul>")
    blocks.append(
        '                    <li><a href="../../index.html">Overview</a></li>'
    )
    for n, summary in CURRICULUM:
        open_attr = " open" if n == current_day else ""
        blocks.append(f'                    <details{open_attr}>')
        blocks.append(f"                        <summary>{html.escape(summary)}</summary>")
        blocks.append("                        <ul>")
        for slug, label in (
            ("lesson", "Lesson"),
            ("hands-on", "Hands-on"),
            ("homework", "Homework"),
        ):
            is_here = n == current_day and slug == current_page
            cur = ' aria-current="page"' if is_here else ""
            if n == current_day:
                href = f"{slug}.html"
            else:
                href = f"../../day-{n}/html/{slug}.html"
            blocks.append(
                f'                            <li><a href="{href}"{cur}>{label}</a></li>'
            )
        blocks.append("                        </ul>")
        blocks.append("                    </details>")
    blocks.append("                </ul>")
    blocks.append("            </nav>")
    blocks.append("        </aside>")
    return "\n".join(blocks)


def read_js_text(n: int, filename: str) -> str | None:
    p = ROOT / f"day-{n}" / "js" / filename
    if not p.is_file():
        return None
    return p.read_text(encoding="utf-8", errors="replace")


def build_page(
    n: int,
    page: str,
    *,
    script_name: str,
    subtitle: str,
    article_heading: str,
) -> str:
    summary = SUMMARY_BY_DAY[n]
    short = topic_short(summary)
    title = f"{title_bar(n, summary)} | JavaScript Curriculum"
    h1 = f"Day {n}: {short}"
    body_js = read_js_text(n, script_name)
    aside = render_aside(n, page)

    if body_js is not None:
        code_block = f"<pre><code>{html.escape(body_js)}</code></pre>"
        script_tag = f'    <script src="../js/{script_name}"></script>'
        intro = (
            "<p>Open <strong>DevTools (F12) → Console</strong> to see output from this script.</p>\n                "
        )
    else:
        code_block = (
            f"<p><em>No <code>day-{n}/js/{script_name}</code> yet. "
            f"Add <code>exercise.js</code> / <code>hands-on.js</code> / <code>hw.js</code> under "
            f"<code>js/day {n}/</code> and re-run <code>python tools/generate_day_html.py</code>.</em></p>"
        )
        script_tag = ""
        intro = ""

    main_article = f"""        <main class="site-content">
            <article>
                <h2>{html.escape(article_heading)}</h2>
                {intro}<section>
                    <h3>Source ({html.escape(script_name)})</h3>
                    {code_block}
                </section>
            </article>
        </main>
"""

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{html.escape(title)}</title>
    <link rel="stylesheet" href="../../shared/css/style.css">
</head>
<body>
    <div class="page-shell">
        <header class="site-header">
            <h1>{html.escape(h1)}</h1>
            <p class="subtitle">{html.escape(subtitle)}</p>
        </header>
{main_article}

{aside}
    </div>
{script_tag}
</body>
</html>
"""


def main() -> None:
    for n, _ in CURRICULUM:
        if n < 1 or n > 15:
            continue
        sync_js(n)
        if n in SKIP_GENERATED_HTML_DAYS:
            continue
        html_dir = ROOT / f"day-{n}" / "html"
        html_dir.mkdir(parents=True, exist_ok=True)

        pages = [
            (
                "lesson.html",
                "lesson",
                "lesson.js",
                "Lesson: Topics and Demo Code",
                "Lesson script",
            ),
            (
                "hands-on.html",
                "hands-on",
                "hands-on.js",
                "Hands-on: In-class Tasks",
                "Hands-on script",
            ),
            (
                "homework.html",
                "homework",
                "homework.js",
                "Homework: Take-home Practice",
                "Homework script",
            ),
        ]
        for fname, page_key, js_name, subtitle, heading in pages:
            content = build_page(
                n,
                page_key,
                script_name=js_name,
                subtitle=subtitle,
                article_heading=heading,
            )
            (html_dir / fname).write_text(content, encoding="utf-8")

    print(
        "Synced day-N/js from js/day N/ for all curriculum days; "
        "generated html for days except "
        + ", ".join(f"day-{d}" for d in sorted(SKIP_GENERATED_HTML_DAYS))
        + " (hand-authored)."
    )


if __name__ == "__main__":
    main()
