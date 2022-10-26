import './css/home-page.scss';

function handleSubmit (ev) {
    ev.preventDefault();
}

export const Home = function () {
    return (
        <main>
            <div className="home-page">
                <h1>Hi there!</h1>
                <p>I am Elena Țăpean</p>
                <p>Frontend Developer</p>
                <p>Also a passionate gamer</p>
                <div className="min-flex">
                <div>
                    <p>Website Links</p>
                    <a href="http://localhost:3000/resume/elena">Resume</a>
                    <a href="http://localhost:3000/portfolio">Portfolio</a>
                    <a href="http://localhost:3000/contact">Contact</a>
                    <a href="http://localhost:3000/register">Exclusive Content</a>
                </div>         
                <div>       
                    <p>Professional Links</p>
                    <a href="https://www.linkedin.com/in/elena-tapean/">LinkedIn</a>
                    <a href="https://github.com/Elena-Tapean">Github</a>
                </div>
                <div>
                    <p>Hobby Links</p>
                    <a href="https://steamcommunity.com/id/elena_tapean/">Steam</a>
                    <a href="https://elenatapeanpoetry.wordpress.com/">Poetry</a>
                    <a href="https://elenatapeanphotos.wordpress.com/">Photography</a>
                </div>
                <br/>
                <button onClick={handleSubmit}>Hire me</button>
                </div>
                <div className='flex-div'>
                <div>
                    <p>Website Links</p>
                    <a href="http://localhost:3000/resume/elena">Resume</a>
                    <a href="http://localhost:3000/portfolio">Portfolio</a>
                    <a href="http://localhost:3000/contact">Contact</a>
                    <a href="http://localhost:3000/register">Exclusive Content</a>
                </div>         
                <div>       
                    <p>Professional Links</p>
                    <a href="https://www.linkedin.com/in/elena-tapean/">LinkedIn</a>
                    <a href="https://github.com/Elena-Tapean">Github</a>
                </div>
                <div>
                    <p>Hobby Links</p>
                    <a href="https://steamcommunity.com/id/elena_tapean/">Steam</a>
                    <a href="https://elenatapeanpoetry.wordpress.com/">Poetry</a>
                    <a href="https://elenatapeanphotos.wordpress.com/">Photography</a>
                </div>
                </div>
                <br/>
                <button onClick={handleSubmit}>Hire me</button>
            </div>
        </main>
    )
}
