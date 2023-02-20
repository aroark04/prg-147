/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
const currentDate = new Date();
document.querySelector('p').textContent = currentDate;
// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
const today = new Date(); 
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate(); 
document.querySelector('#today').textContent = `${year}-${month}-${day}`;
// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
const birthday = new Date('2004-04-13');
document.querySelector('#birthday').textContent = birthday;
// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
const currentDate1 = new Date();
const isoDate = currentDate.toISOString();
document.querySelector('#iso').textContent = isoDate;


//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
const currentDate3 = new Date();
const dateFormat1 = currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
const dateFormat2 = currentDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
const dateFormat3 = currentDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
document.querySelector('#date1').textContent = dateFormat1;
document.querySelector('#date2').textContent = dateFormat2;
document.querySelector('#date3').textContent = dateFormat3;

//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
const currentDate4 = new Date();
const getDate1 = currentDate.getFullYear();
const getDate2 = currentDate.getMonth() + 1;
const getDate3 = currentDate.getDate();
const getDate4 = currentDate.getDay();
document.querySelector('#get1').textContent = getDate1;
document.querySelector('#get2').textContent = getDate2;
document.querySelector('#get3').textContent = getDate3;
document.querySelector('#get4').textContent = getDate4;

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
const currentDate5 = new Date();
currentDate.setFullYear(2024);
currentDate.setMonth(11);
currentDate.setDate(25);
currentDate.setHours(12);
const set1 = currentDate.getFullYear();
const set2 = currentDate.getMonth() + 1;
const set3 = currentDate.getDate();
const set4 = currentDate.getHours();
document.querySelector('#set1').textContent = set1;
document.querySelector('#set2').textContent = set2;
document.querySelector('#set3').textContent = set3;
document.querySelector('#set4').textContent = set4;