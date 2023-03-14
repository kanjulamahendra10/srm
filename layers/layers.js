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
var format_class_1 = new ol.format.GeoJSON();
var features_class_1 = format_class_1.readFeatures(json_class_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_class_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_class_1.addFeatures(features_class_1);
var lyr_class_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_class_1, 
                style: style_class_1,
                interactive: true,
    title: 'class<br />\
    <img src="styles/legend/class_1_0.png" /> hotels<br />\
    <img src="styles/legend/class_1_1.png" /> mess<br />\
    <img src="styles/legend/class_1_2.png" /> academic block<br />\
    <img src="styles/legend/class_1_3.png" /> x labs<br />\
    <img src="styles/legend/class_1_4.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_class_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_class_1];
lyr_class_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'class': 'class', });
lyr_class_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'class': 'TextEdit', });
lyr_class_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'class': 'no label', });
lyr_class_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});