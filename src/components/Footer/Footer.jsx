
import s from './Footer.module.css'
import footerLogo from "../../assets/footerLogo.svg"

export function Footer() {
    return (
        
            <div className={s.footer_block}>
                <div className="container">
                <div className={s.upper_footer}>
                    <div className={s.footer_company}>
                        <div className={s.footer_logo}>
                            <img src={footerLogo}alt="" />
                            <h3>ЧИСТЫЙ ЛИСТ</h3>
                        </div>
                        <p>Натуральная косметика без лишнего</p>
                    </div>
                    <nav>
                        <a href="">Главная</a>
                        <a href="">Каталог</a>
                        <a href="">Корзина</a>
                    </nav>
                </div>
                <p>© 2026 Чистый лист. Все права защищены</p>
                </div> 
            </div>

       
    )
}