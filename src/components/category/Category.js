import React from 'react';
import { Link } from '@reach/router';
const DEFAUL_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

const Category = ({src = DEFAUL_IMAGE,path}) => (
    <Link className="LinkCategory" to={path}>
        <img className="ImageCategory" src={src}/>
    </Link>
)

export default Category;