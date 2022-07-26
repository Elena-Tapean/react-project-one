import avatar from '../assets/avatar.png';
import './css/right-side.scss';
import { TextComponent } from './TextComponent';
import { RatingLevel } from './RatingLevel';
import { ResumeContext } from '../context/resume';
import { useContext } from 'react';

export const RightSide = function () {
    const sections = ['educations', 'current_projects', 'personal_projects']
    const data = useContext(ResumeContext)

    return (
        <section className="right-side">
            <header>
                <figure>
                    <img src={avatar} alt="my avatar" />
                </figure>
                <h1>
                    {data.name}
                    <br/>
                    <b>{data.surname}</b>
                </h1>
                <h2>{data.role}</h2>
            </header>

            <TextComponent index='01' title='SKILLS'>
            {
                data.skills?.map(({name, rate}) => (
                    <RatingLevel key={name}
                    name={name} 
                   rate={rate} />
                ))
            } 
            </TextComponent>

            {
                sections.map((key, index) => (
                    <TextComponent key={key}
                    index={`0${index + 2}`}
                    title={data[key]?.title}
                    details={data[key]?.details} />
                ))
            }

        </section>
    )
}