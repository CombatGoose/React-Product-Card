import s from './Header.module.scss'

const Header = (props) => {
    let sum = 0
    props.list.forEach(el => {
        sum += el.sum * el.reputation
    })
    return (
            <header className={s.header}>
                <p>All sum:{sum}</p>
                <p>All card products:{props.list.length}</p>
            </header>
    )
}

export default Header