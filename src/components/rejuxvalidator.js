export const emailValidator = (email) => {
    const emailRegex = /hi@gmail.com/;
    return emailRegex.test(email);
  };
  
  export const passwordValidator = (password) => {
    const passwordRegex = /123456/;
    return passwordRegex.test(password);
  };
  