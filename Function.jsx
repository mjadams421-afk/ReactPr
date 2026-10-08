import React, {useState} from 'react'

export default function App(props){
  const [input, setInput] = useState('')
  function handler(e){
    setInput(e.target.value)
  }
  if(props.signIn === true){
    return(
       <div>
        <p style={{color:'blue', fontSize:40}}>Hello {props.name}!</p>
         <form>
           <label for="email">Enter Email</label>
           <input id="email" name="email" type="text" onChange={handler} value={input}/>
         </form>
        </div>
    )
  }
  return <p>Please enter username</p>
}
