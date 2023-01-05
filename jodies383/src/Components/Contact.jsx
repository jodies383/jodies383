import { useNavigate } from "react-router";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1 className="name">Jodie Solomons</h1>
      <div className="nav">
        <a onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>Home</a>
        <a onClick={() => navigate('/jodies383/Projects')} sx={{ cursor: 'pointer' }}>Projects</a>
        <a onClick={() => navigate('/jodies383/Contact')} sx={{ cursor: 'pointer' }}>Contact</a>
      </div>
      <div className="card">

        <div class="contact">
          <div class="emailLink">
          <img src="/src/assets/email.png" alt="Avatar" width="90rem" />
            <a href="mailto:jodies383@gmail.com">Email</a>
          </div>
          <div class="gitH">
          <img src="/src/assets/github.png" alt="Avatar" width="90rem" />
            <a href="https://github.com/jodies383">Github</a>
          </div>
          <div class="linkedin">
          <img src="/src/assets/linkedin.png" alt="Avatar" width="90rem" />
            <a href="https://www.linkedin.com/in/jodie-solomons/">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  )
}