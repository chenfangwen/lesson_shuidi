package main

import (
	"github.com/gin-gonic/gin"
)

type Product struct {
	Id   int64  `json:"id"`
	Name string `json:"name"`
}

var allproduct []*Product = []*Product{
	{1, "苹果"},
	{2, "小米"},
	{3, "华为"},
	{4, "一加"},
}

func main() {
	r := gin.Default()
	r.Run()
}
