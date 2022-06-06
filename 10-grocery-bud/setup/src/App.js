import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name,setName]=useState('');
  const [list,setList]=useState([]);
  const[isEditing,setIsEditing]=useState(false);
  const[editId,setEditId]=useState(null);
  const[alert,setAlert]=useState({show:false,msg:'',type:''});

  const showAlert=(show=false,type='',msg='')=>{
        setAlert({show,type,msg});}
  const handleSubmit=(e)=>{
     
      e.preventDefault();
      if(! name){   //if empty text
        //display alert
        //console.log('show alert');
        showAlert(true,'danger','please enter value')
       
      }
      else if(name && isEditing){
        //deal with edit
        // console.log('show editing');
        setList(list.map((item)=>{
          if(item.id===editId){
            return {...item,title:name}
          }
          return item;
        }));
        setName('');
        setEditId(null);
        setIsEditing(false);
        showAlert(true,'success','item is Edited')
      }
      else{
        //add item to list and show alert
        showAlert(true,'success','item added')
        const newItem={id:new Date().getTime().toString(),title:name};
        setList([...list,newItem]);
        setName('');
      } 
  }
  const clearItems=()=>{
    showAlert(true,'danger',' list is cleared');
    setList([]);
  }
  const removeItem=(id)=>{
      showAlert(true,'danger',' item removed');
      setList(list.filter((item)=>item.id !==id))
  }
  const editItem=(id)=>{
    const sepecifiItem=list.find((item)=>item.id===id);
    setIsEditing(true);
    setEditId(id);
    setName(sepecifiItem.title)
  }
  return <section className='section-center'>
  <form onSubmit={handleSubmit} className="grocery-form">
      {alert.show && <Alert {...alert}  removeAlert={showAlert} list={list}/>}
      <h3>grocery bud</h3>
      <div className="form-control">
        <input type="text" className='grocery' placeholder='e.g.eggs' value={name} onChange={(e)=>setName(e.target.value)}/>
        <button type='submit' className='submit-btn'>
            {isEditing ? 'edit':'submit'}
        </button>
      </div>
  </form>
  {list.length > 0 &&  <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem}/>
          <button className='clear-btn' onClick={clearItems}>clear items</button>
        </div>
      }
       
  </section>
}

export default App
