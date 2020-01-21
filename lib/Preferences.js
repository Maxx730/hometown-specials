import { AsyncStorage } from 'react-native';

const DEFAULT = {
    showMapOpen: false
}

export async function _getPrefs() {
    return new Promise(async (resolve, reject) => {
        await AsyncStorage.getItem('hs-preferences').then(async (result) => {
            if(result) {
                resolve(JSON.parse(result));
            } else {
                await _savePrefs(DEFAULT);
                resolve(DEFAULT);
            }
        })
    });
}

export async function _savePrefs(prefs) {
    return new Promise(async (resolve, reject) => {
        await AsyncStorage.setItem('hs-preferences', JSON.stringify(prefs)).then(result => {
            resolve('success');
        }).catch(err =>{
            reject('error');
        });
    });
}