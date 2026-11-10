# Construction Advisor PT

An envelope designer for the Portuguese building thermal regulation (SCE) — Portuguese edition (v2.0.0), built for architecture students who have to meet a limit before they can argue with it.

**[Open the app](https://ncorticos.github.io/construction-advisor-pt/)**

A site is reduced to two things — a NUTS III region and an altitude — exactly as the regulation itself does, and every reference parameter is corrected from there. The app opens with a mosaic of materials first — natural and industrialized, each with a drawing or photograph of its matter, its thermal character, its traditional provenance, and where in Portugal (mainland regions, Madeira, Azores) it is traditionally rooted — and then works through the envelope element by element (roofs, floors, walls, windows, shading, indoor air quality), reporting the limit in force for each and letting a student build an assembly layer by layer to see where it lands. A Suppliers directory lists verified companies per region (North, Central, South, Madeira, Azores) with the library materials each one offers — text links only, gaps shown openly instead of invented.

Every envelope solution also carries quantities and a cost: the student enters the area and the unit price read from the Gerador de Preços, and the app totals each element and the overall budget — with CSV export — so the thermal choice is always read together with what it costs.

One HTML file plus its photographs (`photos.js` and the `photos/` folder, kept next to it); the material drawings are generated inside the HTML file. No build step, no server, no external calls once loaded — nothing is uploaded, and it runs the same offline as it does here. The assessment is kept in the browser as it is worked on, and offered back on the next visit; **Save** writes the file that travels between computers.

## What it's grounded in

Every figure the app reports names the table or equation it comes from. The regulatory sources are included in full in [`sources/`](sources/) — official Portuguese legislative and technical texts, free to redistribute:

- [`sources/DL_101-D_2020.pdf`](sources/DL_101-D_2020.pdf) — Decreto-Lei n.º 101-D/2020, de 7 de dezembro (the SCE framework)
- [`sources/DL_11_2025.pdf`](sources/DL_11_2025.pdf) — Decreto-Lei n.º 11/2025, de 19 de fevereiro (its most recent amendment)
- [`sources/Portaria_138-I_2021.pdf`](sources/Portaria_138-I_2021.pdf) — Portaria n.º 138-I/2021, de 1 de julho (the numeric limits: maximum U, solar factor, minimum air-change rate)
- [`sources/Manual-SCE-v1.pdf`](sources/Manual-SCE-v1.pdf) — Manual SCE, the technical manual approved by Despacho n.º 6476-H/2021 (the calculation methodology behind every equation the app uses)

The current, official versions of all SCE legislation — consolidated and kept up to date by the regulator — are always at **[sce.pt/legislacao](https://www.sce.pt/legislacao/)**. Check there if a figure in the app ever looks like it might be out of date.

### Drawings and photographs

Each material in the mosaic is shown by a drawing made for this app (v2.56.0) — the matter itself, as a student would recognise it on site: the perforated end of a hollow brick with its thickness, the beam-and-block slab in section, the I-section of a steel beam, the vesicles of basalt, the granules of expanded cork, the beads of EPS, the foil faces of a PUR board. The drawings are generated inside the page from a seeded pattern, so they are identical on every load and need no licence and no network. Two materials — lightweight concrete and lightweight aggregate block — keep a photograph from [Wikimedia Commons](https://commons.wikimedia.org/), with author, licence and file page in the app's detail panel. A photograph listed in `photos.js` takes the place of a material's drawing.

Each photograph is a file, `photos/<material>.jpg`; its author, licence and source page are in `photos.js`, which `index.html` loads first. A photograph should show the raw construction material — the brick, the board, the stone — not a finished building.

**Replacing a drawing with a photograph (v2.54.0, v2.56.0).** On the Materials tab, press **Edit photos** (or open the app with `#edit-photos` at the end of the address). One material at a time: press **Upload JPEG** on its card (JPEG, PNG or WebP), or drag a picture onto the card — a file from a folder, or an image dragged straight from another browser tab or a Google Images result, whose full-size image and source page are taken. Clicking a card also lets you paste or link its photograph — a Wikimedia Commons file page is turned into its image automatically — then fill in author, licence and source page. Each image is cropped from the centre to the mosaic proportion (576 × 402 px JPEG). Replacements live only in the browser that made them until they are reviewed: **Download photo update (.zip)** gives `photos.js` and the changed JPEGs to unpack into this repository, and **Send for review on GitHub** opens a pull request with them (a fine-grained token for this repository, with Contents and Pull requests write). Nothing reaches students until that pull request is merged. A link from a site that forbids embedding is kept as a live link and shows only while online.

**Links.** A monthly GitHub Action (`.github/workflows/link-check.yml`) requests every supplier, Gerador de Preços, source and photo-credit link and opens an issue listing any that are dead.

### Traditional materials (v2.58.0)

Five entries were added at students' request, for the traditional wall and roof: basalt stone masonry with lime mortar, timber roof structure, traditional clay roof tile, lime render and interior lime plaster. They are available in every layer selector and in the mosaic. **These five figures are not ITE 50 values.** Tile and lime are conventional figures of the EN ISO 10456 order; the masonry λ is derived from about 80 % basalt and 20 % lime mortar; the roof structure carries a fixed R = 0,18 (m²·°C)/W for rafters at about 13 % of the plan with air between them, so it does not count as solid timber. They are for teaching and should be replaced by measured or declared figures in real work.

### Glazing library (v2.60.0–v2.61.0)

Besides the 36 coated double units, the glazing library carries:

- **Ordinary clear double glazing** as the Manual SCE prints it: U<sub>g</sub> 2,80 (Tabela 46) and g 0,78 or 0,75 (Tabela 51). The Manual gives no light transmission for it, so TL reads "—" and these are never suggested.
- From Saint-Gobain Glass, *O Essencial do Vidro — Fachadas* (values to EN 410 and EN 673, PLANICLEAR panes): **single 6 mm glass with a solar-control coating** (U<sub>g</sub> 5,2–5,7), **double glazing without a low-e coating** (6|16|4, argon, U<sub>g</sub> 2,6) and **triple glazing** (6|12|4|12|4, argon, low-e on face #5, U<sub>g</sub> 0,7–1,0) — low-e, triple-silver, double-silver, single-silver and temperable solar-control units.

The summer angular correction F<sub>w,v</sub> follows Manual SCE Tabela 50 by the number of panes: its single-glass row, its double-glass row, and 0,90 for triple units ("nos restantes casos"). Entries are appended to the list, never inserted, because a saved assessment stores its glass by position.

### Vapour resistance (v2.62.0)

The Glaser check (EN ISO 13788) on the external-wall page reads μ from **EN ISO 10456**, Tabelas 3 and 4 (UNI EN ISO 10456, Portuguese transcription by AIPE), wherever the table lists the material class: concrete, timber and CLT, AAC, lightweight-aggregate concrete, granite, basalt, limestone, slate (schist), natural stone slab, EPS, XPS, mineral wool, PUR, cork, wood-fibre board, cement, lime and gypsum renders, plasterboard, mortar/screed, bitumen membrane, clay tile, steel. Each such material carries both design values; a layer on the warm side of the wall's thermal midpoint takes the dry-cup value (0/50 % RH), one on the cold side the wet-cup value (50/93 % RH).

Thin sheets come from its **Tabela 5** as s<sub>d</sub> directly and are added from a *Membranes* group in the layer list: polyethylene 0,15 and 0,25 mm (50 and 100 m), polyester film (50 m), PVC sheet (30 m), aluminium foil 0,05 mm (1500 m), bitumen paper (2 m), breathable membrane (0,2 m), emulsion and gloss paint (0,1 and 3 m), vinyl wallpaper (2 m). They have no thermal role (R = 0).

Not in that table, and shown in the panel as *indicative*: hollow clay and concrete units, solid brick, rammed earth, rubble stone masonry, the lightened slab, the timber roof structure, loose gravel ballast and a tiled finish (the table gives ∞ for the tile body, which ignores the joints). A per-layer table under the Glaser chart shows μ, the cup used, s<sub>d</sub> and the source row.

### Other sources cited

A few other works are drawn on for specific figures but are commercially published and copyrighted, so only the citation is given here — the same one the app's own footer shows:

- CYPE Ingenieros. *Gerador de Preços para construção civil — Portugal* ([geradordeprecos.info/obra_nova](https://geradordeprecos.info/obra_nova)). Price bank for the units of work behind the cost panels; consulted online, not reproduced.
- Laboratório Nacional de Engenharia Civil. *ITE 50 — Coeficientes de transmissão térmica de elementos da envolvente dos edifícios.* Thermal conductivity and density of the materials library.
- Gonçalves, H., & Mariz Graça, J. (2004). *Conceitos bioclimáticos para os edifícios em Portugal.* DGGE/IP-3E. The character of each winter–summer zone pair.
- Olgyay, V. (1963). *Design with climate: Bioclimatic approach to architectural regionalism.* Princeton University Press. The shading-mask method.
- Brophy, V., & Lewis, J. O. (2011). *A Green Vitruvius: Principles and practice of sustainable architectural design* (2nd ed.). Earthscan. Glazing strategy.
- European Committee for Standardization. (2011). *Glass in building — Determination of luminous and solar characteristics of glazing* (EN 410:2011).
- European Committee for Standardization. (2012). *Hygrothermal performance of building components and building elements* (EN ISO 13788:2012). The Glaser condensation-risk method.
- International Organization for Standardization. (2017). *Thermal insulation — Building elements — In-situ measurement of thermal resistance and thermal transmittance* (ISO 9869).
- European Committee for Standardization. (2019). *Energy performance of buildings — Ventilation for buildings — Part 1* (EN 16798-1:2019).
- Direção-Geral do Território / Ministério da Coesão Territorial. *Altitude mínima* and *Altitude máxima*, by município (2025), published via [PORDATA](https://www.pordata.pt/municipios), Fundação Francisco Manuel dos Santos. Not an SCE quantity — used only as a plausibility check on the site altitude a student enters.

## Author

Nuno Dinis Cortiços
Lisbon School of Architecture, Universidade de Lisboa

## Legal

This is a teaching instrument. It reproduces tabulated values from the Manual SCE and the Portaria in force so that a student can see where a limit comes from, but it is not a certified calculation engine and it does not produce a pre-certificate. No figure it gives should be entered into a compliance submission without being checked against the published text and verified by a qualified expert of the SCE. Budget figures are teaching estimates from unit prices the student reads in the Gerador de Preços — they do not replace a contractor's quotation.
