import React from 'react'
import './style.scss'
import technestlogo from '../../assets/technest.jpeg'
import aztulogo from '../../assets/aztu.png'
import cfflogo from '../../assets/cff.jpeg'
const EducationSection = () => {
    return (
        <div className='education__all'>
            <div className="experience__header">Education</div>
            <div className="first__card">
                <div className="eduleft__side"><img loading='lazy' src={aztulogo} alt="" /></div>
                <div className='eduright__side'>
                    <h3><strong>Azərbaijan Technical University  </strong></h3>
                    <div className="factulty">
                        <h5>Faculty : </h5> <p>Information And Telecomunication Technologies</p>
                    </div>
                    <div className="Profession">
                        <h5>Profession : </h5> <p>Computer Science</p>
                    </div>
                    <div className="Duration">
                        <h5>Duration :</h5> <p>(2021 September ~ Present)</p>
                    </div>

                </div>
            </div>

            {/* ??????????????????????????? */}



            <div className="second__card">
                <div className="eduleft__side"><img loading='lazy' src={technestlogo} alt="" /></div>
                <div className='eduright__side'>
                    <h3><strong>Technest ScholarShip </strong></h3>
                  
                    <div className="Profession">
                        <h5>Profession : </h5> <p>Advanced Front-End Programming</p>
                    </div>

                    <div className="Location">
                        <h5>Location :</h5> <p>Code Academy, Baku</p>
                    </div>

                    <div className="Duration">
                        <h5>Duration :</h5> <p>(2024 May ~ 2024 August)</p>
                    </div>

                </div>
            </div>



            {/* ?????????????????????????????? */}


            <div className="third__card">
                <div className="eduleft__side"><img loading='lazy' src={cfflogo} alt="" /></div>
                <div className='eduright__side'>
                    <h3><strong>Code For Future </strong></h3>
                    {/* <div className="factulty">
                        <h5>Faculty : </h5> <p>Information And Telecomunication Technologies</p>
                    </div> */}
                    <div className="Profession">
                        <h5>Profession : </h5> <p>Full Stack Programming</p>
                    </div>

                    <div className="Location">
                        <h5>Location :</h5> <p> Azərbaijan Technical University</p>
                    </div>

                    <div className="Duration">
                        <h5>Duration :</h5> <p>(2023 September ~  2024 January)</p>
                    </div>
                    <div className='diploma'>
                        <h5>Honor Degree Diploma</h5>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EducationSection
