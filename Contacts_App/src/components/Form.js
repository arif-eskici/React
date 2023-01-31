import {useState} from 'react'

const initialFormValues = {fullName:'', phoneNumber:''};

function Form({addContact, contacts}) {

    const [form, setForm] = useState(initialFormValues);

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(form.fullName === "" || form.phoneNumber === "") {
            return false;
        }
        addContact([...contacts, form]);
        
        setForm(initialFormValues);
    }

  return (
    <form onSubmit={onSubmit}>
        <div>
            <input 
                name="fullName" 
                placeholder='Fullname' 
                value={form.fullName}
                onChange={onChangeInput}/>
        </div>
        <div>
            <input 
                name="phoneNumber" 
                placeholder='Phone Number' 
                value={form.phoneNumber}
                onChange={onChangeInput}/>
        </div>
        <div className="btn">
            <button>Add</button>
        </div>
    </form>
  )
}

export default Form