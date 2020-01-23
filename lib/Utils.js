export function _getDayOfWeek() {
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
//if they do not have any deals for the given day they will be excluded.
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
        label: 'Sunday',
        value: 'sunday'
    },{
        label: 'Monday',
        value: 'monday'
    },{
        label: 'Tuesday',
        value: 'tuesday'
    },{
        label: 'Wednesday',
        value: 'wednesday'
    },{
        label: 'Thursday',
        value: 'thursday'
    },{
        label: 'Friday',
        value: 'friday'
    },{
        label: 'Saturday',
        value: 'saturday'
    },]
}

export function getDay(id) {
    switch(id) {
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
    }
}