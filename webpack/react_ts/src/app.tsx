import * as React from 'react'; // ts 牛逼 静态编译
import {Header} from './components'

// 类型限制  @types/react  
export const App: React.StatelessComponent<{}> = () => { 
  return ( 
    // js class为关键字
    <div className="container-fulid">
      <Header></Header>
    </div>
  )
}
