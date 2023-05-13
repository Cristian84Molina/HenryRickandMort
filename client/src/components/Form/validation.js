const validate = (userData, setErrors, errors) => {
    let newErrors = {...errors};
  
    // Validar el correo electrónico
    if (!userData.email) {
      newErrors.email = "El correo electrónico está vacío";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(userData.email)) {
      newErrors.email = "El correo electrónico es inválido";
    } else if (userData.email.length > 35) {
      newErrors.email = "El correo electrónico no puede tener más de 35 caracteres";
    } else {
      newErrors.email = "";
    }

    // Validar la contraseña
  if (!userData.password) {
    newErrors.password = "La contraseña está vacía";
  } else if (!/\d/.test(userData.password)) {
    newErrors.password = "La contraseña debe contener al menos un número";
  } else if (userData.password.length < 6 || userData.password.length > 10) {
    newErrors.password = "La contraseña debe tener una longitud entre 6 y 10 caracteres";
  } else {
    newErrors.password = "";
  }
  
    // Validar otros campos aquí
  
    setErrors(newErrors);
  };
  

  export default validate;