import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'

const Top: NextPage = () => {
  return (
    <>
      <Layout>
        <main>
          <h1>
            {'Welcome to Twugo\'s Homepage!'}
          </h1>
        </main>
      </Layout>
    </>
  )
}

export default Top
