import "./singlePost.css";

export default function SinglePost() {
  return (
  <div className='singlePost'>
      <div className="singlePostwrapper">
          <img 
            src="https://www.iucn.org/sites/dev/files/styles/850x500_no_menu_article/public/content/images/2020/shutterstock_1458128810.jpg?itok=sKSJDbYv"
            alt="" 
            className="singlePostImg" 
            />
            <h1 className="singlepostTitle">
                <div className="singlePostLike">
                <i class="far fa-heart">like</i>
                </div>
                <div className="singlePostEdit">
                <i className="singlePostIcon fas fa-pen-square"> Edit </i>
                <i class="singlePostIcon fas fa-trash"> Delete </i>
                </div> <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b> dotdot      |    </b>
                </span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                hey , this is a post and the autor name i s visible as you can see and I am trying to write anything and everything that I can 
                in order to fill up some space and see how long posts would look like when they're posted o the blog site in the single Post section and their visuals whether they gonna be appealing or not bl bla bla bla bla
            </p>
      </div>
  </div>
  );
}
