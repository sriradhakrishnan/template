import React from "react"
import style from "./template.module.css"
import pic from "./boat.png"
import pic3 from "./nature.jpg"
import pic2 from "./girl2.jpg"
import pic4 from "./camera1.webp"
import pic5 from "./standing girl.jpg"
import pic6 from "./camera3.jfif"


import pic7 from "./alert.png"
import pic8 from "./dashboard.png"
import pic9 from "./layout.png"
import pic10 from "./pagination.png"
import pic11 from "./popover.png"
import pic12 from "./settings.png"
import pic13 from "./badge.png"
import pic14 from "./buttons.png"
import pic15 from "./cards.jpg"
const Template=()=>{
    return(
        <div>
       <section id={style.navbar}>
        <article>
            <div class={style.logo}>
            <i class="fa-solid fa-hands-bound"><strong style={{color:"white" ,font:"25px"}}>MATERIAL </strong> <span style={{color:"lightgrey"}}>pro</span></i>
            </div>
            <div className={style.empty}>
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class={ style.button}>
                <p className={style.btn}>Upgrade to Pro</p>
              <h2><i class="fa-solid fa-circle-user"></i></h2> 
            </div>
        </article>
       </section>


       <section id={style.body}>
        <article>
               <div className={style.sidebar}>
              <br />
             <img src={pic8} alt="" />  <span style={{fontSize:"20px",fontFamily:"sans-serif"}}>Dashboard</span><br /><br />
             <img src={pic7} alt="" /> <span style={{fontSize:"20px",fontFamily:"sans-serif"}}>Alert</span><br /> <br />
            <img src={pic13} alt="" /><span style={{fontSize:"20px",fontFamily:"sans-serif"}}>Budgets</span> <br /><br />
             <img src={pic14} alt="" /><span style={{fontSize:"20px",fontFamily:"sans-serif"}}>buttons</span> <br /> <br />
             <img src={pic15}alt="" /><strong><span style={{fontSize:"20px",fontFamily:"sans-serif"}}>Cards</span></strong>  <br /> <br />
             <img src={pic9} alt="" /><span style={{fontSize:"20px",fontFamily:"sans-serif"}}>layouts</span> <br /> <br />
             <img src={pic10} alt="" /><span style={{fontSize:"20px",fontFamily:"sans-serif"}}>pagination</span> <br /> <br />
             <img src={pic11} alt="" /><span style={{fontSize:"20px",fontFamily:"sans-serif"}}>popover</span><br /> <br />
             <img src={pic12} alt="" /><span style={{fontSize:"20px",fontFamily:"sans-serif"}}>Taitips</span> <br /> 
               </div>
               <div className={style.basiccards}>
                <div className={style.cardname}>basic cards</div>
                <div className={style.cards}>
                   <div className={style.card1}>
                         <img src={pic} alt="" />
                        <h1 className={style.cardtitle}>card title</h1>
                        <h4 >card subtitle</h4>
                        <p className={style.cardtext}>Some quick example text to build on the tite and make up the build of the cards content.</p>
                        <h5 className={style.submit}>Button</h5>
                   </div>
                   
                   <div className={style.card2}>
                         <img src={pic3} alt="" />
                        <h1 className={style.cardtitle}>card title</h1>
                        <h4 >card subtitle</h4>
                        <p className={style.cardtext}>Some quick example text to build on the tite and make up the build of the cards content.</p>
                        <h5 className={style.submit}>Button</h5>
                   </div>
                   
                   <div className={style.card3}>
                   <img src={pic2} alt="" />
                        <h1 className={style.cardtitle}>card title</h1>
                        <h4 >card subtitle</h4>
                        <p className={style.cardtext}>Some quick example text to build on the tite and make up the build of the cards content.</p>
                        <h5 className={style.submit}>Button</h5>
                   </div>
                   
                </div>

                <div className={style.cardname}>Cards Content Types </div>
                <div className={style.cards2}>

                <div className={style.card4}>
                <h1 className={style.cardtitle}>card title</h1>
                <h4 >card subtitle</h4>
                    <img src={pic4} alt="" />
                    <p className={style.cardtext}>Some quick example text to build on the tite and make up the build of the cards content.</p>
                        <h5 className={style.submit}>Button</h5>
                        </div>

                <div className={style.card5}>
                     <h1 className={style.cardtitle}>card title</h1>
                    <h4 >card subtitle</h4>
                    <img src={pic5} alt="" />
                    <p className={style.cardtext}>Some quick example text to build on the tite and make up the build of the cards content.</p>
                     <h5 className={style.submit}>Button</h5>
                </div>

                <div className={style.card6}>
                    <h1 className={style.cardtitle}>card title</h1>
                    <h4 >card subtitle</h4>
                    <img src={pic6} alt="" />
                    <p className={style.cardtext}>Some quick example text to build on the tite and make up the build of the cards content.</p>
                    <h5 className={style.submit}>Button</h5>
                </div>

                </div>

                

                
               </div>
        </article>
       </section>
       </div>
       
    )
}
export default Template