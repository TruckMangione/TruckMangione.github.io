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
var format_DSALBACS2017CensusTractMembers_1 = new ol.format.GeoJSON();
var features_DSALBACS2017CensusTractMembers_1 = format_DSALBACS2017CensusTractMembers_1.readFeatures(json_DSALBACS2017CensusTractMembers_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSALBACS2017CensusTractMembers_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSALBACS2017CensusTractMembers_1.addFeatures(features_DSALBACS2017CensusTractMembers_1);
var lyr_DSALBACS2017CensusTractMembers_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DSALBACS2017CensusTractMembers_1, 
                style: style_DSALBACS2017CensusTractMembers_1,
                interactive: true,
    title: 'DSA-LB ACS 2017 Census Tract Members<br />\
    <img src="styles/legend/DSALBACS2017CensusTractMembers_1_0.png" /> 1 - 3<br />\
    <img src="styles/legend/DSALBACS2017CensusTractMembers_1_1.png" /> 3 - 5<br />\
    <img src="styles/legend/DSALBACS2017CensusTractMembers_1_2.png" /> 5 - 7<br />\
    <img src="styles/legend/DSALBACS2017CensusTractMembers_1_3.png" /> 7 - 9<br />\
    <img src="styles/legend/DSALBACS2017CensusTractMembers_1_4.png" /> 9 - 11<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_DSALBACS2017CensusTractMembers_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DSALBACS2017CensusTractMembers_1];
lyr_DSALBACS2017CensusTractMembers_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GEOID_Data': 'GEOID_Data', 'Percentage': 'Percentage', 'Members': 'Members', 'MemPercent': 'MemPercent', 'X00_COUNTS_OBJECTID': 'X00_COUNTS_OBJECTID', 'X00_COUNTS_B00001e1': 'X00_COUNTS_B00001e1', 'X00_COUNTS_B00001m1': 'X00_COUNTS_B00001m1', 'X00_COUNTS_B00002e1': 'X00_COUNTS_B00002e1', 'X00_COUNTS_B00002m1': 'X00_COUNTS_B00002m1', });
lyr_DSALBACS2017CensusTractMembers_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GEOID_Data': 'TextEdit', 'Percentage': 'TextEdit', 'Members': 'TextEdit', 'MemPercent': 'TextEdit', 'X00_COUNTS_OBJECTID': 'TextEdit', 'X00_COUNTS_B00001e1': 'TextEdit', 'X00_COUNTS_B00001m1': 'TextEdit', 'X00_COUNTS_B00002e1': 'TextEdit', 'X00_COUNTS_B00002m1': 'TextEdit', });
lyr_DSALBACS2017CensusTractMembers_1.set('fieldLabels', {'OBJECTID': 'no label', 'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'header label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'GEOID_Data': 'no label', 'Percentage': 'no label', 'Members': 'inline label', 'MemPercent': 'inline label', 'X00_COUNTS_OBJECTID': 'no label', 'X00_COUNTS_B00001e1': 'no label', 'X00_COUNTS_B00001m1': 'no label', 'X00_COUNTS_B00002e1': 'no label', 'X00_COUNTS_B00002m1': 'no label', });
lyr_DSALBACS2017CensusTractMembers_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});