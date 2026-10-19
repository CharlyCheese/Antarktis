# Projektdokumentation

## Ziel und Umfang

Die Website vermittelt einen ersten Eindruck der Antarktis: eine bildbetonte Landingpage, typische Landschaften, eine kleine Tierwelt und kompakte Wissensinhalte. Die Gestaltung orientiert sich an Eisweiß, Blau, Türkis und dunklen Meeresfarben. Texte und Bedienelemente sind deutschsprachig.

Die Anwendung besteht aus statischen Dateien. Sie benötigt keinen Server, keine Datenbank, kein Paketmanagement und keinen Build-Prozess. Alle für die Darstellung notwendigen Ressourcen liegen im Projekt. Ein direkter Aufruf von `index.html` über `file://` ist der vorgesehene Offline-Einstieg.

## Architektur

| Bereich | Aufgabe | Bearbeitungsort |
| --- | --- | --- |
| Inhalt | Überschriften, Navigation, Abschnitte, Bilder und Karten | `index.html` |
| Darstellung | Farben, Typografie, Abstände, Layout und responsive Regeln | `styles.css` |
| Verhalten | Mobiles Navigationsmenü, Filter der Tierkarten und Markierung des aktuellen Abschnitts | `scripts.js` |
| Landschaftsbilder | Lokal eingebundene Bilddateien für Landschaften | `frontend/bilder_landschaft/` |
| Tierbilder | Lokal eingebundene Bilddateien für die Tierwelt | `frontend/bilder_tiere/` |
| Nachweise | Herkunft, Urheber und Nutzungsbedingungen der Bilder | `docs/BILDQUELLEN.md` |
| Qualitätssicherung | Unabhängige Prüfung, Ergebnisse und offene Punkte | `docs/REVIEW.md` |

Die Bereiche `backend/` und `database/` sind für spätere Erweiterungen reserviert. Der Browser greift nicht darauf zu.

### Seitenaufbau

Die Ankernavigation verbindet **Start**, **Landschaften**, **Tierwelt** und **Wissen** auf einer Seite. Die Landingpage führt mit einer großen Landschaftsaufnahme und einer klaren Handlungsaufforderung in die Inhalte. Karten bündeln Landschafts- und Tierinformationen. Der Tierfilter bietet **Alle**, **Pinguine** und **Robben**. Wissensfragen verwenden native `details`- und `summary`-Elemente, damit sie ohne zusätzliches JavaScript bedienbar bleiben.

### Trennung der Verantwortlichkeiten

HTML enthält den Inhalt und seine Bedeutung. CSS steuert die Gestaltung. JavaScript ergänzt die Bedienung, ohne Inhalte von externen Diensten nachzuladen. Diese Trennung ermöglicht gezielte Änderungen und vermeidet einen Build-Prozess. Kommentare sollen den Zweck eines Abschnitts oder eine nicht offensichtliche Entscheidung erklären; reine Wiederholungen des Codes sind nicht erforderlich.

Alle Ressourcenpfade sind relativ zum Projekt. Absolute Pfade zu einem bestimmten Computer und externe Schrift-, Skript- oder CSS-CDNs würden den portablen Offline-Betrieb erschweren und sind deshalb zu vermeiden.

## Wartung

### Texte und Abschnitte

Texte direkt in `index.html` ändern. Die Überschriftenhierarchie beibehalten: eine Hauptüberschrift für die Seite, danach passende Abschnitts- und Kartenüberschriften. Ankerziele und Navigationslinks müssen dieselben IDs verwenden. Jede ID darf nur einmal vorkommen.

Neue Abschnitte können nach dem Muster eines vorhandenen Abschnitts ergänzt werden. Bei Änderungen an Navigation oder Filter auch die zugehörigen Selektoren und Zustände in `scripts.js` prüfen.

### Bilder austauschen oder ergänzen

1. Landschaftsfotos nach `frontend/bilder_landschaft/`, Tierfotos nach `frontend/bilder_tiere/` kopieren.
2. Beschreibende Dateinamen verwenden; einfache Kleinbuchstaben und Bindestriche erleichtern portable Pfade.
3. In `index.html` den relativen Bildpfad eintragen. Groß- und Kleinschreibung exakt übernehmen, damit eine spätere Veröffentlichung auf anderen Betriebssystemen funktioniert.
4. Einen kurzen, sinnvollen Alternativtext setzen. Rein dekorative Bilder erhalten einen leeren Alternativtext; bedeutungstragende Fotos eine konkrete Beschreibung.
5. Vorhandene Größenangaben und Regeln für das Seitenverhältnis berücksichtigen. Prüfen, ob der Bildausschnitt auf schmalen Bildschirmen das Motiv noch zeigt.
6. Quelle, Urheber, Lizenz und erforderliche Hinweise in `docs/BILDQUELLEN.md` ergänzen. Bilder nur verwenden, wenn die Nutzungsbedingungen dies erlauben.
7. Die Seite erneut offline öffnen und das Bild auf Desktop- und Mobilbreite prüfen.

Bilder sollten für die tatsächliche Anzeigegröße optimiert sein. Keine Bilddatei nur durch eine kleinere CSS-Breite verkleinern: Das reduziert die zu ladende Dateigröße nicht.

### Karten und Tierfilter

Für eine neue Karte eine vorhandene Karte desselben Typs kopieren und Bild, Titel, Text und Alternativtext anpassen. Bei Tierkarten außerdem die vorhandene Kategoriekennzeichnung übernehmen, die `scripts.js` zum Filtern nutzt. Neue Kategorien erfordern einen passenden Filterknopf und eine Prüfung der Filterlogik. Kategorien sollten fachlich zur dargestellten Tierart passen.

