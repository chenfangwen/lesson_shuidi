import * as React from 'react'
import { HelloComponent } from './hello'

export const App = () => {
    const [name,setName] = React.useState('initName')   //react Hooks
    const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    return (
        // fragment
        <>
            <HelloComponent userName={name} />
            <NameEditComponent userName={name} onChange={setUsernameState} />
        </>
    )
}