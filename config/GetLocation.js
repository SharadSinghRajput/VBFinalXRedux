export default function getUserLocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            callback({ Latitude: latitude, Longitude: longitude });
        });
    } else {
        callback({ error: "Geolocation not supported" });
    }
}