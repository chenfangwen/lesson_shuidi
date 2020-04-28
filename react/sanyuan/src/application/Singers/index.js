import React from 'react';
// import { renderRoutes } from 'react-router-config'

function Singers(props){
    console.log(props)
    // const {route} = props
    return (
        <div>
            Singers
        </div>
    );
}
 
export default React.memo(Singers);