
import style from "../styles/OurValue.module.css"


export default function OurValue() {

    let cardText = [
        {
            title: "Результативность",
            text: "Достигаем цели, направленые на развитие нашей компании и удовлетворение потребностей наших клиентов и партнеров",
            url: "../result.svg"
        },
        {
            title: "Профессионализм",
            text: "Эксперты по созданию, масштабированию и поставки защищенного программного обеспечения",
            url: "../profi.svg"
        },
        {
            title: "Движение",
            text: "Мы занимаем активную жизненную позицию и имеем современные взгляды на ведение бизнеса",
            url: "../move.svg"
        },
        {
            title: "Партнерство",
            text: "Строим долгосрочное сотрудничество с партнерами, основанное на взаимном уважении и доверии",
            url: "../partner.svg"
        },
        {
            title: "Лидерство",
            text: "Всегда стремимся занимать лидирующую позицию в своей отрасли",
            url: "../lider.svg"
        } ,
        {
            title: "Лидерство",
            text: "Всегда стремимся занимать лидирующую позицию в своей отрасли",
            url: "../lider.svg"
        }
    ]



    return (
        <>
            <div className={style.ourValue}>
                Наши ценности
            </div>
            <div className={style.totalCardStyle}>

                {cardText.map((item,index) => (

                    <div style={index === 5 ? {opacity: 0} : null} className={style.cardStyle}>
                        <img style={{marginTop: -30, marginLeft: 20}} src={item.url}/>
                        <div className={style.title}>
                            {item.title}
                        </div>
                        <div className={style.subTitle} >
                            {item.text}
                        </div>
                    </div>

                ))}

            </div>

        </>

    )
}
