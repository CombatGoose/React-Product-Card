import s from './FormCreate.module.scss'
const FormCreate = (props) => { 
    const contactCandidate = {
        name: '',
        sum:''
    }
    const handleChangeInput = (inputName, inputValue) => { 
        contactCandidate[inputName] = inputValue
    }
    const handleCreate = () => { 
        const newStore = [ 
            ...props.contactsStore, 
            {   
                id: props.contactsStore.length > 0 
                    ? props.contactsStore[props.contactsStore.length-1].id + 1
                    : 1,
                ...contactCandidate,
                reputation: 1,
            }
        ]
        contactCandidate.name = ''
        contactCandidate.sum = ''
        props.reRender(newStore)
    }
    return ( 
        <div className={s.form}>
            <input 
                className={s.form_input} 
                type="text" 
                placeholder="Write name"
                onChange={(e) => {
                    handleChangeInput('name', e.target.value)
                    e.target.value = contactCandidate.name
                }}
            />
            <input 
                className={s.form_input}
                type="text"
                placeholder="Write product card cost" 
                onChange={(e) => {
                    handleChangeInput('sum', e.target.value)
                    e.target.value = contactCandidate.sum
                }}
            />
            <button
                onClick={handleCreate}
                className={s.form_btn}
             >Create</button>
        </div>
    )
}

export default FormCreate