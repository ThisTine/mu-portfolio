import Tag from "../components/Tag";
import Award from "../components/Award";
export default function p6() {
    return (
      <div className="page" style={{background:"url(/img/p4.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        <div className="border shadow"></div>
        <div className="centeralign">
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"3rem",letterSpacing:"3px"}} tagname="h1">รางวัลที่ภาคภูมิใจ</Tag></h1>
        </div>
        </div>
        <div className="container" style={{height:"50%",width:"80%",marginTop:"15px"}}>

        <div className="sixbytwo">
        <div className="haf">
        <Award imgp="/img/certi/cefr.jpg" caption="ผลการสอบ Oxford CEFR ระดับ B1 (2019)" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/efsetctf.jpg" caption="ผลการทดสอบ EFset CEFR ระดับ C1 (2020)" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/movie.jpg" caption="การแข่งขันศิลปหัตถกรรมระดับชาติ ครั้งที่ ๖๙ หมวด หนังสั้น (รางวัลเหรียญเงินระดับประเทศ)" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/rotc.jpg" caption="เข้าร่วมการประกวด รด.นวัตกรรม ภายใต้โครงการศูนย์ฝึกแข็งขัน สถานศึกษาร่วมใจ มุ่งไปสู่มาตรฐานเดียวกัน" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/oeg.jpg" caption="เข้าร่วมโปรแกรมนักเรียนแลกเปลี่ยน ณ ประเทศ สหรัฐอเมริกา ปี 2019-2020" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/etech.jpg" caption="รางวัลชนะเลิศ Computer Graphic & Homepage Contest E-tech" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/Nextjs.png" caption="เข้าร่วมงานสัมมนา nextjs conf 2020" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/aws.jpg" caption="เข้าร่วม AWS | AWSOME DAY งานสัมมนา online เรียนรู้เกี่ยวกับบริการต่าง ๆ ภายใน AWS" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/webapp2.jpg" caption="การแข่งขันศิลปหัตถกรรมระดับชาติ ครั้งที่ ๖๙ หมวด Web applications ระดับเขตพื้นที่ (เหรียญทองชนะเลิศ)" />
        </div>
            
        </div>


        {/* <div className="sixbytwo">
        <div className="haf">
        <Award imgp="/img/certi/oeg.jpg" caption="เข้าร่วมโปรแกรมนักเรียนแลกเปลี่ยน ณ ประเทศ สหรัฐอเมริกา ปี 2019-2020" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/etech.jpg" caption="รางวัลชนะเลิศ Computer Graphic & Homepage Contest E-tech" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/Nextjs.png" caption="เข้าร่วมงานสัมมนา nextjs conf 2020" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/aws.jpg" caption="เข้าร่วม AWS | AWSOME DAY งานสัมมนา online เรียนรู้เกี่ยวกับบริการต่าง ๆ ภายใน amazon web service" />
        </div>
            
        </div> */}

        </div>
      </div>
    )
  }
  