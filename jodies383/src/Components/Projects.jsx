import { useNavigate } from "react-router";

export default function Projects() {
    const navigate = useNavigate();
    return (
        <div className="App">
            <h1 className="name">Jodie Solomons</h1>

            <div className="nav">
                <a onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>Home</a>
                <a onClick={() => navigate('/jodies383/Projects')} sx={{ cursor: 'pointer' }}>Projects</a>
                <a onClick={() => navigate('/jodies383/Contact')} sx={{ cursor: 'pointer' }}>Contact</a>
            </div>
            <div className="cards">

            <a href="https://github.com/jodies383/my-favourite-movies"><div class="card1">
                <img src="/src/assets/myfavouritemovies.png" alt="Avatar" width="448rem" />
                    <div class="container">
                        <h2><b>My Favourite Movies</b></h2>
                        <p>My Favourite Movies is an app that allows users to search for their favourite movies and add them to specific playlists. A user can create an account and add or remove movies from a created playlist.
                        <br /> This app was built using ReactJS and makes use of a Rest API and Postgres database.</p>
                    </div>
            </div></a>
            <a href="https://github.com/Dramatic-Wire/gwi-app">    <div class="card1">
                <img src="/src/assets/stampede.jpeg" alt="Avatar" width="200rem" />
                    <div class="container">
                        <h2><b>Stampede</b></h2>
                        <p>
                        Stampede is a Native Mobile app created by me and two other team members. Our team decided to address the inconveniences that come with using paper loyalty cards and came up with a convenient and eco-friendly solution; a loyalty app that allows businesses to create loyalty programmes and customers to redeem rewards.
                        <br /> The app makes use of a Rest API, PostgreSQL database and uses Firebase for authentication.
                    </p>
                    </div>
            </div> </a>
            <a href="https://github.com/jodies383/WordsWidget">  <div class="card1">
                <img src="/src/assets/wordswidget.png" alt="Avatar" width="448rem" />
                    <div class="container">
                        <h2><b>Words Widget</b></h2>
                        <p>
                        Words Widget is an app that allows a user to enter a sentence of 5 or more words. When the user clicks a button the sentence is analyzed. It was built using vanilla Javascript and styled using Bootstrap.
                    </p>
                    </div>
            </div> </a>
            </div>
        </div>
    )
}