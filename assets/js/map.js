let osm = new ol.layer.Tile({
    visible: true,
    source: new ol.source.OSM()
});

let map = new ol.Map({
    target: 'map',
    layers: [osm],
    view: new ol.View({
        center: ol.proj.fromLonLat([0, 0]), // 坐标要投影
        zoom: 2
    })
});
