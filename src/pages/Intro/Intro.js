import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import * as CommonEvt from "../../CommonEvt";
import "./intro.scss";
import audio from "../../assets/video/vangogh_audio.mp3";
import Canvas from "./Canvas";

const Intro = () => {
  const [isAudio, setIsAudio] = useState(false);
  const audioPlayer = useRef();
  const [isLoad, setIsLoad] = useState(false);

  const audioPlay=(e)=>{
    setIsAudio(!isAudio?true:false);
    if(!isAudio){
      audioPlayer.current.play();
      $(e.target).addClass("play");
    }else{
      audioPlayer.current.pause();
      $(e.target).removeClass("play");
    }
  }

  const loadEvt=()=>{
    if(isLoad === false){
      $(".intro-div .sec-div.type1").removeClass("active");
      $(".intro-div .sec-div.type1").find(".txt-area p").removeClass("active");
      setTimeout(() => {
        setIsLoad(true);  
      }, 10);
    }else{
      $(".intro-div .sec-div.type1").addClass("active");
    }
  }

  const scrollEvt=()=>{
    $(".sec-div .txt-area p").each(function(){
      if($(this).offset().top <= window.scrollY + window.innerHeight){
        $(this).addClass("active");
      }else{
        $(this).removeClass("active");
      }
    })
  }
  
  useEffect(()=>{
    CommonEvt.headerStyle();
    loadEvt();
    window.addEventListener("scroll", scrollEvt);

    return()=>{
      window.removeEventListener("scroll", scrollEvt);
    }
  })

  return(
    <div id="cBody" className="pb0">
      <div className="intro-div">
        <div className="audio-div">
          <audio ref={audioPlayer} src={audio} autoPlay={isAudio} loop preload="metadata"></audio>
          <button type="button" className="audio-btn" onClick={audioPlay}>ėėėŽė</button>
        </div>
        <section className="sec-div type1">
          <div className="bg">
            <Canvas />
          </div>
          <div className="txt-area">
            <div className="title-div">
              <p className="tit">Vincent Van Gogh</p>
              <p className="txt">1853.03.30 - 1890.07.29</p>
            </div>
            <div className="txt-div">
              <p className="txt">
                ëđėžíļ ë° ęģ íë ė°ëĶŽëëžėė ę°ėĨ ė ėë Īė§ ėļęĩ­ íę° ėĪ íëŠėīė ėļęģ ëŊļė ėŽė ęļļėī ëĻė ėëí íę° ėĪ íëŠėīëĪ.
              </p>
              <p className="txt">
                íīë°ëžęļ° 15ėĄėī, ëģėī ëđëë ë°Ī, ėđīííëžėĪ ëą ėļęģė ėļ ėíė íėėíĻ ęģ íë ėēėëķí° íę°ëĨž ëŠĐíëĄ ę·ļëĶžė ę·ļë ļë ėŽëė ėëëĪ.
              </p>
            </div>
          </div>
        </section>
        
        <section className="sec-div type2">
          <div className="bg"></div>
          <div className="txt-area">
            <div className="title-div">
              <p className="tit">ęģ íę° íę°ę° ëęļ°ęđė§</p>
            </div>
            <div className="txt-div">
              <p className="txt">
                ęģ íë 19ėļęļ° ę·ļëĶžė ė­ėŽėė ę°ėĨ ę°ėąėë íę°ëžęģ  íííīë ęģžėļėī ėëëĪ.
                1853ë 3ė 30ėž ëĪëëëė ėĪė°ėļĩ ę°ė ėė íėīë ėīëĶī ëëķí° ęģ ė§ėī ë§ęģ  ęđėđ í ėąęēĐėžëĄ ėë Īė ļ ėëĪ.
              </p>
              <p className="txt">
                ęģ íę° ėēė ę·ļëĶžė ę·ļëĶŽęļ° ėėí ęēė 10ë ėīë°ėžëĄėĻ ëđėėë ėėąíëĨž ėŽėĐíī ė·ĻëŊļëĄ ę·ļëĶžė ę·ļëĶŽë ėėĪėīėëĪ.
              </p>
              <p className="txt">
                ėīí 16ėīė ëģļęēĐė ėžëĄ ęģ íę° ëŊļė ė ëė ëĻęē ë ęģęļ°ë ëŊļė í ëëŽėë ėžėīė ėę°ëĄ íëėė ėžíęļ° ėėíëĐīė ëķí°ėëĪ.
              </p>
              <p className="txt">
                ęģ íë íëėĪė ë°ëęģž íëĶŽëĨž ėĪę°ëĐ° ė― 7ëę° íëėė ę·ļëĶžė íë ëëŽëĄ íëíëĐīė, ėë§ė íę°ė ëĪėí ę·ļëĶžė ė í  ė ėęē ëėëĪ.<br/>
                ėīë ęģ íę° ëŊļė ė  ę°ę° ęļ°ëĨīëë° í° ëėėī ëėëĪ.
              </p>
              <p className="txt">
                íëė ę·ļë§ëęģ  ëė ëĪëĨļ ėžė íęļ°ëĄ í ęģ íë ėēė§ė ë°ęēŽíëĪ ėę°íęģ  ė íęĩė ëĪėīę° ė ëėŽę° ëęļ°ëĄ íëĪ.
              </p>
              <p className="txt">
                ëđëĄ ė íęĩėėė ėąė ė ëė  ėėĪėīėė§ë§, ė ëėŽëĨž í  ė ėęē ë ęģ íë ėžë§ ė§ëė§ ėė ęģ íëĨž ęīė ė ėīëžęģ  íëĻí ė ëėėíėėë íëĐīė ėíĪëĐīė ëëĪė ėĪėėę° ëęģ  ë§ëĪ.
              </p>
              <p className="txt">
                ėī ëđėëķí° ęģ íë ę·ļëĶžė ę·ļëĶŽë íę°ę° ëęē ëĪęģ  ęē°ėŽė íęēëëĪ.<br/>
                ęģ íë ę·ļëĶžė íĩíī ėŽëëĪė ėëĄíī ėĪ ė ėëĪęģ  ėę°íëĪ.<br/>
                ëēĻęļ°ėė ëĪëëë ę·ļëĶŽęģ  íëėĪ íëĶŽëĨž ęą°ėģ ëėė ėžëĄ ëŊļė ė ęīíī ë°°ė°ęē ë í ëëėī íëėĪ ëĻëķė ėëĨžėīëžë ėė ë§ėė ëė°Đíęē ëëĪ.
              </p>
            </div>
            <div className="title-div">
              <p className="tit">ėëĨžėėė ęģ í</p>
            </div>
            <div className="txt-div">
              <p className="txt">
                ęģ íę° ėëĨžė ęą°ėģ ėë ëŊļė ė ė ëģėė ėėí í ėėīė ė ííęļ°ęđė§, ëĻė§ 2ëė ęąļėđ ėī ėęļ°ė ę·ļëĶ° ėíëĪėī íėŽ ėļęģė ėžëĄ ę°ėĨ ė ëŠí, ęģ íė ęąļėėžëĄ ëĻėėëĪ.
              </p>
            </div>
          </div>
        </section>
        
        <section className="sec-div type3">
          <div className="bg"></div>
          <div className="txt-area">
            <div className="title-div">
              <p className="tit">ęģ íë ė ė ëģė?</p>
            </div>
            <div className="txt-div">
              <p className="txt">
                ęģ íė ęīí ėīėžęļ°ėė ëđ ė§ ė ėë ėžėī ë°ëĄ ęģ íŽė 'ė ė ëģ'ė ęīë Ļë ëķëķėīëĪ.<br/>
                ęģ íė ęīīíí ėąęēĐęģž ëđė ëíđíëĪ ëŠĐíī ęļ°ęīīíë ę·ļëĶž, ę·ļëĶŽęģ  ę·ëģžė ėëë ėīėžęļ°ęđė§ ė ėėļėīëžęģ  ėę°í  ė ėë ęļ°íëĪėī ë§ėī ėë Īė ļ ėëĪ.<br/>
                ėĪė ëĄ ęģ íę° ė ė ëģėė ėėíī ėėëęąī ėŽėĪėīė§ë§, ëĻė§ 'ė ė ëģė'ė ėėíī ėėëĪë ėŽėĪë§ėžëĄ ęģ íëĨž ė ė ëģėëžęģ  ëķëĨīęļ°ėë ëĪė ëŽīëĶŽę° ėëĪ.
              </p>
              <p className="txt">
                ė°ė  ėë°ė ėžëĄ ëģėė ėėíėžëĐ°,<br/>
                ëģėė ëĻļëŽžë ė― 1ëëė 150ė  ėīėė ė íëĨž ę·ļë ļëĪ.<br/>
                ëģėėėë ę°ėļ ėđĻėĪė ėžëĪë ė  ëė íėĪė ėĢžęģ  ë°ė íļė§ė ëėėë ęļė íėëžęģ  ėę°íęļ°ė ëŽīëĶŽę° ë°ëĨļëĪ.
              </p>
              <p className="txt">
                ėĪė ëĄ ęģ íë ę°ė§ęģž ė°ėļėĶ ëą ëģė ę°ė§ęģ  ėë ęąī ėŽėĪėīëĐī, ėĒėĒ ë°ėė ėžėžėž ėėĪė ėëí ė ë ėëĪ.<br/>
                ëđė ëģėėėë ęģ íę° ę·ļëĶžëëķė ėīë°ėžėī ë°ėíëĪęģ  ėę°íė§ë§ ęģ íë ë°ëëĄ ę·ļëĶžë§ėī ėė ėī íëģĩí  ė ėë ė ėží ėëĻėīëžęģ  ë§íëĪ.
              </p>
            </div>
          </div>
        </section>
        
        <section className="sec-div type4">
          <div className="bg"></div>
          <div className="txt-area">
            <div className="title-div">
              <p className="tit">ęģ í ėí íđė§1</p>
              <p className="txt">ëļëėė ė íļíëĪ</p>
            </div>
            <div className="txt-div">
              <p className="txt">
                íëėė ęģ íė ę·ļëĶžė íę°íęļ°ëĄ ëíė ėļ 'ėļėėĢžė'íę°ėëëĪ.<br/>
                ëđėėë ę·ļ ėīë ííėë ë§ė§ ėë ę·ļëĶžė ę·ļëĶ° íę°ë ęģ íėëĪ.
              </p>
              <p className="txt">
                ęģ íė ę·ļëĶž ėĪ ę°ėĨ ëíė ėļ íđė§ė 'ëļëė'ęģž ëęŧę°ėī ëęŧīė§ëëĄ 'ėđ íë ęē'ėīëžęģ  í  ė ėëĪ.<br/>
                ęģ íė ę°ėĨ ëíė ėļ ėí ėĪ íëėļ 'íīë°ëžęļ°' ėīėļė ë§ė ę·ļëĶžėë ëļë ėęđė ë§ėī ėŽėĐíėëĪ.
              </p>
              <p className="txt">
                íííīíŽėĪíļė ęļ°ėŽėë ęģ íė ęīíī <br/>
                "'ë° ęģ íë ė°ėíëŠ ëëķė ę°ë°ë ėëĄėī ëŽžę°, 'íŽëĄŽ ėëĄė°ëĨž' ę·ļëĶžė ë§ėī ėŽėĐíëĪ."<br/>
                ėĪė ëĄ ęģ íę° ëė íėĪėęē ëģīëļ íļė§ėë ë 'ëļë ëŽžę°ė ėŽëĪ ëŽëž'ęģ  ė í ėėė ë ėëĪ.
              </p>
            </div>
            <div className="title-div">
              <p className="tit">ęģ í ėí íđė§2</p>
              <p className="txt">ëęšžėī ëŽžę°</p>
            </div>
            <div className="txt-div">
              <p className="txt">
                ęĩęģžėë ėąė ėĪë Īėë ęģ íė ę·ļëĶžė ëģīëĐī ęģ í ėšëēėĪė ëŽžę°ė ë°ëĨīë ęēėī ėëëž íė°ęģ  ėë ëŊí ëëė ëĪęēíëĪ.<br/>
                ëęšžėī ëŽžę°ėžëĄ ėëëŽ ę·ļëĶ° ëŊí ėļëŽžė ííëēęģž ę·ļė ë ėė ėë ęēëĪė ëę°ėī ėŽííęļ° ëģīëĪë ėė ė ę°ė ė ę°íęē íííęļ° ėíīė ėĢžęīė ë°ëž ėėēīëĨž ėŽėĐíëĪ.<br/>
                ęģ íë ëđė íę°ëĪėī ėĪėíęē ėŽęēžë íėė ėļ ęģĩę° ëŽėĪė ëí ėë°ėė ëēėīë ííę° ę°ėļė ėę°ėīë ėŽëĶŽė  ėíëĨž ëģīëĪ ėė ëĄ­ęē íííīėĢžë ėëĻėī ë  ė ėëĪëęēė ėļėíęģ  ėėėė ėë ĪėĪëĪ.
              </p>
              <p className="txt">
                ėēėŽėė§ë§ ėīė ėė  ëŊļėđęīėīëĄ ėļėëėë ę·ļëĨž ėīíīí  ė ėėë ėļėėė, ę·ļë 37ėļė ė ė ëėīëĄ ėė ë§ę°íë ęąīė§ë ëŠĻëĨļëĪ.<br/>
                ę·ļëŽë ėėí ęīęļ°ę° ëģė ę·ļė ėķęģž ę·ļëĶžėī ėĪëë , ę·ļëĨž ėīíīíęē ë§ë ëĪ.<br/>
                Starry, starry night.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
};

export default Intro;