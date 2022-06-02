/* Minimo de caracteres permitidos en el campo de contaseña, nombre y apellido */


export function minLengthValidation(inputData, minLength){
    const { value} = inputData;
    removeClassErrrorSuccesss(inputData);

    if(value.length >=minLength){
        inputData.classList.add("success");
        return true;
    }else{
        inputData.classList.add("error");
        return false;
    }
}

export function emailValidation(inputData){

    
    const emailValid = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    const {value} =inputData;
    // la siguiente funcion da el verdesito y el rojito en la validacion (se ve en el front)
    removeClassErrrorSuccesss(inputData);
    const resultValidation = emailValid.test(value);

    if(resultValidation){
        inputData.classList.add("success");
        return true;
    }else{
        inputData.classList.add("error");
        return false;
    }

}

function removeClassErrrorSuccesss(inputData){
    inputData.classList.remove("success");
    inputData.classList.remove("error");
}