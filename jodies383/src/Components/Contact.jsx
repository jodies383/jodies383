import { useNavigate } from "react-router";
import emailImg from '/email.png';
import githubImg from '/github.png';
import linkedInImg from '/linkedin.png'

export default function Contact() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1 className="name">Jodie Solomons</h1>
      <div className="nav">
        <a onClick={() => navigate('/jodies383/')} sx={{ cursor: 'pointer' }}>Home</a>
        <a onClick={() => navigate('/jodies383/Projects')} sx={{ cursor: 'pointer' }}>Projects</a>
        <a onClick={() => navigate('/jodies383/Contact')} sx={{ cursor: 'pointer' }}>Contact</a>
      </div>
      <div className="card">

        <div className="contact">
          <div className="emailLink">
          <img src={emailImg} alt="Email" width="90rem" />
            <a href="mailto:jodies383@gmail.com">Email</a>
          </div>
          <div className="gitH">
          <img src={githubImg} alt="Github" width="90rem" />
            <a href="https://github.com/jodies383">Github</a>
          </div>
          <div className="linkedin">
          <img src={linkedInImg} alt="LinkedIn" width="90rem" />
            <a href="https://www.linkedin.com/in/jodie-solomons/">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  )
}