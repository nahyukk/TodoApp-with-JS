// 리스트와 버튼 선언
const list = document.getElementById('list');
const createBtn = document.getElementById('create-btn');

// todo empty array
let todos = [];

// new todo 만들기
createBtn.onclick = function() {
	addNewTodo();
}

function addNewTodo() {
	// new todo
	const item = {
		id: Date.now(), 
		text: '', 
		done : false
	}
	// todos 에 넣어주기
	todos.unshift(item);
	

	// element
	const {itemElement, inputElement, editBtnElement, removeBtnElement} = addTodoElement(item)

	// 요소를 리스트에 넣어주기(앞에서부터)
	list.prepend(itemElement);
	
	// disapled 상태 없애기와 커서 놓기
	inputElement.removeAttribute('disabled');

	inputElement.focus();
	// 저장
	saveToLocalStorage();
}

// item 만들어주기
function addTodoElement(item) {
	// div
	const itemElement = document.createElement('div');
	itemElement.classList.add('item');

	// input - checkbox
	const doneElement = document.createElement('input');
	doneElement.type = 'checkbox';
	doneElement.checked = item.done; 

	if(item.done) {
		itemElement.classList.add('done'); 
	}

	// input - text
	const inputElement = document.createElement('input');
	inputElement.type = 'text';
	inputElement.value = item.text;
	inputElement.setAttribute('disabled', '');

	// div
	const actionsElement = document.createElement('div');
	actionsElement.classList.add('actions');

	// btn
	const editBtnElement = document.createElement('button');
	editBtnElement.classList.add('material-icons');
	editBtnElement.innerText = 'edit';

	const removeBtnElement = document.createElement('button');
	removeBtnElement.classList.add('material-icons', 'remove-btn');
	removeBtnElement.innerText = 'remove_circles';

	// checkbox state check
	doneElement.addEventListener('change', () => {
		item.done = doneElement.checked;

		if(item.done) {
			itemElement.classList.add('done');
		} else {
			itemElement.classList.remove('done');
		}
		// checkbox 상태 저장
		saveToLocalStorage();
	})

	// btn click
	editBtnElement.addEventListener('click', () => {
		inputElement.removeAttribute('disabled');
		inputElement.focus();
	})

	removeBtnElement.addEventListener('click', () => {
	 	todos = todos.filter(t => t.id !== item.id);
		itemElement.remove();
		// 삭제 리스트 상황 저장
		saveToLocalStorage();
	})
	// blur - disabled 상태 만들기
	inputElement.addEventListener('blur', () => {
		inputElement.setAttribute('disabled', '');
		// blur 된 상황 저장
		saveToLocalStorage();
	})

	// text 입력
	inputElement.addEventListener('input', () => {
		item.text = inputElement.value;
	})
	
	// 요소 추가 
	actionsElement.append(editBtnElement);
	actionsElement.append(removeBtnElement);

	itemElement.append(doneElement);
	itemElement.append(inputElement);
	itemElement.append(actionsElement);
	
	// 각 요소 return
	return { itemElement, inputElement, editBtnElement, removeBtnElement }

}

// 데이터 저장, 가져오기, 보여주기
function saveToLocalStorage() {
	const data = JSON.stringify(todos);

	localStorage.setItem('my_todos', data);
}

function loadFromLocalStorage() {
	const data = localStorage.getItem('my_todos');
	if(data) {
		todos = JSON.parse(data);
	}
}

function displayTodos() {
	loadFromLocalStorage();

	for (let i = 0; i < todos.length; i ++) {
		const item = todos[i];
		const { itemElement } = addTodoElement(item);

		list.append(itemElement);
	}	
}
displayTodos();
