export const Validate = (input) => {
    const errors = {};
    const isUsernameUnique = !existingUsers.some(
        (user) => user.username === input.username
      );
      if (!isUsernameUnique) {
        errors.username = "El nombre de usuario ya está en uso";
      }
    
      const isPasswordUnique = !existingUsers.some(
        (user) => user.password === input.password
      );
      if (!isPasswordUnique) {
        errors.password = "La contraseña ya está en uso";
      }
    const nameRegex = /^[A-Za-z]{1,20}$/;
    if (!nameRegex.test(input.name)) {
        errors.name = "El nombre debe contener solo letras y tener máximo 20 caracteres";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.email)) {
        errors.email = "El email no es válido";
    }

    const nDniRegex = /^\d{1,8}$/;
    if (!nDniRegex.test(input.nDni)) {
        errors.nDni = "El número de DNI debe contener solo números y tener máximo 8 dígitos";
    }

    const birthdateRegex = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    if (!birthdateRegex.test(input.birthdate)) {
        errors.birthdate = "La fecha de nacimiento no es válida";
    }

    const usernameRegex = /^[A-Za-z0-9_]{3,20}$/;
    if (!usernameRegex.test(input.username)) {
        errors.username = "El nombre de usuario debe contener solo letras, números y guiones bajos, y tener entre 3 y 20 caracteres";
    }

    const passwordRegex = /^.{8,}$/;
    if (!passwordRegex.test(input.password)) {
        errors.password = "La contraseña debe tener al menos 8 caracteres";
    }

    return errors;
};