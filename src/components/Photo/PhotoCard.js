import React from 'react';
import { Link } from '@reach/router';
import useNearScreen from '../hook/useNearScreen';
import FavButton from '../favbutton/FavButton';
import { Post } from '../../libs/api';

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";


const PhotoCard = ({ id,liked = false,likes = 0, src = DEFAULT_IMAGE  }) => {
    const [show,element] = useNearScreen();

    const LikeClick = async () => {
        
    }

    return(
        <article className="ArticlePhotoCard" ref={element}>
            {show && (
                <React.Fragment>
                    <Link to={`/detail/${id}`}>
                        <div className="ImageWrapperPhotoCard">
                            <img className="ImagePhotoCard" src={src}/>
                        </div>
                    </Link>
                    <FavButton liked={liked} likes={likes}/>
                </React.Fragment>
            )}
        </article>
    )

};

export default PhotoCard;