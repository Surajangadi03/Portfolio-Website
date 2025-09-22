import { Link } from 'react-router-dom';
const Project=()=>{
    return(
        <>
        <div className="outer-container project-sec">
            <div className="home-project-1 ">
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
            <br /><br /><br />
        </div>
        </>
    )
}
export default Project;