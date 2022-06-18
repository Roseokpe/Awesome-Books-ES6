import {DateTime} from './luxon.js';

export let currentDate = () => {
  document.querySelector('.date').innerHTML = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);
   setTimeout(currentDate, 1000);
};
