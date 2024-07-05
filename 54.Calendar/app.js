//month
const monthEl = document.querySelector(".month");
//day
const dayEl = document.querySelector(".day");
//date
const dateEl = document.querySelector(".date");
//year
const yearEl = document.querySelector(".year");

// console.log(month);
// console.log(day);
// console.log(date);
// console.log(year);

const date = new Date();

// monthEl.innerHTML = date.getMonth();
//if we use this then we are going to get a number of that month
//so instead,
monthEl.innerHTML = date.toLocaleDateString("en", {
  month: "long",
});

dayEl.innerHTML = date.toLocaleDateString("en", {
  weekday: "long",
});

dateEl.innerHTML = date.getDate();

yearEl.innerHTML = date.getFullYear();
