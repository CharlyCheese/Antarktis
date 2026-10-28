# Projektdokumentation

## Ziel und Umfang

Die Website vermittelt einen ersten Eindruck der Antarktis: eine bildbetonte Landingpage, typische Landschaften, eine Tierwelt-Übersicht und kompakte Wissensinhalte. Eine eigene Tierwelt-Unterseite vertieft die Tierporträts und zeigt ein vereinfachtes Nahrungsnetz. Die Gestaltung orientiert sich an Eisweiß, Blau, Türkis und dunklen Meeresfarben. Texte und Bedienelemente sind deutschsprachig.

Die Anwendung besteht aus statischen Dateien. Sie benötigt keinen Server, keine Datenbank, kein Paketmanagement und keinen Build-Prozess. Alle für die Darstellung notwendigen Ressourcen liegen im Projekt. `opening.html` bietet einen optionalen animierten Offline-Einstieg; `index.html` bleibt direkt erreichbar.

## Architektur

| Bereich | Aufgabe | Bearbeitungsort |
| --- | --- | --- |
| Optionaler Einstieg | Eisdecke mit vier SVG-Schollen und Link zur Startseite | `opening.html` |
| Startseite | Überschriften, Navigation, Abschnitte, Bilder und Karten | `index.html` |
| Tierwelt-Unterseite | Einführung, Sprungnavigation, Tierporträts und vereinfachtes Nahrungsnetz | `tierwelt.html` |
| Darstellung | Farben, Typografie, Abstände, Layout und responsive Regeln | `styles.css` |
| Verhalten | Eisbruch-Übergang, mobiles Navigationsmenü, Tierfilter und Abschnittsmarkierung | `scripts.js` |
| Landschaftsbilder | Lokal eingebundene Bilddateien für Landschaften | `frontend/bilder_landschaft/` |
| Tierbilder | Lokal eingebundene Bilddateien für die Tierwelt | `frontend/bilder_tiere/` |
| Nachweise | Herkunft, Urheber und Nutzungsbedingungen der Bilder | `docs/BILDQUELLEN.md` |
| Qualitätssicherung | Unabhängige Prüfung, Ergebnisse und offene Punkte | `docs/REVIEW.md` |

Die Bereiche `backend/` und `database/` sind für spätere Erweiterungen reserviert. Der Browser greift nicht darauf zu.

### Seitenaufbau

Die Ankernavigation der Startseite verbindet **Start**, **Landschaften**, **Tierwelt** und **Wissen**. Die Landingpage führt mit einer großen Landschaftsaufnahme und einer klaren Handlungsaufforderung in die Inhalte. Karten bündeln Landschafts- und Tierinformationen. Der Tierfilter bietet **Alle**, **Pinguine**, **Robben** und **Krill**. Jede der drei Tierkarten enthält genau einen gemeinsamen Bild- und Textlink zum passenden Abschnitt auf `tierwelt.html`: `#pinguine`, `#robben` oder `#krill`. Zusätzliche Buttons mit demselben Ziel und dekorative Nummerierungen werden vermieden. Wissensfragen verwenden native `details`- und `summary`-Elemente, damit sie ohne zusätzliches JavaScript bedienbar bleiben.

Die Unterseite `tierwelt.html` bietet eine kurze Einführung, eine Sprungnavigation und Erklärabschnitte zu Zügelpinguin, Weddellrobbe und Krill. Ein vereinfachtes Nahrungsnetz verdeutlicht ihre Beziehungen im antarktischen Ökosystem. Alle HTML-Seiten laden dieselben Dateien `styles.css` und `scripts.js`. Das Krillfoto liegt lokal unter `frontend/bilder_tiere/krill.jpg`; seine Herkunft und Lizenz stehen wie bei den übrigen Fotos in `docs/BILDQUELLEN.md`.

### Optionaler Eisbruch-Einstieg

`opening.html` zeigt eine künstlich erzeugte Eistextur mit einem unregelmäßigen Riss. „Das Eis brechen“ ist ein einzelner nativer Link nach `index.html`. Mit JavaScript bewegen sich vier SVG-Schollen in etwa 1,2 Sekunden auseinander. Darunter liegt die echte Startseite in einem nicht interaktiven, mit `inert` und `aria-hidden` ausgeblendeten Iframe; so muss ihr sichtbarer Aufbau nicht auf der Einstiegsseite dupliziert werden. Ohne JavaScript funktioniert der Link unmittelbar. Bei `prefers-reduced-motion` ersetzt eine kurze Blende die Bewegung.

