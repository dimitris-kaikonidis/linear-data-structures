class NodeExample {
    constructor(data) {
        this._data = data;
        this._next = null;
    }
    get nextNode() {
        return this._next;
    }
    set nextNode(node) {
        this._next = node;
    }
}
const node1 = new NodeExample("a");
const node2 = new NodeExample("b");
const node3 = new NodeExample("c");
node1.nextNode = node2;
node2.nextNode = node3;
console.log(node1.nextNode);
module.exports = NodeExample;
