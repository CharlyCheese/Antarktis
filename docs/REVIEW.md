# Unabhängiger Review

Prüfdatum: 19. Oktober 2026. Rolle: unabhängiger Review-Agent, ohne Beteiligung an der Implementierung. Änderungen durch diesen Agenten beschränken sich auf diesen Bericht.

## Ergebnis

Im geprüften Quellstand wurden keine kritischen oder wesentlichen Funktionsfehler gefunden. Die geforderten Bestandteile sind vorhanden: Landingpage, Navigation, externe CSS- und JavaScript-Dateien, lokale thematisch getrennte Bilder, Kommentare, Projektdokumentation und Git-Konfiguration. Der direkte Offline-Betrieb ist anhand der Abhängigkeiten plausibel; dieser unabhängige Review umfasst keinen Browserlauf.

## Befunde

Schweregrade: P1 = schwerwiegender Fehler, P2 = wesentliche Einschränkung, P3 = kleine Verbesserung.

| ID | Grad | Befund im zuerst geprüften Stand | Empfehlung / Status |
| --- | --- | --- | --- |
| R1 | P3 | Der Alternativtext des Robbenbilds beschreibt eine Robbe „auf dem antarktischen Eis“. Die lokal betrachtete Aufnahme zeigt ihren Kopf im Wasser eines Atemlochs. | Präzisieren zu „Weddellrobbe taucht an einem Atemloch im Eis auf“. Dem Hauptagenten gemeldet. |
| R2 | P3 | Der Hero-Alternativtext nennt Berge und Wasser, lässt jedoch den dominanten blauen Eisberg unerwähnt. | Hauptmotiv im Alternativtext nennen. Dem Hauptagenten gemeldet. |
| R3 | P3 | Mehrere größere HTML-Abschnitte und Karten stehen jeweils auf einer langen Zeile. Die Struktur ist funktional, Änderungen und spätere Diffs sind dadurch schwerer zu lesen. | Semantische Blöcke einrücken und auf mehrere Zeilen aufteilen. Dem Hauptagenten gemeldet. |

Alle drei Hinweise wurden durch den Hauptagenten behoben und in der unten dokumentierten Nachprüfung bestätigt.

## Tatsächlich durchgeführte Prüfungen

- `index.html`, `styles.css`, `scripts.js`, `.gitignore`, `.gitattributes`, `README.md`, `docs/PROJEKT.md`, `docs/BILDQUELLEN.md` und `frontend/favicon.svg` vollständig gelesen.
- `node --check scripts.js`: ohne Syntaxfehler abgeschlossen.
- Lokale Referenzen und Anker durch ein einmalig ausgeführtes Node-Skript geprüft: 25 `src`-/`href`-Referenzen, keine fehlenden lokalen Dateien oder Ankerziele; 14 IDs ohne Duplikate. Externe Quellenlinks waren von der lokalen Existenzprüfung ausgenommen.
- Keine eingebetteten CSS-Blöcke, `style`-Attribute oder Inline-Skriptinhalte gefunden. Keine externen URLs in Laufzeitressourcen wie Bildern, Stylesheets oder Skripten. Es gibt keine Fetch-Aufrufe, Modulimporte, CDNs oder Webfonts. Die externe Quellenliste wird erst nach bewusster Navigation benötigt.
- Alle vier JPEG-Dateien mit `System.Drawing` geöffnet und Dimensionen gelesen: Hero 2400 × 1350, Landschaft 1800 × 1200, Pinguine 3735 × 2801, Robbe 1816 × 1196. Kein Decoderfehler. Hero und Robbe zusätzlich als lokale Bilder visuell betrachtet.
- JavaScript-Logik gelesen: Menüstatus und Escape-Verhalten, Schließen bei Navigation/Außenklick, Rücksetzen am Breakpoint, Filter über `data-category`, `aria-pressed`, Live-Status und `hidden` sowie Aktualisierung des aktiven Navigationsabschnitts.
- Progressive Enhancement anhand von HTML und CSS nachvollzogen: Menü und Filter werden erst durch JavaScript aktiviert; alle Tierkarten bleiben ohne JavaScript sichtbar; Wissensfragen verwenden native `details`/`summary`.
- Semantik, deutsche Dokumentsprache, Überschriftenhierarchie, Alternativtexte, Skip-Link, Fokusregeln, reduzierte Bewegung, Screenreader-Status und responsive Regeln bei 1000/760 px auf Codeebene geprüft.
- Repräsentative Farbpaare rechnerisch geprüft: Fließtext `#526b75` auf `#fafcfb` 5,48:1; Akzent `#26665f` auf `#fafcfb` 6,47:1; FAQ-Text `#c0d0d5` auf `#102f3d` 8,84:1; Sekundärtext `#526b75` auf `#e0ecea` 4,67:1; Fokusfarbe `#33867b` auf `#102f3d` 3,23:1. Dies ist keine vollständige Kontrastprüfung über Fotos und alle Zustände.
- `git status --short`: lokales Repository vorhanden; zum Prüfzeitpunkt Projektdateien noch unversioniert. Der initiale Commit wird separat vom Hauptagenten behandelt.
- `git check-ignore` mit Beispielen ausgeführt: `.env`, `.env.local`, `.aws/credentials`, `node_modules/example.js` und `.preview/test.png` ausgeschlossen; `index.html`, Pinguinbild und Bildquellendokument nicht ausgeschlossen. `.gitattributes` unterscheidet Textdateien und binäre Bilddateien sinnvoll.
- README und Projektdokumentation mit tatsächlichen Pfaden, Startweise und Zuständigkeiten abgeglichen. GitHub Desktop wird als Veröffentlichungsweg beschrieben, ohne eine bereits erfolgte Veröffentlichung zu behaupten.

