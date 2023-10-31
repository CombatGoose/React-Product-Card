import s from './contacts.module.scss'
const ContactItem = (props) => { 
    return (
        <li className={s.list_item}>
            <p className={s.list_item_text}>{props.name}:{props.phone}</p>
            <div className={s.list_item_group}>
                <button
                 onClick={() => {
                    props.handleChangeReputation(props.id, 'minus')
                 }}
                > - </button> 
                <p>{props.reputation}</p>
                <button
                onClick={() => {
                    props.handleChangeReputation(props.id, 'plus')
                 }}
                > + </button>
            </div>
            <p>All sum:{props.sum * props.reputation}</p>
        </li>
    )
}

export default ContactItem