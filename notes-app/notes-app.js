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

const now = new Date();
const timestamp = now.getTime();

const myDate = new Date(timestamp);
console.log(myDate.getFullYear());

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minutes: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);

const dateOne = new Date('March 1 2025 12:00:00');
const dateTwo = new Date();
const dateOneTimestamp = dateOne.getTime();
const dateTwoTimestamp = dateTwo.getTime();

if(dateOneTimestamp < dateTwoTimestamp){
    console.log(dateOne.toString());
} else if(dateTwoTimestamp < dateOneTimestamp){
    console.log(dateTwo.toString());
}