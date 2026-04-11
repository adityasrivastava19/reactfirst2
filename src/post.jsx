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
        <div style={{ display: 'flex', backgroundColor: 'white', width: '100%', borderRadius: 10 }}>
          {image}
          <div>
            <b>
              {name}
            </b>
            <div>{folwers}</div>
            <div>{time!==undefined ?
            <div>
              {time}
            </div>
            :null
              }</div>
          </div>
        </div>
        <div>
          {content}
        </div>
      </div>
    </div>
  )
}
export default Post;