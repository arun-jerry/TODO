// key: slyYiNHQ3ESGgJSTiHDErA
// secret: jx2IQkNtIVZGq2sF5C1GVaoAarwhbotbZKaF13PKESs
var todoItems = {
	"tasks": [
		{
			'name': 'complete to do app',
			'checked': false,
			'id': 1 
		},
		{
			'name': 'complete good reads app',
			'checked': true,
			'id': 2 
		}
	]
}


window.onload = function() {
	showTask();
	var complted = true;
	showTask(complted);
};

function addTask(name) {
  const todo = {
    name,
    checked: false,
    id: Date.now(),
  };
  todoItems.tasks.push(todo);
  showTask();
	var complted = true;
	showTask(complted);
}


var showTask = function(complted = false) {
	const template = document.querySelector("#listing-template").innerHTML;
	const templateScript = Handlebars.compile(template);

	const itemsToDisplay = todoItems.tasks.filter(function(items) {
    return items.checked == complted;
	});

	tasks = {
		'tasks' : itemsToDisplay
	}

	const html = templateScript(tasks);
	const displayType = complted ? document.querySelector("#completed-items-list") : document.querySelector("#to-do-items-list"); 
	displayType.innerHTML =  html;	
} 

const form = document.querySelector('#add-task-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('#task-field');

  const task = input.value.trim();
  if (task !== '') {
    addTask(task);
    input.value = '';
    input.focus();
  }
});

function checkTask(id) {
	const index = todoItems.tasks.findIndex(item => item.id == id);
  todoItems.tasks[index].checked = !todoItems.tasks[index].checked;
	showTask();
	var complted = true;
	showTask(complted);
}

function updateTask(id, element) {
	const index = todoItems.tasks.findIndex(item => item.id == id);
  todoItems.tasks[index].name = document.querySelector("#"+element).value;
	showTask();
	var complted = true;
	showTask(complted);
}

function deleteTask(id) {
	const index = todoItems.tasks.findIndex(item => item.id == id);
	todoItems.tasks.splice(index,1);
	showTask();
	var complted = true;
	showTask(complted);
}