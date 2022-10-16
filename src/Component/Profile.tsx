import React from "react";
import s from "./Profile.module.css"



const Profile = () => {
    return <div className={s.profile}>
        <div>
            <img
                src='https://media.istockphoto.com/photos/canadian-rockies-banff-national-park-dramatic-landscape-picture-id1342152935?b=1&k=20&m=1342152935&s=170667a&w=0&h=q9-vhO5MC7zwaxX8_zFUiqMnQJ5udMjEBf0npeCCAGs='/>
        </div>
        <div>Ava + description</div>
        <div>
            My posts
            <div>
                New post
                <div>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Profile;