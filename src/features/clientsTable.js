document.getElementById('dropdownActionButton').addEventListener('click', function() {
    const dropdown = document.getElementById('dropdownAction');
    dropdown.classList.toggle('hidden'); 
});

document.getElementById('table-search-users').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase(); 
    const rows = document.querySelectorAll('table tbody tr');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            row.style.display = ''; //
        } else {
            row.style.display = 'none'; 
        }
    });
});

