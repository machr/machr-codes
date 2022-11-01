import Layout from '../components/Layout'

const AboutPage = ({title, ...props}) => {
  return (
    <Layout pageTitle={`${title} | About Me`}>
      <h1>About Me</h1>
      <p>I am very happy to be here</p>
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

export default AboutPage;