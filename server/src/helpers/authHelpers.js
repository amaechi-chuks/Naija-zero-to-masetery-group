/**
 * @description checks if user data are correct
 * @param {Object} userDetails
 * @param{Object} res
 * @returns {Boolean} true or false expecting true
 */
export const isUserDetailsValid = (userDetails) =>{
    /* Name variable declaration */
    const errorCode = 400;
    let errorMessage;

    const {
        firstName,
        lastName,
        email,
        phone,
        password,
        confirmPassword,
        address,
        city,
        zipCode
    } = userDetails;

    /*Check for firstName*/
if (!firstName || firstName.trim() === '' && ((typeof firstName) !== "string")){
    errrorMessage = 'First name is required';
}

/**check if lastName is valid */
if (!lastName || lastName.trim() === '' && ((typeof lastName) !== "string")){
    errrorMessage = 'First name is required';
}

/**Validate email */
/**regular expression for testing email address */
let emailRegex = /[^\s]*@[a-z0-9.-]*/i;
/**test email address */
emailRegex = emailRegex.test(string(email).toLowerCase());

if (!emailRegex) {
    errrorMessage = 'Invalid Email Address';
}
/** check for phone number */
if (!phone || phone.trim() === '' && (typeof phone !== 'string')) {
    errrorMessage = 'Phone cannot be empty';
}
 /* Check for password */
 if (!password || password.trim().length < 6 && (typeof password !== 'string')) {
    errorMessage = 'Password cannot be less than six characters';
  }

  /* check if password is matching  */
  if (!confirmPassword || confirmPassword !== password) {
    errorMessage = 'Password does not match';
  }

  /* check for address  */
  if (!address || address.trim() === '' && (typeof address !== 'string')) {
    errorMessage = 'Address field cannot be empty';
  }

  /* Check for city */
  if (!city || city.trim() === '' && typeof (city !== 'string')) {
    errorMessage = 'City is empty or invalid';
  }

  /* Check for zipCode */
  if (!zipCode || zipCode.trim() === '' && (typeof (zipCode !== 'string'))) {
    errorMessage = 'Zip Code is required';
  }
  console.log(errorMessage);

  return { errorCode, errorMessage };
};

/**
 * @description checks if user is already existing 
 * @param {string} data
 */
export const isUserValid = (data) => {
    const { email, password } = data;
    const errorCode = 400;
    let errorMessage;
  
    /* regular expression for testing email address */
    let emailRegex = /[^\s]*@[a-z0-9.-]*/i;
    /* test email address */
    emailRegex = emailRegex.test(String(email).toLowerCase());
    if (!emailRegex) {
      errorMessage = 'Email or password is incorrect';
    }
  
    /* Check for password */
    if (!password || typeof password !== 'string') {
      errorMessage = 'Email or password is incorrect';
    }
  
    return { errorCode, errorMessage };
  };