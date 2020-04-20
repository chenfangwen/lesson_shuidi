import * as React from 'react';

interface Props{
    user: string
}
export const HelloComponent = (props) => {
    return (
    <h2>hello user: {props.user}</h2>
    )
}