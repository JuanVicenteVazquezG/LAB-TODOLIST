export const min = val => {       /* controller if qty of characters are 3 or more than 3*/
    return val.length >=3
}

export const securePass = value => {  /* is required Uppercase and lowercase and 8 characters minimum*/
    return value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
  };

