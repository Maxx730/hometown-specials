import { AsyncStorage } from "react-native";
import { Notifications } from 'expo';
import Constants from 'expo-constants';
import {_getLocations} from './Network';
import { v5 as uuidv5 } from 'uuid';

const NOTIFICATION = {
    title: 'Test Notification',
    body: 'Test Notification Body Description'
}

const DEFAULT = {
    initialized: false,
    dailyNotifications: true,
    id: Constants.deviceId
}

const CACHE = {
    lastCache: null,
    locations: null
}

export async function _getPrefs() {
    return new Promise(async (resolve, reject) => {
        await AsyncStorage.getItem("hs-preferences").then(async (result) => {
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
        await AsyncStorage.setItem("hs-preferences", JSON.stringify(prefs)).then(result => {
            resolve(prefs);
        }).catch(err =>{
            reject("error");
        });
    });
}

export async function _setDefaults() {
    console.log('INFO: Attempting to set default HS preferences.')
    return new Promise(async (resolve,reject) => {
        await AsyncStorage.removeItem('hs-preferences').then(results => {
            return new Promise(async (res, rej) => {
                _savePrefs(DEFAULT).then(result => {
                    resolve(result)
                });
            });
        }).catch(err => {
            reject('ERROR: Error deleting applicaiton preferences.')
        });
    });
}

export async function _scheduleNotification(notif, day) {
    let scheduleTime = getFutureForDay(day);
    scheduleTime.setHours(11, 0,0,0);

    return new Promise((resolve, reject) => {
        Notifications.scheduleLocalNotificationAsync(notif, {
            time: new Date().getTime() + 1000
        }).then(res => {
            resolve("SUCCESSS: Notification Scheduled");
        }).catch(err => {
            reject("ERROR: Error scheduling notification.");
        });
    });
}

export async function _cacheLocations() {
    console.log('INFO: Caching location information.');
    return new Promise((resolve, reject) => {
         _getLocations().then(async locations => {
             let cache = JSON.parse(JSON.stringify(CACHE));
             cache.lastCache = new Date();
             cache.locations = locations;

             await AsyncStorage.setItem('hs-cache',JSON.stringify(cache)).then(() => {
                 console.log(cache)
                resolve(JSON.parse(cache));
             }).catch(err => {
                 reject(err);
             });
         });
    });
}


export async function _getCache() {
    return new Promise(async (resolve, reject) => {
        await AsyncStorage.getItem('hs-cache').then(cache => {
            resolve(JSON.parse(cache));
        }).catch(err => {
            reject(err);
        });
    });
}

export async function _clearCache() {
    await AsyncStorage.removeItem('hs-cache').then(() => {
        console.log('INFO: Cache successfully cleared.');
    }).catch(err => {
        console.log('ERROR: Unable to clear cache.');
    });
}

export function _clearNotifications() {
    Notifications.cancelAllScheduledNotificationsAsync();
}

function getFutureForDay(day) {
    let d = new Date();
    d.setUTCDate(d.getUTCDate() + (7 - day) % 7 + 1);
    return d;
}