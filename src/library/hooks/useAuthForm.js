import useInput from "./useInput"
const regexEmail = /\S+@\S+\.\S+/
const regexPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/

const isValidEmail=(email)=>{
    return regexEmail.test(email) 
}

const isValidPassword=(password)=>{
    return regexPassword.test(password) 
}

const useAuthForm = () => {
   const [email] = useInput('')
   const [password] = useInput('')
   const [name] = useInput('')
   const [subscribe] = useInput(false)
   const [terms] = useInput(false)

   const canSubmitLogin = isValidEmail(email.value)&&isValidPassword(password.value)
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
