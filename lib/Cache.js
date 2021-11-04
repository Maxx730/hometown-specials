import * as FileSystem from 'expo-file-system';

const CACHE_FILE_NAME = 'hsCache.json';
const CACHE_PATH = FileSystem.documentDirectory + CACHE_FILE_NAME;

export function CacheExists() {
    return new Promise((res, rej) => {
        FileSystem.getInfoAsync(CACHE_PATH).then(info => {
            res(info.exists);
        }).catch(err => {
            console.log(err);
        });
    });
}

export function SaveCache(data) {
    return new Promise((res, rej) => {
        console.log('Writing data to cache file...');
        FileSystem.writeAsStringAsync(CACHE_PATH, JSON.stringify(data));
        res(data);
    });
}

export function GetCachedData() {
    return FileSystem.readAsStringAsync(CACHE_PATH);
}

export function ClearCachedData() {
    return new Promise((res, rej) => {
        console.log('Clearing cached data...');
        FileSystem.deleteAsync(CACHE_PATH);
        res();
    });
}