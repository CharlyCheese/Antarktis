# Antarktis – eine Reise ins Eis

Eine deutschsprachige, responsive Website über Landschaften und Tiere der Antarktis. Die Seite läuft vollständig offline und verwendet lokale Bilder, eine externe CSS-Datei und eine externe JavaScript-Datei.

## Lokal öffnen

1. Den vollständigen Projektordner auf dem Computer speichern.
2. `index.html` per Doppelklick im Browser öffnen.
3. Über die Navigation zu Landschaften, Tierwelt und Wissen wechseln.

Es sind keine Installation, Internetverbindung, Pakete oder Build-Schritte nötig. Die Ordnerstruktur muss erhalten bleiben, damit Bilder, CSS und JavaScript geladen werden. Ein lokaler Entwicklungsserver ist optional.

## Projektstruktur

```text
Antarktis/
├── index.html                  # Inhalte und semantische Seitenstruktur
├── styles.css                  # Gesamtes Layout, Farben und responsive Regeln
├── scripts.js                  # Mobiles Menü, Tierfilter, aktive Navigation
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

- Texte, Karten, Verweise und Alternativtexte in `index.html` bearbeiten.
- Farben, Abstände, Typografie und Bildschirmgrößen in `styles.css` anpassen. Gemeinsame Gestaltungswerte liegen in CSS Custom Properties.
- Interaktionen ausschließlich in `scripts.js` pflegen.
- Neue Bilder im passenden Bildordner ablegen und ihre Quelle in `docs/BILDQUELLEN.md` ergänzen.

Ausführliche Hinweise sowie die manuelle Prüfliste stehen in [docs/PROJEKT.md](docs/PROJEKT.md). Tatsächlich durchgeführte Prüfungen und offene Punkte werden in [docs/REVIEW.md](docs/REVIEW.md) dokumentiert.

## Mit GitHub Desktop veröffentlichen

Das lokale Git-Repository ist im Projektordner auf dem Branch `main` eingerichtet. Die Arbeit ist in getrennten Commits für Grundlagen/Bilder, Website und Dokumentation gespeichert. Ein GitHub-Remote ist nicht vorgegeben; die Erstellung der Website veröffentlicht oder lädt das Projekt nicht hoch.

1. GitHub Desktop öffnen und **File → Add local repository…** auswählen.
2. Diesen Projektordner auswählen und **Add repository** anklicken.
3. Unter **Changes** die Änderungen und die `.gitignore` prüfen. Bilddateien, HTML, CSS, JavaScript und Dokumentation gehören zum Projekt.
4. Falls noch Änderungen vorliegen, eine aussagekräftige Zusammenfassung eingeben und über **Commit to …** lokal speichern.
5. Für die erste Veröffentlichung **Publish repository** wählen, Repository-Namen und Sichtbarkeit prüfen und die Veröffentlichung ausführen.
6. Spätere Änderungen zuerst committen und anschließend mit **Push origin** übertragen.

Die Veröffentlichung setzt eine Internetverbindung und ein angemeldetes GitHub-Konto voraus. Das Öffnen und Nutzen der Website bleibt davon unabhängig. Vor einem Upload die Bildnachweise lesen; die Nutzung der Fotos richtet sich nach der jeweils dokumentierten Lizenz.

Temporäre Dateien, lokale Einstellungen, Zugangsdaten und erzeugte Ausgaben gehören nicht ins Repository. Die `.gitignore` deckt diese Kategorien ab. Neue sensible Dateien müssen vor dem ersten Commit ausgeschlossen werden; `.gitignore` entfernt keine bereits versionierten Dateien.