Nach erfolgtem Eintritt merkt `sessionStorage` unter `antarktis.openingSeen`, dass der Einstieg in diesem Tab bereits benutzt wurde. Ein erneuter Aufruf führt dann direkt zur Startseite. Zugriff auf den Sitzungsspeicher ist durch Fehlerbehandlung abgesichert: Ist er etwa beim lokalen Datei-Aufruf gesperrt, bleibt der Einstieg trotzdem bedienbar. Es werden keine Daten an externe Dienste übertragen. `index.html` leitet von sich aus nicht zum Einstieg um.

### Eistextur-Buttons

Die Hauptschaltfläche der Startseite, die vier Tierfilter und das mobile Menü auf beiden Inhaltsseiten tragen die Klasse `ice-button`. Sie verwenden dieselbe lokale Eistextur wie der Einstieg. Eine helle, ruhige Mitte hält die Beschriftung lesbar; leicht unterschiedliche Bruchkonturen bilden die Ränder. Margin, Padding und die rechteckige Klickfläche bleiben erhalten.

`decorateIceButtons()` in `scripts.js` ergänzt dekorative, für assistive Technik ausgeblendete SVGs. Drei feste Konturen sorgen für wiedererkennbare Formen. Die SVG-IDs sind innerhalb jeder Seite eindeutig. Farben und Zustände liegen in `styles.css`: Der ausgewählte Filter und das geöffnete Menü erhalten einen umgekehrten Blauverlauf. Bei Hover, Tastaturfokus oder Klick läuft ein Lichtreflex ausschließlich über den maskierten Rand. Bei reduzierter Bewegung entfällt die Animation. Ohne JavaScript liefert CSS einen einfachen Eisbelag; native Links bleiben bedienbar.

Beim Austausch von `frontend/bilder_landschaft/eisdecke.png` auch die Buttons kontrollieren. Wird der Dateiname geändert, müssen die Verweise in `opening.html`, `scripts.js` und `styles.css` gemeinsam angepasst werden. Neue Schaltflächen können dieselbe Klasse nutzen; ihre Beschriftung darf nicht durch dekorative Elemente ersetzt werden.

### Gemeinsame Kristallgestaltung

Startseite und Tierwelt-Unterseite greifen das Material der Eisbuttons auf: eine blassblaue Eistextur im Hintergrund, frostige Kopf- und Fußzeilen, helle Kartenflächen und feine Bruchkanten an den freien Abschnittsrändern. Der Wissensbereich verwendet eine dunkle Variante derselben Textur. Die Kartenbeschriftungen haben eigene Innenabstände; Buttonabstände und bestehende Inhaltsraster bleiben erhalten.

Die Umsetzung liegt vollständig in `styles.css`. `--ice-texture` verweist auf das vorhandene lokale Bild, `--frost-panel` definiert die helle Deckschicht und `--frost-shadow` die zurückhaltende Tiefe. Die Variablen `--teal` und `--mint` bleiben aus Kompatibilitätsgründen benannt, enthalten nun jedoch auf das Eismaterial abgestimmte Blautöne. Textflächen sind stärker abgedeckt als Seitenränder. Beim Ändern der Deckkraft müssen Kontraste auch über den dunklen beziehungsweise hellen Stellen der Textur geprüft werden.

Bruchkanten sind nicht interaktive Pseudoelemente. Nur Bilder erhalten kleine abgeschrägte Ecken; Text, Links und ihre Fokusrahmen werden nicht beschnitten. Die Dekoration erzeugt keine zusätzlichen Animationen. Die separate Einstiegsseite ist vom neuen Seitenhintergrund ausgenommen. Im dunklen Wissensbereich und über dem Titelbild wird der Tastaturfokus hell hervorgehoben.

### Navigation, Überschriften und Erklärflächen

Alle Links der Hauptnavigation zeigen dauerhaft eine flache Eisfläche. Eine kräftigere blaue Unterkante markiert den aktuellen Link (`aria-current`); bei Hover und Tastaturfokus werden Fläche und Kante sanft aufgehellt. Die Dekoration liegt hinter dem Text, nimmt keine Klicks an und beschneidet ausschließlich ihre eigenen Ecken. Auf schmalen Bildschirmen dürfen die mindestens 44 Pixel hohen Navigationslinks umbrechen. Das vorhandene mobile Menü und seine Zustandslogik bleiben erhalten.

