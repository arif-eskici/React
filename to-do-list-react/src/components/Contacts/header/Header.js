import {useState, useEffect} from 'react';

const initialForm = {listElement:"", isActive:true};

function Header({contacts, setContacts}) {

    const [form, setForm] = useState(initialForm);

    const onSubmit = (e) => {
      e.preventDefault();
      if(form.listElement === "") return Header;
      else setContacts([...contacts, form]);
    }

    const onChangeInput = (e) => {
      setForm({listElement:e.target.value, isActive:true});
    }

    useEffect(()=> {
      setForm(initialForm);
    },[])

    useEffect(()=>{
      setForm(initialForm)
    },[contacts])

  return (
    <div>
      <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit} >
        <input 
          className='new-todo' 
          placeholder='What needs to be done?' 
          value={form.listElement}
          autoFocus onChange={onChangeInput}
        />
      </form>
      <div className="main">
        <input 
          className="toggle-all"
          type="checkbox"
          onChange={onChangeInput}
        />
          <label 
            htmlFor="toggle-all"
            onClick={()=>{
            const newArray = [...contacts]
            newArray.map((item)=>{
              item.isActive = !item.isActive
            })
            setContacts([...newArray])
            }}
          >
          Mark all as complete
          </label>
        </div>
      </header>
    </div>
  )
}

export default Header;