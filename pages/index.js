import Layout from '../components/Layout'
import styled from 'styled-components';

const Index = ({ title, company, companyUrl }) => {
  return (
    <Layout pageTitle={`${title} | Frontend Developer`}>
      <Main>
        <NameHeading>Hi, I'm Mark Powell</NameHeading>
        <Location>🌏 Melbourne, Australia</Location>
        <IntroText>I am a software engineer with a love of front-end development. <br />I currently work at <Company href={companyUrl}>{company}</Company>{' '}
        </IntroText>
      </Main>
    </Layout>
  )
}

export async function getStaticProps() {
  const configData = await import('../siteconfig.json');

  return {
    props: {
      title: configData.default.title,
      company: configData.default.company,
      companyUrl: configData.default.companyUrl,
      description: configData.default.description
    }
  }
}


const Main = styled.main`
  padding: 3rem 0;
  min-height: 70vh;
  font-family: var(--font-body);
`;

const NameHeading = styled.h1`
  color: whitesmoke;
`;

const Location = styled.p`
  color: #e8eaed;
`;

const Company = styled.a`
  background-image: linear-gradient(transparent 70%, #ee5c87 70%, #f1a4b5 );
  background-size: 110% 100%;
  background-repeat: no-repeat;
  background-position: top center;
`;


const IntroText = styled.p`
  font-family: var(--font-body);
  font-size: 40px;
  line-height: 1.35;
  animation: bgColor 15s infinite linear;

  h2 {
    color: whitesmoke;
  }

  @keyframes bgColor {
    0% {
      color: #FF1493;
    }
    25% {
      color: #FFA500;
    }

    50% {
      color: #7FFF00;
    }

    87.5% {
      color: #9932CC;
    }
    100% {
      color: #FF1493;
    }
  }
`;

export default Index
