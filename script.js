// Main application logic
let currentFilter = 'all';
let allResults = directoryData;

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Display all results initially
    displayResults(directoryData);
    updateResultCount(directoryData.length);
    
    // Set up event listeners
    setupEventListeners();
}

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearBtn');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Search input
    searchInput.addEventListener('input', handleSearch);
    
    // Clear button
    clearBtn.addEventListener('click', clearSearch);
    
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayResults(filterByCategory(directoryData, currentFilter));
        return;
    }
    
    // Search across all fields
    const results = directoryData.filter(entry => {
        const officeName = entry.officeName.toLowerCase();
        const localNumber = entry.localNumber.toLowerCase();
        const phoneNumber = entry.phoneNumber.toLowerCase();
        const building = entry.building.toLowerCase();
        const category = entry.category.toLowerCase();
        const keywords = entry.keywords.toLowerCase();
        
        return officeName.includes(searchTerm) ||
               localNumber.includes(searchTerm) ||
               phoneNumber.includes(searchTerm) ||
               building.includes(searchTerm) ||
               category.includes(searchTerm) ||
               keywords.includes(searchTerm);
    });
    
    // Apply category filter if active
    const filteredResults = filterByCategory(results, currentFilter);
    
    // Sort by relevance
    const sortedResults = sortByRelevance(filteredResults, searchTerm);
    
    displayResults(sortedResults);
    updateResultCount(sortedResults.length);
}

function sortByRelevance(results, searchTerm) {
    return results.sort((a, b) => {
        // Exact match in office name
        const aExact = a.officeName.toLowerCase() === searchTerm;
        const bExact = b.officeName.toLowerCase() === searchTerm;
        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;
        
        // Starts with search term
        const aStarts = a.officeName.toLowerCase().startsWith(searchTerm);
        const bStarts = b.officeName.toLowerCase().startsWith(searchTerm);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        
        // Local number match
        const aLocal = a.localNumber === searchTerm;
        const bLocal = b.localNumber === searchTerm;
        if (aLocal && !bLocal) return -1;
        if (!aLocal && bLocal) return 1;
        
        // Alphabetical
        return a.officeName.localeCompare(b.officeName);
    });
}

function handleFilter(e) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    currentFilter = e.target.dataset.category;
    const searchInput = document.getElementById('searchInput');
    
    // Trigger search with current filter
    if (searchInput.value.trim() !== '') {
        handleSearch({ target: searchInput });
    } else {
        const filteredData = filterByCategory(directoryData, currentFilter);
        displayResults(filteredData);
        updateResultCount(filteredData.length);
    }
}

function filterByCategory(data, category) {
    if (category === 'all') {
        return data;
    }
    return data.filter(entry => entry.category === category);
}

function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = '';
    
    const filteredData = filterByCategory(directoryData, currentFilter);
    displayResults(filteredData);
    updateResultCount(filteredData.length);
    searchInput.focus();
}

function displayResults(results) {
    const resultsGrid = document.getElementById('resultsGrid');
    
    if (results.length === 0) {
        resultsGrid.innerHTML = `
            <div class="no-results">
                <h3>No results found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    resultsGrid.innerHTML = results.map(entry => createResultCard(entry)).join('');
}

function createResultCard(entry) {
    const categoryClass = getCategoryClass(entry.category);
    
    return `
        <div class="result-card">
            <h3>${entry.officeName}</h3>
            ${entry.localNumber ? `
                <div class="result-detail">
                    <span class="result-label">Local:</span>
                    <span class="result-value">${entry.localNumber}</span>
                </div>
            ` : ''}
            ${entry.phoneNumber ? `
                <div class="result-detail">
                    <span class="result-label">Phone:</span>
                    <span class="result-value">${entry.phoneNumber}</span>
                </div>
            ` : ''}
            ${entry.building ? `
                <div class="result-detail">
                    <span class="result-label">Building:</span>
                    <span class="result-value">${entry.building}</span>
                </div>
            ` : ''}
            <span class="category-badge ${categoryClass}">${entry.category}</span>
        </div>
    `;
}

function getCategoryClass(category) {
    const categoryMap = {
        'Academic': 'category-Academic',
        'Administration': 'category-Administration',
        'Security': 'category-Security',
        'Health': 'category-Health',
        'Guidance': 'category-Guidance',
        'Finance': 'category-Finance',
        'Maintenance': 'category-Maintenance',
        'Faculty': 'category-Faculty',
        'Registrar': 'category-Registrar',
        'Library': 'category-Library'
    };
    
    return categoryMap[category] || 'category-default';
}

function updateResultCount(count) {
    const resultCount = document.getElementById('resultCount');
    const totalCount = directoryData.length;
    
    if (count === totalCount) {
        resultCount.textContent = `Showing all ${totalCount} entries`;
    } else {
        resultCount.textContent = `Showing ${count} of ${totalCount} entries`;
    }
}