Nach Änderungen an Filtern alle Ansichten durchgehen: **Alle**, **Pinguine** und **Robben**. Versteckte Karten dürfen keine per Tastatur erreichbaren Bedienelemente zurücklassen. Der aktive Filter muss visuell und für assistive Technik erkennbar sein.

### Farben, Typografie und Layout

Zentrale Gestaltungswerte stehen als CSS Custom Properties im oberen Bereich von `styles.css`. Dort zuerst prüfen, ob sich eine Änderung zentral lösen lässt. Das hält Farben und Abstände über alle Bereiche hinweg konsistent. Wiederverwendbare Klassen vorziehen und zusätzliche Einzelregeln möglichst vermeiden.

Responsive Anpassungen stehen in den Media Queries. Neue Komponenten zuerst bei schmaler Bildschirmbreite prüfen und anschließend auf größeren Ansichten abstimmen. Die Seite soll ohne horizontales Scrollen funktionieren. Bei Farbänderungen Textkontrast, Fokusmarkierung und aktive Zustände erneut kontrollieren.

### JavaScript

Neue Interaktionen in `scripts.js` ergänzen. Die vorhandenen DOM-Selektoren und Zustandsattribute als gemeinsame Schnittstelle zwischen HTML, CSS und JavaScript behandeln. Werden Klassen, IDs oder Datenattribute geändert, müssen alle betroffenen Dateien gemeinsam angepasst werden.

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
| 3. Grundgerüst | Landingpage, Navigation und Inhaltsabschnitte | Alle Ankerziele erreichbar, sinnvolle HTML-Struktur |
| 4. Gestaltung | Externes CSS mit thematischen Farben und responsivem Layout | Lesbar und bedienbar auf schmalen und breiten Ansichten |
| 5. Interaktionen | Externes JavaScript für Menü und Tierfilter | Funktionen mit Maus und Tastatur nutzbar |
| 6. Übergabe | Dokumentation, Git-Repository und `.gitignore` | Lokal startbar, wartbar und für GitHub Desktop vorbereitet |
| 7. Unabhängige Prüfung | Reviewbericht und Korrekturen | Wesentliche Befunde behoben oder ausdrücklich dokumentiert |

Diese Tabelle beschreibt den Ablauf und die Abnahmekriterien, keine vorweggenommenen Testergebnisse. Der Reviewbericht hält fest, welche Prüfungen tatsächlich erfolgt sind.

## Prüfliste für Änderungen und Abnahme

### Offline und Ressourcen

1. `index.html` direkt im Browser öffnen.
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

### Interaktionen und Zugänglichkeit

1. Mit `Tab` und `Shift+Tab` durch die Seite navigieren; die aktuelle Fokusposition muss erkennbar sein.
2. Buttons und Wissensfragen per Tastatur bedienen.
3. Alle Tierfilter auswählen und kontrollieren, ob nur die passende Kategorie sichtbar ist.
4. Menü- und Filterzustände sowie Alternativtexte im HTML überprüfen.
5. Die Systemeinstellung für reduzierte Bewegung aktivieren und die Seite erneut bedienen.
6. JavaScript testweise deaktivieren und die grundlegenden Inhalte sowie Wissensfragen prüfen.
7. Bei veränderten Farben die Kontraste mit einem geeigneten Prüfwerkzeug kontrollieren.

### Repository und Übergabe

1. `git status` prüfen: Es dürfen keine versehentlich aufgenommenen temporären Dateien, Zugangsdaten oder persönlichen Einstellungen enthalten sein.
2. Kontrollieren, dass alle tatsächlich verwendeten lokalen Bilder versionierbar sind.
3. Dokumentation und Bildnachweise mit dem finalen Dateibestand abgleichen.
4. Den unabhängigen Review lesen und wesentliche Befunde bearbeiten.

Eine Prüfung gilt erst als durchgeführt, wenn ihr Ergebnis nachvollziehbar festgehalten wurde. Nicht verfügbare Prüfumgebungen und verbleibende Einschränkungen gehören ebenfalls in `docs/REVIEW.md`.

## Git und Veröffentlichung

Git speichert die Projektgeschichte lokal. GitHub Desktop kann das vorhandene Repository aufnehmen, Änderungen committen und nach Auswahl eines GitHub-Ziels veröffentlichen. Die konkreten Schritte stehen in der `README.md`.

Ein Remote wird nicht automatisch eingerichtet. Eine Veröffentlichung auf GitHub oder als Website ist kein Bestandteil des Offline-Betriebs. Für eine spätere Veröffentlichung müssen relative Pfade, Schreibweise der Dateinamen und Nutzungsbedingungen aller eingebundenen Bilder erneut geprüft werden.

Das Repository verwendet den Branch `main`. Für Git unter dem Windows-Benutzerkonto wurde genau dieser Projektordner als `safe.directory` eingetragen, da das Repository zunächst in der isolierten Arbeitsumgebung angelegt wurde. Es wurde keine globale Freigabe aller Verzeichnisse gesetzt und kein Datei-Besitz geändert.

Die `.gitignore` hält lokale Hilfsdateien und sensible Konfiguration aus zukünftigen Commits heraus. Sie muss erweitert werden, wenn neue Werkzeuge eingeführt werden. Benötigte Website-Ressourcen, Dokumentation und Bildnachweise dürfen nicht pauschal ausgeschlossen werden.
