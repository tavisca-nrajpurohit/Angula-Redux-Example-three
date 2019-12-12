export const USERNAME_IS_FOCUSSED = "usernameIsFocussed";
export const PASSWORD_IS_FOCUSSED = "passwordIsFocussed";
export const USERNAME_NOT_FOCUSSED = "usernameNotFocussed";
export const PASSWORD_NOT_FOCUSSED = "passwordNotFocussed";
export const USERNAME_VALUE_CHANGED = "usernameValueChanged";
export const PASSWORD_VALUE_CHANGED = "passwordValueChanged";

export function ACTION_usernameIsFocussed(formId:string){
    return {
        type: formId+USERNAME_IS_FOCUSSED
    }
}
export function ACTION_passwordIsFocussed(formId:string){
    return {
        type: formId+PASSWORD_IS_FOCUSSED
    }
}

export function ACTION_usernameNotFocussed(formId:string){
    return {
        type: formId+USERNAME_NOT_FOCUSSED
    }
}
export function ACTION_passwordNotFocussed(formId:string){
    return {
        type: formId+PASSWORD_NOT_FOCUSSED
    }
}

export function ACTION_usernameValueChanged(newValue,formId:string){
    return {
        type: formId+USERNAME_VALUE_CHANGED,
        value: newValue
    }
}

export function ACTION_passwordValueChanged(newValue,formId:string){
    return {
        type: formId+PASSWORD_VALUE_CHANGED,
        value: newValue
    }
}