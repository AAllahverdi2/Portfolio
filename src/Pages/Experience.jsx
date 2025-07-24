import React, { useContext } from "react";
import "./exp.scss";
import { LanguageContext } from "../context/LanguageContext";
import BionetLogo from '../../src/assets/download (1).png'
const translations = {
  az: {
    experience: "Təcrübə",
    developed: "İstifadəçi interfeyslərini hazırladım və saxladım, responsivlik və istifadəçi təcrübəsinə diqqət yetirərək.",
    worked: "React və Redux istifadə edərək yeni xüsusiyyətlər əlavə etmək üçün inkişaf etdirici komandası ilə əməkdaşlıq etdim.",
    optimized: "Front-end performansını optimallaşdırdım və müxtəlif brauzerlər arasında uyğunluğunu təmin etdim.",
    assisted: "Web tətbiqlərinin qurulmasında React və TypeScript istifadə edərək kömək etdim.",
    collaborated: "Dizaynerlərlə əməkdaşlıq edərək vizual olaraq cəlbedici UI/UX elementləri tətbiq etdim.",
    codeReviews: "Kod nəzərdən keçirmələrində iştirak etdim və kodun keyfiyyətini və saxlanabilirliyini artırmaq üçün rəylər verdim.",
    learning: "Müasir front-end inkişafı üzrə ən yaxşı təcrübələri öyrənmək və tətbiq etməkdə iştirak etdim.",
    developing: "Güclü responsivlik və performansa diqqət yetirərək istifadəçi interfeyslərini hazırlayıram.",
    building: "React, TypeScript və Redux istifadə edərək web tətbiqləri hazırlayıram.",
    collaborating: "Back-end inkişaf etdiriciləri ilə əməkdaşlıq edərək ön və arxa uç sistemlərin problemsiz inteqrasiyasını təmin edirəm.",
    ensuring: "Brauzerlər arasında uyğunluğu təmin edir və ön uç performansını optimallaşdırıram.",
    participating: "Komanda kod nəzərdən keçirmələrində fəal iştirak edir və saxlanabilir kod üçün ən yaxşı təcrübələri izləyirəm."

  },
  ru: {
    experience: "Опыт",
    developed: "Разработал и поддерживал пользовательские интерфейсы, фокусируясь на отзывчивости и пользовательском опыте.",
    worked: "Работал в команде разработки для внедрения новых функций с использованием React и Redux.",
    optimized: "Оптимизировал производительность фронтенда и обеспечил совместимость с различными браузерами.",
    assisted: "Помогал в создании веб-приложений, используя React и TypeScript.",
    collaborated: "Сотрудничал с дизайнерами для внедрения визуально привлекательных элементов UI/UX.",
    codeReviews: "Участвовал в код-ревью и предоставлял обратную связь для улучшения качества и поддерживаемости кода.",
    learning: "Участвовал в обучении и применении современных передовых практик фронтенд-разработки.",
    developing: "Разрабатываю пользовательские интерфейсы с акцентом на отзывчивость и производительность.",
    building: "Создаю веб-приложения с использованием React, TypeScript и Redux.",
    collaborating: "Сотрудничаю с бэкенд-разработчиками для обеспечения плавной интеграции между фронтендом и бэкендом.",
    ensuring: "Обеспечиваю кроссбраузерную совместимость и оптимизирую производительность фронтенда.",
    participating: "Активно участвую в командных код-ревью и следую лучшим практикам для поддерживаемого кода."

  },
  en: {
    experience: "Experience",
    developed: "Developed and maintained user interfaces with a focus on responsiveness and user experience.",
    worked: "Worked collaboratively with the development team to implement new features using React and Redux.",
    optimized: "Optimized front-end performance and ensured compatibility across various browsers.",
    assisted: "Assisted in building web applications by utilizing React and TypeScript.",
    collaborated: "Collaborated with designers to implement visually appealing UI/UX elements.",
    codeReviews: "Participated in code reviews and provided feedback to improve code quality and maintainability.",
    learning: "Engaged in learning and applying modern front-end development best practices.",
    developing: "Developing user interfaces with a strong focus on responsiveness and performance.",
    building: "Building web applications using React, TypeScript, and Redux.",
    collaborating: "Collaborating with backend developers to ensure smooth integration between front-end and back-end systems.",
    ensuring: "Ensuring cross-browser compatibility and optimizing front-end performance.",
    participating: "Actively participating in team code reviews and following best practices for maintainable code."

  }
};

const experiences = [
  {
    role: "Front-End Developer",
    company: "Bionet LLC",
    date: "April 15, 2025 – Present",
    logo: BionetLogo,
    details: [
      "developing",
      "building",
      "collaborating",
      "ensuring",
      "participating"
    ]
  },
  {
    role: "Front-End Developer Intern",
    company: "Javachip Digital Solution",
    date: "January 2025 - Present",
    logo: "https://thejavachip.com/static/media/favicon.46b6658e648123c737ec.png", // Şirkət loqosunun fayl adı
    details: [
      "assisted",
      "collaborated",
      "codeReviews",
      "learning"
    ]
  },
  {
    role: "Front-End Developer - Startup",
    company: "GoTrack - Logistic Platform",
    date: "June 2024",
    logo: "data:image/png;base64,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",
    details: [
      "developed",
      "worked",
      "optimized"
    ]
  },


];

const Experience = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="container">
      <div className="experience__header">{translations[language].experience}</div>
      <div className="card__container">
        {experiences.map((exp, index) => (
          <div className="card_inner" key={index}>
            <div className="exp__header">
              <img src={exp.logo} alt={`${exp.company} logo`} className="exp__logo" />
              <div className="exp__info">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p className="exp__date">{exp.date}</p>
              </div>
            </div>
            <ul className="exp__details">
              {exp.details.map((detail, i) => (
                <li key={i}>{translations[language][detail]}</li> // Tərcümə edilmiş mətni istifadə edirik
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
