// convert data receiving time from UTC to GMT (including weekly day)
export function utcTogmt(dt) {
    var a = new Date(dt * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var day = days[a.getDay()];

    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }

    var hour = addZero(a.getHours());
    var min = addZero(a.getMinutes());
    var sec = addZero(a.getSeconds());
    var time = day + ' ' + date + ' ' + month + ' ' + year + ' ' + hour + ':' + min; //  + ':' + sec excluded
    return time;
}

// convert wind speed from meter/sec to km/h
export function meterSecToKmH(speed) {
    const speedToKmH = Math.round(speed * 3.6);
    return speedToKmH + ' ' + 'Km/h';
}

// convert wind speed from meter/sec to mph
export function meterSecToMpH(speed) {
    const speedToMpH = Math.round(speed * 2.2);
    return speedToMpH + ' ' + 'Mph';
}

// convert wind degrees from degrees to directions
export function degreesToDirections(deg) {
    const degTodirections = ['↑ North', '↗ NEast', '→ East', '↘ SEast', '↓ South', '↙ SWest', '← West', '↖ NWest'];
    return degTodirections[Math.round(deg / 45) % 8];
}

// convert wind gust from meter/sec to km/h
export const speedGustToKmH = (gust) => {
    var gustToKmH = Math.round(gust * 3.6);
    return gustToKmH + ' ' + 'Km/h';
}

// convert wind gust from meter/sec to mph
export const speedGustToMpH = (gust) => {
    var gustToMpH = Math.round(gust * 2.2);
    return gustToMpH + ' ' + 'Mph';
}
