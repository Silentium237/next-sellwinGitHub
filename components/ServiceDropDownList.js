import styleDropDown from "../styles/MainContainer.module.css"



export default function ServiceDropDownList(props) {
    let showMenuService = props.showMenuService
    let setShowMenuService = props.setShowMenuService
    let listItemFirst = ["Проектная разработка", "Разработка 1С решений", "Выделенная команда", "Разработка мобильных приложений","Архитектура IT-решений"]

    let listItemSecond = ["Разработка облачных сервисов", "Контроль качества ПО", "Разработка Веб-приложений","Управление IT-проектами", "UI/UX дизайн"]

    let listItemThird = ["Расширение IT-команды", "Разработка пользовательского ПО", "Техническая поддержка", "Разработка баз данных для бизнеса"]



    return (
        <>
            {showMenuService ?  <div onMouseEnter={()=> setShowMenuService(true)} onMouseLeave={()=> setShowMenuService(false)}   style={{fontFamily: "Montserrat" ,
                fontStyle: "normal",
                fontWeight: 400}} className={styleDropDown.dropdownContent}>
                <div className={styleDropDown.divStyle}>


                    <span >

                         <div >
                             <ul style={{listStyleType: "none"}}>


                                <li className={styleDropDown.subTitle}>
                                    <img style={{paddingRight: 20}} src="../Ellipse.svg"/> Проектная разработка
                                </li>
                                 <li className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> Разработка 1С решений
                                </li>
                                 <li className={styleDropDown.subTitle}>
                                    <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> Выделенная команда
                                </li>
                                 <li className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> Разработка мобильных приложений
                                </li>
                                 <li   className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> Архитектура IT-решений
                                </li>
                             </ul>
                         </div>
                    </span>
                    <span>

                         <div >
                             <ul style={{listStyleType: "none"}}>


                                <li className={styleDropDown.subTitle}>
                                    <img style={{paddingRight: 20}} src="../Ellipse.svg"/> Разработка облачных сервисов
                                </li>
                                 <li className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> Контроль качества ПО
                                </li> <li className={styleDropDown.subTitle}>
                                    <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> Разработка Веб-приложений
                                </li>
                                 <li className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> Управление IT-проектами
                                </li> <li className={styleDropDown.subTitle}>
                                    <img   style={{paddingRight: 20}} src="../Ellipse.svg"/> UI/UX дизайн
                                </li>

                             </ul>
                         </div>
                    </span>
                    <span>
                         <div >
                             <ul style={{listStyleType: "none"}}>

                                <li className={styleDropDown.subTitle}>
                                    <img style={{paddingRight: 20}} src="../Ellipse.svg"/> Расширение IT-команды
                                </li>
                                 <li className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> Разработка пользовательского ПО
                                </li> <li className={styleDropDown.subTitle}>
                                    <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> Техническая поддержка
                                </li>
                                 <li className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> Разработка баз данных для бизнеса
                                </li>
                                  <li  style={{opacity: 0}} className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> Архитектура IT-решений
                                </li>

                             </ul>
                         </div>
                    </span>



                </div>
                <hr className={styleDropDown.hr}/>
                <div className={styleDropDown.footerText}>
                    С НАми выигрывают !
                </div>

                {/*<div className="link">*/}
                {/*    <Link style={{textDecoration: "none", color: "black"}} href="/technologiesOne">Type Script</Link>*/}
                {/*</div>*/}
                {/*<div className="link">*/}
                {/*    <Link style={{textDecoration: "none", color: "black"}} href="/technologiesOne">React JS</Link>*/}
                {/*</div>*/}
                {/*<div className="link">*/}
                {/*    <Link style={{textDecoration: "none", color: "black"}} href="/technologiesOne">Next JS</Link>*/}
                {/*</div>*/}
                {/*<div className="link">*/}
                {/*    <Link style={{textDecoration: "none", color: "black"}} href="/technologiesOne">Vue JS</Link>*/}
                {/*</div>*/}
                {/*<div className="link">*/}
                {/*    <Link style={{textDecoration: "none", color: "black"}} href="/technologiesOne">Nest JS</Link>*/}
                {/*</div>*/}

            </div> : null

            }

        </>

    )
}
