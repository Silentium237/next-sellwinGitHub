import style from "../styles/Mission.module.css"

export default function Mission() {





    return (
        <>
            <div style={{display: "flex", paddingTop: 300}}>
                <img  width="100%" src="../Group81.svg"/>
                <div style={{position: "absolute", paddingTop: "9%", left: "55%"}}>
                    <div className={style.title}>
                        Миссия
                    </div>
                    <hr style={{width: 50 , backgroundColor: "#125E97", borderRadius: 10, paddingTop: 5, marginTop:10, marginBottom: 10 }}/>
                    <div className={style.subTitle}>
                        Реализация инновационных идей IT <br/>
                        индустрии, воплощение их в успешные <br/>
                        бизнес-проекты для наших клиентов <br/>
                        в различных сферах бизнеса.
                    </div>
                </div>
            </div>

        </>

    )
}
