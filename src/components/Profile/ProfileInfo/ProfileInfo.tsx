import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/store";
import userPhoto from "../../../assets/images/ava.jpg"
import Preloader from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
  profile: ProfileType
  // store: StoreType
  // posts: Array<PostsType>
  // newPostText:string
  // dispatch: (action: ActionsTypes) => void

}


export function ProfileInfo(props:ProfileInfoPropsType) {
  if (props.profile.userId < 0) {
    return <Preloader/>
  }
    return (
        <div>
            <div>
                <img
                    src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
                    alt={''}/>
            </div>
            <div className={s.descriptionBlock}>
              <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt="Фото"/>
              <div><b>что хочу:</b> {props.profile.lookingForAJobDescription}</div>
              <div> {props.profile.aboutMe}</div>
              <div> {props.profile.contacts.facebook}</div>
              <p> {props.profile.fullName}</p>
              <b> {props.profile.userId}</b>
                ava+description
            </div>
        </div>
    )
}