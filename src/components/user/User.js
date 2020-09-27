import React, {useContext} from 'react';
import { Link,navigate } from '@reach/router';
import { useInputValue } from '../hook/useInputValue';
import { useAlert } from 'react-alert'
import { Post } from '../../libs/api';
import { GenerateUUID } from '../../libs/webUtils';
import { AppContext } from '../../AppContext';

const User = () => {
    const { ActiveteAuth,SaveUserId } = useContext(AppContext);
    const alert = useAlert();
    const Email = useInputValue("");
    const Password = useInputValue("");


    const handleSubmit = async () => {
        const endpoint = "User/LogIn";

        await Post(endpoint,"",{
            "email": Email.value,
            "password": Password.value
        })
        .then(response => {
            if(response !== undefined){
                if(response.data.response){
                    ActiveteAuth(GenerateUUID());
                    SaveUserId(response.data.response.id);
                    navigate("/home");
                }
                else{
                    alert.show("Error al iniciar sesión",{
                        type: 'error'
                    });
                }
            }
        })
    };

    return(
        <React.Fragment>
            <div className="containerFragment">
                <div>
                    <h2 className="tituloFormulario">Inicio Sesión</h2>
                </div>
                <hr/>
                <div className="Formulario">
                    <div className="containerButtons">
                        <label className="TituloInput">Email</label>
                        <input type="email" className="InputForm" placeholder="Email" {...Email}/>
                    </div>
                    <div className="containerButtons">
                        <label className="TituloInput">Contraseña</label>
                        <input type="password" className="InputForm" placeholder="Contraseña" {...Password}/>
                    </div>
                    <div className="containerButtons">
                        <button onClick={handleSubmit} className="BtnSubmit">Iniciar Sesión</button>
                        <Link to="/newuser" className="BtnSubmit">Nuevo Usuario</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default User;