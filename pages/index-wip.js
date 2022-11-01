import Layout from '../components/Layout'
import styled from 'styled-components';

const Index = ({title, description, ...props}) => {
  return (
    <Layout pageTitle={`${title} | Frontend Developer`}>
      <Main>
      <h1>My journey so far</h1>

      <section>
        <article>
          A Cloud Guru
        </article>
      </section> 
      
      </Main>
    </Layout>
  )
}

export async function getStaticProps() {
  const configData = await import('../siteconfig.json');

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description
    }
  }
}

const Main = styled.main` 
  padding: 3rem 0;
  min-height: 70vh;

  h2 {
    font-family: 'Lobster';
  }
`;

export default Index
