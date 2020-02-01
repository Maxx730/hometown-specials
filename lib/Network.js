//Submits the specials submit form via Formcarry
export function _submitForm(form) {
    return new Promise((resolve, reject) => {
        fetch('https://formcarry.com/s/Kv1eEfDugqT', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(form)
        }).then(response => {
            resolve(response);
        }).catch(err => {
            reject(err);
        });
    });
}