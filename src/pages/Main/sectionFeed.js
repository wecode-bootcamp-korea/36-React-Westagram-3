function SectionFeed(props) {
    return (
        <section className="feed">
            <div className="feedBox basic">
                <div className="feedtop">
                    <img src="img/who.jpg" alt="누구?" />
                    <span> Front-end developer</span>
                </div>
                <img className="feedImg" src="img/instar.jpg" alt="feed" />
                <div className="clickedIcon">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="좋아요" />
                    <img src="img/message.png" alt="댓글" />
                    <img src="img/airplane.png" alt="공유" />
                    <div className="hartClick">좋아요 2만개</div> 
                </div>
                <div className="chat" />
                <form className="chatting" action="" onSubmit={event=>{props.onEvent(event)}}>
                    <img className="inputImg" src="img/smaile.png" alt='댓글아이콘' />
                    <input className="chatInput" type="text" placeholder="댓글 달기..." />
                    <button className="chatSubmit" >게시</button>    
                </form>
            </div>
        </section>        
    )
}
export default SectionFeed