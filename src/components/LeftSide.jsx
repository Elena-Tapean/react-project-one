import './css/left-side.scss';
import { TextComponent } from './TextComponent';

export const LeftSide = function () {
    const text = {
        about: {
            title: 'ABOUT ME',
            details: `<i>I am a tech enthuasiast with a keen eye on UX/UI Design. I have experience in working with frameworks such as React and Vue. I want to create websites and to develop games.</i>`
        },
        work: {
            title: 'WORK EXPERIENCE',
            details: `<i>Curious to find out the meaning of “vue”, “react” and “git”, I have started to attend online courses in Frontend Development and practice a lot of code. Since then I have learned similar words like “node.js”, “npm/npx” and "nodemon", etc. Since my background is in Literature (I used to work as a translator and proofreading editor for an intercultural literary journal), it was quite easy for me to understand the true frontend requirements. I have worked on multiple projects.</i>`
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
        }
    }

    return (
        <section className="left-side">
            <p className="contact-details">
            Call +40723060361 or
            <br/>
            Email elena_tapean@yahoo.com
            </p>

            {Object.keys(text).map(key => (
                <TextComponent key={key} 
                title={text[key].title} 
                details={text[key].details} />
            ))}
        </section>
    )
}