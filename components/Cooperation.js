import styles from '../styles/Cooperation.module.css'
import {useState} from "react";
// import style from "../styles/Index.module.css";


export default function Cooperation() {

    let cardText = [
        {
            title: "Выделенная команда",
            url: "../cooperationFirstImg.png",
            text: "За каждым действующим проектом закреплена своя собственная команда, " +
                "что позволяет максимально покрузится в детали проекта и бизнес логику," +
                " проработать все скрытые моменты и избежать каких-либо нюансов при запуске.  ",
        },
        {
            title: "Проектная разработка",
            url: "../cooperationSecondImg.png",
            text: "Широй кругозор и огромная база знаний позволят создать для Вас" +
                " уникальный продукт, благодаря которому вы сможете воплотить все свои мечты в реальность" ,
        },
        {
            title: "Расширение команды",
            url: "../cooperationThirdImg.png",
            text: "Благодаря грамотному тайм менеджменту и наличию резервов, " +
                "скорость реализации проекта будет оставаться стабильной на протяжении всего времени реализации.",
        }
    ]


    const [showCardItem, setShowCardItem] = useState(0)
    const [pxLength, setPxLength] = useState(1)

    const changeCardNumber = (item) => {
        if (item === "right") {
            if (showCardItem < 2) {
                setShowCardItem(showCardItem + 1)
                setPxLength(pxLength + 80)
            }

        } else if (item === "left") {
            if (showCardItem > 0) {
                setShowCardItem(showCardItem - 1)
                setPxLength(pxLength - 80)
            }

        }

    }


    return (
        <>
            <div className={styles.cooperation}>
                Модель Сотрудничества
            </div>
            <div
                style={{height: 900, margin: "auto", display: "flex", alignItems: "center", justifyContent: "center",}}>
           <span>
                <p style={{
                    borderLeft: "8px solid #0092FF",
                    height: 80,
                    position: "absolute",
                    marginTop: pxLength
                }}></p>

           <p style={{
               borderLeft: "8px solid rgba(178, 179, 179, 0.5)",
               height: 240
           }}></p>
           <p style={{paddingTop: 150}}>
                            <button style={{width: 50, height: 50, marginRight: 15, border: 0}}
                                    onClick={() => changeCardNumber("left")}>  <img
                                src="../right.svg"/> </button>
                            <button style={{width: 50, height: 50, border: 0}} onClick={() => changeCardNumber("right")}>  <img
                                src="../left.svg"/></button>
                        </p>
           </span>

                {cardText.map((item, index) => (
                    <>
                        {index === showCardItem ?
                            <div style={{display: "inline-flex", padding: 50,}} key={index}>
                                <span>
                                  <img src={item.url}/>
                                </span>
                                <span style={{ height: 100, paddingLeft: 50 }}>
                                       <div className={styles.title}>
                                    {item.title}
                                </div>
                                <hr style={{ backgroundColor: "rgba(18, 94, 151, 0.5)", padding: 1, margin: 20, border: 0 }}/>
                                <div style={{height: 280}} className={styles.subTitle}>
                                    {item.text}
                                </div>
                                <button className={styles.buttonStyle}>
                                    <div className={styles.textButtonStyle}>
                                    подробнее  <img style={{position: "absolute", top: 25, left: 200}} src="../ArrowNext.svg"/>
                                </div>
                                </button>
                                </span>
                            </div>
                            : null
                        }
                    </>
                ))}

            </div>
        </>

    )
}
