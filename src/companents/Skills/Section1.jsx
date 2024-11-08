import React from 'react';
import { useGetSkillsByNameQuery } from '../../redux/slice/skills';
import './Section1.scss';

const Section1 = () => {
    const { data, error, isLoading } = useGetSkillsByNameQuery();

    if (isLoading) return <div>Yüklənir...</div>;
    if (error) return <div>Xəta baş verdi: {error.message}</div>;

    return (
        <div className="skills-container">
            {data && data.map((skill) => (
                <div className="skill-card" key={skill.id}>
                    <div className="skill-image-wrapper">
                        <img src={skill.image} alt={skill.name} className="skill-image" />
                    </div>
                    <h3 className="skill-name">{skill.name}</h3>
                    <p className="skill-desc">{skill.desc}</p>
                </div>
            ))}
        </div>
    );
}

export default Section1;
