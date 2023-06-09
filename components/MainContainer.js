import A from "./A";
import Head from "next/head";
// import Logo from "/logoPng.png";
import Image from 'next/image';
import style from  "../styles/Index.module.css"
import styleFooter from "../styles/Footer.module.css"
import Link from "next/link";
import TechnoDropDownList from "./TechnoDropDownList";
import {useState} from "react";
import ServiceDropDownList from "./ServiceDropDownList";
import ProjectDropDownList from "./ProjectDropDownList";


const MainContainer = ({children, keywords}) => {
    const [showMenu, setShowMenu] = useState(false)
    const [showMenuService, setShowMenuService] = useState(false)
    const [showMenuProject, setShowMenuProject] = useState(false)


    return (
        <>
            <Head>
                <meta keywords={"nextjs" + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div className="navbar">

                <div style={{width: 1024, alignItems: "center", display: "flex", justifyContent: "space-around"}}>
                       <span >
                    <Image
                        src="/logo.svg"
                        height={122}
                        width={160}
                        alt="Go Home"
                    />
                </span>

                    <A href={'/'} text="О Компании"/>
                    <span>

                   <div className="dropdown">
                       <div style={{ height: 70, marginTop: 50, zIndex: 2}} onMouseEnter={()=> setShowMenu(true)}  onMouseLeave={()=> setShowMenu(false)} >
                         <A href={'/techno'} text="Технологии"/> <img src="../down.svg"/>
                       </div>
                    </div>
                </span>

                    <span>
                   <div className="dropdown">
                       <div style={{ height: 70, marginTop: 50, zIndex: 2}} onMouseEnter={()=> setShowMenuService(true)}  onMouseLeave={()=> setShowMenuService(false)} >
                          <A href={'/service'} text="Услуги"/> <img src="../down.svg"/>
                       </div>
                    </div>
                </span>
                    <span>
                    <div className="dropdown">
                       <div style={{ height: 70, marginTop: 50, zIndex: 2}} onMouseEnter={()=> setShowMenuProject(true)}  onMouseLeave={()=> setShowMenuProject(false)} >
                          <A href={'/project'} text="Проекты и решения"/> <img src="../down.svg"/>
                       </div>
                    </div>

                   {/*<div className="dropdown">*/}
                   {/*     <A href={'/project'} text="Проекты и решения"/> <img src="../down.svg"/>*/}

                   {/* <div style={{fontFamily: "Montserrat" ,*/}
                   {/*     fontStyle: "normal",*/}
                   {/*     fontWeight: 400}} className="dropdown-content">*/}
                   {/* <div className="link" >*/}
                   {/*   <Link style={{textDecoration: "none", color: "black"}} href="/projectBeautyHouse">BeautyHouse.by</Link>*/}
                   {/* </div>*/}
                   {/*     <div className="link">*/}
                   {/*           <Link style={{textDecoration: "none", color: "black"}} href="/projectB2B">B2b.sellwin.by</Link>*/}
                   {/*     </div>*/}

                   {/*<div className="link">*/}
                   {/*    <Link style={{textDecoration: "none", color: "black"}} href="/projectB2B">Sellwin.shop.by</Link>*/}
                   {/*</div>*/}
                   {/*     <div className="link">*/}
                   {/*         <Link style={{textDecoration: "none", color: "black"}} href="/projectB2B">Sellwin.by</Link>*/}
                   {/*     </div>*/}
                   {/*     <div className="link">*/}
                   {/*          <Link style={{textDecoration: "none", color: "black"}} href="/projectB2B">MMM </Link>*/}
                   {/*     </div>*/}



                   {/* </div>*/}
                   {/* </div>*/}
                </span>

                    <A href={'/contact'} text="Контакты"/>
                </div>

            </div>
            <TechnoDropDownList setShowMenu={setShowMenu} showMenu={showMenu}/>
            <ServiceDropDownList setShowMenuService={setShowMenuService} showMenuService={showMenuService}/>
            <ProjectDropDownList setShowMenuProject={setShowMenuProject} showMenuProject={showMenuProject}/>


            <div>
                {children}
            </div>
            <footer className={styleFooter.mainFooterStyle}>

                <span className={styleFooter.spanBlock} >
                    <img className={styleFooter.imgStyle} src="../logoFooter.png"/>
                    <div className={styleFooter.linkText}>
                            О КОМПАНИИ
                    </div>
                    <div className={styleFooter.linkText}>
                            ТЕХНОЛОГИИ
                    </div>
                    <div className={styleFooter.linkText}>
                            УСЛУГИ
                    </div>
                    <div className={styleFooter.linkText}>
                            ПРОЕКТЫ И РЕШЕНИЯ
                    </div>
                </span >
                <span  className={styleFooter.spanBlock} >
                    <div className={styleFooter.phoneInfo}>
                      &#128379;	 ТЕЛЕФОН
                    </div>
                    <div className={styleFooter.phoneInfoNumber}>
                       +375 (17) 269 33 33
                    </div>
                    <div className={styleFooter.phoneInfoNumber}>
                       +375 (29) 397 57 57
                    </div>

                </span>
                <span  className={styleFooter.spanBlock} >
                            <img style={{paddingTop: 65, paddingRight: 10}} src="../Instagram.png"/>
                            <img style={{paddingRight: 10}}   src="../vk.png"/>
                            <img style={{paddingRight: 10}}src="../twitter.png"/>
                            <img style={{paddingRight: 10}} src="../telegram.png"/>
                            <img style={{paddingRight: 10}} src="../facebook.png"/>
                    <div className={styleFooter.direction}>
                    DIRECTION
                    </div>
                    <div className={styleFooter.phoneInfoNumber} style={{paddingTop: 18}}>
                        Беларусь, г. Минск, пер. С.Ковалевской, 60, офис 820
                    </div>
                    <div style={{paddingTop: 20, opacity: 0.5}} >
                         <hr  />
                    </div>

                    <div className={styleFooter.phoneInfoNumber} style={{paddingTop: 40}}>
                        E-MAIl: <a className={styleFooter.linkEmail} href="#">info@sellwin-system.by</a>
                    </div>

                </span>

            </footer>
            <style jsx>
                {`
                  .navbar {
                    background: rgba(0, 146, 255, 0.8);
                    padding: 15px;
                    justify-content: space-around;
                    align-items: center;
                    display: flex;
                    height: 122px;
                    position: absolute;
                    z-index: 1;
                    width: 100%;
                    opacity: 0.85;
                  }

                  /* The container <div> - needed to position the dropdown content */
                  .dropdown {
                    position: relative;
                    display: inline-block;
                  }  
                 

                  /* Dropdown Content (Hidden by Default) */
                  .dropdown-content {
                    display: none;
                    position: absolute;
                    //background-color: #f9f9f9;
                    min-width: 160px;
                    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                    z-index: 1;
                    align-items: center;
                    opacity: 1;
                    background: #FFFFFF;
                  } 
               

                  /* Links inside the dropdown */
                  .dropdown-content a {
                    color: black;
                    padding: 12px 16px;
                    text-decoration: none;
                    display: block;
                  }

                  .link {
                    color: black;
                    padding: 12px 16px;
                    text-decoration: none;
                    display: block;
                  }

                  /* Change color of dropdown links on hover */
                  .dropdown-content a:hover {
                    background-color: #f1f1f1
                  }

                  /* Show the dropdown menu on hover */
                  .dropdown:hover .dropdown-content {
                    display: block;
                   
                  }

                  /* Change the background color of the dropdown button when the dropdown content is shown */
                  .dropdown:hover .dropbtn {
                    background-color: #3e8e41;
                  }

                `}
            </style>
        </>
    );
};

export default MainContainer;
