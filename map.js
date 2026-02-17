let map;
let currentLocationMarker;
let pathLayer;
let highlightCircle = null;
let currentHighlight = null;
let previewHighlight = null;
let destinationIdNew = null;
// Shared map state and highlight layers

// Campus locations
const locations = {
    
    
    parking_1: {
        name: 'Parking 1', 
        lat: 33.53765498423474, 
        lng: -5.1049750712180435, 
        size: "large",
        icon: '🅿️', 
        radius: 50,
        type: 'parking',
        description: 'Main parking area for visitors and students',
        
        facilities: [],
        children: []
    },
    academic_area: {
        name: 'Academic Area', 
        lat: 33.538753431708265, 
        lng: -5.107700991257563, 
        size: "large",
        icon: '🎓', 
        radius: 80,
        type: 'area',
        description: 'Main academic buildings and lecture halls',
        facilities: [],
        children: []
    },
    sse: {
        name: 'School of Science and Engineering', 
        lat:  33.53854199050638, 
        lng: -5.107021199119052, 
        size: "medium",
        icon: '🎓', 
        radius: 15,
        type: 'area',
        description: 'Dean of SSE: Dr. Salah Al-Majeed',
        facilities: [],
        parent: 'academic_area',

    },
    sba: {
        name: 'School of Business Administration',
        lat: 33.539057559090715,
        lng: -5.108201812122232,
        size: "medium",
        icon: '🎓', 
        radius: 18,
        type: 'area',
        description: 'Dean of SBA: Dr. Lakshmi Goel',
        facilities: [],
        parent: 'academic_area',

    },
    shass: {
        name: 'School of humanities, arts and social sciences',
        lat: 33.538511816880295,
        lng: -5.107714257274234,
        size: "medium",
        icon: '🎓', 
        radius: 18,
        type: 'area',
        description: 'Dean of SHASS: Dr. Asma Abbas',
        facilities: [],
        parent: 'academic_area',

    },
    lc: {
        name: 'Language Center',
        lat: 33.538752794235855,
        lng: -5.107983526706323,
        size: "medium",
        icon: '🎓', 
        radius: 18,
        type: 'area',
        facilities: [],
        parent: 'academic_area',

    },
    library: {
        name: 'Library',//33.53998022753746, -5.107371310007053
        lat: 33.53998022753746,
        lng: -5.107371310007053,
        size: "large",
        icon: '🎓', 
        radius: 25,
        type: 'area',
        facilities: [],
        consideredAs: "library",
        parent: 'academic_area',
        description: 'Main library with extensive collection and study spaces',
    },
    aud17: {
        name: 'Auditorium 17',//33.53770143246429, -5.106580345156357
        lat: 33.53770143246429,
        lng: -5.106580345156357,
        size: "large",
        icon: '🎭', //theater mask
        radius: 15,
        type: 'area',
        facilities: [],

    },
    athletic_area: {
        name: 'Athletic Area', 
        lat: 33.53982118719424, 
        lng: -5.108057817504243, 
        size: "large",
        icon: '⚽', 
        radius: 50,
        type: 'area',
        description: 'Sports facilities and recreational areas',
        facilities: ['Football field', 'Gymnasium', 'Weight room'],
        facilitiesFr: ['Terrain de Football', 'Gymnase', 'Salle de Musculation'],
        facilitiesAr: ['ملعب كرة القدم', 'صالة الألعاب الرياضية', 'غرفة الأثقال'],
        children: ['gym']
    },
    health_center: {
        name: 'Health Center', 
        lat: 33.54037004446834, 
        lng: -5.105539775836056, 
        size: "large",
        icon: '🏥', 
        radius: 30,
        type: 'building',
        description: 'Medical services and health support for students and staff',
        facilities: [],
        phone: '📞0535862057',
        hours: '24/7',
        children: []
    },
    administrative_area: {
    name: 'Administrative Area', 
    lat: 33.5387334164299,  // Updated coordinates
    lng: -5.105954561809246,  // Updated coordinates
    size: "large",
    icon: '🏛️', 
    radius: 50,
    type: 'area',
    description: 'Administrative offices and student services',
    facilities: ['Student services', 'Admissions', 'Financial aid', 'Registrar Office'],
    children: ['building_1_p', 'building_1_v'],
},
    housing_department: {
        name: 'Housing Department', 
        lat: 33.54230929503023, 
        lng: -5.105320202086709, 
        size: "large",
        icon: '🏠', 
        radius: 50,
        type: 'building',
        description: 'Student housing services and dormitory management',
        facilities: ['Housing applications', 'Maintenance requests', 'Resident services'],
        phone: '📞0535862062',
        children: []
    },
    
    registrar_office: {
        name: 'Registrar Office', 
        lat: 33.538585036322445, 
        lng: -5.106267986778564, 
        size: "small",
        icon: '📋', 
        radius: 5,
        type: 'office',
        consideredAs: "registrar_office",
        keywords: ["registrar","office"],
        description: 'Student records, transcripts, and enrollment services',
        facilities: [],
        hours: 'Mon-Fri: 8:30-17:30',
        parent: 'building_1_p',
    },
    gym: {
        name: 'Fitness Center',
        lat: 33.54054557700686,
        lng: -5.109332081948263,
        size: "medium",
        icon: '💪',
        radius: 25,
        type: 'building',
        
        description: 'Modern fitness center with equipment and classes',
        facilities: ['Weight training', 'Cardio equipment'],
        facilitiesFr: ['Musculation', 'Équipement cardio'],
        facilitiesAr: ['تدريب الأثقال', 'معدات القلب'],
        phone: '📞0535862055',
        hours: 'Mon-Fri: 7:00-22:00, Sat-Sun: 13:00-23:00',
        parent: 'athletic_area'
    },
    building_1_p: {
        name: 'Building 1 President side', 
        lat: 33.538641025276014, 
        lng: -5.106124289698493,
        size: "medium",
        icon: '🏢', 
        radius: 20,
        type: 'building',
        consideredAs: "administrative_area",
        keywords: ["president", "registrar", "office", "financial", "human capital"],
        description: 'Offices for various administrative functions',
        facilities: ['Office of the President', 'Registrar office',"Financial Aid" ,'Human Capital'],
        hours: 'Mon-Fri: 8:30-17:30',
        parent: 'administrative_area',
        children: ['registrar_office']
    },
    building_1_v: {
        name: 'Building 1 VPAA side', 
        lat: 33.538923036359606,
        lng: -5.1057932724734005,
        size: "medium",
        icon: '🏢', 
        radius: 20,
        type: 'building',
        consideredAs: "administrative_area",
        keywords: ["vpaa","office", "buisiness"],
        description: 'Offices for various administrative functions',
        facilities: ['Office of the VPAA', 'Buisiness office'],
        hours: 'Mon-Fri: 8:30-17:30',
        parent: 'administrative_area',
        children: []
    },
     admissions: {
        name: 'Admissions Office', 
        lat: 33.54046049637577, 
        lng: -5.108031686337108,
        size: "medium",
        icon: '🏢', 
        radius: 20,
        type: 'building',
        consideredAs: "admissions",
        keywords: ["admissions","office"],
        description: 'Offices for various administrative functions',
        
        hours: 'Mon-Fri: 8:30-17:30',
        parent: 'administrative_area',
    },
    aud4: {
        name: 'Auditorium 4',
        lat: 33.53901744927488,
        lng: -5.107388521848436,
        size: "medium",
        icon: '🎓',
        radius: 30,
        type: 'auditorium',
        keywords: ["auditorium", "event", "lecture"],
        description: 'Large auditorium for events and lectures',
        parent: 'academic_area',
    },
    sao:{
        name: 'Student Activities Office',
        lat: 33.53918807366786,
        lng: -5.106287397648516,
        size: "medium",
        icon: '🎉',
        radius: 20,
        type: 'office',
        consideredAs: "sao",
        keywords: ["student", "activities", "events"],
        parent: 'administrative_area',
        
    },
    
    cafeteria:{
        name: 'Cafeteria',
        lat: 33.53931328854975,
        lng: -5.106087558775112,
        size: "medium",
        icon: '☕',
        radius: 10,
        type: 'dining',
        parent: 'administrative_area',
        keywords: ["cafetiria", "dining", "food"],
        consideredAs: "administrative_area",
    },
    dining1: {
        name: 'Cossa',
        lat: 33.53941151701617,
        lng: -5.105794323528657,
        size: "large",
        icon: '🍽️',
        radius: 30,
        type: 'dining',
        parent: 'administrative_area',
        keywords: ["dining", "hall", "food","pizzeria"],
        consideredAs: "administrative_area",
    },
    dining2: {
        name: 'Proxirest',
        lat: 33.540557599873544,
        lng: -5.107889022617666,
        size: "large",
        icon: '🍽️',
        radius: 20,
        type: 'dining',
        keywords: ["pizzeria", "food", "snacks"],
    },
    oasp: {
        name: 'Office of Academic Support and Support (OASP)',
        lat: 33.53905838242423,
        lng: -5.106437685867577,
        size: "medium",
        icon: '📋',
        radius: 10,
        type: 'building',
        keywords: ["oasp", "office", "student"],
        consideredAs: "administrative_area",
    },
    oip: {
        name: 'International Academic Opportunities',
        lat: 33.53923189262284,
        lng: -5.107866433620497,
        size: "medium",
        icon: '🌍',
        radius: 10,
        type: 'building',
        keywords: ["oip", "office", "international"],
        
    },
    cle: {
        name: 'Center for Learning Excellence (CLE)',
        lat: 33.537732562503166,
        lng: -5.107925062528437,
        size: "medium",
        icon: '🎓',
        radius: 10,
        type: 'building',
        keywords: ["cle", "center", "learning", "excellence"],
    },
    fye: {
        name: 'First Year Experience (FYE) Center',
        lat: 33.53792435560582,
        lng: -5.1079219498005175,
        size: "medium",
        icon: '🎓',
        radius: 10,
        type: 'building',
        keywords: ["fye", "first year", "experience"],
    },
    sec: {
        name: 'Safety & Security', 
        lat: 33.538816150398794, 
        lng: -5.108588123389089,
        size: "medium",
        icon: '🚓', 
        radius: 10,
        type: 'office',

    },
    its: {
        name: 'Information Technology Services (ITS) ', 
        lat: 33.53871441764737, 
        lng: -5.108501931711258,
        size: "medium",
        icon: '💻', 
        radius: 10,
        type: 'office',
        consideredAs: "sec",

    },
    ee:{
        name: 'Employability and Entrepreneurship', 
        lat: 33.539075460599655, 
        lng: -5.1075329843458,
        size: "medium",
        icon: '💼',
        radius: 10,
        type: 'office',
        keywords: ["employability", "entrepreneurship", "office"],
    },
    finantial_aid:{//33.538506724054976, -5.106190737037273
        name: 'Financial Aid Office', 
        lat:  33.538506724054976,
        lng:  -5.106190737037273,
        size: "small",
        icon: '💰',
        radius: 10,
        type: 'office',
        keywords: ["financial", "aid", "office"],
        consideredAs: "administrative_area",

    },
};
// Primary selection highlight used for the active destination
function highlightLocation(locationId) {
    // Remove previous highlight
    if (currentHighlight) {
        map.removeLayer(currentHighlight);
    }
    if (highlightCircle) {
        map.removeLayer(highlightCircle);
    }
    
    const loc = locations[locationId];
    if (!loc) return;
    
    // Create new highlight (same style as your original)
    currentHighlight = L.circle([loc.lat, loc.lng], {
        radius: loc.radius || 40,
        color: '#ffffff',
        fillColor: '#ffffff',
        fillOpacity: 0.2,
        weight: 2
    }).addTo(map);
}

