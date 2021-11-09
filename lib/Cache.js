import * as FileSystem from 'expo-file-system';
import * as SecureStore from 'expo-secure-store';

const CACHE_FILE_NAME = 'hsCache.json';
const CACHE_PATH = FileSystem.documentDirectory + CACHE_FILE_NAME;
const SETTING_PREFIX = 'hs';

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

export function GetSetting(setting) {
    return new Promise((res, rej) => {
        SecureStore.getItemAsync(`${SETTING_PREFIX}${setting}`).then(_val => {
            res(_val);
        }).catch(err => {
            rej(err);
        });
    });
}

export async function SetSetting(setting, value) {
    await SecureStore.setItemAsync(`${SETTING_PREFIX}${setting}`, JSON.stringify(value));
}