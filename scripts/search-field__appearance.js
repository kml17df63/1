
document.getElementById('search-button').onclick = function() {
    const searchField = document.getElementById('search-field');
    if (searchField.classList.contains('show-search')) {
        document.getElementById('search-field').classList.remove('show-search');
    }
    else {
        document.getElementById('search-field').classList.add('show-search');
        document.getElementById('search-field').focus();
    }
};