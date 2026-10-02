# Construction Advisor PT

An envelope designer for the Portuguese building thermal regulation (SCE) — Portuguese edition (v2.0.0), built for architecture students who have to meet a limit before they can argue with it.

**[Open the app](https://ncorticos.github.io/construction-advisor-pt/)**

A site is reduced to two things — a NUTS III region and an altitude — exactly as the regulation itself does, and every reference parameter is corrected from there. The app opens with a mosaic of materials first — natural and industrialized, each with a photograph, its thermal character, its traditional provenance, and where in Portugal (mainland regions, Madeira, Azores) it is traditionally rooted — and then works through the envelope element by element (roofs, floors, walls, windows, shading, indoor air quality), reporting the limit in force for each and letting a student build an assembly layer by layer to see where it lands. A Suppliers directory lists verified companies per region (North, Central, South, Madeira, Azores) with the library materials each one offers — text links only, gaps shown openly instead of invented.

Every envelope solution also carries quantities and a cost: the student enters the area and the unit price read from the Gerador de Preços, and the app totals each element and the overall budget — with CSV export — so the thermal choice is always read together with what it costs.

Single self-contained HTML file. No build step, no server, no external calls once loaded — nothing is uploaded, and it runs the same offline as it does here.

## What it's grounded in

Every figure the app reports names the table or equation it comes from. The regulatory sources are included in full in [`sources/`](sources/) — official Portuguese legislative and technical texts, free to redistribute:

- [`sources/DL_101-D_2020.pdf`](sources/DL_101-D_2020.pdf) — Decreto-Lei n.º 101-D/2020, de 7 de dezembro (the SCE framework)
- [`sources/DL_11_2025.pdf`](sources/DL_11_2025.pdf) — Decreto-Lei n.º 11/2025, de 19 de fevereiro (its most recent amendment)
- [`sources/Portaria_138-I_2021.pdf`](sources/Portaria_138-I_2021.pdf) — Portaria n.º 138-I/2021, de 1 de julho (the numeric limits: maximum U, solar factor, minimum air-change rate)
- [`sources/Manual-SCE-v1.pdf`](sources/Manual-SCE-v1.pdf) — Manual SCE, the technical manual approved by Despacho n.º 6476-H/2021 (the calculation methodology behind every equation the app uses)

The current, official versions of all SCE legislation — consolidated and kept up to date by the regulator — are always at **[sce.pt/legislacao](https://www.sce.pt/legislacao/)**. Check there if a figure in the app ever looks like it might be out of date.

### Photographs

The thirty-three material photographs are embedded from [Wikimedia Commons](https://commons.wikimedia.org/), each under its own free licence (CC BY, CC BY-SA, CC0 or public domain). Author, licence and file page ride with every material inside the app's detail panel — the credits live where the images are seen.

**Replacing a photograph (v2.8.0).** On the Materials tab, press **Edit photos** (or open the app with `#edit-photos` at the end of the address). One material at a time: press **Upload JPEG** on its card (JPEG, PNG or WebP), or drag a picture onto the card — a file from a folder, or an image dragged straight from another browser tab or a Google Images result. Clicking a card also lets you paste or link its photograph — a Wikimedia Commons file page is turned into its image automatically — then fill in author, licence and source page. Each image is cropped from the centre to the mosaic proportion (576 × 402 px JPEG) and embedded, so the app stays offline. Replacements live only in the browser that made them until **Download app with these photos** produces a new `index.html` with them baked in; upload that file to this repository to publish them to students. A link from a site that forbids embedding is kept as a live link and shows only while online.

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
