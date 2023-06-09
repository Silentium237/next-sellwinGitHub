import styles from '../styles/WriteMe.module.css'
import style from "../styles/Index.module.css";
import style2 from "../styles/user.module.scss";



export default function WriteMe() {




    return (

            <div style={{display: "flex", margin: "auto", alignItems: "center", justifyContent: "center", paddingBottom: 200  }}>
                <img style={{position: "absolute", }} src="../Group59.svg"/>
           <span style={{backgroundImage: "Url(/writeMe.png)", height: 585, width: 580,  paddingTop: 120, paddingLeft: 50, marginTop: 300}}>
                <div className={styles.mainText}>
                 Есть вопросы?  <br/> напиши нам!
                </div>

           </span>
                <span className={styles.cardStyle} style={{height: 585, width: 580, textAlign: "center", marginTop: 300, paddingTop: 100}}>
          <form  >
                        <div className={styles.formText}>
                            Заполните форму для получения обратной связи
                        </div>



                        <div  className={style2.form__group} style={{paddingBottom: 20}}>
                        <input style={{width: 400}} type="input" className={style2.form__field} placeholder="Name" name="name" id='name' required/>
                        <label style={{paddingLeft: 80}} htmlFor="name" className={style2.form__label}>Имя*</label>
                    </div>
                            <div className={style2.form__group} style={{paddingBottom: 20}}>
                        <input style={{width: 400}} type="input" className={style2.form__field} placeholder="Name" name="name" id='name' required/>
                        <label  style={{paddingLeft: 80}} htmlFor="name" className={style2.form__label}>Email*</label>
                    </div>
                            <div className={style2.form__group}  style={{paddingBottom: 60}}>
                        <input style={{width: 400}} type="input" className={style2.form__field} placeholder="Name" name="name" id='name' required/>
                        <label  style={{paddingLeft: 80}} htmlFor="name" className={style2.form__label}>Телефон*</label>
                    </div>


                        <button style={{width: 400}} className={style.inputButton}>
                            отправить
                        </button>

                    </form>
           </span>
            </div>




    )
}
