const success_cb = function (geoLocationPositionObject) {
    const cord = geoLocationPositionObject.coords;
    const latitude = cord.latitude;
    const longitude = cord.longitude;

    console.log("Your current position is:");
    console.log(`Latitude : ${latitude}`);
    console.log(`Longitude: ${longitude}`);
}

const error_cb = function (err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success_cb, error_cb);