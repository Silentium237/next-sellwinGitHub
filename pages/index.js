import Link from "next/link";
import A from "../components/A";
import Head from "next/head";
import MainContainer from "../components/MainContainer";
import Image from 'next/image';

import style from "../styles/Index.module.css"
import style2 from "../styles/user.module.scss"
import AboutUs from "../components/AboutUs";
import OurValue from "../components/OurValue";
import styleValue from '../styles/AboutUs.module.css'
import Mission from "../components/Mission";
import Technologies from "../components/Technologies";
import Cooperation from "../components/Cooperation";
import Project from "../components/Project";
import Partners from "../components/Partners";
import WriteMe from "../components/WriteMe";
import {useState} from "react";
import MainImg from "../components/MainImg";
import SendForm from "../components/SendForm";

const Index = () => {

    return (
        <MainContainer keywords={"main page"}>

            <div>
                <MainImg/>
                <SendForm/>


                <div>

                    <div style={{display: "flex",  alignItems: "center", justifyContent: "center", margin: "auto", paddingTop: 300,   }}>
                         <span className={style.imgStyle}>
                         </span>
                        <span >

                         <img src="../whyWeAre.png" style={{zIndex: 2}} />
                        <img src="../Group59.svg" style={{position: "absolute", zIndex: 1, left: 0}} />
                         </span>
                        <span style={{paddingLeft: 30}}>
                            <div className={style.textWhoWeAreMain}>
                                Кто мы?
                            </div>

                            <br/>
                            <div className={style.subTextWhoWeAreMain}>
                                Мы - молодая, динамично развивающаяся <br/>
                                и финансово независимая IТ-компания, часть <br/>
                                международного холдинга Sellwin Group, <br/>
                                резидент Парка Высоких Технологий.
                            </div>
                            <br/>
                            <div className={style.subTextWhoWeAreMain}>
                             Специализируемся на разработке программного <br/>
                                обеспечения для дистрибьюции, розничной <br/>
                                торговли и производства.
                            </div>
                            <br/>
                            <div className={style.subTextWhoWeAreMain}>
                             У нас 20 высококвалифицированных специалистов,<br/>
                                которые детально погружены в бизнес клиентов.
                            </div>

                        </span>
                    </div>


                </div>

                <div style={{backgroundImage: "Url(/1781.png)", height: 370, marginTop:300}}>
                    <div style={{display: "flex"}}>
                        <span>
                             <img src="../1787.svg" />
                        </span>
                        <span className={style.textSellwin}>
                            Sellwin System
                        </span>
                        <span className={style.textSellwinDescription}>
                              Анализ, проектирование, разработка программного <br/>
                            обеспечения информационных систем.
                            Разработка <br/> мобильных приложений, отчетность,
                            аналитика, <br/> а также аутсорсинговые услуги.
                        </span>
                        <span style={{float: "right"}}>
                               <img  src="../1786.svg" />
                        </span>
                    </div>
                </div>

                <AboutUs/>

                <OurValue/>
                <Mission/>
                <Technologies/>
                <Cooperation/>
                <Project/>
                <Partners/>
                <WriteMe/>

            </div>



        </MainContainer>
    );
};

export default Index;
