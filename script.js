const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus();

    
})

// Get references to the input field, search button, and history list
const searchInput = document.querySelector('input');
const searchButton = document.querySelector('.btn');
const historyList = document.getElementById('history-list');

// Event listener for the search button
searchButton.addEventListener('click', function() {
  const searchTerm = searchInput.value.trim();
  
  if (searchTerm !== '') {
    // Add the search term to the history list
    addToHistory(searchTerm);
    
    // Perform the search or other relevant actions
    performSearch(searchTerm);
    
    // Clear the input field
    searchInput.value = '';
  }
});

// Function to add search term to history list
function addToHistory(term) {
  const listItem = document.createElement('li');
  listItem.textContent = term;
  historyList.appendChild(listItem);
  
  // Optionally, you could store the search history in local storage or a database
}

