import React from "react";
import '../App.css';

const ListItem = ({song}) => {
    return <li>{song.label}</li>
}

export default ListItem;