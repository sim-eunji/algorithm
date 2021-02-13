import LinkedListNode from './LinkedListNode'
import Comparator from '../utils/Comparator';

export default class LinkedList {
  constructor(comparatorFunction) {
    this.head = null
    this.tail = null
    this.compare = new Comparator(comparatorFunction)
  }

  /**
  * @param {*} data
  * @return {LinkedList}
  */
  append(data) {
    const newNode = new LinkedListNode(data)

    // 헤드가 없으면 새 노드를 헤드로! 
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    this.tail.next = newNode
    this.tail = newNode

    return this
  }

  /**
  * @param {*} data
  * @return {LinkedList}
  */
  delete(data) {
    if (!this.head) {
      return null
    }

    let deleteNode = null

    // 헤드를 삭제해야 하는 경우 
    while (this.head && this.compare.equal(this.head.data, data)) {
      deletedNode = this.head
      this.head = this.head.next
    }
    let currentNode = this.head

    if (currentNode !== null) {
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.data, data)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    // 꼬리를 삭제해야하는 경우 
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }


}