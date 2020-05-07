import React from 'react';
import useTime from './useClock.js' //引入自定义hook
function Clock() {
  const time = useTime();
  return (
    <div>{time}</div>
  )
}
export default Clock