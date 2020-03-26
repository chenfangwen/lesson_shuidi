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
func (node *Node) fistShow(n *Node) {
	if n == nil {
		return
	} else {
		fmt.Printf("%d", n.value)
		node.fistShow(n.left)
		node.fistShow(n.right)
	}
}

func (node *Node) midShow(n *Node) {
	if n == nil {
		return
	} else {
		node.midShow(n.left)
		fmt.Printf("%d", n.value)
		node.midShow(n.right)
	}
}

func (node *Node) lastShow(n *Node) {
	if n == nil {
		return
	} else {
		node.lastShow(n.left)
		node.lastShow(n.right)
		fmt.Printf("%d", n.value)
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
	// fmt.Println(root.FindNode(root, 2).value)
	fmt.Printf("先序遍历：")
	root.fistShow(root)
	println("")
	fmt.Printf("中序遍历：")
	root.midShow(root)
	println("")
	fmt.Printf("后序遍历：")
	root.lastShow(root)
}
