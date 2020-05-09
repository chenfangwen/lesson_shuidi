const EasyDate = require('../../src/EasyDate')
const should = require('should') //断言库
// TDD 测试驱动开发
// 先写测试代码， 再写实现代码？

describe('测试Date是否合格', () => {
    let date = new EasyDate('+1m');
    it("shoud create indtance", () => {
        //编写scc/测试代码
        let some = date.toDate();
        let today = new Date();
        should(some.getFullYear()).equal(today.getFullYear());
        should(some.getMonth()).equal(today.getMonth() + 1);
    })
    describe('判断闰年',() => {
        it('是否为闰年',() => {
            should(EasyDate.isLeapYear(2000)).be.True();
        })
    })
    describe('月份', () => {
        it('输出月份，个位数补零', () => {
            should(EasyDate.toDouble(9)).equal('09')
        })
    })
})