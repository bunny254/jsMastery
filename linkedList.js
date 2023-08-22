//List Node
class ListNode{
    constructor(data){
        this.data=data
        this.next=null
    }
}

//Linked List
class LinkedList{
    constructor(head=null){
        this.head=head
    }
}

let node1=new ListNode(2)
let node2=new ListNode(5)
let node3=new ListNode(7)
let list = new LinkedList(node1)
console.log(list.head.next.data)
