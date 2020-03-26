//go tree
package main

import "fmt"

//tree treeNode 递归的概念来定义
type Node struct {
	value int
	left  *Node
	right *Node
}

func (node *Node) FindNode(n *Node, x int) *Node {
	if n == nil {
		return nil
	} else if n.value == x {
		return n
	} else {
		p := node.FindNode(n.left, x)
		if p != nil {
			return p
		}
		return node.FindNode(n.right, x)
	}
}

func CreateNode(value int) *Node {
	return &Node{value, nil, nil}
}

func main() {
	root := CreateNode(5)
	root.left = CreateNode(2)
	root.right = CreateNode(4)
	root.left.right = CreateNode(7)
	root.left.right.left = CreateNode(6)
	root.right.left = CreateNode(8)
	root.right.right = CreateNode(9)
	fmt.Println(root.FindNode(root, 2).value)
}
