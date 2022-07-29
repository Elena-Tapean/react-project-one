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
            phone: '+40723 060 361',
            email: 'elena_tapean@yahoo.com',
            about: {
                title: 'ABOUT ME',
                details: `<i>I am a tech enthuasiast with a keen eye on UX/UI Design. I have experience in working with frameworks such as React and Vue. I want to create websites and to develop games.</i>`
            },
            work: {
                title: 'WORK EXPERIENCE',
                details: `<i>Curious to find out the meaning of “vue”, “react” and “git”, I have started to attend online courses in Frontend Development and practice a lot of code. Since then I have learned similar words like “node.js”, “npm/npx” and "nodemon", etc. Since my background is in Literature (I used to work as a translator and proofreading editor for an intercultural literary journal), it was quite easy for me to understand the true frontend requirements. I have worked on multiple projects using both React.js and Vue.js.</i>`
            },
            soft_skills: {
                title: 'SOFT SKILLS',
                details: `<i>Active Listening<br/>
                Teamwork<br/>
                Optimism<br/>
                Problem-solving</i>`
            },
            special_skills: {
                title: 'SPECIAL SKILLS',
                details: `<i>I have a keen eye for details. And if a problem ever arises, I would try solving it by using a variety of methods.</i>`
            },
            skills: [
                {
                    name: 'UX/UI DESIGN',
                    rate: 8
                },
                {
                    name: 'FIGMA',
                    rate: 8
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
                    rate: 6
                },
                {
                    name: 'GIT',
                    rate: 7
                },
                {
                    name: 'VUE.JS',
                    rate: 8
                },
                {
                    name: 'REACT.JS',
                    rate: 8
                },
                {
                    name: 'NODE.JS',
                    rate: 6
                },
                {
                    name: 'NPM/NPX',
                    rate: 6
                },
                {
                    name: 'TESTING (TDD)',
                    rate: 6
                },
                {
                    name: 'PHOTOSHOP CS4',
                    rate: 7
                }
            ],
            educations: {
                title: 'EDUCATION',
                details: `<i>IT SCHOOL courses<br/>
                2022<br/>
                Study program: Frontend Development
                <br><br/>
                UNIVERSITY OF LETTERS<br/>
                2009 - 2014<br/>
                Study program: Philology and Anglo-American Studies
                <br><br/>
                ECONOMIC COLLEGE<br/>
                2005 - 2009<br/>
                Study program: Public Administration</i>`
            },
            current_projects: {
                title:'CURRENT PROJECTS',
                details: `<b>REACT.JS RESUME</b><br/>
                <i>Creating resume in React.js<br/>
                role: Frontend Developer</i>
                <br><br/>
                <b>VUE.JS PORTFOLIO</b><br/>
                <i>Creating webpage in Vue.js<br/>
                role: Frontend Developer</i>
                <br><br/>
                <b>REACT.JS AND VUE.JS PROJECTS</b><br/>
                <i>Creating websites for local shops<br/>
                role: Frontend Developer</i>`
            },
            personal_projects: {
                title: 'PERSONAL PROJECTS',
                details: `BLOGS<br/>
                <i><a href="https://elenatapeanpoetry.wordpress.com/">https://elenatapeanpoetry.wordpress.com/<a><br/> 
                <a href="https://elenatapeanphotos.wordpress.com/">https://elenatapeanphotos.wordpress.com/<a></i>
                <br><br/>
                WEBPAGE GAME<br/>
                <i>The idea of a game within a webpage.</i>`
            }
        }
    }
    const name = request.params.name
    response.send(data[name])
})
