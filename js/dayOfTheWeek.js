//This file contains functions that can be used to
//create the days of the week and display them on 
//the page 



//Function to create the days of the week
const dayOfTheWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//variable to hold the current date
const currentDate = new Date();

//variable to hold the current day of the week and the date
const currentDayIndex = currentDate.getDay();

//variable to hold the current day index

const currentDayOfTheWeek = dayOfTheWeek[currentDayIndex];

const currentDayElement = document.querySelector('[data-testId = "currentDayOfTheWeek"]');
    currentDayElement.textContent = `Today is ${currentDayOfTheWeek}`;