export default function registerValidate(values) {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = "Input your first name";
    } else if (values.firstName.includes(" ")) {
        errors.firstName = "Name can't contain space";
    }
    if (!values.lastName) {
        errors.lastName = "Input a your last name";
    } else if (values.lastName.includes(" ")) {
        errors.lastName = "Name can't contain space";
    }
    if (!values.email) errors.email = "Please enter email";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email";
    }
    if (!values.password) {
        errors.password = "Please enter password";
    } else if (values.password.includes(" ")) {
        errors.password = "Password contains empty space";
    } else if (values.password.length < 8) {
        errors.password = "Password is less than 8";
    } else if (values.password.length > 20) {
        errors.password = "Password is greater than 20";
    }
    if (!values.cPassword) {
        errors.cPassword = "Confirm password";
    } else if (values.password != values.cPassword) {
        errors.cPassword = "Password does not match";
    }
    return errors;
}
