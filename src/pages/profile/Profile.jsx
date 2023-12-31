import React, { useContext, useEffect, useState } from "react";
import "./profile.css";
import user from "../../assets/images/user.png";
import { FaRegSun } from "react-icons/fa";
import Post from "../../components/profil/Post";
import UserContext from "../../context/UserContext";
import axios from "axios";

const Profile = () => {
  const [userInfo, setUserInfo] = useState("")
  const {  isUser } = useContext(UserContext);

  const [active, setActive] = useState("publication")

  useEffect(() => {
    const handleGet = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/${isUser.id}`
        );
        setUserInfo(response.data)
      } catch (err) {
        // alert("Wrong credentials!!!");
        console.log(err)
      }
    };

    handleGet()
  }, [])
  

  return (
    <div className="profile_container">
      <div className="info_line">
        <div className="info_line_left">
          <img src={user} alt="" />
        </div>
        <div className="info_line_right">
          <div className="info_line_right_l1">
            
            <h3>idrisstoure18</h3>
            <button>Modifier profil</button>
            <FaRegSun className="icon" />
          </div>
          <div className="info_line_right_l2">
            <p>9 publications</p>
            <p>505 followers</p>
            <p>370 suivi(e)s</p>
          </div>
          <h4>{`${userInfo.nom} ${userInfo.prenom}`}</h4>
          <h4>{isUser.email}</h4>
          <div>
            <p className="title">
              <strong>Ing. CyberSecurity</strong>
            </p>
            <p className="desc">
              <strong>
                Développer Web & Mobile#php #html #css #js #laravel #react
                #symfony #flutter
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div className="profil_navigation">
        <div onClick={()=>setActive("publication")} className={`profil_navigation_item ${active==="publication" && "active"}`}>PUBLICATIONS</div>
        <div onClick={()=>setActive("enregistrement")} className={`profil_navigation_item ${active==="enregistrement" && "active"}`}>ENREGISTREMENTS</div>
        <div onClick={()=>setActive("indentification")} className={`profil_navigation_item ${active==="indentification" && "active"}`}>IDENTIFIÉ(E)</div>
      </div>

      {active==="publication" && 
      (<div className="profile_post">
        <Post img={user}/>
        <Post img={user}/>
        <Post img={user}/>
        <Post img={user}/>
        <Post img={user}/>
        <Post img={user}/>
        <Post img={user}/>
      </div>)}
      {active==="enregistrement" && 
      (<div className="profile_post">
        <Post img={user}/>
        <Post img={user}/>
        <Post img={user}/>
        <Post img={user}/>
      </div>)}
      {active==="indentification" && 
      (<div className="profile_post">
        <Post img={user}/>
        <Post img={user}/>
        <Post img={user}/>
      </div>)}


    </div>
  );
};

export default Profile;
