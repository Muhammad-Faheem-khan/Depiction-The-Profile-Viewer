
    export const passwordValidation = [(v) =>  v.length >= 8 && /a-zA-Z/.match(v) || "Min 8 characters"]
    export const required = [(value) => !!value || "Required."]
    export const emailValidation = [(v) =>  /.+@.+\..+/.test(v) || "E-mail must be valid"]
    export const nameValidation = [ (v) => (v.match(/[0-9]/) || "Name should consist of characters")]
