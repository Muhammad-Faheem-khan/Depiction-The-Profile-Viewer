// validation for field to be required 
export const required = [(value) => !!value || "Required."]

// validation for password field
export const passwordValidation = [
    v => !!v || 'Password is Required',
    (v) => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(v) || "Must contain min 8 characters including uppercase, lowercase and numeric",
]

// validation for email field
export const emailValidation = [
    v => !!v || 'Email is Required',
    (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"]

// validation for name field
export const nameValidation = [
    v => !!v || 'Field is Required',
    (v) => /[a-zA-Z]/.test(v) && !(/[0-9]/.test(v)) || "Invalid Name"]
