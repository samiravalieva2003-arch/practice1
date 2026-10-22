
import s from './Banner.module.css'
import banner from "../../assets/banner.png"

export function Banner(){
return(<main className="container py-100">
<div className={s.banner_text}>
    <h1>Кожа дышит. Ты — сияешь.</h1>
    <p>Натуральная косметика без лишнего</p>
    <a href="#">Перейти в каталог</a>
</div>
<img src={banner} alt="" />
</main>)
}