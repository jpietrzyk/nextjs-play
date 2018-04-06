import Head from 'next/head'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = (props) => (
  <div>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Ubuntu|Ubuntu+Condensed" rel="stylesheet" />
      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
    </Head>
    <Sidebar />
    <Header />
    <main>
      {props.children}
    </main>
    <style jsx>{`
      main {
        padding-left: 100px;
        padding-top: 100px;
        max-width: 1200px;
      }
    `}</style>
    <style jsx global>{`
      body {
        background-color: #EBEBEB;
      }
    `}</style>
  </div>
)

export default Layout
