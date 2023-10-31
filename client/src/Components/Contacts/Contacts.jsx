import ContactItem from './ContactsItem'
import s from './contacts.module.scss'
const Contacts = (props) => { 
    const handleChangeReputation = (idContact, method) => { 
        const newList = props.list.filter(el => { 
            if (el.id === idContact){
                if (method === 'plus'){
                    el.reputation += 1
                } else { 
                    if (el.reputation > 0) { 
                        el.reputation -= 1
                    }
                }
            }
            if(el.reputation !== 0) {
                return el
            } else {
                return null
            }
        })
        props.reRender(newList)
    }
    const ContactsCollection = props.list.map(el => {
        return (
            <ContactItem
                key={el.id}
                id = {el.id}
                name={el.name}
                sum={el.sum}
                reputation={el.reputation}
                handleChangeReputation = {handleChangeReputation}
            />
        )
    })
    return ( 
        <ul className={s.list}>
            {ContactsCollection}
        </ul>
    )
}

export default Contacts