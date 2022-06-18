import {submitForm} from './modules/submit-form.js';
import {getLocalStorageData} from './modules/load-store.js';
import {deleteBooks} from './modules/delete-books.js';
import {currentDate} from './modules/date.js';

const listMenu = document.querySelector('#list-menu');
const formMenu = document.querySelector('#form-menu');
const contactMenu = document.querySelector('#contact-menu');
const formSec = document.querySelector('#add-new');
const listSec = document.querySelector('#awesome-book');
const contSec = document.querySelector('#contact');

listMenu.addEventListener('click', () => {
  formSec.style.display = 'none';
  contSec.style.display = 'none';
  listSec.style.display = 'block';
});

formMenu.addEventListener('click', () => {
  formSec.style.display = 'block';
  contSec.style.display = 'none';
  listSec.style.display = 'none';
});

contactMenu.addEventListener('click', () => {
  formSec.style.display = 'none';
  contSec.style.display = 'block';
  listSec.style.display = 'none';
});

let awesomeBook = document.getElementById('awesome-book');
awesomeBook.style.display = 'none';
let bttn = document.getElementById('bttn');
let bookList = [];

bttn.onclick = () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  submitForm(title.value, author.value, bookList, awesomeBook);
};

if (localStorage.getItem('bookdata') != null) {
  getLocalStorageData(awesomeBook);
}

const deleteBookObj = document.querySelectorAll('.remove-book');
deleteBookObj.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    deleteBooks(trigger.dataset.bookid, awesomeBook);
  });
});

window.onload = currentDate();