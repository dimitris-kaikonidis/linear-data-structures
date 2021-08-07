export default class Node {
    private data: any;
    private next: Node;

    constructor(data: any) {
        this.data = data;
        this.next = null;
    }

    getNodeData() {
        return this.data;
    }

    getNextNode() {
        return this.next;
    }

    setNextNode(node: Node) {
        this.next = node;
    }
}
