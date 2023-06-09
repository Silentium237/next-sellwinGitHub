import style from "../styles/Technologies.module.css"

export default function Technologies() {





    return (
        <>
            <div style={{display: "flex", alignItems: "center",justifyContent: "center", margin: "auto", width: 1300, paddingTop: 200}}>
                <span >
                      <div className={style.title} style={{paddingBottom: 60}}>
                        Технологии
                    </div>

                <div style={{ backgroundImage: "Url(/technologies.svg)", backgroundRepeat: "no-repeat", height: 450, width:500}}>

                    <div style={{display: "flex", width: 400, padding: 60, marginLeft: 30}} className={style.cardText}>
                        Sellwin System предоставляет услуги по разработке,
                        внедрению и сопровождению программного обеспечения
                        для дистрибуции, розничной торговли и производства,
                        а также иные услуги в сфере информационных технологий
                        на рынке Республики Беларусь.
                    </div>
                </div>
                </span>

                <span >
                       <div style={{display: "flex", width: 450, paddingBottom: 30}} className={style.subTitle} >
                        В разработках программных продуктов наша компания использует самые последние достижения в области IТ-технологий:
                    </div>
                <div style={{  display: "inline-grid", maxWidth: 550, position: "relative", paddingTop: 30}}>

                      <div style={{ marginBottom: 40, position: "relative"}}>
                          <span className={style.textForTechnologies}>
                        MS Sharepoint
                    </span>
                        <span className={style.textForTechnologies}>
                       JavaScript
                    </span>

                          </div>

                        <div style={{ marginBottom: 40 , position: "relative"}}>
                          <span className={style.textForTechnologies}>
                        Java
                    </span>
                            <span className={style.textForTechnologies}>
                        Net Framework
                    </span>

                            </div>

                        <div style={{ marginBottom: 40 , position: "relative"}}>
                          <span className={style.textForTechnologies}>
                      1 С
                    </span>  <span className={style.textForTechnologies}>
                        MS SQL
                    </span>  <span className={style.textForTechnologies}>
                        Oracle
                    </span>

                    </div>    <div style={{ marginBottom: 40 , position: "relative"}}>
                          <span className={style.textForTechnologies}>
                        MS Olap
                    </span>  <span className={style.textForTechnologies}>
                        С#
                    </span>  <span className={style.textForTechnologies}>
                        Node.JS
                    </span>

                    </div>
                    <div style={{ marginBottom: 40}}>
                          <span className={style.textForTechnologies}>
                        Angular
                    </span>  <span className={style.textForTechnologies}>
                        jQuery
                    </span>
                        <span className={style.textForTechnologies}>
                       Vue Js
                    </span>


                    </div>
                    <div style={{ marginBottom: 40}}>
                          <span className={style.textForTechnologies}>
                        ASP.NET
                    </span>  <span className={style.textForTechnologies}>
                       React
                    </span>
                        <span className={style.textForTechnologies}>
                       Next Js
                    </span>


                    </div>

                </div>
                </span>



            </div>

        </>

    )
}
