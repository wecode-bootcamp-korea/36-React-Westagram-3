import './main.scss';
import SectionTop from './sectionTop';
import SectionFeed from './sectionFeed'; 
import MyProfile from './myProfile';
import SuggestionMember from './suggestionMember';
import chatting from './chatting';

function Main() {
    return (
        <>
        <nav>
            <div className='topLine basic'>
                <span className="westarFont">WeStagram</span>
                <div className="searchLocation">
                    <div className="searchPosion">
                        <img className="searchIcon"src="img/search.png" alt="" />
                        <input className="search" type="text" placeholder="검색"></input>
                    </div>
                </div>
                <div className="icon">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>   
            </div>             
        </nav>
        <div className="layout">
            <div></div>
            <main>
                <SectionTop members={members}></SectionTop>
                <SectionFeed onEvent={chatting}></SectionFeed>
            </main>
            <aside>
                <MyProfile name="juno97, 김준호"></MyProfile>
                <SuggestionMember name={suggestionName}></SuggestionMember>
            </aside>
            <div />        
        </div>
        <div className="reference">
            <a  href="https://www.flaticon.com/kr/free-icons/" title="집 아이콘">집 아이콘  제작자: Dave Gandy - Flaticon</a>
            <a href="https://www.flaticon.com/kr/free-icons/instagram-" title="instagram 공유 아이콘">, Instagram 공유 아이콘  제작자: Freepik - Flaticon</a>
        </div>
    </>
    )
}
export default Main;

const members = [
    {id:1, src:"img/bighead.jpg", alt:"빡빡이"},
    {id:2, src:'img/boram.jpg',  alt:'보람'},
    {id:3, src:'img/juno.jpg', alt:"juno"},
    {id:4, src:'img/wecode.jpg', alt:"wecode"},
    {id:5, src:"img/who.jpg", alt:"누구?"},
    {id:6, src:"img/ingyeng.jpg", alt:"97인경"}
]
const suggestionName = [
    {id:1, name:'hcchang13'},
    {id:2, name:'hyeong7777'},
    {id:3, name:'fine_artian'},
    {id:4, name:'likeavenger'},
    {id:5, name:'lee_ej__09ll'}
]


