const Popup = ({popupclose})=>{

    return (
        <div className="popup">
            <div className="popup-body">
                <div className="popup-head">
                <h1>ข้อแนะนำ </h1>
                 </div>
                 <div className="popup-body">
                     <h2>Portfolio เล่มนี้เขียนเพื่อใช้สำหรับพิมพ์ในเอกสาร (A4) และ support การแสดงผลที่ดีที่สุดเพียงแค่เพียงบางอุปกรณ์เท่านั้น </h2>
                     <hr/>
                     <h3>กรณีใช้ PC </h3>
                     <h4>การแสดงผล : 1920px * 1080px</h4>
                     <h4>Text size : 100%</h4>
                     <h5>กรณีไม่สามารถปรับการแสดงหน้าจอใด้ให้กด Ctrl + หรือ Ctrl - เพื่อปรับขนาดทีเหมมาะสม</h5>
                     <hr/>
                     <h3>กรณีใช้ SmartPhone</h3>
                     <h4>การแสดงผล : 375px * 667px ขึ้นไป (หรือใหญ่กว่า Iphone 6)</h4>
                     <hr/>
                     <h1 style={{padding:"20px 0"}}>สำหรับการพิมพ์สามารถพิมพ์โดยกด ctrl+P (กรุณาตั้งหน้ากระดาษเป็น A4 และ Margin เป็น none)</h1>
                 </div>
                 <button className="popup-close" onClick={()=>popupclose(false)}>ปิด</button>
            </div>

        </div>
    )
}
export default Popup;