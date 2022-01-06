import React from "react";
import ListItem from "./ListItem";

const MusicList = ({songs}) => {

    const musicItems = songs.map((song, index) => {
        return <ListItem song={song.title} key={index+1} />
    })

    return(
        <div>
        <ul className="list">
            {musicItems}
        </ul>
        </div>
    )
}

export default MusicList;