// 1. Delete dummy data
// 2. Read and parse the data when the app starts up
// 3. Stringify and write the data when new data is added

let todos = [];

// 1. Setup a div contain for todos
// 2. Setup filters (searchText) and wire up a new filter input to change it
const filters = {
    searchText: '',
    hideCompleted: false
}

const todosJSON = localStorage.getItem('todos');

if(todosJSON !== null){
    todos = JSON.parse(todosJSON);
}

// 3. Create a renderTodos function to render and rerender the latest filtered data
const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function(todo){
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

        return searchTextMatch && hideCompletedMatch;
    });

    const incompleteTodos = filteredTodos.filter(function(todo){
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = '';
    
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector('#todos').appendChild(summary);
    
    // Add a p for each todo above (use text value)
    filteredTodos.forEach(function(todo){
        const p = document.createElement('p');
        p.textContent = todo.text;
        document.querySelector('#todos').appendChild(p);
    }); 
}

renderTodos(todos, filters);


document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});

// 1. Create a form with a single input for todo text
// 2. Setup an submit event listener and cancel the default action
document.querySelector('#new-todo').addEventListener('submit', function(e){
    e.preventDefault();
    // 3. Add a new item to the todos array with that text data (completed value of false)
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    });

    localStorage.setItem('todos', JSON.stringify(todos));
    // 4. Rerender the application
    renderTodos(todos, filters);
    e.target.elements.text.value = '';
});

// 1. Create a checkbox and setup event listener -> "Hide completed"
document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});
// 2. Create new hideCompleted filter (default false)
// 3. Update hideCompleted and rerender list on checkbox change
// 4. Setup renderTodos to remove completed items
     