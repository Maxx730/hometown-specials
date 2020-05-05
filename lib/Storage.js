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

export function _hasCachedData() {
    return new Promise(async (resolve, reject) => {
        await FileSystem.getInfoAsync(FILE_URI).then(file => {
            if(file.exists) {
                resolve(true);
            } else {
                resolve(false);
            }
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