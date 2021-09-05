import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const PageTitle = styled.h1``;

export default function Home() {
  return (
    <PageWrapper>
      <PageTitle>Hello world</PageTitle>
    </PageWrapper>
  );
}
