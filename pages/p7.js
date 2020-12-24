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
        <Award imgp="/img/certi/solo_c.jpg" caption="เข้ารับการฝึกสอนภาษา C " captionsec="จาก Sololearn" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/solo_html.jpg" caption="เข้ารับการฝึกสอน HTML " captionsec="จาก Sololearn" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/solo_java.jpg" caption="เข้ารับการฝึกสอนภาษา java" captionsec="จาก Sololearn" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/solo_jquery.jpg" caption="เข้ารับการฝึกสอนการใช้งาน jquery " captionsec="จาก Sololearn" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/solo_php.jpg" caption="เข้ารับการฝึกสอนภาษา PHP" captionsec="จาก Sololearn" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/solo_python.jpg" caption="เข้ารับการฝึกสอนภาษา Python3 " captionsec="จาก Sololearn" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/solo_javascript.jpg" caption="เข้ารับการฝึกสอนภาษา Javascript " captionsec="จาก Sololearn" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/eng.jpg" caption="เหรียญเงิน การแข่งขันทักษะภาษาอังกฤษหมวด ฟัง พูด อ่าน เขียน (Multi-Skills)" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/engtran.jpg" caption="สำเร็จการศึกษาระดับ 10 (เทียบเท่า ม.4) ด้วยผลการเรียน 98/100 ในวิชา Multimedia and Webpage Design " />
        </div>
            
        </div>

        </div>
      </div>
    )
  }
  