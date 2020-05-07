import {useState,useEffect} from 'react'
export default function useTime() {
  const [time,setTime] = useState('');
  let id = ''
  useEffect(() => {
    hook();
  },[time])
  const hook = () => {
    id = setInterval(() => {
      let date = new Date()
      let day = date.getDay();
      let dayStr = {
        "0":'星期天',
        "1":'星期一',
        "2":'星期二',
        "3":'星期三',
        "4":'星期四',
        "5":'星期五',
        "6":'星期六'
      }
      setTime(dayStr[day] + date.toLocaleTimeString());
        // console.log(id)
      clearInterval(id)
      // console.log(time)
    },1000)
    // clearTimeout(id)
    // console.log(id)
  }
  return time;
}