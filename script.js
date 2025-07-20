// Get location from URL (e.g., ?location=library)
const urlParams = new URLSearchParams(window.location.search);
const locationId = urlParams.get('location') || 'parking_1';

// Initialize map with the current location as default starting point
initMap(locationId);

// Function to handle location selection
// In script.js - Update your onLocationSelected function

function onLocationSelected(locationId) {
    // Resolve to actual physical locations
    const physicalLocations = resolveLocation(locationId);
    
    // Get the selected location data
    const location = locations[locationId];
    
    // Create detailed information display
    let infoHTML = `
        <div class="location-details">
            <div class="location-header">
                <span class="location-icon">${location.icon}</span>
                <h2>${location.name}</h2>
            </div>
            <p class="location-description">${location.description || 'No description available'}</p>
    `;
    // Add phone number if available
    if (location.phone) {
        infoHTML += `
            <div class="location-section">
                <h4>Phone Number:</h4>
                <p class="location-phone">${location.phone}</p>
            </div>
        `;
    }
    
    // Add facilities if available
    if (location.facilities && location.facilities.length > 0) {
        infoHTML += `
            <div class="location-section">
                <h4>Facilities:</h4>
                <ul class="facilities-list">
                    ${location.facilities.map(facility => `<li>${facility}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // Add hours if available
    if (location.hours) {
        infoHTML += `
            <div class="location-section">
                <h4>Hours:</h4>
                <p class="location-hours">${location.hours}</p>
            </div>
        `;
    }
    
    // Add capacity if available
    if (location.capacity) {
        infoHTML += `
            <div class="location-section">
                <h4>Capacity:</h4>
                <p class="location-capacity">${location.capacity}</p>
            </div>
        `;
    }
    
    // Add children locations if this is a parent area
    if (location.children && location.children.length > 0) {
        infoHTML += `
            <div class="location-section">
                <h4>Buildings/Offices:</h4>
                <div class="children-dropdown">
                    <select id="children-select" class="children-select">
                        <option value="" disabled selected>Select a building/office</option>
                        ${location.children.map(childId => {
                            const child = locations[childId];
                            return child ? `<option value="${childId}">${child.name}</option>` : '';
                        }).join('')}
                    </select>
                </div>
            </div>
        `;
    }
    
    // Show parent relationship if this is a child location
    if (location.parent) {
        const parent = locations[location.parent];
        infoHTML += `
            <div class="location-section">
                <h4>Part of:</h4>
                <p class="parent-location">
                    <span class="parent-icon">${parent.icon}</span>
                    ${parent.name}
                </p>
            </div>
        `;
    }
    
    infoHTML += '</div>';
    
    document.getElementById('location-info').innerHTML = infoHTML;
    
    // Add event listener for children dropdown if it exists
    const childrenSelect = document.getElementById('children-select');
    if (childrenSelect) {
        childrenSelect.addEventListener('change', function() {
            if (this.value) {
                onLocationSelected(this.value);
                map.flyTo([locations[this.value].lat, locations[this.value].lng], 19);
            }
        });
    }
    
    // Update path and highlights
    highlightLocation(locationId);
    updateMapWithPath(locationId);
    generateQRCode(locationId);
}

// Connect location buttons
// Connect location select
document.addEventListener('DOMContentLoaded', () => {
    // Replace the existing dropdown event listener with:
document.getElementById('location-select').addEventListener('change', function() {
    document.getElementById('location-search').value = "";

    if (this.value) {
        const locationId = this.value;
        
        // Update highlights and selection
        highlightLocation(locationId);
        onLocationSelected(locationId);
        
        // Optional: Center map on selection
        map.flyTo([locations[locationId].lat, locations[locationId].lng], 18);
        
        // Update URL
        // const newUrl = new URL(window.location);
        // newUrl.searchParams.set('location', locationId);
        // window.history.pushState({}, '', newUrl);
    }
});
    // Set initial value from URL
    const urlParams = new URLSearchParams(window.location.search);
    const locationId = urlParams.get('location');
    if (locationId) {
        locationSelect.value = locationId;
    }
});
// Replace the entire search functionality in script.js with:

// Search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('location-search');
    const searchResults = document.getElementById('search-results');
    let selectedResultIndex = -1;
    let searchTimeout = null;

    // Search with debounce
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(this.value.trim());
        }, 300);
    });

    // Keyboard navigation
    searchInput.addEventListener('keydown', function(e) {
        const results = document.querySelectorAll('.search-result-item');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedResultIndex = Math.min(selectedResultIndex + 1, results.length - 1);
            updateSelectedResult(results);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedResultIndex = Math.max(selectedResultIndex - 1, -1);
            updateSelectedResult(results);
        } else if (e.key === 'Enter' && selectedResultIndex >= 0) {
            results[selectedResultIndex].click();
        }
    });

    function performSearch(query) {
        searchResults.innerHTML = '';
        selectedResultIndex = -1;
        
        if (query.length < 2) {
            searchResults.style.display = 'none';
            if (currentHighlight) map.removeLayer(currentHighlight);
            return;
        }

        const matches = findMatches(query);
        displayResults(matches);
    }

    function findMatches(query) {
        const q = query.toLowerCase();
        return Object.entries(locations).filter(([id, loc]) => {
            return (
                loc.name.toLowerCase().includes(q) ||
                id.toLowerCase().includes(q) ||
                (loc.keywords && loc.keywords.some(kw => kw.toLowerCase().includes(q))
            ))
        });
    }

    function displayResults(matches) {
        if (matches.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
        } else {
            matches.forEach(([id, loc], index) => {
                const item = document.createElement('div');
                item.className = 'search-result-item';
                item.innerHTML = `
                    <div class="result-name">${loc.name}</div>
                   
                `;
                
                item.addEventListener('click', () => selectResult(id));
                item.addEventListener('mouseover', () => previewResult(id));
                
                searchResults.appendChild(item);
            });
        }
        searchResults.style.display = 'block';
    }

    // Modify the selectResult function:
