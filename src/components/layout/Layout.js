import React from 'react';
import { Helmet } from 'react-helmet';


const Layout = ({children,title,subtitle}) =>(
    <React.Fragment>
        <Helmet>
            {title && <title>{title} | DogGram 🐶</title>}
            {subtitle && <meta name="description" content={subtitle}/>}
        </Helmet>
        <div className="containerLayout">
            {title && <h1 className="Titulo">{title}</h1>}
            {subtitle && <h2 className="Subtitulo">{subtitle}</h2>}
            {children}
        </div>
    </React.Fragment>
);

export default Layout;