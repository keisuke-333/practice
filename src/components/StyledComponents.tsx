import styled from "styled-components"

export const StyledComponents = () => {
  return (
    <>
      <SContainer>
        <STitle>StyledComponents</STitle>
        <SButton>StyledComponents</SButton>
      </SContainer>
    </>
  )
}

const SContainer = styled.div`
  border: solid 1px black;
  padding: 8px;
`

const STitle = styled.p`
  font-size: 40px;
`

const SButton = styled.button`
  color: white;
  background: pink;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background: red;
  }
`