function selectResult(id) {
    const searchInput = document.getElementById('location-search');
    const searchResults = document.getElementById('search-results');
    
    searchInput.value = locations[id].name;
    searchResults.style.display = 'none';
    document.getElementById('location-select').value = "";
    
    // Trigger highlight and selection
    highlightLocation(id);
    onLocationSelected(id);
    
    // Optional: Center map on the location
    map.flyTo([locations[id].lat, locations[id].lng], 18);
}

    function previewResult(id) {
        highlightZone(id); // Temporary highlight on hover
    }

    function updateSelectedResult(results) {
        results.forEach((r, i) => {
            r.style.backgroundColor = i === selectedResultIndex ? '#f0f8ff' : '';
            if (i === selectedResultIndex) {
                previewResult(Object.keys(locations)[i]);
                r.scrollIntoView({ block: 'nearest' });
            }
        });
    }
});

// Legend functionality
function initializeLegend() {
    const legendContainer = document.getElementById('legend-items');
    
    // Current location legend item
    const currentLocationItem = document.createElement('div');
    currentLocationItem.className = 'legend-item';
    currentLocationItem.innerHTML = `
        <div class="legend-symbol legend-current-location">📍</div>
        <div class="legend-label">Current Location</div>
    `;
    legendContainer.appendChild(currentLocationItem);
    
    // Get unique location types from the locations data
    const locationTypes = new Set();
    Object.values(locations).forEach(loc => {
        if (loc.size === 'large') {
            locationTypes.add('Area');
        } else if (loc.size === 'medium') {
            locationTypes.add('Building');
        } else if (loc.size === 'small') {
            locationTypes.add('Office');
        }
    });
    
    // Create legend items for each type
    locationTypes.forEach(type => {
        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';
        
        let symbolClass = '';
        let icon = '🏛️';
        
        switch(type) {
            case 'Area':
                symbolClass = 'legend-area';
                icon = '🏛️';
                break;
            case 'Building':
                symbolClass = 'legend-building';
                icon = '🏢';
                break;
            case 'Office':
                symbolClass = 'legend-office';
                icon = '🏪';
                break;
        }
        
        legendItem.innerHTML = `
            <div class="legend-symbol ${symbolClass}">${icon}</div>
            <div class="legend-label">${type}</div>
        `;
        legendContainer.appendChild(legendItem);
    });
    
    // Path legend item
    const pathItem = document.createElement('div');
    pathItem.className = 'legend-item';
    pathItem.innerHTML = `
        <div style="width: 30px; height: 4px; background-color: #3498db; margin-right: 10px; border-radius: 2px;"></div>
        <div class="legend-label">Walking Path</div>
    `;
    legendContainer.appendChild(pathItem);
    
    // Highlight legend item
    const highlightItem = document.createElement('div');
    highlightItem.className = 'legend-item';
    highlightItem.innerHTML = `
        <div style="width: 30px; height: 30px; border: 2px solid #ffffff; border-radius: 50%; background-color: rgba(255,255,255,0.2); margin-right: 10px;"></div>
        <div class="legend-label">Selected Area</div>
    `;
    legendContainer.appendChild(highlightItem);
}

// Initialize legend when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeLegend();
});


// View Toggle functionality
let isMapView = true;

