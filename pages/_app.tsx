import * as  React from 'react'

import App, { Container } from 'next/app'

// import 'antd/dist/antd.css'

export default class MyApp extends App {
    public render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <style global jsx>{`
                    #__next {
                        height: 100%;
                    }

                    body {
                        padding: 0;
                        margin: 0;
                    }

                    iframe {
                        overflow: hidden;
                    }
                `}</style>

                <Component {...pageProps} />
            </Container >
        )
    }
}
