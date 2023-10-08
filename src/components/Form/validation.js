const validation = (values) => {
    let errors = {
        email: [],
        password: []
    };
    // Validación del email
    //si no existe email
    if (!values.email) {
        errors.email.push("Por favor, ingresa tu email.");
    }
    //si existe email
    else {
        //si el email no es válido
        if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email.push("Por favor, ingresa un email válido.");
        }
        //si el email es mayor a 35 caracteres
        if (values.email.length > 35) {
            errors.email.push("El email es demasiado largo. No puede tener más de 35 caracteres.");
        }
    }

    // Validación del password
    //si no existe password
    if (!values.password) {
        errors.password.push("Por favor, ingresa tu password.");
    }
    //si existe password
    else {
        //si el password no es válido
        if (!/^(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}$/i.test(values.password)) {
            errors.password.push("Por favor, ingresa un password válido. ");
            if (values.password.length < 6) errors.password.push("El password debe tener al menos 6 caracteres. ");
            if (values.password.length > 10) errors.password.push("El password no puede tener más de 10 caracteres. ");
            if (!/\d/.test(values.password)) errors.password.push("El password debe tener al menos un número. ");
        }

    }
    return errors;
}

export default validation;