function initializeViewToggle() {
    const toggleBtn = document.getElementById('view-toggle-btn');
    const toggleIcon = document.getElementById('toggle-icon');
    const toggleText = document.getElementById('toggle-text');
    const mapElement = document.getElementById('map');
    const pictureElement = document.getElementById('picture-view');
    
    toggleBtn.addEventListener('click', function() {
        isMapView = !isMapView;
        
        if (isMapView) {
            // Switch to map view
            mapElement.style.display = 'block';
            pictureElement.style.display = 'none';
            toggleIcon.textContent = '🖼️';
            toggleText.textContent = 'Picture View';
            
            // Invalidate map size to ensure proper rendering after toggle
            if (map) {
                setTimeout(() => {
                    map.invalidateSize();
                }, 100);
            }
        } else {
            // Switch to picture view
            mapElement.style.display = 'none';
            pictureElement.style.display = 'flex';
            toggleIcon.textContent = '🗺️';
            toggleText.textContent = 'Map View';
        }
    });
}

// Initialize view toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeViewToggle();
});


// Multi-language functionality
function translatePage(language) {
    currentLanguage = language;
    
    // Update body class for RTL support
    document.body.className = language === 'ar' ? 'rtl' : '';
    
    // Translate all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
    
    // Translate placeholder text
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[language] && translations[language][key]) {
            element.placeholder = translations[language][key];
        }
    });
    
    // Update location dropdown options
    updateLocationDropdown(language);
    
    // Update legend
    updateLegend(language);
    
    // Update view toggle button
    updateViewToggleButton(language);
    
    // Update picture view content
    updatePictureView(language);
    
    // Re-generate location info if a location is selected
    const locationSelect = document.getElementById('location-select');
    if (locationSelect.value) {
        onLocationSelected(locationSelect.value);
    }
}

function updateLocationDropdown(language) {
    const locationSelect = document.getElementById('location-select');
    const currentValue = locationSelect.value;
    
    locationSelect.innerHTML = `
        <option value="" disabled selected>${translations[language].select_location}</option>
        <option value="parking_1">🅿️ ${translations[language].parking_1}</option>
        <option value="academic_area">🎓 ${translations[language].academic_area}</option>
        <option value="athletic_area">⚽ ${translations[language].athletic_area}</option>
        <option value="gym">💪 ├─ ${translations[language].gym}</option>
        <option value="health_center">🏥 ${translations[language].health_center}</option>
        <option value="administrative_area">🏛️ ${translations[language].administrative_area}</option>
        <option value="building_1_p">📋 ├─ Building 1 VPAA side</option>
        <option value="registrar_office">📋 ├─├─ ${translations[language].registrar_office}</option>
        <option value="building_1_v">📋 ├─ Building 1 VPAA side</option>
        <option value="admissions">📋 ├─ Admissions Office</option>
        <option value="housing_department">🏠 ${translations[language].housing_department}</option>
    `;
    
    // Restore selected value
    if (currentValue) {
        locationSelect.value = currentValue;
    }
}

function updateLegend(language) {
    const legendContainer = document.getElementById('legend-items');
    legendContainer.innerHTML = '';
    
    // Current location legend item
    const currentLocationItem = document.createElement('div');
    currentLocationItem.className = 'legend-item';
    currentLocationItem.innerHTML = `
        <div class="legend-symbol legend-current-location">📍</div>
        <div class="legend-label">${translations[language].current_location}</div>
    `;
    legendContainer.appendChild(currentLocationItem);
    
    // Area legend item
    const areaItem = document.createElement('div');
    areaItem.className = 'legend-item';
    areaItem.innerHTML = `
        <div class="legend-symbol legend-area">🏛️</div>
        <div class="legend-label">${translations[language].area}</div>
    `;
    legendContainer.appendChild(areaItem);
    
    // Building legend item
    const buildingItem = document.createElement('div');
    buildingItem.className = 'legend-item';
    buildingItem.innerHTML = `
        <div class="legend-symbol legend-building">🏢</div>
        <div class="legend-label">${translations[language].building}</div>
    `;
    legendContainer.appendChild(buildingItem);
    
    // Office legend item
    const officeItem = document.createElement('div');
    officeItem.className = 'legend-item';
    officeItem.innerHTML = `
        <div class="legend-symbol legend-office">🏪</div>
        <div class="legend-label">${translations[language].office}</div>
    `;
    legendContainer.appendChild(officeItem);
    
    // Path legend item
    const pathItem = document.createElement('div');
    pathItem.className = 'legend-item';
    pathItem.innerHTML = `
        <div style="width: 30px; height: 4px; background-color: #3498db; margin-right: 10px; border-radius: 2px;"></div>
        <div class="legend-label">${translations[language].walking_path}</div>
    `;
    legendContainer.appendChild(pathItem);
    
    // Highlight legend item
    const highlightItem = document.createElement('div');
    highlightItem.className = 'legend-item';
    highlightItem.innerHTML = `
        <div style="width: 30px; height: 30px; border: 2px solid #ffffff; border-radius: 50%; background-color: rgba(255,255,255,0.2); margin-right: 10px;"></div>
        <div class="legend-label">${translations[language].selected_area}</div>
    `;
    legendContainer.appendChild(highlightItem);
}

