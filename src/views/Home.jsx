import './css/home-page.scss';
import './css/backgrounds/background-homepage.scss';

function handleSubmit (ev) {
    ev.preventDefault();
}

export const Home = function () {
    return (
        <main className="background-homepage">
            <div className="home-page">
                <h1>Welcome to my home page!</h1>
                <p>Hi there! I am Elena Țăpean, a Front-end Developer with a taste for stylizing and creating webpages using React.js and Vue.js.</p>
                <p>This here is my first project. I have used React.js to create it.</p>
                <h3>Where to go from here?</h3>
                <ul>
                    <li>To learn more about me, visit <a href="http://localhost:3000/resume/elena/">the Resume page</a></li>
                    <li>To view my portfolio, visit <a href="http://localhost:3000/portfolio">the Portfolio page</a></li>
                    <li>To contact me, visit <a href="http://localhost:3000/contact">the Contact page</a></li>
                </ul>
                <h3>What do I do beside code?</h3>
                <p>I love playing games, writing poetry and taking photos.</p>
                <ul>
                    <li>Visit <a href="https://gurushots.com/elena_tapean/photos">Gurushots profile</a></li>
                    <li>Visit <a href="https://steamcommunity.com/id/elena_tapean">Steam profile</a></li>
                    <li>Visit <a href="https://elenatapeanpoetry.wordpress.com/">Poetry blog</a></li>
                </ul>
                <button onClick={handleSubmit}>Hire me</button>
            </div>
        </main>
    )
}
