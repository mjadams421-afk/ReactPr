import react from 'react'


export default function App(props){
  if(props.signIn === true){
    return(
        <p>Hello {props.name}!</p>
    )
 } else {<p>Please enter username</p>}
  
}
