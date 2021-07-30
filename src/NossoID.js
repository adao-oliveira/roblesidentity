import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export const NossoID = () => (
    <div>
        {/* <!--===== SOBRE =====--> */}
        <section className="about section" id="about">
            <h2 className="section-title">Somos a Robles identity</h2>
            <ScrollAnimation animateIn='fadeIn'>
                <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src="" alt="" />
                    </div>
                    <div>
                        <p className="about__text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci consectetur, architecto quas fugiat, iste inventore facere repellendus delectus id, vitae blanditiis.
                        </p>
                    </div>
                </div>
            </ScrollAnimation>
        </section>
    </div>
)
