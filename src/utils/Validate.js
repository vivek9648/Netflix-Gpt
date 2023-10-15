export const checkValidData = (email, password) => {
    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    );
    const isPasswordValid =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
      );
      // const isNameValid=
      // /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name)
      
    if (!isEmailValid) {
      return "Email is not valid";
    }
    if (!isPasswordValid) {
      return "password is not valid";
    }
    // if (!isNameValid) {
    //   return "name is not valid";
    // }
    return null;
  };