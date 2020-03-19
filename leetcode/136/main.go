package main

import "fmt"

func singleNumber(nums []int) int {
	res := 0
	for _, n := range nums {
		res ^= n
	}
	// m := make(map[int]int)
	// for _, value := range nums {
	// 	// fmt.Printf("%d\n", value)
	// 	if _, ok := m[value]; ok {
	// 		delete(m, value)
	// 	} else {
	// 		m[value] = 1
	// 	}
	// }
	// // fmt.Println(m)
	// for k := range m {
	// 	return k
	// }
	return res
}

func main() {
	fmt.Printf("%d", singleNumber([]int{2, 2, 1}))
}
