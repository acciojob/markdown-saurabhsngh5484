import React ,{useState} from 'react';
import '../styles/App.css'


const App=()=>{
    let [val,setVal]=useState('');
    // return(
    //     <div className="app">
    //         <div className="input-container">  
    //              <h1>Heading</h1><br></br><br></br><span>This is some <strong>bold</strong> text.</span>        
    //             <textarea placeholder='Enter something' value={val} onChange={(e)=>setVal(e.target.value) }></textarea>
    //         </div>
    //         <div className="preview">
    //             <h1>{val}</h1>
    //         </div>
    //     </div>
    // )
    function changetext(event){
        setVal(event.target.value)
    }
    return (
       <div className="app">
         <div className='mark1'>
            <div className='preview'>
            <h1>Heading</h1><br></br><br></br><span>This is some <strong>bold</strong> text.</span>  
             <textarea onChange={changetext}>
            </textarea>   
            </div>
        </div>
       </div>
    )
}   

export default App;