import React, {useState} from 'react'

export default function App(props){
  const [input, setInput] = useState('')
  const [playList, setPlaylist] = useState[''];
  const Sel = ({target}) =>{
  const Selection = target.value;
  setPlaylist((prev)=>{if(prev.includes(Selection)){
    return prev.filter(x => x !== Selection)
  } else {
    return [Selection, ...prev];
  }}) }
  function handler(e){
    setInput(e.target.value)
  }
   let value = {input};
  async function Comparing() {
    try{ let first = await value();
         console.log(`value set`)
    } catch(error) {
      console.log('Loading...')
    }
  }
  if(props.signIn === true){
    return(
       <div>
        <p style={{color:'blue', fontSize:40}}>Hello {props.name}!</p>
         <form>
           <label for="email">Enter Email</label>
           <input id="email" name="email" type="text" onChange={handler} value={input}/>
         </form>
         <h3>{Comparing}</h3>
         <button value="selection" onClcik={Sel} key="selection"/>
        
        </div>
    )
  }
  return <p>Please enter username</p>
}
