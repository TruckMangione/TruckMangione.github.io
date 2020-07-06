var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DSAMembersforWebpage_1 = new ol.format.GeoJSON();
var features_DSAMembersforWebpage_1 = format_DSAMembersforWebpage_1.readFeatures(json_DSAMembersforWebpage_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSAMembersforWebpage_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSAMembersforWebpage_1.addFeatures(features_DSAMembersforWebpage_1);
var lyr_DSAMembersforWebpage_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DSAMembersforWebpage_1, 
                style: style_DSAMembersforWebpage_1,
                interactive: true,
    title: 'DSA Members for Webpage<br />\
    <img src="styles/legend/DSAMembersforWebpage_1_0.png" /> 1 - 3<br />\
    <img src="styles/legend/DSAMembersforWebpage_1_1.png" /> 3 - 5<br />\
    <img src="styles/legend/DSAMembersforWebpage_1_2.png" /> 5 - 7<br />\
    <img src="styles/legend/DSAMembersforWebpage_1_3.png" /> 7 - 9<br />\
    <img src="styles/legend/DSAMembersforWebpage_1_4.png" /> 9 - 11<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_DSAMembersforWebpage_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DSAMembersforWebpage_1];
lyr_DSAMembersforWebpage_1.set('fieldAliases', {'NAME': 'NAME', 'Members': 'Members', 'MemPercent': 'MemPercent', });
lyr_DSAMembersforWebpage_1.set('fieldImages', {'NAME': 'TextEdit', 'Members': 'TextEdit', 'MemPercent': 'TextEdit', });
lyr_DSAMembersforWebpage_1.set('fieldLabels', {'NAME': 'inline label', 'Members': 'inline label', 'MemPercent': 'inline label', });
lyr_DSAMembersforWebpage_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});