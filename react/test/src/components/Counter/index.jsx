import React from 'react'
// const Counter = ({value, children}) => {
//     console.log('Render: ', children)

//     return (
//         <div>
//             {children}: {value}
//         </div>
//     )
// }

// export default React.memo(Counter)
class Counter extends React.PureComponent {
    render(){
    console.log('Render: ', this.props.children)
        return (
            <div>
                {this.props.children}: {this.props.value}
            </div>
        )
    }
}

export default Counter