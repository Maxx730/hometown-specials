import * as FileSystem from 'expo-file-system';

const FILE_URI = `${FileSystem.documentDirectory}hsCache.json`;

export function _saveCacheData(data) {
    return new Promise(async (resolve, reject) => {
        await FileSystem.writeAsStringAsync(FILE_URI, data ,{ encoding: FileSystem.EncodingType.UTF8 });
        resolve();
    });
}

export function _getCachedData() {
    return new Promise(async (resolve, reject) => {
        await FileSystem.readAsStringAsync(FILE_URI).then(data => {
            resolve(data);
        });
    });
}

export function _shouldUpdateData(data) {
    if(data && 'lastCached' in data) {
        let dateCheck = new Date(data.lastCached);
        //Determine the amount of days there have between since last pulling data.
        let between = Math.floor(Math.abs(dateCheck.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
        
        if(between > 1) {
            return true
        } else {
            return false;
        }
    } else {
        return true;
    }
}

export function _hasCachedData() {
    return new Promise(async (resolve, reject) => {
        await FileSystem.readAsStringAsync(FILE_URI).then(data => {
            resolve(true)
        }).catch(err => {
            resolve(false)
        });
    });
}

export function _deleteCache() {
    return new Promise(async (resolve, reject) => {
        await FileSystem.deleteAsync(FILE_URI).then(file => {
            console.log(file)
        });
    });
}