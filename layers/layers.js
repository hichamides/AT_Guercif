var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_comn_guecif_v_2 = new ol.format.GeoJSON();
var features_comn_guecif_v_2 = format_comn_guecif_v_2.readFeatures(json_comn_guecif_v_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comn_guecif_v_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comn_guecif_v_2.addFeatures(features_comn_guecif_v_2);
var lyr_comn_guecif_v_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_comn_guecif_v_2, 
                style: style_comn_guecif_v_2,
                popuplayertitle: 'comn_guecif_v',
                interactive: true,
                title: '<img src="styles/legend/comn_guecif_v_2.png" /> comn_guecif_v'
            });
var format_PMH_3 = new ol.format.GeoJSON();
var features_PMH_3 = format_PMH_3.readFeatures(json_PMH_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PMH_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PMH_3.addFeatures(features_PMH_3);
var lyr_PMH_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PMH_3, 
                style: style_PMH_3,
                popuplayertitle: 'PMH',
                interactive: true,
                title: '<img src="styles/legend/PMH_3.png" /> PMH'
            });

lyr_OpenTopoMap_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_comn_guecif_v_2.setVisible(true);lyr_PMH_3.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_GoogleHybrid_1,lyr_comn_guecif_v_2,lyr_PMH_3];
lyr_comn_guecif_v_2.set('fieldAliases', {'id_commune': 'id_commune', 'commune': 'commune', 'region': 'region', });
lyr_PMH_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Code_Péri': 'Code_Péri', 'Nom_Périm': 'Nom_Périm', 'Catérogie': 'Catérogie', 'BET': 'BET', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_comn_guecif_v_2.set('fieldImages', {'id_commune': 'TextEdit', 'commune': 'TextEdit', 'region': 'TextEdit', });
lyr_PMH_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Code_Péri': 'TextEdit', 'Nom_Périm': 'TextEdit', 'Catérogie': 'TextEdit', 'BET': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_comn_guecif_v_2.set('fieldLabels', {'id_commune': 'no label', 'commune': 'no label', 'region': 'no label', });
lyr_PMH_3.set('fieldLabels', {'OBJECTID': 'no label', 'Code_Péri': 'no label', 'Nom_Périm': 'inline label - always visible', 'Catérogie': 'no label', 'BET': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PMH_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});