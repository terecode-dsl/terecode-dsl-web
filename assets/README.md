# Terecode — Brand Assets

**Cross-platform UI compiler**

## Files

```
assets/
├── README.md
├── svg/                         Source assets
│   ├── terecode-master.svg      Full brand overview
│   ├── lockup/
│   ├── symbol/
│   ├── wordmark/
│   └── favicon/
└── png/                         4× rasterized assets, mirroring svg/
    ├── terecode-master.png
    ├── lockup/
    ├── symbol/
    ├── wordmark/
    └── favicon/
```

## Colors

| Name       | Hex       | Role                  |
|------------|-----------|-----------------------|
| Deep Ink   | `#0B1220` | Page background       |
| Dev Blue   | `#2563EB` | Primary accent        |
| Indigo     | `#4F46E5` | Transformation        |
| Teal       | `#14B8A6` | Interoperability      |
| Slate      | `#64748B` | Muted text            |
| Soft Gray  | `#E2E8F0` | Surfaces              |
| Off-white  | `#F8FAFC` | Body text             |

## Typography

- **Display / Wordmark:** JetBrains Mono, weight 600–700
- **Body:** Inter, weight 400–500
- **Code / Labels:** JetBrains Mono, weight 400

SVG files embed a Google Fonts `@import` for JetBrains Mono and Inter.
Convert text to outlines for print or offline environments.

## Usage

The primary mark is the **modular T**: five 18×18px grid modules —
three across the crossbar (source definition) and two descending
as the stem (compiled output). Use `symbol-color.svg` on dark backgrounds.

Do not stretch, recolor, or add effects to the mark.

---

*Terecode — Define once. Compile everywhere.*
