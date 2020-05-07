import React,{useState,useEffect} from 'react';
function Clock(){
  let [date,setDate] = useState(new Date());  
  let [time,setTime] = useState('');
  //[]执行一次
  useEffect(()=> {
    hook()
    // setInterval(() => hook(), 1000)
  },[])
  
  const hook = () => {
    setInterval(()=>{
    setDate(new Date())
    
    const day = date.getDay();
    let dayStr = '';
    
    if (day === 0) {
      dayStr = '星期日';
    } else if (day === 1) {
      dayStr = '星期一';
    } else if (day === 2) {
      dayStr = '星期二';
    } else if (day === 3) {
      dayStr = '星期三';
    } else if (day === 4) {
      dayStr = '星期四';
    } else if (day === 5) {
      dayStr = '星期五';
    } else if (day === 6) {
      dayStr = '星期六';
    }
    setTime(dayStr + date.toLocaleTimeString()) 
    },1000)
    
  }
  return (
      <div>{time}</div>
    )
}
export default Clock