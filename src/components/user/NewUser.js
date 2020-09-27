import React from 'react';
import { Post } from '../../libs/api';
import { useAlert } from 'react-alert'
import { useInputValue } from '../hook/useInputValue';

const NewUser = () => {

    const alert = useAlert();
    const Name = useInputValue("");
    const LastName = useInputValue("");
    const Email = useInputValue("");
    const Password = useInputValue("");

    


    const handleSubmit = async (event) => {

        const user = {
            name: Name.value,
            lastName: LastName.value,
            email: Email.value,
            password: Password.value
        };
        
        const body = JSON.stringify(user);
        const endpoint = "User/CreateUser";
        await Post(endpoint,body)
                .then(respose => {
                    if(respose !== undefined){
                        if(respose.data.response){
                            alert.show("Usuario creado",{
                                type: 'success'
                            });
                        }
                        else{
                            alert.show("Error al crear usuario",{
                                type: 'error'
                            });
                        }
                    }
                })
                .catch(error => {
                    console.log("ERROR",error);
                });
    };


    return(
        <React.Fragment>
            <div>
                <h2 className="tituloFormulario">Nuevo Usuario</h2>
            </div>
            <hr/>
            <div className="Formulario">
                <div className="containerButtons">
                    <label className="TituloInput">Nombre</label>
                    <input type="text" className="InputForm" placeholder="Nombre" {...Name}/>
                </div>
                <div className="containerButtons">
                    <label className="TituloInput">Apellido</label>
                    <input type="text" className="InputForm" placeholder="Apellido" {...LastName}/>
                </div>
                <div className="containerButtons">
                    <label className="TituloInput">Email</label>
                    <input type="email" className="InputForm" placeholder="Email" {...Email}/>
                </div>
                <div className="containerButtons">
                    <label className="TituloInput">Contraseña</label>
                    <input type="password" className="InputForm" placeholder="Contraseña" {...Password}/>
                </div>
                <div className="containerButtons">
                    <button className="BtnSubmit" onClick={handleSubmit}>Registrar</button>
                </div>
            </div>
        </React.Fragment>
    )

};

export default NewUser;