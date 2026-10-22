import s from './Subscribe.module.css'

export function Subscribe() {
    return (
        <div className="container py-100">

            <div className={s.subscribe}>
                <div className={s.block}>
                    <h2>Получай новости и советы по уходу</h2>
                    <p>Подпишись на рассылку и будь первой, кто узнает о новых средствах, акциях и полезных статьях.</p>
                    <div className={s.subscribe_input}>
                        <input type="text" name="" id="" placeholder='Ваш e-mail' />
                        <input type="submit" value="Подписаться" />
                    </div>
                </div>
            </div>
        </div>
    )
}