Überschriften erhalten Gletscherblau auf hellen Flächen beziehungsweise Eisweiß auf dunklen Flächen. Ausgewählte Abschnittstitel tragen eine kurze dekorative Eiskante darunter. Titel über Fotos bleiben hell; es werden keine zusätzlichen klickbaren Überschriften oder Nummerierungen eingeführt. Kleine Abschnittsbezeichnungen sind 12 Pixel groß und kräftiger gesetzt. Die einleitende Zeile über dem Titelbild hat eine dunkle Kontrastfläche; Begleittexte neben Abschnittstiteln sind 15 Pixel groß und durch eine feine Seitenkante hervorgehoben.

Die vier Sprunglinks der Tierwelt-Unterseite tragen dieselbe Klasse `ice-button` wie die Tierfilter und bleiben native Ankerlinks. Bildbeschriftungen tragen `ice-label`: `decorateIceButtons()` ergänzt dort denselben dekorativen Eisbelag, jedoch keine eigenen Klickbehandlungen oder Tabstopps. Die Bildbeschriftung bleibt ein `span` innerhalb des einzigen Kartenlinks. Die Grundposition wird durch `image-tag` festgelegt; ohne JavaScript steht der CSS-Eisbelag weiterhin zur Verfügung.

Der Einführungstext, die Breitengrad-Erklärung und die erklärenden Absätze unter den Zwischenüberschriften der Tierporträts erhalten eine dezente Seitenkante mit schwachem Farbverlauf. Diese Gestaltung liegt in `styles.css`; die semantische Struktur und Inhalte bleiben erhalten. Reduzierte Bewegung deaktiviert auch die Navigationstransitionen.

### Trennung der Verantwortlichkeiten

Der Wissensbereich enthält außerdem eine Erklärung der geografischen Breite mit einer inline eingebundenen SVG-Kompassrose. Die Grafik ist dekorativ (`aria-hidden`); die Informationen stehen als zugänglicher Text daneben. Eine semantische Tabelle vergleicht den Südpol mit Nordpol, Wostok, Eureka und Ny-Ålesund. Die Breiten sind auf ganze Grad gerundet, die Orte nicht nach Kälte geordnet. Fachliche Quellen stehen im Quellenbereich der Seite. SVG-Farben, Größen und Tabellenlayout werden ausschließlich in `styles.css` gepflegt; zusätzliche Skripte oder Downloads sind nicht erforderlich.

HTML enthält den Inhalt und seine Bedeutung. CSS steuert die Gestaltung. JavaScript ergänzt die Bedienung, ohne Inhalte von externen Diensten nachzuladen. Diese Trennung ermöglicht gezielte Änderungen und vermeidet einen Build-Prozess. Kommentare sollen den Zweck eines Abschnitts oder eine nicht offensichtliche Entscheidung erklären; reine Wiederholungen des Codes sind nicht erforderlich.

Alle Ressourcenpfade sind relativ zum Projekt. Absolute Pfade zu einem bestimmten Computer und externe Schrift-, Skript- oder CSS-CDNs würden den portablen Offline-Betrieb erschweren und sind deshalb zu vermeiden.

## Wartung

### Texte und Abschnitte

Texte direkt in `index.html` beziehungsweise `tierwelt.html` ändern. Die Überschriftenhierarchie beibehalten: eine Hauptüberschrift pro Seite, danach passende Abschnitts- und Kartenüberschriften. Ankerziele und Navigationslinks müssen dieselben IDs verwenden. Jede ID darf innerhalb einer HTML-Datei nur einmal vorkommen.

Neue Abschnitte können nach dem Muster eines vorhandenen Abschnitts ergänzt werden. Bei Änderungen an Navigation oder Filter auch die zugehörigen Selektoren und Zustände in `scripts.js` prüfen.

### Bilder austauschen oder ergänzen

