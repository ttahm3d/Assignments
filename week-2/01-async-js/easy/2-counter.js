let count = 0;
function counterWithoutInterval() {
  console.log(count++);
  setTimeout(counterWithoutInterval, 1000);
}

counterWithoutInterval();
