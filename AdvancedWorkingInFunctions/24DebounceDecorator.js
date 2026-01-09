function debounce(func, ms) {
  let timerId;
  return function(){
      clearTimeout(timerId); //cancel previous scheduled call
      timerId = setTimeout(()=>func.apply(this, arguments), ms); //scheduled new call
  }
}
let f = debounce(alert, 1000);

f("a");
setTimeout( () => f("b"), 200);
setTimeout( () => f("c"), 500);
// debounced function waits 1000ms after the last call and then runs: alert("c")

/*
debounce meaning here: functioin will run only when there is no activity for next 1000ms
when f("a") is called then ther is nothing to cancel so it get scheduled for 1000ms (i.e. at t= 1000ms), 
when f("b") is called f("a") is cancelled, and f("b") is scheduled for 200ms (i.e. at t=1200ms);
when f("c") is called, f("b") is cancelled and f("c") is scheduled for 500ms (i.e. at t= 1500ms);
since there is no more call hence alert(c) will happen at t = 1500ms (i.e. 1000ms after last call schedule which is of 500ms)
*/
