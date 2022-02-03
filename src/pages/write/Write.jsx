import "./write.css"

export default function Write() {
  return  (
  <div className="write">
      <img
        className="writeImg"
        src="https://scx1.b-cdn.net/csz/news/800a/2018/1-illuminating.jpg"
        alt=""
        />
      <form className="writeForm">
          <div className="writeFormGroup">
              <label htmlFor="fileInput">
                  <i class="writeIcon fas fa-plus"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}}/>
              <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
          </div>
        <div className="writeFormGroup">
            <textarea placeholder="write your blog..." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>

    
  </div>
  )
}
