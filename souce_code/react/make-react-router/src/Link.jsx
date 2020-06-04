import React from 'react';
import Context from './Context.jsx';
const { Consumer } = Context;

class Link extends React.Component {
    render() {
        return (
            <Consumer>
                {
                    ({handlePathNameChange}) => {
                        return (
                            <a onClick={(e) => {
                                e.preventDefault();
                                window.history.pushState({},'',this.props.to)
                                handlePathNameChange(this.props.to);
                            }}>
                                {this.props.children}
                            </a>
                        )
                    }
                }
            </Consumer>
        )
    }
}

export default Link