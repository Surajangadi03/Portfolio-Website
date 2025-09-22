import { Link} from 'react-router-dom';
const About=()=>{
    return(
        <>
    <div className="outer-container">
        <div className="home-conatiner about-section">
            <div className="profile-image">
                <img id="pro-image" src="surajphoto.jpg" alt="This is Image" />
            </div>
            <div className="home-about">
                <p id="home-para-1">Hi, I’m Suraj Angadi ,</p>
                <p id="home-para-2">I’m a Frontend & Full Stack Developer, and a Cloud Enthusiast.</p>
                <p className="home-para-3">
                    I’m a Frontend & Full Stack Developer and Cloud Engineer with a strong foundation in building responsive, 
                    user-friendly, and scalable web applications. My expertise lies in  React.js, JavaScript, Python, and modern
                    web technologies, and I am passionate about solving real-world problems with clean and efficient code.
                    I have successfully completed a Python Full Stack Development course, where I gained  in-depth knowledge of 
                    backend and  frontend  integration. Additionally, I completed a   Web Development Internship at Skill Dzire, where 
                    I applied my skills to real-world projects and enhanced my ability to work in collaborative environments.
                    Beyond development, I have an interest in Cloud Computing (AWS) and aim to design  secure,  scalable, and cost-effective cloud-based solutions.
                    I believe in continuous learning and enjoy  exploring new tools, frameworks, and technologies that make development smarter and faster.
               </p>
            </div>
        </div>
    </div>
        </>
    )
}
export default About;