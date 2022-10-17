class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}

class BinarySearchTree {
    constructor() {
        this.rootTree = null;
    }

    root() {
        return this.rootTree;
    }

    add(data) {
        this.rootTree = addWithin(this.rootTree, data);

        function addWithin(node, data) {
            if (!node) {
                return new Node(data);
            }

            if (node.data === data) {
                return node;
            }

            if (data < node.data) {
                node.left = addWithin(node.left, data);
            } else {
                node.right = addWithin(node.right, data);
            }

            return node;
        }
    }

    has(data) {
        return searchWithin(this.rootTree, data);

        function searchWithin(node, data) {
            if (!node) {
                return false;
            }

            if (node.data === data) {
                return true;
            }

            return data < node.data ?
                searchWithin(node.left, data) :
                searchWithin(node.right, data);
        }
    }

    find(data) {
        return findWithin(this.rootTree, data);

        function findWithin(node, data) {
            if (!node) {
                return null;
            }

            if (node.data === data) {
                return node;
            }

            return data < node.data ?
                findWithin(node.left, data) :
                findWithin(node.right, data);
        }
    }

    remove(data) {
        this.rootTree = removeNode(this.rootTree, data);

        function removeNode(node, data) {
            if (!node) {
                return null;
            }

            if (data < node.data) {
                node.data = removeNode(node.left, data);
                return node;
            } else if (node.data < data) {
                node.right = removeNode(node.right, data);
                return node;
            } else {
                if (!node.left && !node.right) {
                    return null;
                }

                if (!node.left) {
                    node = node.right;
                    return node;
                }

                if (!node.right) {
                    node = node.left;
                    return node;
                }

                let minFromRight = node.right;

                while (minFromRight.left) {
                    minFromRight = minFromRight.left;
                }
                node.data = minFromRight.data;

                node.right = removeNode(node.right, minFromRight.data);

                return node;
            }
        }
    }

    min() {
        if (!this.rootTree) {
            return null;
        }
        let node = this.rootTree;
        while (node.left) {
            node = node.left;
        }
        return node.data;
    }

    max() {
        if (!this.rootTree) {
            return null;
        }
        let node = this.rootTree;
        while (node.right) {
            node = node.right;
        }
        return node.data;
    }
};

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);
console.log(tree);

tree.has(14)
console.log(tree.has(14))
// false);
tree.has(8)
console.log(tree.has(8))
// false);
tree.has(9)
console.log(tree.has(9))
//, false);
tree.has(2)
console.log(tree.has(2))
//, true);
tree.has(6)
console.log(tree.has(6))
//, true);
tree.has(128)
console.log(tree.has(128))
//, true);
tree.has(31)
console.log(tree.has(31))
//, true);
tree.has(54)
console.log(tree.has(54))
//, true);
tree.has(1)
console.log(tree.has(1))
//, true);

