const { DateTime } = require('luxon')

// const iso = '2021-11-16T10:40 Australia/Adelaide';

export const dtFromIso = iso => {
    const dt = DateTime.fromFormat(iso, "yyyy-MM-dd'T'HH:mm z", {setZone: true})
    return dt.setZone('UTC')
}

export const dtString = (dt, timezone) => {
    let tz_dt = dt.setZone(timezone)
    const weekday = tz_dt.weekdayShort
    let day = tz_dt.day
    if (day < 10) {
        day = "0" + day
    }
    if (tz_dt.invalid) {
        return '-'
    }
    const month = tz_dt.monthShort
    const year = tz_dt.year
    let hour = tz_dt.hour, minute = tz_dt.minute, ap = 'AM'
    if (hour > 11) {
        ap = 'PM'
        if (hour > 12) {
            hour -= 12
        }
    }
    if (hour < 10) {
        hour = `0${hour}`
    }
    if (minute < 10) {
        minute = `0${minute}`
    }
    const time = `${hour}:${minute} ${ap}`
    // const time = tz_dt.toLocaleString(DateTime.TIME_SIMPLE)
    return `${weekday}, ${day} ${month} ${year}, ${time}`
}

export const dtStringFromIso = (iso, timezone) => {
    return dtString(dtFromIso(iso), timezone)
}

export const isoFromDt = (dt, timezone, showTimezone=false) => {
    const tz_dt = dt.setZone(timezone)
    let returnValue = tz_dt.toISO({includeOffset: false}).slice(0, -7)
    if (showTimezone) {
        returnValue += ` ${timezone}`
    }
    return returnValue
}

export const now = () => DateTime.now()