const getErrorMessage = (err) => {
    let message=""
    if(err.errors){
        for (var errName in err.errors) {
            if (err.errors[errName].message) {
                message = err.errors[errName].message
            }
        }
    }
    else {
        message=err.message
    }
    return message;
}
export default {getErrorMessage}