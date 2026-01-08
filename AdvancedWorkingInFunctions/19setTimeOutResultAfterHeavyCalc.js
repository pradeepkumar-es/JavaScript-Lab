let i = 0;

setTimeout(() => alert(i), 100); // ?

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}
//since every setTimeout run after current code execution finished so loop will update i to 100000000, so after 100ms of loop finish, it will alert 100000000
//timer will start at the moment of the call of setTimeout, mean while loop start and if takes longer than 100ms then after loop setTimeout will alert immediately after 
