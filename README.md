# Campus Wayfinder

A simple static web app that shows a campus map, lets users search/select locations, draws walking paths, and generates QR codes for Google Maps navigation. It also supports English, French, and Arabic UI text.

## Features

- Interactive Leaflet map with markers for campus locations
- Search with autocomplete and keyboard navigation
- Location details panel with hours, facilities, phone numbers, and parent/child relationships
- Walking path overlay between current location and selected destination
- QR code generator for walking directions
- Language toggle (EN/FR/AR) with RTL support
- Idle splash screen

## Quick start

1. Open index.html in a browser (double-click or use a local server).
2. Use the dropdown or search box to pick a destination.
3. Click a marker on the map to view details and update the path.
4. Scan the QR code to open walking directions.

## URL parameters

- location: sets the initial current location for the map and path.
  Example: index.html?location=library

## Project structure

- index.html: App layout and script/style includes.
- style.css: All UI and layout styling.
- script.js: App behavior (idle screen, search, selection, translations, view toggle).
- map.js: Leaflet map initialization, markers, highlights, and path rendering.
- paths.js: Static path coordinates and path lookup helper.
- translations.js: Language strings for UI and location names/descriptions.
- qr.js: QR code generation for navigation links.

## Main data structures

### locations (map.js)

A dictionary keyed by location id. Each location can include:

- name: Display name (fallback when translations are missing)
- lat, lng: Coordinates
- size: small | medium | large (controls marker size)
- icon: Emoji for marker/label
- radius: Highlight radius in meters
- type: area | building | office | dining | parking | auditorium
- description: Default description
- facilities, facilitiesFr, facilitiesAr: Lists of services
- hours: Hours of operation
- phone: Contact number
- parent: Parent location id
- children: Array of child location ids
- keywords: Search keywords
- consideredAs: Alias/virtual mapping used by path logic

### paths (paths.js)

A dictionary keyed as "startId-endId" with arrays of [lat, lng] points. The helper getPathCoordinates() selects a custom path when available, or falls back to a simple direct line.

### translations (translations.js)

An object keyed by language code (en, fr, ar). Each language has:

- UI labels: app_title, select_location, search_placeholder, etc.
- Location names: keys matching location ids
- Location descriptions: key format locationId_desc

## How it works

### Map initialization

- initMap() in map.js creates the Leaflet map, tile layers, and markers.
- The current location marker is placed based on the URL location parameter.

### Selection flow

1. A selection (dropdown/search/marker click) calls handleLocationSelection() in script.js.
2. onLocationSelectedWithTranslation() builds the detail panel and updates the map.
3. highlightLocation() draws the selection ring on the map.
4. updateMapWithPath() draws the walking path.
5. generateQRCode() creates a QR code for Google Maps walking directions.

### Search

- The search box filters locations by name, keywords, and description.
- Hovering results highlights the map location.
- Arrow keys navigate results and Enter selects.

### Translations

- translatePage() updates text and placeholders using translations.js.
- Location details are rebuilt in the active language.
- RTL layout is applied for Arabic.

## Adding a new location

1. Add a new entry to locations in map.js with a unique id.
2. Add the id to the dropdown options in updateLocationDropdown() in script.js.
3. Add translations for the name and description in translations.js:
   - id: translated name
   - id_desc: translated description
4. Optionally add custom paths in paths.js using the key "startId-endId".

## Adding a new custom path

1. In paths.js, add a new key:
   "startId-endId": [[lat, lng], [lat, lng], ...]
2. Ensure startId and endId match location ids in map.js.

## QR code behavior

- qr.js generates a Google Maps direction link using destination lat/lng.
- The QR code is rendered into the qr-container element.

## View toggle (map vs picture)

- The toggle button switches between the Leaflet map and a static image.
- Text updates based on the current language.

## Troubleshooting

- No markers appear: Verify locations have lat/lng and map.js loads after Leaflet.
- Paths do not draw: Confirm path keys match location ids and are in paths.js.
- Translations missing: Ensure translations.js has keys for the new ids.
- QR code fails: Check the QRCode script is loaded in index.html.

## Notes

- This app is static and does not require a build step.
- For best results, use a local server if the browser blocks file access for scripts.
