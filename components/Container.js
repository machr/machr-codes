import styled from 'styled-components';

const Container = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 90vw;
  margin: 0 auto;
`


export default Container;