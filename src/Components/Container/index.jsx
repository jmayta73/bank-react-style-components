import React from "react";
import styled from "styled-components";


import Title from "../Title";
import Account from "../Account";
import { fondoClaro } from "../UI/Variables";

const StyledDiv = styled.div`
  background-color: ${fondoClaro};
  min-height: 90vh;
  padding: 0px 15vw;
`
const ContentSection = styled.section `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {

     flex-direction: column;
   }



`

const Container = () => {
  return (
    <StyledDiv>
      <Title>Smart Bank</Title>
      <ContentSection >
        <Account />
      </ContentSection>
    </StyledDiv>
  );
};

export default Container;
