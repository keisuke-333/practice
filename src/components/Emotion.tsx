/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Emotion = () => {
  const containerStyle = css`
    border: solid 1px black;
    padding: 8px;
  `

  const title = css({
    fontSize: '40px'
  })

  return (
    <>
      <div css={containerStyle}>
        <p css={title}>Emotion</p>
        <SButton>Emotion</SButton>
      </div>
    </>
  )
}

const SButton = styled.button`
  color: white;
  background: gray;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background: lightgray;
  }
`