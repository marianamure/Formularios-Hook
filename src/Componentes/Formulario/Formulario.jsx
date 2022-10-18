import React, {useState} from 'react';


const Formulario = () => {

    //Creando una variable por cada campo de mi formulario
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hizoSubmit, setHizoSubmit] = useState(false);
    
    const crearUsuario = e => {
        e.preventDefault(); //Prevenimos el comportamiento normal del submit de un formulario
        const nuevoUsuario = {firstName, lastName, email}; //Creando un objeto/diccionario con todas las variables que creamos previamente
        /*const nuevoUsuario = {nombre:firstName, apellido:lastName, edad:email};*/
        console.log("Nuevo registro:", nuevoUsuario);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHizoSubmit(true);

    }

    const mensaje = () => {
        if(!hizoSubmit) {
            return (
                <div class="card">
                    <h3>Your Form Data</h3>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>E-mail: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm Password: {confirmPassword}</p>
                </div>
            )
            
        } else{
            return "¡Gracias por ingresar tus datos!";
        }
    }
    
    return(
        <form onSubmit={crearUsuario}>
            <div className="form-group">
                <label>Nombre:</label>
                <input className="form-control" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            </div>
            <div className="form-group">
                <label>Apellido:</label>
                <input className="form-control" onChange={(e) => setLastName(e.target.value)} value={lastName} />
            </div>
            <div className="form-group">
                <label>E-mail:</label>
                <input className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div className="form-group">
                <label>Confirm Password:</label>
                <input className="form-control" type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
            </div>
            <input type="submit" className="btn btn-success" value="Crear Usuario" />
            
            {mensaje()}

        </form>
        


    )
    
}

export default Formulario;