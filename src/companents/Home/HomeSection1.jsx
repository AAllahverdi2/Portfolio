import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext'; // Dil kontekstini daxil edirik
import profilePhoto from '../../assets/Image.png';
import './HomeSec1.scss';

const HomeSection1 = () => {
  const { language } = useContext(LanguageContext); // Seçilmiş dili götürürük

  // Tərcümələr
  const translations = {
    az: {
      greeting: "Salam, Mən",
      jobTitle: "Dayanmadan inkişaf edən Web Developerəm",
      description: "Mən inanıram ki, hər bir çətinlik yeni bir fürsətdir. \n Mən yalnız kod yazmıram, təcrübələr yaradıram, problemləri həll edirəm və ideyaları gerçəkləşdirirəm. \n Mən sərhədləri aşır, yeni texnologiyaları öyrənir və daha yaxşıya can atıram. \n Rəqəmsal dünya inkişaf edir, mən də onunla birlikdə inkişaf edirəm. Gəlin birlikdə qeyri-adi bir şey yaradaq! 🚀",
      downloadCV: "CV Yüklə",
    },
    ru: {
      greeting: "Привет, Я",
      jobTitle: "Веб-разработчик, который всегда развивается",
      description: "Я верю, что каждое испытание — это новая возможность. \n Я не просто пишу код, я создаю опыт, решаю проблемы и воплощаю идеи в жизнь. \n Я раздвигаю границы, осваиваю новые технологии и никогда не останавливаюсь на достигнутом. \n Цифровой мир развивается, и я развиваюсь вместе с ним. Давайте создадим что-то необыкновенное вместе! 🚀",
      downloadCV: "Скачать CV",
    },
    en: {
      greeting: "Hi, I'm",
      jobTitle: "A Web Developer Who Keeps Growing",
      description: "I believe that every challenge is an opportunity. \n I don’t just write code, I build experiences, solve problems, and bring ideas to life. \n I push boundaries, embrace new technologies, and never settle for good enough. \n The digital world is evolving, and so am I. Let’s create something extraordinary together! 🚀",
      downloadCV: "Download CV",
    },
  };

  return (
    <div className='section1__all'>
      <div className="container all__sec1">
        <div className="leftside">
          <div className="leftside__content">
            <h1 className="intro-title">
              {translations[language].greeting} <span className="highlight">Allahverdi</span>
            </h1>
            <h2 className="intro-subtitle">
              {translations[language].jobTitle}
            </h2>
            <p className="description">
              {translations[language].description.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <div className="buttons">
              <button className="btn resume-btn">
                <a
                  href="https://drive.google.com/uc?export=download&id=12giQWLiJKsnGsEJQkBdZhZ49Cfar9nw5"
                  download
                  style={{ fontSize: '18px', textDecoration: 'underline', color: 'white', fontWeight: "bold" }}
                >
                  {translations[language].downloadCV}
                </a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="right__side">
            <div className="rotating-border"></div>
            <div className="profile-container">
              <img src={profilePhoto} alt="Allahverdi" className="profile-photo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection1;
