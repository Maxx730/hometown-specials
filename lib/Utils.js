import Data from "./Data";
import { Share } from 'react-native';

export function _getdayOfWeek() {
    return getDay(new Date().getDay());
}

export function _getSpecials(deals,day) {
    let result = [];

    for(let i = 0;i < deals.length;i++) {
        if(deals[i].day === day) {
            result = deals[i].deals
        }
    }

    return result
}

export function _countDeals(deals,day) {
    let count = 0;

    for(let i = 0;i < deals.length;i++) {
        if(deals[i].day === day) {
            count = deals[i].deals.length
        }
    }

    return count;
}

//Returns and array of locations that have a deal for the given day,
//if they do not have any Deals for the given day they will be excluded.
export function _getDealsForDay(locations, day, onlyShowDeals) {
    let results = [];

    for(let i = 0;i < locations.length;i++) {
        if(onlyShowDeals) {
            if(_countDeals(locations[i].deals,day) > 0) {
                results.push(locations[i]);
            }
        } else  {
            results.push(locations[i]);
        }
    }
    
    return results;
}

//Returns a list of the locations from the data.
export function _getLocations() {
    return new Promise((resolve, reject) => {
        let locations = [];

        for(let i = 0;i < Data.locations.length;i++) {
            locations.push({
                label: Data.locations[i].name,
                value: Data.locations[i].name
            });
        }

        locations.push({
            label: "Not Listed",
            value: "not listed"
        })
    
        resolve(locations);
    });
}

//Loops through all of the specials and finds them based on the given search term.
export function _findSpecials(data,term) {
    let results = [];

    for(let i = 0;i < data.length;i++) {
        let name = data[i].name.toLowerCase();

        if(name.indexOf(term.toLowerCase()) > -1) {
            results.push(data[i])
        }
    }

    return results;
}

//Pulls out all of the locations names and returns them as an array.
export function _extractDropdownItems(locations) {

}

export function _getDaysOfWeek() {
    return [{
        label: "Sunday",
        value: "sunday"
    },{
        label: "Monday",
        value: "monday"
    },{
        label: "Tuesday",
        value: "tuesday"
    },{
        label: "Wednesday",
        value: "wednesday"
    },{
        label: "Thursday",
        value: "thursday"
    },{
        label: "Friday",
        value: "friday"
    },{
        label: "Saturday",
        value: "saturday"
    },{
        label: "All Week",
        value: "all week"
    }]
}

export function getDay(id) {
    switch(id) {
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
    }
}

export async function shareDeal(title, message, onSuccess, onError) {
    try {
        const result = await Share.share({
            title: title,
            message: message,
            url: 'http://www.google.com'
        },{
            dialogTitle: 'test'
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
              console.log('shared with activity type')
            } else {
              onSuccess && onSuccess()
            }
          } else if (result.action === Share.dismissedAction) {
            console.log('dismissed')
          }
    } catch(err) {
        onError && onError()
    }
}