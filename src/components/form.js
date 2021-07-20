import React, {useState,useRef} from 'react'


const Form = (props) => {

    const [input, setInput] = useState(props.updatedvalue ? props.updatedvalue.data : '');

    const inputref = useRef();

    const setChange = e => {
        setInput(e.target.value);
    }

    const additem = () =>{

        props.getdata({
            id: Date.now(),
            data: input
        })

        setInput('')
        inputref.current.focus();
    }

    return (
        <div>

                {props.updatedvalue ? 
                
                    (<>
                            <input className="input" ref={inputref} type="text" placeholder="Update the item" onChange={setChange} value={input}/>

                            <button onClick={additem}>Update</button>


                    </>)
                    
                    :
                    
                    (<>
                    
                            <input className="input" ref={inputref} type="text" placeholder="Type your Todo" onChange={setChange} value={input}/>

                            <button className="btnadd" onClick={additem}>Add</button>
                            <button className="btnadd">Remove All</button>
                                                
                    </>)
                
                }
                

            
        </div>
    )
}

export default Form
