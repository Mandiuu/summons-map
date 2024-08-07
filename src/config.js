var config = {
    style: 'mapbox://styles/carlamandiola/clyw6k9fk00ia01nxco4d4cph',
    accessToken: 'pk.eyJ1IjoiY2FybGFtYW5kaW9sYSIsImEiOiJjbHo2M2x6ZDEybzhoMmpvaWEzemg2bzhyIn0.EorVdgNT0Uj_7ncSDV8NGQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: true,
    theme: 'dark',
    use3dTerrain: false,
    auto: false,
    title: 'The summons in NYC',
    subtitle: 'How the quality of life enforcement has changed in the city',
    byline: 'By Carla Mandiola',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'The place with more summonses in NYC in 2018',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-73.99495, 40.75388],
                zoom: 14.00,
                pitch: 62.00,
                bearing: 25.73
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Five years later, The Bronx became the place with more summonses in NYC',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.92529, 40.81037],
                zoom: 14.00,
                pitch: 51.00,
                bearing: 25.73
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Alcohol and drugs summonses are the most common reasons for summonses in the city',
            image: './path/to/image/source.png',
            description: 'And the place with more tickets is located in Queens',
            location: {
                center: [-73.87012, 40.74513],
                zoom: 14.00,
                pitch: 45.00,
                bearing: 25.73
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
