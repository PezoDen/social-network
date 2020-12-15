import React from "react";
import s from './ProfileInfo.module.css'

export function ProfileInfo() {
    return (

        <div>
            <div>
                <img
                    src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
                    alt={''}/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}