window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';

    let places = staticLoadPlaces();
    renderPlaces(places);   
};

function staticLoadPlaces() {
    return [
        
        {
            name: 'Outside',
            location: {
                lat: 18.4543825,
                lng: 73.7877696
                // 18.4543803823649,73.78771327884505
            },            
        },
        {
            name: 'Tushar',
            location: {
                lat: 18.535635705634718,
                lng: 73.94898885994299              
            },
        },        
    ];
}

var models = [
    {
        url: './models/coins/scene.gltf',
        scale: '5 5 5',
        // rotation: '0 180 0',
        position: '0 0 0',
        info: 'v2',
    },   
];

var modelIndex = 0;
var setModel = function (model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }

    if (model.position) {
        entity.setAttribute('position', model.position);
    }

    entity.setAttribute('gltf-model', model.url);

    const div = document.querySelector('.instructions');
    div.innerText = model.info +"##"+ model.position + "##"+ model.scale ;
};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

   

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        setModel(models[modelIndex], model);

        model.setAttribute('animation-mixer', '');

        document.querySelector('button[data-action="change"]').addEventListener('click', function () {
            var entity = document.querySelector('[gltf-model]');
            entity.setAttribute('visible', false);

            const div = document.querySelector('.instructions');
            div.innerText = 'Hurray!!! You earned Fit Coins';

            // entity.removeAttribute('gltf-model');
            // modelIndex++;
            // var newIndex = modelIndex % models.length;
            
            // setModel(models[newIndex], entity);
        });

        scene.appendChild(model);
    });

    
}