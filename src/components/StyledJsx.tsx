export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">StyledJsx</p>
        <button className="button">StyledJsx</button>
      </div>
      <style jsx>{`
        .containe {
          border: solid 1px black;
          padding: 8px;
        }

        .title {
          font-size: 16px;
        }

        .button {
          color: white;
          background: blue;
          padding: 8px;
          border-radius: 8px;
        }
      `}</style>
    </>
  )
}
