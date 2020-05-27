import React from 'react'
import Context from './Context.jsx'
const {Provider} = Context

class BrowserRouter extends React.Component {
    handlePathNameChange = (pathname) => {
        const {history} = this.state
        this.setState({
            history: {
                ...history,
                pathname
            }
        })
    }
    state = {
        history: {
          location: window.location,
          pathname: window.location.pathname,
          handlePathNameChange: this.handlePathNameChange
        }
    }
    render() {
      return (
         <Provider value={{...this.state.history}}>
           { this.props.children }
         </Provider>
      );
    }
  }

export default BrowserRouter