## Bildnachweise

Alle vier verlinkten Originalseiten wurden am Prüfdatum unabhängig aufgerufen und mit `docs/BILDQUELLEN.md` abgeglichen:

- [Derek Oyen – Hero](https://unsplash.com/photos/iceberg-near-mountain-during-day-m5r2FFo8NJM): Urheber und Zuordnung zur Unsplash-Lizenz stimmen.
- [James Eades – Eisberg](https://unsplash.com/photos/mountain-covered-with-ice-near-body-of-water-c0DaNred-DQ): Urheber und Zuordnung zur Unsplash-Lizenz stimmen.
- [Morhua – Zügelpinguine](https://commons.wikimedia.org/wiki/File:Chinstrap_Penguins_in_South_Orkney_Islands.jpg): Urheber, Motiv und CC0 1.0 stimmen.
- [Weddellrobbe](https://commons.wikimedia.org/wiki/File:Weddell_seal.jpg): Die Originalseite nennt Giuseppe Zibordi als Fotograf und Michael Van Woert, NOAA NESDIS, ORA als Credit. Beide Angaben sind dokumentiert; die Commons-Seite kennzeichnet die Aufnahme als Public Domain aufgrund der NOAA-Herkunft.

Die [Unsplash-Lizenz](https://unsplash.com/license) wurde ebenfalls gelesen; die im Projekt genannten Einschränkungen zu unverändertem Bildverkauf und konkurrierenden Bildsammlungen entsprechen ihr. Keine fehlenden Urheber-/Credit-Angaben in der vorhandenen Bildquellenliste festgestellt.

## Grenzen und ergänzende Abnahme

Kein eigenständiger Browserlauf durch den Review-Agenten: keine Behauptung über tatsächlich ausgeführte Klick-, Tastatur-, Screenreader-, Zoom-, Offline-Neulade- oder Mobiltests. Responsive Layout und `file://`-Eignung wurden hier anhand des Codes geprüft. Browserergebnisse des Hauptagenten sollen getrennt gekennzeichnet werden. Nicht jede fachliche Aussage und nicht jeder externe Wissenslink wurde in diesem Review separat nachrecherchiert.

Für die visuelle Abnahme sind besonders 320 px Breite, größere Textdarstellung, Bildzuschnitte, Fokusführung nach mobiler Navigation und das Laden direkt per `file://` relevant.

## Nachprüfung durch den unabhängigen Review-Agenten

Nach den Korrekturen wurde `index.html` erneut vollständig gelesen. R1 und R2 sind erledigt: Beide Alternativtexte beschreiben jetzt die tatsächlichen Hauptmotive. R3 ist erledigt: größere Blöcke und Karten sind nachvollziehbar eingerückt und auf mehrere Zeilen aufgeteilt. Die Bildattribute entsprechen jetzt den tatsächlichen JPEG-Dimensionen. Bildcredits stehen zusätzlich direkt im Quellenbereich der Webseite. Der NSIDC-Link wurde auf eine andere Quellenseite umgestellt; deren fachliche Verifikation erfolgte laut Hauptagent durch ihn.

Die lokale Referenzprüfung wurde nach den HTML-Änderungen wiederholt: weiterhin 25 Referenzen, keine fehlenden lokalen Dateien/Anker und keine doppelten IDs. `git log -1 --oneline` bestätigt den ersten lokalen Commit `475b235` für Projektstruktur und Bildquellen. Website und Dokumentation waren zu diesem Zeitpunkt noch unversioniert und werden vom Hauptagenten anschließend committed. Keine offenen P1-, P2- oder P3-Befunde aus diesem Review.

## Ergänzende Browser-QA des Hauptagenten

Die folgenden Ergebnisse wurden vom Hauptagenten gemeldet und nicht durch den unabhängigen Review-Agenten selbst im Browser ausgeführt:

- Desktop bei 1280 × 720 über lokalen HTTP-Server: Screenshot geprüft, keine horizontale Überbreite (`scrollWidth` 1265), alle Bilder geladen, Fehlerkonsole leer.
- Alle drei Tierfilter funktionieren; `aria-pressed` und Live-Status entsprechen der Auswahl. Native Wissensfragen lassen sich umschalten.
- Testansichten über lokale Iframes bei 320 px sowie 768 px mit deaktiviertem JavaScript: mobiles Menü öffnet, schließt nach Navigation und per Escape; Escape setzt den Fokus auf den Menübutton. Ohne JavaScript bleiben Inhalte und Navigation sichtbar, native Wissensfragen bedienbar.
- Der Versuch eines direkten `file://`-Aufrufs wurde von der Browser-URL-Richtlinie abgewiesen, die nur HTTP/S zulässt. Ein tatsächlicher `file://`-Lauf und ein Neuladen bei gesperrtem Netzwerk sind deshalb ausdrücklich nicht bestätigt.

Der Code benötigt ausschließlich lokale Laufzeitressourcen. Die verbleibende Prüfgrenze betrifft die konkrete direkte Dateiöffnung in dieser Werkzeugumgebung, nicht eine bekannte externe Abhängigkeit der Website.
