import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import Container from './Container';

const GlobalStyles = createGlobalStyle`
  html {
    --color-text: black;
    --font-body: 'Fira Code', sans-serif;
    --color-background: white;
    --color-primary: rebeccapurple;

    
  }
`;


const Layout = ({ children, pageTitle, ...props }) => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap" rel="stylesheet" />
    </Head>
    {/* <Header /> */}
    <GlobalStyles />
    <Container>

      {children}
    </Container>
    {/* <Footer /> */}
  </>
)

export default Layout;