function updateViewToggleButton(language) {
    const toggleText = document.getElementById('toggle-text');
    const toggleIcon = document.getElementById('toggle-icon');
    
    if (isMapView) {
        toggleText.textContent = translations[language].picture_view;
        toggleIcon.textContent = '🖼️';
    } else {
        toggleText.textContent = translations[language].map_view;
        toggleIcon.textContent = '🗺️';
    }
}

function updatePictureView(language) {
    const pictureView = document.querySelector('.picture-placeholder');
    if (pictureView) {
        pictureView.innerHTML = `
            <h2>${translations[language].campus_picture_view}</h2>
            <div class="placeholder-image">
                <span class="placeholder-icon">🏫</span>
                <p>${translations[language].campus_overview}</p>
                <small>${translations[language].placeholder_text}</small>
            </div>
        `;
    }
}

function initializeLanguageSelector() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            langButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get selected language
            const selectedLanguage = this.getAttribute('data-lang');
            
            // Translate page
            translatePage(selectedLanguage);
        });
    });
}

// Enhanced onLocationSelected function with translation support
function onLocationSelectedWithTranslation(locationId) {
    const physicalLocations = resolveLocation(locationId);
    const location = locations[locationId];
    const lang = currentLanguage;
    
    // Get translated location name and description
    const locationName = translations[lang][locationId] || location.name;
    const locationDesc = translations[lang][locationId + '_desc'] || location.description || translations[lang].no_description || 'No description available';
    let infoHTML = `
        <div class="location-details">
            <div class="location-header">
                <span class="location-icon">${location.icon}</span>
                <h2>${locationName}</h2>
            </div>
            <p class="location-description">${locationDesc}</p>
    `;
    // Add phone number if available
    if (location.phone) {
        infoHTML += `
            <div class="location-section">
                <h4>${translations[lang].phone}:</h4>
                <p class="location-phone">${location.phone}</p>
            </div>
        `;
    }
    // Add facilities if available
    if (location.facilities && location.facilities.length > 0) {
        infoHTML += `
            <div class="location-section">
                <h4>${translations[lang].facilities}:</h4>
                <ul class="facilities-list">
                    ${location.facilities.map(facility => `<li>${facility}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // Add hours if available
    if (location.hours) {
        infoHTML += `
            <div class="location-section">
                <h4>${translations[lang].hours}:</h4>
                <p class="location-hours">${location.hours}</p>
            </div>
        `;
    }
    
    // Add capacity if available
    if (location.capacity) {
        infoHTML += `
            <div class="location-section">
                <h4>${translations[lang].capacity}:</h4>
                <p class="location-capacity">${location.capacity}</p>
            </div>
        `;
    }
    
    // Add children locations if this is a parent area
    if (location.children && location.children.length > 0) {
        infoHTML += `
            <div class="location-section">
                <h4>${translations[lang].buildings_offices}:</h4>
                <div class="children-dropdown">
                    <select id="children-select" class="children-select">
                        <option value="" disabled selected>${translations[lang].select_building}</option>
                        ${location.children.map(childId => {
                            const child = locations[childId];
                            const childName = translations[lang][childId] || child.name;
                            return child ? `<option value="${childId}">${childName}</option>` : '';
                        }).join('')}
                    </select>
                </div>
            </div>
        `;
    }
    
    // Show parent relationship if this is a child location
    if (location.parent) {
        const parent = locations[location.parent];
        const parentName = translations[lang][location.parent] || parent.name;
        infoHTML += `
            <div class="location-section">
                <h4>${translations[lang].part_of}:</h4>
                <p class="parent-location">
                    <span class="parent-icon">${parent.icon}</span>
                    ${parentName}
                </p>
            </div>
        `;
    }
    
    infoHTML += '</div>';
    
    document.getElementById('location-info').innerHTML = infoHTML;
    
    // Add event listener for children dropdown if it exists
    const childrenSelect = document.getElementById('children-select');
    if (childrenSelect) {
        childrenSelect.addEventListener('change', function() {
            if (this.value) {
                onLocationSelectedWithTranslation(this.value);
                map.flyTo([locations[this.value].lat, locations[this.value].lng], 19);
            }
        });
    }
    
    // Update path and highlights
    highlightLocation(locationId);
    updateMapWithPath(locationId);
    generateQRCode(locationId);
}

// Override the original function
onLocationSelected = onLocationSelectedWithTranslation;

// Initialize language functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguageSelector();
    translatePage('en'); // Set default language
});

