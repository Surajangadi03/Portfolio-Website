const Resume=()=>{
    return(
        <>
    <div className="outer-container">
        <div className="resume-section">
            <iframe src="/surajresume.pdf" title="Suraj Resume" id="resume-img" target="_blank"></iframe>
        </div>

        <button id="resume-dwld-btn">
                <a
                    href="/surajresume.pdf" download="Suraj_Resume.pdf"
                    className="nav-reume-link" target="_blank">Download Resume
                </a>
        </button>
    </div>

        </>
    )
}
export default Resume;