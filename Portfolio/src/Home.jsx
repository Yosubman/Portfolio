import Header from './component/header.jsx'
import './Home.css'
function Home(){
    return(
        <>
        <Header />
        <div className='home'>
        <p className='hero-eyebrow'>// Full Stack Developer</p>
        <h2 className='hero-name'>
          Piyanat<br />Roopsoong<span className='cursor'></span>
        </h2>
        <p className='hero-role'>สร้างสิ่งที่ใช้ได้จริง</p>
        <p className='hero-bio'>นักพัฒนาที่ชอบแก้ปัญหาที่ซับซ้อนด้วยโค้ดที่อ่านง่าย</p>
        <div className='hero-actions'>
          <button className='btn-primary'>ดูผลงาน ↗</button>
          <button className='btn-ghost'>ดาวน์โหลด CV</button>
        </div>
      </div>

        </>
    )
}
export default Home;