const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');

messageOne.textContent = 'From Javascript';

const messageTwo = document.querySelector('#message-2');
messageTwo.textContent = '';

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  messageTwo.textContent = 'Loading Message';

  fetch(`http://localhost:3000/weather?address=${search.value}`).then((response) => {
    response.json().then((data) => {
      if(data.error){
        console.log(data.error);
        messageTwo.textContent = data.error;
      } else {
        console.log(data.location);
        console.log(data.forecast);
        messageTwo.textContent = data.location + ". " + data.forecast;
      }
    });
  });
})