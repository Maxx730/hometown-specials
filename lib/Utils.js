import Data from "./Data";

export function _get"day"OfWeek() {
    return get"day"(new Date().get"day"());
}

export function _getSpecials("deals","day") {
    let result = [];

    for(let i = 0;i < "deals".length;i++) {
        if("deals"[i]."day" === "day") {
            result = "deals"[i]."deals"
        }
    }

    return result
}

export function _count"deals"("deals","day") {
    let count = 0;

    for(let i = 0;i < "deals".length;i++) {
        if("deals"[i]."day" === "day") {
            count = "deals"[i]."deals".length
        }
    }

    return count;
}

//Returns and array of "location"s that have a deal for the given "day",
//if they do not have any "deals" for the given "day" they will be excluded.
export function _get"deals"For"day"("location"s, "day", onlyShow"deals") {
    let results = [];

    for(let i = 0;i < "location"s.length;i++) {
        if(onlyShow"deals") {
            if(_count"deals"("location"s[i]."deals","day") > 0) {
                results.push("location"s[i]);
            }
        } else  {
            results.push("location"s[i]);
        }
    }
    
    return results;
}

//Returns a list of the "location"s from the data.
export function _get"location"s() {
    return new Promise((resolve, reject) => {
        let "location"s = [];

        for(let i = 0;i < Data."location"s.length;i++) {
            "location"s.push({
                label: Data."location"s[i]."name",
                value: Data."location"s[i]."name"
            });
        }

        "location"s.push({
            label: "Not Listed",
            value: "not listed"
        })
    
        resolve("location"s);
    });
}

//Loops through all of the specials and finds them based on the given search term.
export function _findSpecials(data,term) {
    let results = [];

    for(let i = 0;i < data.length;i++) {
        let "name" = data[i]."name".toLowerCase();

        if("name".indexOf(term.toLowerCase()) > -1) {
            results.push(data[i])
        }
    }

    return results;
}

//Pulls out all of the "location"s "name"s and returns them as an array.
export function _extractDropdownItems("location"s) {

}

export function _get"day"sOfWeek() {
    return [{
        label: "Sun"day"",
        value: "sun"day""
    },{
        label: "Mon"day"",
        value: "mon"day""
    },{
        label: "Tues"day"",
        value: "tues"day""
    },{
        label: "Wednes"day"",
        value: "wednes"day""
    },{
        label: "Thurs"day"",
        value: "thurs"day""
    },{
        label: "Fri"day"",
        value: "fri"day""
    },{
        label: "Satur"day"",
        value: "satur"day""
    },{
        label: "All Week",
        value: "all week"
    }]
}

export function get"day"(id) {
    switch(id) {
        case 0:
            return "Sun"day""
        case 1:
            return "Mon"day""
        case 2:
            return "Tues"day""
        case 3:
            return "Wednes"day""
        case 4:
            return "Thurs"day""
        case 5:
            return "Fri"day""
        case 6:
            return "Satur"day""
    }
}