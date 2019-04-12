// ============================================================================
// Interview Problem: Linked List Intersection
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Write a function linkedListIntersection that returns the node at which the 
// intersection of two linked lists begins, or null if there is no such 
// intersection.
//
// ---------- 
// Example 1:
// ----------
// 
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1,list2) should return D 
// as the node of intersection.
// 
//    A → B → C
//             ↘
//               D → E → F
//             ↗
//        X → Y
//
// ---------- 
// Example 2:
// ----------
//
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1, list2) should return null 
// as there is no point of intersection.
// 
//    A → B → C → D
//
//    X → Y → Z
// 
// -----------
// Let's code!
// -----------
// The length attribute is broken in your class
// function linkedListIntersection(list1, list2) {
//   // TODO: Implement the hasCycle function!

//   let count1 = goodLength(list1.head);
//   let count2 = goodLength(list2.head);
//   let countDiff = Math.abs(count1 - count2)

//   let largerList = count2 > count1 ? list2 : list1;
//   let smallerList = count2 > count1 ? list1 : list2;

//   for (let i = countDiff; i < goodLength(largerList); i++) {
//     console.log("larger")
//     console.log(largerList.get(i))
//     console.log("smaller")
//     console.log(smallerList.get(i))
//     if (largerList.get(i) === smallerList.get(i - countDiff)) {
//       return smallerList.get(i);
//     }
//   }
//   return goodLength(smallerList);
// }

// function goodLength(list) {
//   let counter = 0;
//   while (list) {
//     list = list.next;
//     counter++;
//   }
//   return counter;
// }

function linkedListIntersection(list1, list2) {
  let temp = list2.head;
  while (list1.head) {
    while (list2.head) {
      if (list1.head === list2.head) {
        return list1.head;
      }
      list2.head = list2.head.next;
    }
    list1.head = list1.head.next;
    list2.head = temp;
  }
  return null;
}

// ----------------------------------------
// Given: Singly Linked List - Do Not Edit!
// ----------------------------------------
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

// --------------------------------------
// Helper For Testing Only - Do Not Edit!
// --------------------------------------
var stringify = function(list) {
  var result = [];
  while(list !== null) {
    result.push(list.value);
    list = list.next;
  }
  return result.join("");
}

exports.Node = Node;
exports.LinkedList = LinkedList;
exports.linkedListIntersection = linkedListIntersection;
exports.stringify = stringify;

let list1;
let list2;
list1 = new LinkedList();
list2 = new LinkedList();

let nodeD;
let nodeY;

list1.addToTail('A');
list1.addToTail('B');
list1.addToTail('C');
list1.addToTail('D');
list1.addToTail('E');
list1.addToTail('F');

list2.addToTail('X');
list2.addToTail('Y');

nodeD = list1.get(3);
nodeY = list2.get(1);

nodeY.next = nodeD;

// console.log(count2);
console.log(linkedListIntersection(list1, list2));
// console.log(list1.get(1));