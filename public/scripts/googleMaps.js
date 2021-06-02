function initMap() {
    try {
        //The location 
    const sportHall1 = { lat: 51.19451757669852, lng: 4.37875448279614 };
    const sportHall2 = { lat: 51.18310959584043, lng: 4.38829092697164 };
    const sportHall3 = { lat: 51.16526843871537, lng: 4.40897021163021 };


    if(document.getElementById('map-1')){
        const map1 = new google.maps.Map(document.getElementById("map-1"), {
            zoom: 13,
            center: sportHall1,
            disableDefaultUI: true,
            zoomControl: true,
            fullscreenControl: true,
            streetViewControl: true,
        });
           //The marker positioned at map1
            const marker = new google.maps.Marker({
            position: sportHall1,
            map: map1,
    });
    }

    if(document.getElementById('map-2')){
        const map2 = new google.maps.Map(document.getElementById("map-2"), {
            zoom: 13,
            center: sportHall2,
            disableDefaultUI: true,
            zoomControl: true,
            fullscreenControl: true,
            streetViewControl: true,
        });
        //The marker positioned at map2
        const marker2 = new google.maps.Marker({
        position: sportHall2,
        map: map2, 
    });

    }

    if(document.getElementById('map-3')){
        const map3 = new google.maps.Map(document.getElementById("map-3"), {
            zoom: 13,
            center: sportHall3,
            disableDefaultUI: true,
            zoomControl: true,
            fullscreenControl: true,
            streetViewControl: true,
        });
        //The marker positioned at map2
        const marker3 = new google.maps.Marker({
        position: sportHall3,
        map: map3,
    }); 
    }  
    } catch (error) {
        console.log(error);
    }
}
