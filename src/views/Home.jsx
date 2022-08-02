import './css/home-page.scss';

export const Home = function () {
    return (
        <main className="home-page">
            <h1>Welcome to my home page!</h1>
            <div>
                <q><i>Small steps lead to success.</i></q>
                <br/>
                <br/>
                <p>Hi there! I'm Elena Țăpean, a Front-end Developer with a taste for stylizing and creating webpages using React.js and Vue.js.</p>
                <p>This here is my first project. I have used React.js to create it.</p>
                <p>Besides coding, I love playing games, writing poetry and taking photos.</p>
                <br/>
                <p>To learn more about me, visit <a href="http://localhost:3000/resume/elena/">the Resume page</a>.</p>
                <p>To contact me, visit <a href="http://localhost:3000/contact">the Contact page</a>.</p>
                <p>To view my portfolio, visit <a href="http://localhost:3000/portfolio">the Portfolio page</a>.</p>
                <br/>
                <figure>
                    <img src="https://scontent.fotp7-2.fna.fbcdn.net/v/t39.30808-6/297382823_8061522110554433_7820880937309155875_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGJoEIleEGwYJDfLALy1N3eXyWVqAZTpidfJZWoBlOmJ8z6OVC-LOrMZD0gCXpIP5sxprnBDWNHVFx0iIMRYOBy&_nc_ohc=T8Obu0-C9lEAX8PkrWD&tn=zBda7qO6N6VquDzN&_nc_ht=scontent.fotp7-2.fna&oh=00_AT9ikdP25hc8LFGZKQOqjVN9L4rRDthzVA23MlGgCGQ9KQ&oe=62ED55EE" alt="Homepage Logo" />
                </figure>
            </div>
        </main>
    )
}
