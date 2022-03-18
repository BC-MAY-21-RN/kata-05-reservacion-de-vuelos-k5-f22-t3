import useInput from "./useInput"

const useAuthForm = () => {
   const [email] = useInput('')
   const [password] = useInput('')
   const [name] = useInput('')
   const [subscribe] = useInput(false)
   const [terms] =useInput(false)

   const canSubmitLogin = email.value&&password.value
   const canSubmitSingUp = canSubmitLogin&&name.value&&terms.value

    return {
        email,
        password,
        name,
        subscribe,
        terms,
        canSubmitSingUp,
        canSubmitLogin
    }  
}

export default useAuthForm