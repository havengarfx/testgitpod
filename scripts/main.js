document.addEventListener('load', start);
let inputSearch = null;

function start() {
  console.log('start');
  inputSearch = document.querySelector('#input-search');
  console.log(inputSearch);
  preventFormSubmit();
  activateInput();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  let formSearchUsers = document.querySelector('form');
  formSearchUsers.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
  inputSearch.focus();
  inputSearch.addEventListener('keyup', handleFormTyping);
}
