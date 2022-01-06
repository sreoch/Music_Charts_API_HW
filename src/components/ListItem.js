import React from "react";
import '../App.css';

const ListItem = ({song}) => {
    return <li className="list-item">{song.label}</li>
}

export default ListItem;