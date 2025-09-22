import { Link } from 'react-router-dom';

const Home=()=>{
    return(
        <>
    <div className="outer-container">
        <div className="home-conatiner">
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


        {/* Project section */}
            <h2 id="home-project-heading">PROJECTS</h2>
            
            <div className="home-project-1">
                <p id="project1-title">Project1: Student Management System Using Django</p>
                <div className="project-section">
                    <div className="project-image">
                        <img id="homeproject-image1" src="studentmanagementsystem-image.png" alt="this is image" />
                    </div>
                    <div className="project-intro">
                        <ul className="project-options">
                            <li className="project-list">Developed a CRUD-Based web application to manage student records efficiently.</li>
                            <li className="project-list">Implemented backend using Django with MySQL database integration</li>
                            <li className="project-list">Designed frontend using HTML5, CSS3.</li>
                            <li className="project-list">Used Django ORM for database operations, reducing boilerplate SQL code.</li>
                            <li className="project-list">Deployed the application on PythonAnywhere, enabling live access.</li>
                        </ul>
                        <button id='project1-btn'><Link id='project1-link' to="https://surajangadi.pythonanywhere.com/" target='blank'>Project Link</Link></button>
                        <button id='project1-btn'><Link id='project1-link' to="https://github.com/Surajangadi03/StudentManagementSystem/tree/main/studentproject" target='blank'>View Code</Link></button>
                    </div>
                </div>
            </div>


            <div className="home-project-1">
                <p id="project1-title">Project2: React Quiz-App</p>
                <div className="project-section">
                    <div className="project-image">
                        <img id="homeproject-image1" src="quizapp.png" alt="this is image" />
                    </div>
                    <div className="project-intro">
                        <ul className="project-options">
                            <li className="project-list">Built an interactive Quiz App using React.js with state management through React <br /> Hooks.</li>
                            <li className="project-list">Designed a clean and responsive UI using CSS3, ensuring smooth usability <br />across devices.</li>
                            <li className="project-list">Implemented features like score tracking, question navigation,and instant feedback.</li>
                            <li className="project-list">Deployed the project on Vercel, with live access and GitHub integration.</li>
                        </ul>
                        <button id='project1-btn'><Link id='project1-link' to="https://react-quiz-app-ten-tau.vercel.app/" target='blank'>Project Link</Link></button>
                        <button id='project1-btn'><Link id='project1-link' to="https://github.com/Surajangadi03/React-Quiz-App/blob/main/src/Components/Quizapp.jsx" target='blank'>View Code</Link></button>
                    </div>
                </div>
            </div>

            {/* Skills section */}
            <h2 id='home-skill'>TECHNICAL SKILLS</h2>
            <div className="skill-container">
                <div className="skill-icon">
                        <img className="python-icon" src="HTML5_logo.png" alt="this is image" />
                        <h2>HTML</h2>
                </div>
                
                <div className="skill-icon">
                    <img className="python-icon" src="CSS3_logo.png" alt="this is image" />
                    <h2>CSS</h2>
                </div>

                <div className="skill-icon">
                    <img className="python-icon" src="js.png" alt="this is image" />
                    <h2>JAVASCRIPT</h2>
                </div>

                <div className="skill-icon">
                    <img className="python-icon" src="bootstrap-logo.png" alt="this is image" />
                    <h2>BOOTSTRAP</h2>
                </div>

                <div className="skill-icon">
                    <img className="python-icon" src="react-logo.png" alt="this is image" />
                    <h2>REACT JS</h2>
                </div>

                <div className="skill-icon">
                    <img className="python-icon" src="python-logo.png" alt="this is image" />
                    <h2>PYTHON</h2>
                </div>

                <div className="skill-icon">
                    <img className="python-icon" src="django-logo.jpg" alt="this is image" />
                    <h2>DJANGO</h2>
                </div>

                <div className="skill-icon">
                    <img className="python-icon" src="logo-mysql.png" alt="this is image" />
                    <h2>MYSQL</h2>
                </div>

                <div className="skill-icon">
                    <img className="python-icon" src="AWS-Logo.png" alt="this is image" />
                    <h2>AWS</h2>
                </div>

                <div className="skill-icon">
                    <img className="python-icon" src="amazon IAM logo.png" alt="this is image" />
                    <h2>Amazon IAM</h2>
                </div>

                <div className="skill-icon">
                    <img className="python-icon" src="ec2-logo.jpg" alt="this is image" />
                    <h2>Amazon EC2</h2>
                </div>

                <div className="skill-icon">
                    <img className="python-icon" src="Amazon s3 logo.png" alt="this is image" />
                    <h2>Amazon S3</h2>
                </div>

                <div className="skill-icon">
                    <img className="python-icon" src="amazon-rds logo.png" alt="this is image" />
                    <h2>Amazon RDS</h2>
                </div>

                <div className="skill-icon">
                    <img className="python-icon" src="amazon sns-logo.png" alt="this is image" />
                    <h2>Amazon SNS</h2>
                </div>

                <div className="skill-icon">
                    <img className="python-icon" src="amazon cloudfront-logo.png" alt="this is image" />
                    <h2>Cloudfront</h2>
                </div>

                <div className="skill-icon">
                    <img className="python-icon" src="amazon cloudwatch-logo.png" alt="this is image" />
                    <h2>Cloudwatch</h2>
                </div>

                <div className="skill-icon">
                    <img className="python-icon" src="amazon lambda-logo.jpg" alt="this is image" />
                    <h2>Lambda</h2>
                </div>

                <div className="skill-icon">
                    <img className="python-icon" src="amazon route53-logo.png" alt="this is image" />
                    <h2>Route 53</h2>
                </div>

                <div className="skill-icon">
                    <img className="python-icon" src="vpc-logo.png" alt="this is image" />
                    <h2>VPC</h2>
                </div>

                <div className="skill-icon">
                    <img className="python-icon" src="Selenium-3-webdriverlogo.jpg" alt="this is image" />
                    <h2>Selenium Web</h2>
                </div>

                <div className="skill-icon">
                    <img className="python-icon" src="git-logo.png" alt="this is image" />
                    <h2>GIT</h2>
                </div>

                <div className="skill-icon">
                    <img className="python-icon" src="Github-logo1.png" alt="this is image" />
                    <h2>GITHUB</h2>
                </div>
            </div>
            <br /><br /><br /><br /><br />
    </div>
        </>
    )
}
export default Home;