package main //包
// node_mail go email
import (
	"log"
	"net/smtp"

	"github.com/jordan-wright/email"
)

func main() { // 入口函数
	e := email.NewEmail() // := 定义并且附值
	e.From = "chenfangwen <2325189133@qq.com>"
	// [] ? Array? 多个用户发邮件 { }集合
	e.To = []string{"2325189133@qq.com", "2286344637@qq.com"}
	e.Subject = "你在家还好吗？" //标题
	// byte? go 类型 byte
	e.Text = []byte("至从期末至现在， 已有两月， 我长发已及腿，我想你也是") //内容
	// 本地并没有搭建邮件服务器  由腾讯服务器转发
	err := e.Send("smtp.qq.com:25", smtp.PlainAuth("", "2325189133@qq.com", "sduvvqywofabdjcf", "smtp.qq.com"))
	if err != nil {
		// console.log()
		// console.error()
		//打印错误 Fatal
		log.Fatal(err)
	}
}
