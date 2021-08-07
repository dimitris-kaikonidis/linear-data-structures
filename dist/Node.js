export default class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    getNodeData() {
        return this.data;
    }
    getNextNode() {
        return this.next;
    }
    setNextNode(node) {
        this.next = node;
    }
}
