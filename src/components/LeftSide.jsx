import { useContext } from 'react';
import { ResumeContext } from '../context/resume';
import './css/left-side.scss';
import { TextComponent } from './TextComponent';
import { UserInfo } from './UserInfo';

export const LeftSide = function () {
    const sections = ['about', 'work', 'soft_skills', 'special_skills']
    const data = useContext(ResumeContext);

    return (
        <section className="left-side">
            <UserInfo />

            {sections.map(key => (
                <TextComponent key={key} 
                title={data[key]?.title} 
                details={data[key]?.details} />
            ))}
        </section>
    )
}