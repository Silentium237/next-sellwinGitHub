import styleDropDown from "../styles/MainContainer.module.css"



export default function TechnoDropDownList(props) {
        let showMenu = props.showMenu
        let setShowMenu = props.setShowMenu



    return (
        <>
            {showMenu ?  <div onMouseEnter={()=> setShowMenu(true)} onMouseLeave={()=> setShowMenu(false)}   style={{fontFamily: "Montserrat" ,
                fontStyle: "normal",
                fontWeight: 400}} className={styleDropDown.dropdownContent}>
                <div className={styleDropDown.divStyle}>

                    <span >
                            <div className={styleDropDown.title}>
                               Frontend
                            </div>
                                <hr style={{marginTop: 25, marginBottom: 30}}/>
                         <div >
                             <ul style={{listStyleType: "none"}}>

                                <li className={styleDropDown.subTitle}>
                                    <img style={{paddingRight: 20}} src="../Ellipse.svg"/> JAVASCRIPT
                                </li>
                                 <li className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> TYPESCRIPT
                                </li> <li className={styleDropDown.subTitle}>
                                    <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> React JS
                                </li>
                                 <li className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> VUE JS
                                </li> <li className={styleDropDown.subTitle}>
                                    <img   style={{paddingRight: 20}} src="../Ellipse.svg"/> Next JS
                                </li>
                                 <li className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> Nuxt Js
                                </li>


                             </ul>
                         </div>
                    </span>
                    <span >
                            <div className={styleDropDown.title}>
                               BACKEND
                            </div>
                                <hr style={{marginTop: 25, marginBottom: 30}}/>
                         <div >
                             <ul style={{listStyleType: "none"}}>

                                <li className={styleDropDown.subTitle}>
                                    <img style={{paddingRight: 20}} src="../Ellipse.svg"/> NODE JS
                                </li>
                                 <li className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> NEST JS
                                </li>
                                 <li className={styleDropDown.subTitle}>
                                    <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> PYTHON
                                </li>
                                 <li className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> PHP
                                </li>
                                 <li  style={{opacity: 0}} className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> PHP
                                </li>
                                 <li style={{opacity: 0}} className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> PHP
                                </li>
                             </ul>
                         </div>
                    </span>
                    <span>
                            <div className={styleDropDown.title}>
                              МОБИЛЬНАЯ РАЗРАБОТКА
                            </div>
                                <hr style={{marginTop: 25, marginBottom: 30}}/>
                         <div >
                             <ul style={{listStyleType: "none"}}>

                                <li className={styleDropDown.subTitle}>
                                    <img style={{paddingRight: 20}} src="../Ellipse.svg"/> REACT NATIVE
                                </li>
                                 <li className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> KOTLIN
                                </li> <li className={styleDropDown.subTitle}>
                                    <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> SWIFT
                                </li>
                                 <li className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> ANDROID
                                </li> <li className={styleDropDown.subTitle}>
                                    <img   style={{paddingRight: 20}} src="../Ellipse.svg"/> IOS
                                </li>

                                 <li style={{opacity: 0}} className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> PHP
                                </li>

                             </ul>
                         </div>
                    </span>
                    <span>
                            <div className={styleDropDown.title}>
                               1С РАЗРАБОТКА
                            </div>
                                <hr style={{marginTop: 25, marginBottom: 30}}/>
                         <div >
                             <ul style={{listStyleType: "none"}}>

                                <li className={styleDropDown.subTitle}>
                                    <img style={{paddingRight: 20}} src="../Ellipse.svg"/> 1С: Бухгалтерия
                                </li>
                                 <li className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> 1С: Управление торговлей
                                </li> <li className={styleDropDown.subTitle}>
                                    <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> 1С: Конвертация данных
                                </li>
                                 <li className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> 1С Битрикс
                                </li> <li className={styleDropDown.subTitle}>
                                    <img   style={{paddingRight: 20}} src="../Ellipse.svg"/> 1С Битрикс24
                                </li>
                                <li style={{opacity: 0}} className={styleDropDown.subTitle}>
                                   <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> PHP
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
