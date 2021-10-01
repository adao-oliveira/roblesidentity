import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export const NossoID = () => (
    <>
        <div>
            {/* <!--===== SOBRE =====--> */}
            <section className="about section" id="about">
                <h2 className="section-title text-uppercase" style={{ color: '#1d20ff', fontSize: '20px', textAlign:'center' }}>
                    Para nos conhecer é necessário saber do que é composta a nossa empresa desde internamente até a visibilidade externa
                </h2>
                <ScrollAnimation animateIn='fadeIn'>
                    <div className="ID_container bd-grid">
                        <div>

                            <h1 style={{ color: '#ff65c3', fontSize: '30px' }}>A LOGO:</h1>

                            <p className="ID_text">
                                A ROBLES IDENTITY foi fundada com princípios de programação e design gráfico inicialmente, por esse motivo analisamos e desenvolvemos a nossa logo de uma forma de juntasse esses dois requisitos.
                                Usando a linguagem da programação se observa diversas cores, cada cor representa algum comando específico, no caso da ROBLES IDENTITY escolhemos o azul marinho e um rosa bebê marcante, que
                                tanto representa a parte da programação como também as duas pessoas, sendo eles, um homem e uma mulher que deram origem a empresa.
                                Se tratando de uma empresa que gera identidade, é claro que na nossa logo não poderia faltar um elemento que representasse isso, por isso, utilizamos digitais que num documento é considerado parte
                                da sua identidade.
                            </p>

                            <p className="ID_text">
                                Por fim juntando esses dois requisitos, de forma sobreposta, colcoamos duas digitais, sendo elas uma azul e uma rosa.
                            </p>


                            <h1 style={{ color: '#ff65c3', fontSize: '30px' }}>AS FONTES:</h1>

                            <p className="ID_text">
                                Em todas os comunicados e até mesmo no desenvolvimento do site da ROBLES IDENTITY, nós usamos 3 fontes padrões, específicas para cada proposta. A fontes escolhidas por nós definem exatamente quem
                                somos.
                                - A fonte ** representa uma proposta mais séria e moderna, algo mais padrão social.
                                - A fonte ** representa uma modernidade mais juvial, algo mais divertido e atualizado, que também definem a inovação e a evolução.
                                - A fonte ** representa essas duas características as anteriores que unidas, trazem uma proposta de identidade única, podendo ter uma identidade juvial, atualizada mas ao mesmo tempo também moderna e
                                sofisticada.
                            </p>


                            <h1 style={{ color: '#ff65c3', fontSize: '30px' }}>AS IMAGENS:</h1>

                            <p className="ID_text">
                                Se tratando da linguagem de programação que se atualiza a cada minuto, focamos em algo totalmente voltado a tecnologia, a estrutura moderna e a originalidade de cada imagem que é manipulada detalhe
                                por detalhe.
                            </p>


                            <h1 style={{ color: '#ff65c3', fontSize: '30px' }}>Princípios e Valores:</h1>

                            <p className="ID_text">
                                A idéia da ROBLES IDENTITY surgiu desde muito tempo atrás, quando ambos os fundadores trabalhavam de forma autônoma desenvolvendo idéias para clientes internos.
                                Percebemos que a maioria dos autônomos não possuíam um projeto construído tendo como base uma identidade, e por esse motivo não obtinham resultados satisfatóriosem relação a reconhecimento
                                e crescimento. É muito difícil um comércio dar certo sem uma parte gráfica, um reconhecimento de visibilidade e sem uma entrada na internet, sem esses requisitos você pode sim ser reconhecido, mas apenas
                                por quem você procura ou por pessoas próximas a você. Empresas grandes, multi nacionais, que possuem filiadas possuem identidade formada e são inseridas totalmente no maior meio de comunicação existente,
                                A INTERNET, são conhecidas por todos de forma multiplicada, por isso a importância da identidade.
                                Observando isso e até mesmo trabalhando nesses meios, juntando nossas idéias desenvolvemos um método que em união com vocês, nossos clientes, desenvolvemos do zero uma identidade e um domínio
                                para a sua empresa, para que ela seja reconhecida e expandida.
                            </p>

                            <p className="ID_text">
                                Nos nossos valores estão envolvidos o caráter, a honestidade, a empatia e o compromisso.
                            </p>

                            <p className="ID_text">
                                Caráter - Nossa empresa é baseada na identidade, a identidade é formada pelo caráter, e o caráter é formado por características que definem quem nós somos. Por esse motivo é de extrema importância que
                                que nos nossos valores estivesse incluído o caráter.
                            </p>

                            <p className="ID_text">
                                Honestidade - Somos totalmente entregues as propostas que recebemos e que entregamos, sem acepção de recursos, pessoas ou idéias, a honestidade faz parte da nossa identidade.
                            </p>

                            <p className="ID_text">
                                Empatia - Nossa empresa é uma empresa totalmente voltada à pessoas desde o princípio. Nos preocupamos com seus sonhos, projetos e metas e buscamos realizar tudo isso da melhor forma possível
                                indicando o caminho e seguindo seus passos até que possa caminhar sozinho.
                            </p>

                            <p className="ID_text">
                                Compromisso - Sempre que nos comprometemos com um projeto, seja ele desafiador ou não, nos dedicamos compromissadamente a eles até que sejam concluídos com excelência e satisfação.
                            </p>


                            <h1 style={{ color: '#ff65c3', fontSize: '30px' }}>TUDO ISSO FORMA O NOSSO ID!</h1>

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
.ID_text{
    margin-bottom: 2rem;
    margin-top: 2rem;
    color: #fff;
}

    `}</style>
    </>
)
