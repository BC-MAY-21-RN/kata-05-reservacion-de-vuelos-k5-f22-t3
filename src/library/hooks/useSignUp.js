import useInput from "./useInput"

const useSignUp = () => {

   const [email] = useInput('')
   const [password] = useInput('')
   const [name] = useInput('')
   const [subscribe] = useInput(false)
   const [terms] =useInput(false)

    return {
        email,
        password,
        name,
        subscribe,
        terms
    }  
}

export default useSignUp