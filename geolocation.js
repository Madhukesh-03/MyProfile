const locationMessage =
    document.getElementById("location-message");

if ("geolocation" in navigator) {

    navigator.geolocation.getCurrentPosition(

        (position) => {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;

            locationMessage.textContent =
                `You are browsing from coordinates: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;

        },

        () => {

            locationMessage.textContent =
                "Location access denied.";

        }

    );

} else {

    locationMessage.textContent =
        "Geolocation is not supported.";

}