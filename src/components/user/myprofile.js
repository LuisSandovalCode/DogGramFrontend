import React,{ useContext, useState, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import { Post } from '../../libs/api';
import Http from '../../libs/http';
import Category from '../category/Category';
import PhotoCard from '../Photo/PhotoCard';



const MyProfile = () => {
    const { userId } = useContext(AppContext);

    const [user,setUser] = useState({});
    const [dogs,setDogs] = useState([]);

    useEffect(() => {
        const GET_USER_BY_ID = "User/UserById";
        
        Post(GET_USER_BY_ID,"",{
            "id": userId
        })
        .then(response => {
            setUser(response.data.response);
        });

        Http.instance
        .get("https://dog.ceo/api/breeds/image/random/20")
        .then(response => {
            setDogs(response.data.message)
        })
        .catch(error => console.log("ERROR",error));
    },[]);


    return(
        <React.Fragment>
            <div className="containerFragment">
                <div>
                    <h2 className="tituloFormulario">Mi Perfil</h2>
                </div>
                <hr/>
                <div className="Formulario">
                    <h2 className="h2Titulo">Nombre: {user.name} {user.lastName}</h2>
                    <h2 className="h2Titulo">Correo: luis@mail.com</h2>
                    <h2 className="h2Titulo">NickName: @{user.nickName}</h2>
                    <div>
                    <button className="BtnSubmit">Cerrar Sesión</button>
                    </div>
                </div>
                <div>
                    <h2 className="tituloFormulario">Mis Publicaciones</h2>
                </div>
                <hr/>
                <div className="myImageGrid">
                    {dogs && dogs.map(dog => <PhotoCard key={dog} src={dog}/>) }
                </div>
            </div>
        </React.Fragment>
    )
};

export default MyProfile;