import * as React from 'react'; // ts 牛逼 静态编译
import {Header} from './components'

// 类型限制  @types/react  
export const App: React.StatelessComponent<{}> = () => { 
  return ( 
    <div>
        {/* 头部   导航 */}
        <Header />
    </div>
  )
}
