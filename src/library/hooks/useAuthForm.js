import useInput from "./useInput"
const regexEmail = /\S+@\S+\.\S+/

const isValidEmail=(email)=>{
    console.log("reach",email)
    return regexEmail.test(email) 
}

const useAuthForm = () => {
   const [email] = useInput('')
   const [password] = useInput('')
   const [name] = useInput('')
   const [subscribe] = useInput(false)
   const [terms] =useInput(false)

  console.log("email",isValidEmail(email.value))

   const canSubmitLogin = isValidEmail(email.value)&&password.value
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