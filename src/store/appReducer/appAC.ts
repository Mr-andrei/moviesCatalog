

export const setErrorStatus = (errorStatus:boolean) => ({
    type:"SET_ERROR_STATUS",
    errorStatus,
}as const)

export const setErrorText = (errorText:string) => ({
    type:"SET_ERROR_TEXT",
    errorText,
}as const)

export const setLoaderStatus = (loaderStatus:boolean) => ({
    type:"SET_LOADER_STATUS",
    loaderStatus,
}as const)