let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

//using a loop
function printList(list) {
    while (list) {
        console.log(list.value);
        if (list.next == null) return;
        list = list.next;
    }
}
// printList(list); // 1 2 3 4

//using recursion
function printList2(list) {
    if(list == null) {
        return;
    }
    console.log(list.value);
    printList2(list.next)
}
// printList2(list); // 1 2 3 4

//What’s better: with recursion or without it?
//without recursion is better bcz it uses less memory resources in the call stack

//using a loop, output in reverse order
function printList3(list) {
    let arr = [];
    console.log("hello")
    while (list) {
        arr.unshift(list.value);
        // console.log(list.value);
        // if (list.next == null) return; //this will get out of the function
        if (list.next == null) break; //this will get out of the loop only
        list = list.next;
    }
    for (let data of arr) { // 4 3 2 1
        console.log(data)
    } 
    // console.log("hello")
}
// printList3(list); // 


//using recursion, output in reverse order
function printList4(list) {
    if(list.next == null) {
        console.log(list.value);
        return;
    }else{
        printList4(list.next);
        console.log(list.value)
    }
}
printList4(list); // 4 3 2 1
