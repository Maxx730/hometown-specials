//Submits the specials submit form via Formcarry
export function _submitForm(form) {
    return new Promise((resolve, reject) => {
        fetch("https://formcarry.com/s/Kv1eEfDugqT", {
            method: "POST",
            headers: {"Content-type": "application/json", "Accept": "application/json"},
            body: JSON.stringify(form)
        }).then(response => {
            resolve(response);
        }).catch(err => {
            reject(err);
        });
    });
}

export async function _getLocations() {
    console.log('INFO: Requesting data from server...');
    return new Promise((resolve, reject) => {
        fetch('http://204.48.25.174:3000/locations').then(response => {
            resolve(response.json());
        }).catch(err => {
            reject(err);
        });
    });
}

