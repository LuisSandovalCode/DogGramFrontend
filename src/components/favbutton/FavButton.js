import React from 'react';
import { MdFavoriteBorder,MdFavorite } from 'react-icons/md';

const FavButton = ({liked,likes, onClick}) => {
    const Icon = liked ? MdFavorite : MdFavoriteBorder;

    return(
        <React.Fragment>
            <button className="btnFav" onClick={onClick}>
                <Icon color="#fff" size="32px"/> 
                <label className="Likes">{likes} Likes!!</label>
            </button>
        </React.Fragment>
    )
}

export default FavButton;
