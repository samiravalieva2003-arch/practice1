import s from './Header.module.css'
import logo from "../../assets/logo.svg";

export function Header(){
    return(
        <header className="container">
            <div className={s.header_logo}>
                <img src={logo} alt="" />
                <h4>ЧИСТЫЙ ЛИСТ</h4>
            </div>
            <nav>
                <a href="">Главная</a>
                <hr />
                <a href="">Каталог</a>
                <hr />
                <a href="">Корзина</a>
            </nav>
        </header>
    )
}