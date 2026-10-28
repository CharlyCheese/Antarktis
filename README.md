# Antarktis – eine Reise ins Eis

Eine deutschsprachige, responsive Website über Landschaften und Tiere der Antarktis. Die Seite läuft vollständig offline und verwendet lokale Bilder, eine externe CSS-Datei und eine externe JavaScript-Datei.

## Lokal öffnen

1. Den vollständigen Projektordner auf dem Computer speichern.
2. `opening.html` per Doppelklick im Browser öffnen und über „Das Eis brechen“ einsteigen. `index.html` öffnet die Inhalte auch weiterhin direkt.
3. Über die Navigation zu Landschaften, Tierwelt und Wissen wechseln.
4. Eine Tierkarte öffnen, um auf `tierwelt.html` mehr über Pinguine, Robben oder Krill zu erfahren.

Es sind keine Installation, Internetverbindung, Pakete oder Build-Schritte nötig. Die Ordnerstruktur muss erhalten bleiben, damit Bilder, CSS und JavaScript geladen werden. Ein lokaler Entwicklungsserver ist optional.

Der optionale Einstieg öffnet die Eisdecke in einer kurzen Animation. Nach dem Eintritt wird er bei erneutem Aufruf im selben Browser-Tab übersprungen, sofern Sitzungsspeicher verfügbar ist. Ohne JavaScript führt der Link direkt zur Startseite; bei reduzierter Bewegung erscheint eine kurze Blende.

## Projektstruktur

```text
Antarktis/
├── opening.html                # Optionaler Einstieg mit Eisbruch-Animation
├── index.html                  # Inhalte und semantische Seitenstruktur
├── tierwelt.html               # Tierporträts und vereinfachtes Nahrungsnetz
├── styles.css                  # Gesamtes Layout, Farben und responsive Regeln
├── scripts.js                  # Einstieg, mobiles Menü, Tierfilter, Navigation
├── frontend/
│   ├── favicon.svg             # Lokales Seitensymbol
│   ├── bilder_landschaft/      # Lokale Landschaftsfotos
│   └── bilder_tiere/          # Lokale Tierfotos
├── backend/                   # Für spätere Erweiterungen reserviert
├── database/                  # Für spätere Erweiterungen reserviert
├── docs/
│   ├── PROJEKT.md              # Architektur, Wartung, Ablauf und Abnahme
│   ├── BILDQUELLEN.md          # Bildnachweise und Lizenzangaben
│   └── REVIEW.md               # Unabhängiger Review und Prüfungsergebnisse
├── .gitattributes             # Einheitliche Text- und Bildbehandlung in Git
├── .gitignore
└── README.md
```

`backend` und `database` werden von dieser statischen Website nicht benötigt. Leere Ordner werden von Git grundsätzlich nicht gespeichert, sofern sie keine Platzhalterdatei enthalten.

## Inhalte und Gestaltung ändern

- Texte, Karten, Verweise und Alternativtexte in `opening.html`, `index.html` und `tierwelt.html` bearbeiten. Alle Seiten nutzen dieselben CSS- und JavaScript-Dateien.
- Tierkarten jeweils über einen gemeinsamen Bild- und Textlink mit dem passenden Abschnitt der Unterseite verbinden: `#pinguine`, `#robben` oder `#krill`.
- Farben, Abstände, Typografie und Bildschirmgrößen in `styles.css` anpassen. Gemeinsame Gestaltungswerte liegen in CSS Custom Properties.
- Interaktionen ausschließlich in `scripts.js` pflegen.
- Die Eistextur der Buttons nutzt dasselbe lokale Bild wie der Einstieg. Farben und Lichtreflex stehen in `styles.css`, die drei wiederverwendbaren Randkonturen in `scripts.js`.
- Hintergründe und Karten verwenden die gemeinsame Kristallgestaltung in `styles.css`. `--ice-texture`, `--frost-panel` und `--frost-shadow` steuern Material und Tiefe; helle beziehungsweise dunkle Farbschichten sichern ruhige Textflächen.
- Neue Bilder im passenden Bildordner ablegen und ihre Quelle in `docs/BILDQUELLEN.md` ergänzen.

Ausführliche Hinweise sowie die manuelle Prüfliste stehen in [docs/PROJEKT.md](docs/PROJEKT.md). Tatsächlich durchgeführte Prüfungen und offene Punkte werden in [docs/REVIEW.md](docs/REVIEW.md) dokumentiert.
