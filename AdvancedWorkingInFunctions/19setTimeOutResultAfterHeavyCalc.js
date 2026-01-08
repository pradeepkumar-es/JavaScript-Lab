let i = 0;

setTimeout(() => alert(i), 100); // ?

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}
//since every setTimeout run after current code execution finished so loop will update i to 100000000, so after 100ms of loop finish, it will alert 100000000
