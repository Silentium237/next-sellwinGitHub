import MainContainer from "../components/MainContainer";
import Partners from "../components/Partners";
import WriteMe from "../components/WriteMe";
import style from "../styles/Service.module.css"
import MainImg from "../components/MainImg";
import {useState} from "react";
import MainImgForAnotherPage from "../components/MainImgForAnotherPage";
import Cooperation from "../components/Cooperation";
import styleTechno from "../styles/MainTechnoPage.module.css";
import Slider from "react-slick";

export default function techno (){
    let listItemFrontEnd = [

        {
            text: "JavaScript",
            subText: "JavaScript является языком программирования при разработки скриптов для выполнения" +
                " на стороне клиента, что делает его одной из базовых технологий во всемирной сети",
            urlImg: "../serviceImg2.png",
            link: ""
        },
        {
            text: "TypeScript",
            subText: " TypeScript используют для создания пользовательских интерфейсов, frontend- и " +
                "backend-частей веб-сайтов, а еще больших бизнес-приложений, где важна долгосрочная поддержка и надежность",
            urlImg: "../serviceImg3.png",
            link: ""
        },
        {
            text: "React JS",
            subText: "React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных" +
                " разработчиков и корпораций. React может использоваться для разработки одностраничных " +
                "и мобильных приложений. Его цель — предоставить высокую скорость разработки, простоту и масштабируемость",
            urlImg: "../serviceImg4.png",
            link: ""
        },
        {
            text: "Next JS",
            subText: "Next.js — фреймворк на JavaScript, использующий React для построения Server Side Render-приложений (SSR) и статически-генерируемых сайтов",
            urlImg: "../serviceImg5.png",
            link: ""
        },
        {
            text: "Vue JS",
            subText: "Vue - это прогрессивный фреймворк для создания пользовательских интерфейсов. В отличие от " +
                "фреймворков-монолитов, Vue создан пригодным для постепенного внедрения. Его ядро в " +
                "первую очередь решает задачи уровня представления (view), что упрощает интеграцию с другими библиотеками и существующими проектами",
            urlImg: "../serviceImg6.png",
            link: ""
        },
        {
            text: "Nuxt JS",
            subText: "Nuxt.js — это фреймворк для создания универсальных приложений на Vue.js с использованием " +
                "Node.js. С помощью него можно рендерить UI на сервере и генерировать статические сайты.",
            urlImg: "../serviceImg1.png",
            link: ""
        }
    ]
        let listItemBackEnd = [

        {
            text: "NET(C#)",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg2.png",
            link: ""
        },
        {
            text: "NODE JS",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg3.png",
            link: ""
        },
        {
            text: "NEST JS",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg4.png",
            link: ""
        },
        {
            text: "PHP",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg5.png",
            link: ""
        },
        {
            text: "PYTHON",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg6.png",
            link: ""
        },

    ]
    let listItemMobile = [
        {
            text: "SWIFT",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg1.png",
            link: ""
        },
        {
            text: "ANDROID",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg2.png",
            link: ""
        },
        {
            text: "REACT NATIVE",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg3.png",
            link: ""
        },
        {
            text: "KOTLIN",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg4.png",
            link: ""
        },
    ]
    let listItem1C = [
        {
            text: "1С: Бухгалтерия",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg1.png",
            link: ""
        },
        {
            text: "1С: Управление торговлей",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg2.png",
            link: ""
        },
        {
            text: "1С: Конвертация данных",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg3.png",
            link: ""
        },
        {
            text: "1С Битрикс",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg4.png",
            link: ""
        },
        {
            text: "1С Битрикс24",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg4.png",
            link: ""
        },
    ]

    const item = [
        { title: "Frontend",
            list: [
                {name: "JAVASCRIPT", link: "/javascript"},
                {name:"TYPESCRIPT", link: "/typescript"},
                {name:"REACT JS", link: "/react"},
                {name:"NEXT JS", link: "/nextjs"},
                {name:"VUE JS", link: "/vuejs"},
                {name:"NUXT JS", link: "/nuxtjs"},
            ]
        },
        { title: "BACKEND",
            list: [
                {name: "NODE JS", link: "/nodejs"},
                {name:"NEST JS", link: "/nestjs"},
                {name:"PYTHON", link: "/python"},
                {name:"PHP", link: "/php"},
            ]
        },
        { title: "МОБИЛЬНАЯ РАЗРАБОТКА",
            list: [
                {name: "REACT NATIVE", link: "/reactnative"},
                {name:"KOTLIN", link: "/kotlin"},
                {name:"SWIFT", link: "/swift"},
                {name:"ANDROID", link: "/android"},
                {name:"IOS", link: "/ios"},

            ]
        },
        { title: "1С РАЗРАБОТКА",
            list: [
                {name: "1С: Бухгалтерия", link: "/"},
                {name:"1С: Управление торговлей", link: "/"},
                {name:"1С: Конвертация данных", link: "/"},
                {name:"1С Битрикс", link: "/"},
                {name:"1С Битрикс24", link: "/"},
            ]
        },

        ]

    const [showCard , setShowCard] = useState(false)
    const ClickButtonShowCard = () =>{
        setShowCard(!showCard)
    }
    const [number , setNumber] = useState(0)
    const [delNumber , setDelNumber] = useState(2)

    const changeCardNumber = (value) =>{
        if (value === "right" && number !== listItemFrontEnd.length -1){
            setNumber(number + 1)
            setDelNumber(delNumber +1)
        }
        else if (value === "left" && number > 0){
            setNumber(number - 1)
            setDelNumber(delNumber - 1)
        }
    }


    return(
        <MainContainer>
            <MainImgForAnotherPage/>
            <div style={{maxWidth: 1084,  alignItems: "center", justifyContent: "center", margin: "auto"}}>

                <div className={style.breadCrams}>
                    <span>Главная &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                    <span style={{color: "black"}}>Технологии</span>
                </div>
                <div className={style.title}>Технологии</div>

                <div style={{width: 1084,   margin: "auto", display: "flex", justifyContent: "space-between", paddingTop: 70, flexWrap: "wrap"}}>
                    {item.map((item, index) =>(
                        <div key={index} className={styleTechno.cardTechno} >

                            <div className={styleTechno.titleCardTechno}>
                                {item.title}
                            </div>
                            <div style={{paddingTop:22}}>
                      <ul style={{listStyleType: "none"}}>
                            {item.list.map(item =>(
                                <li className={styleTechno.li}><img src="../Ellipse.svg"/> {item.name}</li>
                            ))}
                        </ul>
                    </div>
                        </div>
                    ))}




                </div>


            </div>



            <div>
                <div style={{maxWidth: 1084,  alignItems: "center", justifyContent: "center", margin: "auto"}}>
                    <div className={style.title}>Frontend</div>
                </div>
                <hr style={{width: 650, backgroundColor: "#006DBF", height: 3, opacity: 0.5}}/>

                <div
                    // className={styleTechno.aaa}
                    style={{width: 1084,   margin: "auto", display: "flex", justifyContent: "space-between", paddingTop: 70, flexWrap: "wrap" }}>
                    {listItemFrontEnd.slice(number, delNumber).map((item, index) =>(
                        <>
                            <div key={index} className={styleTechno.cardTechnologies}  >
                                <img  src={item.urlImg}/>
                                <div className={styleTechno.titleCardTechnologies}>
                                    {item.text}
                                </div>
                                <div className={styleTechno.subTitleCardTechnologies}>
                                    {item.subText}
                                </div>
                                <div className={styleTechno.buttonNext}>
                                    Подробнее <img style={{position: "absolute", paddingTop: 4, paddingLeft: 15}} src="../Arrow2.svg"/>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <div style={{  margin: "auto", display: "flex", paddingTop: 70, paddingLeft: "21%" }}>
                    <button style={{width: 50, height: 50, marginRight: 15}}
                            onClick={() => changeCardNumber("left")}
                    >  <img
                        src="../right.svg"/> </button>
                    <button style={{width: 50, height: 50}}
                            onClick={() => changeCardNumber("right")}
                    >  <img
                        src="../left.svg"/></button>
                </div>
            </div>
            <div>
                <div style={{maxWidth: 1084,  alignItems: "center", justifyContent: "center", margin: "auto"}}>
                    <div className={style.title}>BACKEND</div>
                </div>
                <hr style={{width: 650, backgroundColor: "#006DBF", height: 3, opacity: 0.5}}/>

                <div
                    // className={styleTechno.aaa}
                    style={{width: 1084,   margin: "auto", display: "flex", justifyContent: "space-between", paddingTop: 70, flexWrap: "wrap" }}>
                    {listItemBackEnd.slice(number, delNumber).map((item, index) =>(
                        <>
                            <div key={index} className={styleTechno.cardTechnologies}  >
                                <img  src={item.urlImg}/>
                                <div className={styleTechno.titleCardTechnologies}>
                                    {item.text}
                                </div>
                                <div className={styleTechno.subTitleCardTechnologies}>
                                    {item.subText}
                                </div>
                                <div className={styleTechno.buttonNext}>
                                    Подробнее <img style={{position: "absolute", paddingTop: 4, paddingLeft: 15}} src="../Arrow2.svg"/>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <div style={{  margin: "auto", display: "flex", paddingTop: 70, paddingLeft: "21%" }}>
                    <button style={{width: 50, height: 50, marginRight: 15}}
                            onClick={() => changeCardNumber("left")}
                    >  <img
                        src="../right.svg"/> </button>
                    <button style={{width: 50, height: 50}}
                            onClick={() => changeCardNumber("right")}
                    >  <img
                        src="../left.svg"/></button>
                </div>
            </div>
          <div>
              <div style={{maxWidth: 1084,  alignItems: "center", justifyContent: "center", margin: "auto"}}>
                  <div className={style.title}>МОБИЛЬНАЯ РАЗРАБОТКА</div>
              </div>
              <hr style={{width: 900, backgroundColor: "#006DBF", height: 3, opacity: 0.5}}/>

              <div
                  // className={styleTechno.aaa}
                  style={{width: 1084,   margin: "auto", display: "flex", justifyContent: "space-between", paddingTop: 70, flexWrap: "wrap" }}>
                  {listItemMobile.slice(number, delNumber).map((item, index) =>(
                      <>
                          <div key={index} className={styleTechno.cardTechnologies}  >
                              <img  src={item.urlImg}/>
                              <div className={styleTechno.titleCardTechnologies}>
                                  {item.text}
                              </div>
                              <div className={styleTechno.subTitleCardTechnologies}>
                                  {item.subText}
                              </div>
                              <div className={styleTechno.buttonNext}>
                                  Подробнее <img style={{position: "absolute", paddingTop: 4, paddingLeft: 15}} src="../Arrow2.svg"/>
                              </div>
                          </div>
                      </>
                  ))}
              </div>
              <div style={{  margin: "auto", display: "flex", paddingTop: 70, paddingLeft: "21%" }}>
                  <button style={{width: 50, height: 50, marginRight: 15}}
                          onClick={() => changeCardNumber("left")}
                  >  <img
                      src="../right.svg"/> </button>
                  <button style={{width: 50, height: 50}}
                          onClick={() => changeCardNumber("right")}
                  >  <img
                      src="../left.svg"/></button>
              </div>
          </div>
            <div>
                <div style={{maxWidth: 1084,  alignItems: "center", justifyContent: "center", margin: "auto"}}>
                    <div className={style.title}>1C РАЗРАБОТКА</div>
                </div>
                <hr style={{width: 700, backgroundColor: "#006DBF", height: 3, opacity: 0.5}}/>

                <div
                    // className={styleTechno.aaa}
                    style={{width: 1084,   margin: "auto", display: "flex", justifyContent: "space-between", paddingTop: 70, flexWrap: "wrap" }}>
                    {listItem1C.slice(number, delNumber).map((item, index) =>(
                        <>
                            <div key={index} className={styleTechno.cardTechnologies}  >
                                <img  src={item.urlImg}/>
                                <div className={styleTechno.titleCardTechnologies}>
                                    {item.text}
                                </div>
                                <div className={styleTechno.subTitleCardTechnologies}>
                                    {item.subText}
                                </div>
                                <div className={styleTechno.buttonNext}>
                                    Подробнее <img style={{position: "absolute", paddingTop: 4, paddingLeft: 15}} src="../Arrow2.svg"/>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <div style={{  margin: "auto", display: "flex", paddingTop: 70, paddingLeft: "21%" }}>
                    <button style={{width: 50, height: 50, marginRight: 15}}
                            onClick={() => changeCardNumber("left")}
                    >  <img
                        src="../right.svg"/> </button>
                    <button style={{width: 50, height: 50}}
                            onClick={() => changeCardNumber("right")}
                    >  <img
                        src="../left.svg"/></button>
                </div>
            </div>





            <Cooperation/>
            <Partners/>
            <WriteMe/>

        </MainContainer>

    )
}