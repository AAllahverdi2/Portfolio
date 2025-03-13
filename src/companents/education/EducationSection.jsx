import React, { useContext } from 'react';
import './style.scss';
import technestlogo from '../../assets/technest.jpeg';
import aztulogo from '../../assets/aztu.png';
import cfflogo from '../../assets/cff.jpeg';
import { LanguageContext } from '../../context/LanguageContext';

const EducationSection = () => {
    const { language } = useContext(LanguageContext); // Seçilen dili al

    // Dil çevirileri
    const translations = {
        az: {
            header: 'Təhsil',
            aztu: {
                title: "Azərbaijan Technical University",
                faculty: "Fakültə: İnformasiya və Telekommunikasiya Texnologiyaları",
                profession: "Peşə: Kompüter Elmləri",
                duration: "(2021 Sentyabr ~ Hal-hazırda)"
            },
            technest: {
                title: "Technest Təqaüdü",
                profession: "Peşə: İleri Düzey Front-End Proqramlaşdırma",
                location: "Yer: Code Academy, Bakı",
                duration: "(2024 May ~ 2024 Avqust)"
            },
            cff: {
                title: "Code For Future",
                profession: "Peşə: Full Stack Proqramlaşdırma",
                location: "Yer: Azərbaijan Technical University",
                duration: "(2023 Sentyabr ~ 2024 Yanvar)",
                honor: "Şərəf Diplom"
            }
        },
        ru: {
            header: 'Образование',
            aztu: {
                title: "Азербайджанский Технический Университет",
                faculty: "Факультет: Информационные и Телекоммуникационные Технологии",
                profession: "Профессия: Компьютерные науки",
                duration: "(Сентябрь 2021 ~ Настоящее время)"
            },
            technest: {
                title: "Стипендия Technest",
                profession: "Профессия: Продвинутое Front-End Программирование",
                location: "Место: Code Academy, Баку",
                duration: "(Май 2024 ~ Август 2024)"
            },
            cff: {
                title: "Code For Future",
                profession: "Профессия: Full Stack Программирование",
                location: "Место: Азербайджанский Технический Университет",
                duration: "(Сентябрь 2023 ~ Январь 2024)",
                honor: "Диплом с отличием"
            }
        },
        en: {
            header: 'Education',
            aztu: {
                title: "Azərbaijan Technical University",
                faculty: "Faculty: Information and Telecommunication Technologies",
                profession: "Profession: Computer Science",
                duration: "(September 2021 ~ Present)"
            },
            technest: {
                title: "Technest Scholarship",
                profession: "Profession: Advanced Front-End Programming",
                location: "Location: Code Academy, Baku",
                duration: "(May 2024 ~ August 2024)"
            },
            cff: {
                title: "Code For Future",
                profession: "Profession: Full Stack Programming",
                location: "Location: Azərbaijan Technical University",
                duration: "(September 2023 ~ January 2024)",
                honor: "Honor Degree Diploma"
            }
        }
    };

    // Seçilen dile göre çeviri verisini alıyoruz
    const currentTranslation = translations[language];

    return (
        <div className='education__all'>
            <div className="experience__header">{currentTranslation.header}</div>

            {/* Azərbaijan Technical University Card */}
            <div className="first__card">
                <div className="eduleft__side">
                    <img loading='lazy' src={aztulogo} alt="AzTU Logo" />
                </div>
                <div className='eduright__side'>
                    <h3><strong>{currentTranslation.aztu.title}</strong></h3>
                    <div className="factulty">
                        <h5>{currentTranslation.aztu.faculty}</h5>
                    </div>
                    <div className="Profession">
                        <h5>{currentTranslation.aztu.profession}</h5>
                    </div>
                    <div className="Duration">
                        <h5>{currentTranslation.aztu.duration}</h5>
                    </div>
                </div>
            </div>

            {/* Technest Scholarship Card */}
            <div className="second__card">
                <div className="eduleft__side">
                    <img loading='lazy' src={technestlogo} alt="Technest Logo" />
                </div>
                <div className='eduright__side'>
                    <h3><strong>{currentTranslation.technest.title}</strong></h3>
                    <div className="Profession">
                        <h5>{currentTranslation.technest.profession}</h5>
                    </div>
                    <div className="Location">
                        <h5>{currentTranslation.technest.location}</h5>
                    </div>
                    <div className="Duration">
                        <h5>{currentTranslation.technest.duration}</h5>
                    </div>
                </div>
            </div>

            {/* Code For Future Card */}
            <div className="third__card">
                <div className="eduleft__side">
                    <img loading='lazy' src={cfflogo} alt="CFF Logo" />
                </div>
                <div className='eduright__side'>
                    <h3><strong>{currentTranslation.cff.title}</strong></h3>
                    <div className="Profession">
                        <h5>{currentTranslation.cff.profession}</h5>
                    </div>
                    <div className="Location">
                        <h5>{currentTranslation.cff.location}</h5>
                    </div>
                    <div className="Duration">
                        <h5>{currentTranslation.cff.duration}</h5>
                    </div>
                    <div className='diploma'>
                        <h5>{currentTranslation.cff.honor}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationSection;
