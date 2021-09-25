import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export const NossoID = () => (
    <>
        <div>
            {/* <!--===== SOBRE =====--> */}
            <section className="about section" id="about">
                <h2 className="section-title">Somos a Robles identity</h2>
                <ScrollAnimation animateIn='fadeIn'>
                    <div className="ID_container bd-grid">
                        <div className="ID_img">
                            <img src="" alt="" />
                        </div>
                        <div>
                            <p className="ID_text">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci consectetur, architecto quas fugiat, iste inventore facere repellendus delectus id, vitae blanditiis.
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
            </section>
        </div>

        <style jsx>{`

.section {
    background: linear-gradient(0, #120c56, #000000);
}

.ID_container{
    justify-items: center;
    row-gap: 2rem;
    text-align: center;
}
.ID_img{
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    width: 120px;
    height: 120px;
    background-color: #FAFAFF;
    border-radius: 50%;
    overflow: hidden;
}
.ID_img img{
    width: 100px;
}
.ID_text{
    margin-bottom: 2rem;
    color: #fff;
}

    `}</style>
    </>
)
