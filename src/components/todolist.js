import React, {useState} from 'react'
import Form from './form'

const Todolist = ({data, remove, clear, edit}) => {

    const [updateitem, setUpdatelist] = useState({ id: null, data:'' })

    
    const submitudpate = (value) => {

            edit(updateitem.id,value);

            setUpdatelist({ id: null, data:'' })
    }


    if(updateitem.id)
    {
        return <Form updatedvalue={updateitem} getdata={submitudpate}/>

                
    }

    return data.map((val) => {
                    return <div id={val.id} key={val.id} className="list">

                        <h3 className="listitem">{val.data}</h3>
                        <button className="listitem btnaddlist" onClick={()=>remove(val.id)}>delete</button>
                        <button className="listitem btnaddlist" onClick={()=>setUpdatelist({id:val.id, data:val.data})}>Edit</button>
                      
                  </div>
                })

               
                
        
} 


export default Todolist
