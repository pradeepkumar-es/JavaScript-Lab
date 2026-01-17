/*
Finally or just the code?
importance: 5
Compare the two code fragments.

The first one uses finally to execute the code after try...catch:

try {
  work work
} catch (err) {
  handle errors
} finally {
  cleanup the working space
}
The second fragment puts the cleaning right after try...catch:

try {
  work work
} catch (err) {
  handle errors
}

cleanup the working space
We definitely need the cleanup after the work, doesn’t matter if there was an error or not.

Is there an advantage here in using finally or both code fragments are equal? If there is such an advantage, then give an example when it matters.
*/

/*
finally will always execute in either case of try and catch which is necessary to cleanup
but when cleanup is outside try catch, then when error happen in try code will jump to catch, and if any error happen like can't handle error in catch 
then  after it no code is executed
hence cleanup will not execute in 2nd case. which is problem.
finally will either execute before return from try or before any error that can not be handled, or after catch normal error
*/
/*
explanation
The difference becomes obvious when we look at the code inside a function.

The behavior is different if there’s a “jump out” of try...catch.

For instance, when there’s a return inside try...catch. The finally clause works in case of any exit from try...catch, even via the return statement: right after try...catch is done, but before the calling code gets the control.

function f() {
  try {
    alert('start');
    return "result";
  } catch (err) {
    /// ...
  } finally {
    alert('cleanup!');
  }
}

f(); // cleanup!
…Or when there’s a throw, like here:

function f() {
  try {
    alert('start');
    throw new Error("an error");
  } catch (err) {
    // ...
    if("can't handle the error") {
      throw err;
    }

  } finally {
    alert('cleanup!')
  }
}

f(); // cleanup!
It’s finally that guarantees the cleanup here. If we just put the code at the end of f, it wouldn’t run in these situations.
*/