1. Landschaftsfotos nach `frontend/bilder_landschaft/`, Tierfotos nach `frontend/bilder_tiere/` kopieren.
2. Beschreibende Dateinamen verwenden; einfache Kleinbuchstaben und Bindestriche erleichtern portable Pfade.
3. In der jeweiligen HTML-Datei den relativen Bildpfad eintragen; bei mehrfach verwendeten Fotos beide Seiten berücksichtigen. Groß- und Kleinschreibung exakt übernehmen, damit eine spätere Veröffentlichung auf anderen Betriebssystemen funktioniert.
4. Einen kurzen, sinnvollen Alternativtext setzen. Rein dekorative Bilder erhalten einen leeren Alternativtext; bedeutungstragende Fotos eine konkrete Beschreibung.
5. Vorhandene Größenangaben und Regeln für das Seitenverhältnis berücksichtigen. Prüfen, ob der Bildausschnitt auf schmalen Bildschirmen das Motiv noch zeigt.
6. Quelle, Urheber, Lizenz und erforderliche Hinweise in `docs/BILDQUELLEN.md` ergänzen. Bilder nur verwenden, wenn die Nutzungsbedingungen dies erlauben.
7. Die Seite erneut offline öffnen und das Bild auf Desktop- und Mobilbreite prüfen.

Bilder sollten für die tatsächliche Anzeigegröße optimiert sein. Keine Bilddatei nur durch eine kleinere CSS-Breite verkleinern: Das reduziert die zu ladende Dateigröße nicht.

Die Eistextur liegt unter `frontend/bilder_landschaft/eisdecke.png`. Sie ist ein dekoratives KI-Bild, keine dokumentarische Aufnahme. Beim Austausch den Bildpfad im Einstieg berücksichtigen und einen ruhigen Mittelpunkt für den Link erhalten. Die SVG-Flächen definieren die zusammengehörigen Bruchkanten; diese beim Bearbeiten gemeinsam anpassen, damit die geschlossene Eisdecke keine unbeabsichtigten Lücken zeigt. Bewegungsrichtung, Dauer und reduzierte Bewegung stehen in `styles.css`; den Zeitpunkt des Seitenwechsels in `scripts.js` dazu passend halten.

### Karten und Tierfilter

Für eine neue Karte eine vorhandene Karte desselben Typs kopieren und Bild, Titel, Text und Alternativtext anpassen. Bei Tierkarten außerdem die vorhandene Kategoriekennzeichnung übernehmen, die `scripts.js` zum Filtern nutzt. Neue Kategorien erfordern einen passenden Filterknopf und eine Prüfung der Filterlogik. Kategorien sollten fachlich zur dargestellten Tierart passen.

Den Bild- und Textbereich jeder Tierkarte in genau einem Link zusammenfassen. Keine zusätzlichen Buttons zum selben Ziel und keine dekorativen Kartennummern ergänzen. Die Linkziele `tierwelt.html#pinguine`, `tierwelt.html#robben` und `tierwelt.html#krill` müssen mit den Abschnitts-IDs und der Sprungnavigation auf der Unterseite übereinstimmen. Bei Umbenennungen alle Verweise gemeinsam anpassen.

Nach Änderungen an Filtern alle Ansichten durchgehen: **Alle**, **Pinguine**, **Robben** und **Krill**. Versteckte Karten dürfen keine per Tastatur erreichbaren Bedienelemente zurücklassen. Der aktive Filter muss visuell und für assistive Technik erkennbar sein.

### Farben, Typografie und Layout

Zentrale Gestaltungswerte stehen als CSS Custom Properties im oberen Bereich von `styles.css`. Dort zuerst prüfen, ob sich eine Änderung zentral lösen lässt. Das hält Farben und Abstände über alle Bereiche hinweg konsistent. Wiederverwendbare Klassen vorziehen und zusätzliche Einzelregeln möglichst vermeiden.

Responsive Anpassungen stehen in den Media Queries. Neue Komponenten zuerst bei schmaler Bildschirmbreite prüfen und anschließend auf größeren Ansichten abstimmen. Die Seite soll ohne horizontales Scrollen funktionieren. Bei Farbänderungen Textkontrast, Fokusmarkierung und aktive Zustände erneut kontrollieren.

### JavaScript

Neue Interaktionen in `scripts.js` ergänzen. Die vorhandenen DOM-Selektoren und Zustandsattribute als gemeinsame Schnittstelle zwischen HTML, CSS und JavaScript behandeln. Werden Klassen, IDs oder Datenattribute geändert, müssen alle betroffenen Dateien gemeinsam angepasst werden.

Da alle Seiten dasselbe Skript laden, müssen Funktionen mit nur auf einer Seite vorhandenen Elementen umgehen können. Die automatische Abschnittsmarkierung berücksichtigt ausschließlich Links der Hauptnavigation, deren `href` mit `#` beginnt. Seitenübergreifende Links werden davon nicht verändert; eine feste Kennzeichnung der aktuellen Seite mit `aria-current="page"` bleibt erhalten.

