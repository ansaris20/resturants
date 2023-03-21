var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_vijayawada_1 = new ol.format.GeoJSON();
var features_vijayawada_1 = format_vijayawada_1.readFeatures(json_vijayawada_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vijayawada_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vijayawada_1.addFeatures(features_vijayawada_1);
var lyr_vijayawada_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vijayawada_1, 
                style: style_vijayawada_1,
                interactive: true,
    title: 'vijayawada<br />\
    <img src="styles/legend/vijayawada_1_0.png" /> 2 - 3<br />\
    <img src="styles/legend/vijayawada_1_1.png" /> 3 - 4<br />\
    <img src="styles/legend/vijayawada_1_2.png" /> 4 - 4<br />\
    <img src="styles/legend/vijayawada_1_3.png" /> 4 - 5<br />\
    <img src="styles/legend/vijayawada_1_4.png" /> 5 - 5<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_vijayawada_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_vijayawada_1];
lyr_vijayawada_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'rating': 'rating', });
lyr_vijayawada_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'rating': 'Range', });
lyr_vijayawada_1.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'rating': 'no label', });
lyr_vijayawada_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});