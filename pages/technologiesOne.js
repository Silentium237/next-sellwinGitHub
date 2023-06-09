import MainContainer from "../components/MainContainer";
import Partners from "../components/Partners";
import WriteMe from "../components/WriteMe";
import style from "../styles/Service.module.css"


import MainImgForAnotherPage from "../components/MainImgForAnotherPage";
import Cooperation from "../components/Cooperation";
import styleTechnoOne from "../styles/TechnologiesOne.module.css"

export default function technologiesOne (){

    let array = [
        {text: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                " Cursus orci sit tortor imperdiet est eu tortor, sagittis." +
                " Lorem ipsum dolor sit amet, consec tetur adipiscing elit." +
                " Lorem ipsum dolor sit amet, consecte tur adipiscing elit\n" ,
         icon: "../lider.svg",
         number: 1
        },
        {text: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                " Cursus orci sit tortor imperdiet est eu tortor, sagittis." +
                " Lorem ipsum dolor sit amet, consec tetur adipiscing elit." +
                " Lorem ipsum dolor sit amet, consecte tur adipiscing elit\n" ,
         icon: "../lider.svg",
         number: 2
        },
        {text: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                " Cursus orci sit tortor imperdiet est eu tortor, sagittis." +
                " Lorem ipsum dolor sit amet, consec tetur adipiscing elit." +
                " Lorem ipsum dolor sit amet, consecte tur adipiscing elit\n" ,
         icon: "../lider.svg",
         number: 3
        }
    ]



    return(
        <MainContainer>
            <MainImgForAnotherPage/>
            <div style={{width: 1084,  alignItems: "center", justifyContent: "center", margin: "auto"}}>
                <div className={style.breadCrams}>
                    <span>Главная &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                    <span>Технологии &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                    <span style={{color: "black"}}>TypeScript</span>
                </div>
            </div>
            <div style={{backgroundImage: "Url(/technoOne.png)"}}  className={styleTechnoOne.firstImgLogo}>
                <div className={styleTechnoOne.firstImgLogoText}>
                    С нами выигрывают, <br/>
                    используя TYPESCRIPT
                </div>
            </div>
            <div className={styleTechnoOne.title}>
                Преимущества
            </div>
            <div className={styleTechnoOne.smallCardBlock}>
                {array.map((item , index)=> (
                    <span key={index} className={styleTechnoOne.smallCard}>
                   <img style={{paddingTop: 34, paddingLeft: 34}} src={item.icon}/>
                   <div className={styleTechnoOne.bigNumber}>
                       {item.number}
                   </div>
                    <div className={styleTechnoOne.smallCardText}>
                        {item.text}
                    </div>
               </span>
                ))}
            </div>

            <div style={{paddingTop: 251}}  className={styleTechnoOne.title}>
                в наших проектах мы <br/> используем typescript
            </div>
            <div className={styleTechnoOne.mainInfoBlock}>
                <span>
                    <p className={styleTechnoOne.textMainInfoBlock}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus orci sit tortor imperdiet est eu tortor, sagittis.
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    </p>
                    <p className={styleTechnoOne.textMainInfoBlock}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus orci sit tortor imperdiet est eu tortor, sagittis.
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    </p>
                    <p className={styleTechnoOne.textMainInfoBlock}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus orci sit tortor imperdiet est eu tortor, sagittis.
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    </p>
                   </span>
                <span>
                    <img src="../technoOne1.png"/>
                </span>

            </div>






            <Cooperation/>


            <Partners/>
            <WriteMe/>

        </MainContainer>

    )
}