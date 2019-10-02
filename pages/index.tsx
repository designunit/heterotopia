import * as React from 'react'

import { NextPage } from 'next'
import Head from 'next/head'

import { Layout } from '../src/components/Layout'

const Page: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>
                    Heterotopia
                </title>
            </Head>

            <h1>
                Heterotopia
            </h1>
            <p>тут будем пробывать писать</p>
        </Layout>
    )
}

export default Page