// Lightweight hover preview so search results can "peek" on the map
function previewLocation(locationId) {
    if (previewHighlight) {
        map.removeLayer(previewHighlight);
    }

    const loc = locations[locationId];
    if (!loc) return;

    previewHighlight = L.circle([loc.lat, loc.lng], {
        radius: (loc.radius || 40) * 0.8,
        color: '#3498db',
        fillColor: '#3498db',
        fillOpacity: 0.15,
        weight: 2
    }).addTo(map);
}

function clearPreviewLocation() {
    if (previewHighlight) {
        map.removeLayer(previewHighlight);
        previewHighlight = null;
    }
}

// Map virtual/alias locations to the physical ids used for routing
function resolveLocation(locationId) {
    const location = locations[locationId];
    
    // If this is a virtual location, find all physical implementations
    if (!location.lat) {
        return Object.keys(locations).filter(
            id => locations[id].consideredAs === locationId
        );
    }
    
    // If this location is an alias, return what it's considered as
    if (location.consideredAs) {
        return [location.consideredAs];
    }
    
    // Regular physical location
    return [locationId];
}
function initMap(defaultLocationId) {
    const defaultLocation = locations[defaultLocationId];
    const sizeMapping = {
        small: [15, 15],   // [width, height] in pixels
        medium: [20, 20],
        large: [30, 30]
    };

    // Initialize map centered at default location
    map = L.map('map').setView([33.53944687014948, -5.106774445866627], 17); 
    const welcomeContainer = L.DomUtil.create('div', 'map-welcome');
welcomeContainer.innerHTML = '<div class="map-welcome-box">Welcome to AUI</div>';

// Append to the map's container so it sits above the map
map.getContainer().appendChild(welcomeContainer);

// Prevent Leaflet from treating this element as map-interactive (so clicks still pass through)
L.DomEvent.disableClickPropagation(welcomeContainer);
L.DomEvent.disableScrollPropagation(welcomeContainer);
    // Coordinates of AUI
const auiCoords = [33.53849014139638, -5.111244953616295];

// Create custom label


    // Add tile layer
    // L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    //     subdomains: ['mt0','mt1','mt2','mt3'],
    //     attribution: '© Google Maps',
    // }).addTo(map);
    
    // most similar to apple maps
    // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    //     attribution: 'Tiles &copy; Esri'
    // }).addTo(map);

    // recent changes
    
    // L.tileLayer('https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.png?key=MKNKQkpRAxnJyNL1oMtY', {
    //     attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a>'
    // }).addTo(map);

    // Base map tiles users can switch between
    const baseLayers = {
        
    "Esri World Street": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri'
    }),
    "Google Maps": L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
         subdomains: ['mt0','mt1','mt2','mt3'],
        attribution: '© Google Maps',
    })
};

