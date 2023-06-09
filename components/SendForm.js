import style from "../styles/Index.module.css";
import style2 from "../styles/user.module.scss";



export default function SendForm() {

    return (
        <>
            <div className={style.divForForm}>
                <form  >
                    <div className={style.inputHeaderText}>
                        Заполните форму для получения обратной связи
                    </div>


                    <div style={{display: "inline-flex", paddingLeft: 60}}>
                        <span className={style2.form__group}>
                        <input type="input" className={style2.form__field} placeholder="Name" name="name" id='name' required/>
                        <label htmlFor="name" className={style2.form__label}>Имя*</label>
                    </span>
                        <span className={style2.form__group}>
                        <input type="input" className={style2.form__field} placeholder="Name" name="name" id='name' required/>
                        <label htmlFor="name" className={style2.form__label}>Email*</label>
                    </span>
                        <span className={style2.form__group}>
                        <input type="input" className={style2.form__field} placeholder="Name" name="name" id='name' required/>
                        <label htmlFor="name" className={style2.form__label}>Телефон*</label>
                    </span>

                    </div>
                    <button className={style.inputButton}>
                        отправить
                    </button>

                </form>

            </div>

        </>

    )
}
