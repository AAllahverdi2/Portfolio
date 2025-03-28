import React, { useEffect } from 'react';
import { useGetSkillsByNameQuery } from '../../redux/slice/skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Section1.scss';

const Section1 = () => {
    const { data, error, isLoading } = useGetSkillsByNameQuery();

    useEffect(() => {
        AOS.init({
            duration: 1200, 
            easing: 'ease-out', 
            once: true, 
            offset: 100, 
        });
    }, []);

    if (isLoading) return <div className='loading__all'>
        <div className="loading-container">
            <div className="square orange"></div>
            <div className="square green"></div>
            <div className="square blue"></div>
            <div className="square red"></div>
        </div>;
    </div>
    if (error) return <div>Xəta baş verdi: {error.message}</div>;

    return (
        <div>
            <h2 className='text-center' style={{color:"white", padding:"20px", fontWeight:"bold"}}>Skills</h2>
            <div className="skills-container">

                {data && data.map((skill, index) => (
                    <div
                        className="skill-card"
                        key={skill.id}
                        data-aos="fade-up"
                        data-aos-delay={`${index * 150}`} // Hər kart üçün gecikmə 150ms artırılır
                    >
                        <div className="skill-image-wrapper">
                            <img src={skill.image} alt={skill.name} className="skill-image" />
                        </div>
                        <h3 className="skill-name">{skill.name}</h3>
                        <p className="skill-desc">{skill.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Section1;
