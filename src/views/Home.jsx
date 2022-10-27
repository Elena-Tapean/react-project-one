import './css/home-page.scss';

function handleClick (ev) {
    ev.preventDefault();
}

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
                        <p className='min-p'>Website Links</p>
                        <a href="http://localhost:3000/resume/elena">Resume</a>
                        <a href="http://localhost:3000/portfolio">Portfolio</a>
                        <a href="http://localhost:3000/contact">Contact</a>
                        <a href="http://localhost:3000/register">Exclusive Content</a>
                    </div>         
                    <div>       
                        <p className='min-p'>Professional Links</p>
                        <a href="https://www.linkedin.com/in/elena-tapean/">LinkedIn</a>
                        <a href="https://github.com/Elena-Tapean">Github</a>
                    </div>
                    <div>
                        <p className='min-p'>Hobby Links</p>
                        <a href="https://steamcommunity.com/id/elena_tapean/">Steam</a>
                        <a href="https://elenatapeanpoetry.wordpress.com/">Poetry</a>
                        <a href="https://elenatapeanphotos.wordpress.com/">Photography</a>
                    </div>
                <br/>
                    <button onClick={handleSubmit}>Hire me</button>
                </div>
                <div className="dropdown-navbar">
                    <div className="dropdown">
                        <button onChange={handleClick} className="drop-btn">
                            Website Links <svg width="10" height="8" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.49878 5.625L8.87378 0.625H0.123779L4.49878 5.625Z" fill="white"/>
</svg>
                        </button>
                        <div className="drop-content">
                            <a href="http://localhost:3000/resume/elena">Resume</a>
                            <a href="http://localhost:3000/portfolio">Portfolio</a>
                            <a href="http://localhost:3000/contact">Contact</a>
                            <a href="http://localhost:3000/register">Exclusive Content</a>
                        </div>
                    </div>  
                </div>       
                <div className="dropdown-navbar">
                    <div className="dropdown">
                        <button onChange={handleClick} className="drop-btn">
                        Professional Links <svg width="10" height="8" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.49878 5.625L8.87378 0.625H0.123779L4.49878 5.625Z" fill="white"/>
</svg>
                        </button>
                        <div className="drop-content">
                            <a href="https://www.linkedin.com/in/elena-tapean/">LinkedIn</a>
                            <a href="https://github.com/Elena-Tapean">Github</a>
                        </div>
                    </div>
                </div>
                <div className="dropdown-navbar">
                    <div className="dropdown">
                        <button onChange={handleClick} className="drop-btn">
                            Hobby Links <svg width="10" height="8" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.49878 5.625L8.87378 0.625H0.123779L4.49878 5.625Z" fill="white"/>
</svg>
                        </button>
                        <div className="drop-content">
                            <a href="https://steamcommunity.com/id/elena_tapean/">Steam</a>
                            <a href="https://elenatapeanpoetry.wordpress.com/">Poetry</a>
                            <a href="https://elenatapeanphotos.wordpress.com/">Photography</a>
                        </div>
                    </div>
                </div>
                <br/>
                <button onClick={handleSubmit} className="hire-me">Hire me</button>
            </div>
        </main>
    )
}
