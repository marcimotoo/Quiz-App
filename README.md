# Quiz-App

Eine Quiz-Anwendung als HTML/CSS/JavaScript-Prototyp mit lokal hinterlegten Fragen und Antworten.

## Starten

Das Repository herunterladen oder klonen und `index.html` in einem aktuellen Browser öffnen. Alternativ über einen lokalen Webserver bereitstellen. Es gibt keinen Installations- oder Build-Schritt und keine Paketabhängigkeiten.

## Funktionen und aktueller Stand

- Anzeige einer Frage mit mehreren Antwortmöglichkeiten.
- Markierung richtiger und falscher Antworten.
- Vor- und Zurücknavigation zwischen Fragen.
- Die Navigation prüft die Grenzen der Fragenliste noch nicht; vor der ersten oder nach der letzten Frage können Fehler auftreten.
- Die Prozentanzeige ist noch fest auf 30 % gesetzt. Eine abschließende Auswertung ist nicht implementiert.

## Projektstruktur

- `index.html`: Seitenstruktur
- `script.js`: Fragenwechsel und Antwortprüfung
- `scripts/db.js`: Fragen und Antworten
- `scripts/template.js`: Vorlagen für Fragen und Fortschrittsanzeige
- `style.css`: Hauptgestaltung
- `styles/`: Weitere CSS-Dateien
