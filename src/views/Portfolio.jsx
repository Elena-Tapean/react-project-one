import './css/port-folio.scss';

export const Portfolio = function () {
    return (
        <div className="port-folio">
            <h1>My projects so far</h1>
            <h2>1. Project One: React Resume</h2>
            <p>My first ever project in React.js. I have chosen this framework to test my skills.</p>
            <a href="http://localhost:3000/resume/elena/" target="_blank">My React Project</a>
            <br/><br/>
            <h2>2. Project Two: Vue ?</h2>
            <p>This project is work in progress. Stay tuned.</p>
            <a href="#">My Vue Project (wip)</a>
            <br/><br/>
            <h2>3. Personal Projects</h2>
            <p>In fact, they are my blogs</p>
            <a href="https://elenatapeanpoetry.wordpress.com/" target="_blank">My Poetry Blog</a>
            <br/><br/>
            <a href="https://elenatapeanphotos.wordpress.com/" target="_blank">My Photography Blog</a>
            <br/><br/>
            <h2>4. Game</h2>
            <p>I intend to make a simple game. Work in progress. Stay tuned.</p>
            <a href="#">My Game (wip)</a>
        </div>
    )
}