// Add layer control
L.control.layers(baseLayers).addTo(map);

// Set default
baseLayers["Esri World Street"].addTo(map);
    


    // Add current location marker
    currentLocationMarker = L.marker([defaultLocation.lat, defaultLocation.lng], {
        icon: L.divIcon({
            className: 'location-marker',
            html: '📍',
            iconSize: [30, 30]
        })
    }).addTo(map);
    
    // Add all location markers (skip the current location marker)
    Object.entries(locations).forEach(([id, loc]) => {
        // console.log(id);
        const size = sizeMapping[loc.size] || sizeMapping.medium;
        if (id !== defaultLocationId) {
            const marker= L.marker([loc.lat, loc.lng], {
                icon: L.divIcon({
                    className: 'location-marker',
                    html: `
                    <div style="
                        background-color: #ffffff;
                        width: ${size[0]}px;
                        height: ${size[1]}px;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: white;
                        font-size: ${size[0] * 0.6}px;
                        border: 2px solid white;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                        text-shadow: 0 0 3px rgba(0,0,0,0.3);
                    ">
                    ${loc.icon}
                    </div>
                `,
                    iconSize: size,
                })
            }).addTo(map).bindTooltip(loc.name, { onhover: true, direction: 'top' });
            marker.on('click', function() {
    // Remove previous highlight
    if (highlightCircle) {
        map.removeLayer(highlightCircle);
    }
    
    // Add new highlight circle (aura)
    highlightCircle = L.circle([loc.lat, loc.lng], {
        radius: loc.radius, // Meters (adjust as needed)
        color: '#ffffff', // Stroke color
        fillColor: '#ffffff',
        fillOpacity: 0.2,
        weight: 2
    }).addTo(map);
    
    // Clear search and dropdown
    document.getElementById('location-search').value = "";
    document.getElementById('location-select').value = "";
    
    // Use translation-aware function if it exists
    if (typeof onLocationSelectedWithTranslation === 'function') {
        onLocationSelectedWithTranslation(id);
    } else if (typeof onLocationSelected === 'function') {
        onLocationSelected(id);
    }
    
    // Update global destination ID
    destinationIdNew = id;
});
        }
        
    });

}

