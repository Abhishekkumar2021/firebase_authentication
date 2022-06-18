import { useState } from 'react'

function useInput(defaultState) {
    const [state,setState] = useState(defaultState);
    const handleState = (e)=>{
        setState(e.target.value);
    }
    return [state,handleState];
}

export default useInput