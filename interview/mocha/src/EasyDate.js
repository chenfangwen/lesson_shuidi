class EasyDate {
    constructor(n) {
        // n.match('[0-9]')
        let date = new Date();
        date.setMonth(date.getMonth() + n)
        this.base = date
    }
    toDate() {
        return this.base;
    }
    static isLeapYear(year) { 
        if(year % 100 == 0){
            return year % 400 === 0;
        }
        return year % 4 === 0
    }
    static toDouble(n) {
        return n > 9 ? n.toString(): ('0' + n)
    }
}

module.exports = EasyDate