Die grundlegenden Inhalte sollen ohne JavaScript lesbar bleiben. Das Wissens-Accordion nutzt deshalb Browserfunktionen. Für zusätzliche Offline-Funktionen keine Netzwerkanfragen oder externe Bibliotheken voraussetzen.

## Bedienbarkeit und Zugänglichkeit

- Semantische HTML-Bereiche und eine nachvollziehbare Überschriftenhierarchie helfen bei Orientierung und Screenreader-Nutzung.
- Links dienen der Navigation, Buttons dem Auslösen von Aktionen.
- Alle Aktionen müssen per Tastatur erreichbar sein; Fokusmarkierungen bleiben sichtbar.
- Das mobile Menü kennzeichnet seinen Zustand für assistive Technik und muss nach Navigation oder Schließen einen verständlichen Zustand hinterlassen.
- Sinnvolle Alternativtexte beschreiben den Inhalt relevanter Bilder.
- Bewegungen berücksichtigen `prefers-reduced-motion`, damit eine reduzierte Bewegungsdarstellung möglich ist.
- Native `details`-Elemente lassen sich mit der Tastatur öffnen und schließen.

Diese Maßnahmen ersetzen keine formelle Barrierefreiheitszertifizierung. Konkrete Prüfungen und ihre Grenzen sind im Review zu dokumentieren.

## Arbeitsorganisation

Der Auftrag wird in kleinen, überprüfbaren Paketen bearbeitet. Die Rollen teilen sich denselben Projektordner; eindeutige Dateiverantwortung verhindert gleichzeitige, widersprüchliche Änderungen.

| Rolle | Verantwortungsbereich |
| --- | --- |
| Orchestrator / Hauptagent | Bestand prüfen, Aufgaben aufteilen, Gestaltung und Implementierung zusammenführen, Git einrichten, Abnahme koordinieren |
| Bilderredaktion | Geeignete lokale Bilder bereitstellen, Motivzuordnung und Bildnachweise dokumentieren |
| Dokumentation | Nutzung, Architektur, Wartung, Arbeitsablauf und Veröffentlichungsweg beschreiben |
| Unabhängiger Review-Agent | Ergebnis getrennt von der Implementierung prüfen, Befunde priorisieren und in `docs/REVIEW.md` dokumentieren |

### Arbeitspakete

| Paket | Ergebnis | Abnahmekriterium |
| --- | --- | --- |
| 1. Bestand und Planung | Vorhandene Dateien und Bildordner geprüft, Zuständigkeiten festgelegt | Bestehende Struktur berücksichtigt, Umfang klar |
| 2. Inhalte und Bilder | Lokale Bilder und deutschsprachige Inhalte vorbereitet | Passende Motive, nachvollziehbare Bildquellen |
| 3. Grundgerüst | Landingpage, Tierwelt-Unterseite, Navigation und Inhaltsabschnitte | Alle Seiten- und Ankerziele erreichbar, sinnvolle HTML-Struktur |
| 4. Gestaltung | Externes CSS mit thematischen Farben und responsivem Layout | Lesbar und bedienbar auf schmalen und breiten Ansichten |
| 5. Interaktionen | Externes JavaScript für Menü und Tierfilter | Funktionen mit Maus und Tastatur nutzbar |
| 6. Übergabe | Dokumentation, Git-Repository und `.gitignore` | Lokal startbar, wartbar und für GitHub Desktop vorbereitet |
| 7. Unabhängige Prüfung | Reviewbericht und Korrekturen | Wesentliche Befunde behoben oder ausdrücklich dokumentiert |

Diese Tabelle beschreibt den Ablauf und die Abnahmekriterien, keine vorweggenommenen Testergebnisse. Der Reviewbericht hält fest, welche Prüfungen tatsächlich erfolgt sind.

## Prüfliste für Änderungen und Abnahme

### Offline und Ressourcen

1. `opening.html`, `index.html` und `tierwelt.html` direkt im Browser öffnen.
2. Internetverbindung deaktivieren oder den Netzwerkzugriff im Browser unterbinden und die Seite neu laden.
3. Prüfen, ob sämtliche Bilder, Gestaltung und Interaktionen verfügbar sind.
4. Browserkonsole auf Fehler und fehlende Dateien prüfen.
5. Sicherstellen, dass Ressourcen nicht von CDNs oder anderen externen Laufzeitdiensten abhängen.

