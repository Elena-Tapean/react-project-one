const express = require('express')
const app = express()
const PORT = 3031
const server = app.listen(PORT, function () { console.log(`server started at ${PORT}`)})

app.get('/', function (request, response) {
    response.send('')
})
app.get('/api/resume/:name', function (request, response) {
    const data = {
        elena: {
            name: 'ELENA',
            surname: 'ȚĂPEAN',
            role: 'FRONTEND DEVELOPER',
            phone: '+40 723 060 361',
            email: 'elenatapean@gmail.com',
            about: {
                title: 'ABOUT ME',
                details: `<i>A passionate gamer and code writer, I started by learning code on my own. During the time, I felt drawn to a particular online course of Frontend Development. I applied and soon found myself enjoying the ocean of tech experiences. Beside the graduation diploma, I gained a lot of knowledge and experience working in React.js and Vue.js. Right now, I am looking to create websites and to develop games.</i>`
            },
            work: {
                title: 'WORK EXPERIENCE',
                details: `<i>Since I used to work as a English-Romanian translator and proofreading editor for an intercultural literary journal and as a librarian, it was easy for me to understand the requirements of frontend designs and to apply them into my works. I have worked on personal projects for over six months. Beside working on website projects, I participated in a game jam that put me through the experience of working with Unreal Engine 5.0.3. I was the writer and game designer for the team, but I also worked on source control and dialogue implementation. I briefly worked with Metahuman to try my hand in creating Unreal Engine characters.</i>`
            },
            soft_skills: {
                title: 'SOFT SKILLS',
                details: `<i>Active Listener<br/>
                Teamworker<br/>
                Communicative<br/>
                Optimist<br/>
                Imaginative / Creative<br/>
                Analytic<br/>
                Problem-solver</i>`
            },
            special_skills: {
                title: 'SPECIAL SKILLS',
                details: `<i>I do not know what super-powers I have. All that I know is that my colleagues, trainer, the online courses manager and my gaming friends describe me as being kind and very friendly.</i>`
            },
            skills: [
                {
                    name: 'FIGMA',
                    rate: 8
                },
                {
                    name: 'UX/UI DESIGN',
                    rate: 7
                },
                {
                    name: 'HTML',
                    rate: 8
                },
                {
                    name: 'CSS',
                    rate: 8
                },
                {
                    name: 'JAVASCRIPT',
                    rate: 7
                },
                {
                    name: 'REACT.JS',
                    rate: 7
                },
                {
                    name: 'VUE.JS',
                    rate: 7
                },
                {
                    name: 'TESTING (TDD)',
                    rate: 6
                },
                {
                    name: 'GIT',
                    rate: 7
                },
                {
                    name: 'NODE.JS',
                    rate: 7
                },
                {
                    name: 'NPM/NPX',
                    rate: 6
                },
                {
                    name: 'JIRA',
                    rate: 7
                },
                {
                    name: 'PHOTOSHOP CS4',
                    rate: 4
                },
                {
                    name: 'UNREAL ENGINE',
                    rate: 3
                }
            ],
            educations: {
                title: 'EDUCATION',
                details: `ONLINE COURSES<br/>
                <i>IT SCHOOL<br/>
                May-November 2022<br/>
                Study program: Frontend Development</i>
                <br><br/>
                FORMAL EDUCATION<br/>
                <i>OVIDIUS UNIVERSITY OF CONSTANȚA<br/>
                2009-2014<br/>
                Study program: English Language and Literature (BA) and Anglo-American Studies (MA)</i>`
            },
            current_projects: {
                title:'CURRENT PROJECTS',
                details: `<b>REACT.JS RESUME PAGE</b><br/>
                <i>Creating my resume using React.js<br/>
                role: Frontend Developer</i>
                <br><br/>
                <b>VUE.JS BOOKSTORE WEBSITE</b><br/>
                <i>Creating a bookstore website using Vue.js<br/>
                role: Frontend Developer</i>
                <br><br/>
                <b>GAME DESIGNER</b><br/>
                <i>Writing the story and designing puzzles within the game.<br/>
                role: Game Writer and Designer</i>`
            },
            personal_projects: {
                title: 'PERSONAL PROJECTS',
                details: `LINKS<br/>
                <i><a href="https://www.linkedin.com/in/elena-tapean/">https://www.linkedin.com/in/elena-tapean/</a><br/>
                <a href="https://github.com/Elena-Tapean">https://github.com/Elena-Tapean</a><br/>
                <a href="https://steamcommunity.com/id/elena_tapean/">https://steamcommunity.com/id/elena_tapean/</a><br/></i>
                <br/>
                BLOGS<br/>
                <i><a href="https://elenatapeanpoetry.wordpress.com/">https://elenatapeanpoetry.wordpress.com/</a><br/>
                <a href="https://elenatapeanphotos.wordpress.com/">https://elenatapeanphotos.wordpress.com/</a></i>`
            }
        }
    }
    const name = request.params.name
    response.send(data[name])
})