// In map.js - Replace your existing updateMapWithPath function

function updateMapWithPath(destinationId) {
    const currentLocation = currentLocationMarker.getLatLng();
    
    // Resolve both start and end locations (virtual ids may map to multiple points)
    const startIds = resolveLocation(urlParams.get('location') || 'administrative_area');
    const endIds = resolveLocation(destinationId);
    
    // Clear previous paths
    if (pathLayer) {
        map.removeLayer(pathLayer);
    }
    
    // Helper function to calculate distance between two coordinates in meters
    function getDistance(coord1, coord2) {
        const R = 6371e3; // Earth's radius in meters
        const lat1 = coord1[0] * Math.PI / 180;
        const lat2 = coord2[0] * Math.PI / 180;
        const deltaLat = (coord2[0] - coord1[0]) * Math.PI / 180;
        const deltaLng = (coord2[1] - coord1[1]) * Math.PI / 180;
        
        const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
                  Math.cos(lat1) * Math.cos(lat2) *
                  Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        
        return R * c;
    }
    
    // Helper function to interpolate points at constant distance intervals
    function interpolatePointsByDistance(coord1, coord2, distanceMeters = 10) {
        const totalDistance = getDistance(coord1, coord2);
        const numPoints = Math.floor(totalDistance / distanceMeters);
        
        const points = [];
        for (let i = 0; i <= numPoints; i++) {
            const ratio = i / numPoints;
            const lat = coord1[0] + (coord2[0] - coord1[0]) * ratio;
            const lng = coord1[1] + (coord2[1] - coord1[1]) * ratio;
            points.push([lat, lng]);
        }
        return points;
    }
    
    // Create paths for all combinations
    startIds.forEach(startId => {
        endIds.forEach(endId => {
            const startLoc = locations[startId];
            const endLoc = locations[endId];
            
            const pathCoordinates = getPathCoordinates(
                startLoc.lat, startLoc.lng,
                endLoc.lat, endLoc.lng
            );
            
            // Interpolate points at constant distance between each segment
            const densePathCoordinates = [];
            for (let i = 0; i < pathCoordinates.length - 1; i++) {
                const segmentPoints = interpolatePointsByDistance(pathCoordinates[i], pathCoordinates[i + 1], 10);
                densePathCoordinates.push(...segmentPoints.slice(0, -1)); // Avoid duplicating endpoint
            }
            densePathCoordinates.push(pathCoordinates[pathCoordinates.length - 1]); // Add final point
            
            // Draw path as points instead of a line
            pathLayer = L.layerGroup();
            densePathCoordinates.forEach((coord, index) => {
                L.circleMarker(coord, {
                    radius: 4,
                    fillColor: '#3498db',
                    color: '#2980b9',
                    weight: 1,
                    opacity: 0.8,
                    fillOpacity: 0.7
                }).addTo(pathLayer);
            });
            pathLayer.addTo(map);
        });
    });
    
    // Fit map to show all paths
    if (pathLayer) {
        map.fitBounds(pathLayer.getBounds());
    }
}
function getDestinationIdNew() {
    return destinationIdNew;
}