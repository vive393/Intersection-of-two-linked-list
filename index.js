var h1 = null, h2 = null;
var dummyIntersected = null;
var tail = null;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

// printing list
var out = [];
function printList(head) {
  var p = head;
  while (p != null) {
    out.push(p.data);
    p = p.next;
  }
}

// Inserting elements into list
function push(data) {
  var temp = new Node(data);
  if (dummyIntersected == null) {
    dummyIntersected = temp;
    tail = temp;
  } else {
    tail.next = temp;
    tail = temp;
  }
}

//Find intersection of h1 and h2
function findIntersection() {
  // pointers for iterating
  var ptrh1 = h1, ptrh2 = h2

  while (ptrh1 != null && ptrh2 != null) {
    if (ptrh1.data == ptrh2.data) {
      // Add to intersected
      push(ptrh1.data);
      ptrh1 = ptrh1.next;
      ptrh2 = ptrh2.next;
    } else if (ptrh1.data < ptrh2.data) ptrh1 = ptrh1.next;
    else ptrh2 = ptrh2.next;
  }
}



// MAIN

function mainFunction() {
  const lst1 = document.getElementById("l1").value;
  const lst2 = document.getElementById("l2").value;

  // Making first linked list from inp text l1
  for (let i = 0; i < lst1.length; i++) {
    var curr = lst1[i];
    var nextToCurr = lst1[i+1]
    if (curr != "," && curr != " " && (nextToCurr=="," || nextToCurr==" ")) {
      //filtering out numbers here
      if (h1 == null) {
        h1 = new Node(parseInt(curr));
      } else {
        let p1 = h1;
        while (p1.next != null) p1 = p1.next;
        p1.next = new Node(parseInt(curr));
      }
    }
    else if (curr != "," && curr != " " && (nextToCurr!="," || nextToCurr!=" ")) { //detecting >1 digit input
      curr = curr*10+parseInt(nextToCurr)
      // console.log(curr)
      i++
      //filtering out numbers here
      if (h1 == null) {
        h1 = new Node(parseInt(curr));
      } else {
        let p1 = h1;
        while (p1.next != null) p1 = p1.next;
        p1.next = new Node(parseInt(curr));
      }
      
    }
    // console.log(curr)
  }

  // Making second linked list from inp text l2
  for (let i = 0; i < lst2.length; i++) {
    var curr = lst2[i]
    var nextToCurr = lst2[i+1]
    if (curr != "," && curr != " " && (nextToCurr=="," || nextToCurr==" ")) {
      if (h2 == null) {
        h2 = new Node(parseInt(curr));
      } else if (h2 != null) {
        let p1 = h2;
        while (p1.next != null) p1 = p1.next;
        p1.next = new Node(parseInt(curr));
      }
    }
    else if (curr != "," && curr != " " && (nextToCurr!="," || nextToCurr!=" ")) {
      curr = curr*10+parseInt(nextToCurr)
      // console.log(curr)
      i++
      //filtering out numbers here
      if (h2 == null) {
        h2 = new Node(parseInt(curr));
      } else {
        let p1 = h2;
        while (p1.next != null) p1 = p1.next;
        p1.next = new Node(parseInt(curr));
      }
    }
    // console.log(curr)
  }

  // Function call for intersection
  findIntersection();

  //print
  printList(dummyIntersected);

  document.getElementById("out").innerHTML="Common elements:  ";
  if(out.length==0) document.getElementById("out").innerHTML+="None found";
  else document.getElementById("out").innerHTML+= document.getElementById("out").innerHTML = out.join(", ");
}




function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}