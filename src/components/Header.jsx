import { Link } from 'react-router-dom';
const Header=()=>{
    return(
        <>
        <nav>
            <div className="nav-bar">
                <div className="nav-title">
                    <p id='nav-para'><span id='nav-span'>PORT</span>FOLIO</p>

                </div>
               <div className="nav-list">
                     <ul id='nav-ul'>
                        <li className="nav-li"><Link className="nav-link" to="/">HOME</Link></li>
                        <li className="nav-li"><Link  className="nav-link" to="/About">ABOUT</Link></li>
                        <li className="nav-li"><Link className="nav-link" to="/Project">PROJECT</Link></li>
                        <li className="nav-li"><Link className="nav-link" to="/Skills">SKILLS</Link></li>
                    </ul>
               </div>
               <div className="nav-resume">
                     <ul id='nav-resume-ul'>
                        <li class="nav-resume-li"><Link className="nav-reume-link" to="/Resume">RESUME</Link></li>
                    </ul>
               </div>
            </div>
        </nav>

        </>
    )
}
export default Header;