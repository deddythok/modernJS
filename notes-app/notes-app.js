const notes = getSavedNotes();


// object untuk menampung hasil filteran dari input pengguna
const filters = {
    searchText: ''
}

// panggil fungsi renderNotes utk menampilkan keseluruhan notes yang belum di filter
renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e){
    const id = uuid.v4();
    notes.push({
        id: id,
        title: '',
        body: ''
    });
    saveNotes(notes);
    location.assign(`/edit.html#${id}`);
});

// menerapkan filter dan me-render notes yang sudah difilter
document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value);
});


window.document.addEventListener('storage', function(e){
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    }
});

// const now = moment();
// now.subtract(1, 'week').subtract(20, 'days');
// console.log(now.format('MMMM Do, YYYY '));
// console.log(now.fromNow());
// const nowTimestamp = now.valueOf();
// console.log(moment(nowTimestamp).toString());   

const birthday = moment();
birthday.year(1983).month(9).date(25);
console.log(birthday.format('MMM D, YYYY'));


