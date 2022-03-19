import { useState } from "react"

const useInput = (initialState)=>{
    const [value, seValue] =useState(initialState)
    return [{value, onChangeText:seValue}, () => setState(initialState)];
}
export default useInput