export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 1px black",
    padding: "8px"
  }

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "bold"
  }

  const buttonStyle = {
    background: "skyblue",
    padding: "8px",
    borderRadius: "8px"
  }

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>インラインスタイル</p>
      <button style={buttonStyle}>インライン</button>
    </div>
  )
}
