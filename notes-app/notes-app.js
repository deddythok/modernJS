const notes = getSavedNotes();


// object untuk menampung hasil filteran dari input pengguna
const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

// panggil fungsi renderNotes utk menampilkan keseluruhan notes yang belum di filter
renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuid.v4();
    const timestamp = moment().valueOf();
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    });
    saveNotes(notes);
    location.assign(`/edit.html#${id}`);
});

// menerapkan filter dan me-render notes yang sudah difilter
document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
});


window.document.addEventListener('storage', (e) => {
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    }
});


