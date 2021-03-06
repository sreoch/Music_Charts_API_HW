import React, { useState, useEffect } from "react";
import MusicList from "../components/MusicList";
import '../App.css';

const MusicContainer = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry))
    }


    return(
        <>
        <div className="app">
        <h1 className="title-header">Top 20 Tunes App</h1>
        <MusicList songs={songs} />
        </div>

        </>
    )

}
export default MusicContainer;