### Navigation und Darstellung

1. Alle Navigationslinks sowie die Handlungsaufforderung der Landingpage aufrufen.
2. Kontrollieren, dass Zielüberschriften sichtbar und nicht von einer festen Navigation verdeckt sind.
3. Desktopbreite, Tabletbreite und eine schmale Mobilansicht prüfen.
4. Auf horizontales Scrollen, überlappende Elemente, abgeschnittene Texte und unpassende Bildausschnitte achten.
5. Im mobilen Menü öffnen, navigieren und schließen; danach die Fensterbreite ändern und den Zustand erneut kontrollieren.
6. Jede Tierkarte öffnen und den passenden Zielabschnitt auf `tierwelt.html` kontrollieren. Dort die Sprungnavigation und die Rückwege zur Startseite prüfen.
7. Auf beiden Seiten die aktive Navigation prüfen: Abschnittsmarkierungen dürfen die Kennzeichnung der aktuellen Unterseite nicht überschreiben.

### Interaktionen und Zugänglichkeit

1. Mit `Tab` und `Shift+Tab` durch die Seite navigieren; die aktuelle Fokusposition muss erkennbar sein.
2. Buttons und Wissensfragen per Tastatur bedienen.
3. Alle Tierfilter auswählen und kontrollieren, ob nur die passende Kategorie sichtbar ist.
4. Menü- und Filterzustände sowie Alternativtexte im HTML überprüfen.
5. Die Systemeinstellung für reduzierte Bewegung aktivieren und die Seite erneut bedienen.
6. JavaScript testweise deaktivieren und die grundlegenden Inhalte sowie Wissensfragen prüfen.
7. Bei veränderten Farben die Kontraste mit einem geeigneten Prüfwerkzeug kontrollieren.
8. Jede Tierkarte muss genau einen per Tastatur erreichbaren Link enthalten. Nach dem Filtern dürfen ausgeblendete Karten keine zusätzlichen Tabstopps erzeugen.
9. Den Eisbruch-Einstieg mit Klick und Tastatur auslösen, den Wechsel zur Startseite prüfen und `opening.html` danach im selben Tab erneut aufrufen. Zusätzlich ohne JavaScript, mit reduziertem Bewegungswunsch und mit gesperrtem Sitzungsspeicher prüfen. Die eingebettete Startseite darf während des Einstiegs keine zusätzlichen Tabstopps erzeugen.

### Repository und Übergabe

1. `git status` prüfen: Es dürfen keine versehentlich aufgenommenen temporären Dateien, Zugangsdaten oder persönlichen Einstellungen enthalten sein.
2. Kontrollieren, dass alle tatsächlich verwendeten lokalen Bilder versionierbar sind.
3. Dokumentation und Bildnachweise mit dem finalen Dateibestand abgleichen.
4. Den unabhängigen Review lesen und wesentliche Befunde bearbeiten.

Eine Prüfung gilt erst als durchgeführt, wenn ihr Ergebnis nachvollziehbar festgehalten wurde. Nicht verfügbare Prüfumgebungen und verbleibende Einschränkungen gehören ebenfalls in `docs/REVIEW.md`.

## Git und Veröffentlichung

Git speichert die Projektgeschichte lokal. GitHub Desktop kann das vorhandene Repository aufnehmen, Änderungen committen und nach Auswahl eines GitHub-Ziels veröffentlichen.

Ein Remote wird nicht automatisch eingerichtet. Eine Veröffentlichung auf GitHub oder als Website ist kein Bestandteil des Offline-Betriebs. Für eine spätere Veröffentlichung müssen relative Pfade, Schreibweise der Dateinamen und Nutzungsbedingungen aller eingebundenen Bilder erneut geprüft werden.

Das Repository verwendet den Branch `main`. Für Git unter dem Windows-Benutzerkonto wurde genau dieser Projektordner als `safe.directory` eingetragen, da das Repository zunächst in der isolierten Arbeitsumgebung angelegt wurde. Es wurde keine globale Freigabe aller Verzeichnisse gesetzt und kein Datei-Besitz geändert.

Die `.gitignore` hält lokale Hilfsdateien und sensible Konfiguration aus zukünftigen Commits heraus. Sie muss erweitert werden, wenn neue Werkzeuge eingeführt werden. Benötigte Website-Ressourcen, Dokumentation und Bildnachweise dürfen nicht pauschal ausgeschlossen werden.
