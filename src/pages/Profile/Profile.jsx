import "./Profile.css"
import bobur from "../../assets/images/bobur.png"
import bobur1 from "../../assets/images/bobur1.png"
import bobur2 from "../../assets/images/bobur2.png"


const Profile=()=>{
    return(
        <div className="inner__container">
            <h1>Profile</h1>
            <div className="main-profile">
                <div className="profile-bg">
                    <h2 className="profile-name">BOBUR MAVLONOV</h2>
                </div>
                <div className="main-profile__box">
                    <div className="big-avatar">
                        <img src={bobur1} alt="" />
                        <button>Edit profile</button>
                    </div>
                    <div>
                        <h3>BOBIR</h3>
                        <span>@bobur_mavlonov</span>
                        <p>UX&UI designer at </p>
                        <a href="https://@abutechuz">@abutechuz</a>
                    </div>
                    <ul className="main-profile__list">
                        <li>Mashag’daman</li>
                        <li><a href="/">t.me/boburjon_mavlonov</a></li>
                        <li>Born November 24, 2000</li>
                        <li>Joined May 2020</li>
                    </ul>
                    <div className="follow">
                        <span><b>67</b> Following</span>
                        <span><b>47</b> Followers</span>
                    </div>
                </div>
            </div>
            <ul className="main-profile__body">
                <li>
                    <img src={bobur} alt="" />
                    <div>
                        <span><b>Bobur</b>@bobur_mavlonov · Apr 1</span>
                        <p>4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim</p>
                    </div>
                </li>
                <li>
                    <img src={bobur} alt="" />
                    <div>
                        <span><b>Bobur</b>@bobur_mavlonov · Apr 1</span>
                        <p>Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. <br />
                        Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. <br />
                        Gap faqat biznes trenerlar haqida emas.
                        </p>
                    </div>
                </li>
                <li>
                    <img src={bobur} alt="" />
                    <div>
                        <p>A bo'pti maskamasman</p>
                        <img src={bobur2} alt="" />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Profile;