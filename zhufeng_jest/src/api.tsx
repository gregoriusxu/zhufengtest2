export const callCallback = (onSuccess) => {
    setTimeout(() => {
        onSuccess({ code: 0 });
    }, 3000);
}
export const callPromise = () => {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve({ code: 0 });
        }, 3000);
    });
}