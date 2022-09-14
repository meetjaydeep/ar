window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';

    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        // {
        //     name: 'Pokèmon',
        //     location: {
        //         lat: 18.4543825,
        //         lng: 73.7877696
        //         // lat: <your-latitude>,
        //         // lng: <your-longitude>,
        //     },
        // },
        {
            name: 'Outside',
            location: {
                lat: 18.4543907,
                lng: 73.7875562             
            },            
        },
        // {
        //     name: 'Tushar',
        //     location: {
        //         lat: 18.4543907,
        //         lng: 73.7875562             
        //     },
        // },                
    ];
}

var models = [
    {
        url: './assets/coin/scene.gltf',
        scale: '0.3 0.3 0.3',
        // rotation: '0 180 0',
        info: '',
    },
    // {
    //     url: './assets/magnemite/scene.gltf',
    //     // scale: '0.5 0.5 0.5',
    //     info: 'Hurray!!! You earned Fit Coins',
    //     rotation: '0 180 0',
    // },    
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
    div.innerText = model.info;
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
            var entity = document.querySelector('[gps-entity-place]');
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