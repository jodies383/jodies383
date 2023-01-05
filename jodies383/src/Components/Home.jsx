import { useNavigate } from "react-router";
import profileImg from '/profileImg.jpg'

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1 className="name">Jodie Solomons</h1>
      <div className="nav">
        <a onClick={() => navigate('/jodies383/')} sx={{ cursor: 'pointer' }}>Home</a>
        <a onClick={() => navigate('/jodies383/Projects')} sx={{ cursor: 'pointer' }}>Projects</a>
        <a onClick={() => navigate('/jodies383/Contact')} sx={{ cursor: 'pointer' }}>Contact</a>
      </div>
      <div>
      </div>

      <div className="card">
        <img src={profileImg} width="250rem" className="profileImg" alt="profile image" />
        <p className="aboutMe">
          Hi! My name is Jodie and I am 23 years old.<br />
          I live in Cape Town, South Africa and have two years of Software Development learning experience. <br/>
          In 2021 I completed the Agile Web Development program at <a href="http://projectcodex.co">Codex</a> and thereafter completed a six-month workplace incubation sponsored by Google.org
        </p>
      </div>
    </div>
  )
}