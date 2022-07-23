import avatar from '../assets/avatar.png';
import './css/right-side.scss';
import { TextComponent } from './TextComponent';
import { RatingLevel } from './RatingLevel';

export const RightSide = function () {
    const skills = [
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
    ]

    const sections = {
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
            details: `<b>REACT.JS AND VUE.JS RESUME</b><br/>
            <i>Creating resume in React.js
            and Vue.js<br/>
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

    return (
        <section className="right-side">
            <header>
                <figure>
                    <img src={avatar} alt="my avatar" />
                </figure>
                <h1>
                    ELENA
                    <br/>
                    <b>ȚĂPEAN</b>
                </h1>
                <h2>FRONTEND DEVELOPER</h2>
            </header>

            <TextComponent index='01' title='SKILLS'>
            {
                skills.map(({name, rate}) => (
                    <RatingLevel key={name}
                    name={name} 
                    rate={rate} />
                ))
            } 
            </TextComponent>

            {
                Object.keys(sections).map((key, index) => (
                    <TextComponent index={`0${index + 2}`}
                    title={sections[key].title}
                    details={sections[key].details} />
                ))
            }

        </section>
    )
}