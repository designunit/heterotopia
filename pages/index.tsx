import * as React from 'react'

import { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '../src/components/Layout'
import { WideBlock } from '../src/components/WideBlock'

// const Typograf = require('typograf')
// const tp = new Typograf({ locale: ['ru', 'en-US'] })

const Page: NextPage = () => {
    return (
        <Layout>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
                h1 {
                    font-family: 'Roboto', sans-serif;
                }

                p {
                    font-size: 2em;
                    margin-top: 2em;
                    line-height: 2.8rem;
                    font-family: 'Roboto', sans-serif;
                }

                li {
                    font-size: 2em;
                    line-height: 2.8rem;
                    font-weight: 800;
                    font-family: 'Roboto', sans-serif;
                }

                ul {
                    list-style: none;
                    margin-left: 3em;
                    padding-left: 0;
                    text-indent: -3em;
                }

                img {
                    display: block;
                    width: 100%;
                }

                li:before {
                    content: "/";
                    padding-right: 1em;
                }

                b {
                    margin: 2px;
                    color: #fff;
                    background-color: #000;
                }
            `}</style>

            <Head>
                <title>
                    Heterotopia
                </title>
            </Head>

            <WideBlock>
                <iframe
                    src={'https://tmshv.github.io/popcode/heterotopia/'}
                    width={'100%'}
                    height={'500px'}
                    frameBorder={'no'}
                />
            </WideBlock>

            <p>
                Ввиду того, что термин <b>СОВРЕМЕННОСТЬ</b> почти во всех интерпретациях смыслов присвоен философией, эстетикой и архитектурой минувшего века, мы пишем <b>СО-ВРЕМЕННОСТЬ</b> имея ввиду скользящий во временном потоке фокус рассмотрения, отвечающий на вопросы «к каким концепциям каких времен восходят наши/мои представления? в какой диспозиции к ним соотносится то, что я делаю или намерен делать?». Термин <b>ГЕТЕРОТОПИЯ</b> мобилизован из лекции Мишеля Фуко. Здесь он означает, что множество времен проступающих в результатах деятельности образует сложное неоднородное пространство – своеобразный ландшафт смыслов и материального окружения. Фестиваль Зодчество 2020 – обзор, ментальная карта состояния цеха.
            </p>

            <img src='/static/images/Heterotopia1.jpg' />

            <p>
                Одни проекты призывают настоящее в отрыв в высокотехнологическое будущее, а непричастные сгинут в сингулярности. Другие, отрицая этот отрыв, соревнуются в многоразличных версиях настоящего, какое из них более «настоящее» чем другое. Иные настырно убеждают в том, что как будущее, так и настоящее просто обязано быть высокодуховным, посему необходимо реабилитировать/мобилизовать/наследовать концепции и образы разнодалекого прошлого.
                Все в целом приводит к тому, что в одном – современном нам – времени, да и в едином пространстве сосуществуют, проявляют себя, материализуются концепции из различных времен.
            </p>

            <ul>
                <li>Какое время в нашем наследуют гигантские проектные институты?</li>
                <li>Как в разновременном ландшафте разбросаны новые начинания?</li>
                <li>Какие концепции актуализируют философы и социальные ученые?</li>
            </ul>

            <p>
                <b>ГЕТЕРОТОПИИ СО-ВРЕМЕННОСТИ</b> – картина российского цехового ландшафта в наступившем веке – где разрывы, где связности/ядра/пузыри/облака и как вся картина анимируется – от какого к какому состоянию она движется.
            </p>

            <img src='/static/images/Heterotopia2.jpg' />
            <img src='/static/images/Heterotopia3.jpg' />

        </Layout>
    )
}

export default Page
