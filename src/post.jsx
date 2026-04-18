const style = {
  width: 200,
  backgroundColor: 'white',
  borderRadius: 10,
  borderColor: 'gray',
  borderWidth: 1,
  borderStyle: 'solid',
  padding: 20,
}

function Post({ name, folwers, time, content, image }) {
  return (
    <div>
      <div style={style}>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          {image && (
            <img
              src={image}
              alt="Post"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                marginRight: 10
              }}
            />
          )}

          <div>
            <b>{name}</b>
            <div>{folwers}</div>
            {time && <div>{time}</div>}
          </div>
        </div>

        <div style={{ marginTop: 10 }}>
          {content}
        </div>

      </div>
    </div>
  )
}

function Ppost({children})
{
  return (
    <div style={{ backgroundColor: "black", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {children}
    </div>
  )
}
export { Post, Ppost };