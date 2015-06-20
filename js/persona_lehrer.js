$(document).ready(function() {
    // Map Integration
    // -------------------------------------- //

    var map = L.map('head-map', {
        zoomControl: false
    }).setView([52.495465660351186, 13.382792841514629 - .028500000000000], 13);

    L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'examples.map-i875mjb7'
    }).addTo(map);



    L.control.zoom({
        position: 'topright'
    }).addTo(map);

    var popup = L.popup();

    var positionCircleOptions =  { color: 'red', fillColor: '#f03', fillOpacity: 0.5 }
    var positionCircle = L.circle([52.495465660351186, 13.382792841514629], 800, positionCircleOptions).addTo(map).bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>2 eingehende Anrufe<br><i class="icon angle right"></i>1 ausgehender Anruf</p>').openPopup();


    function mapSliderUpdate() {
        var mapSliderValue = $('#map-slider').val().substr(0, 2);
            console.log(mapSliderValue);
            if (mapSliderValue == '1:') {
                             map.setView([52.50878887072891, 13.419099222740215 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([52.50878887072891, 13.419099222740215]);
            }
            if (mapSliderValue == '2:') {
                             map.setView([52.50878887072891, 13.419099222740215 - .028500000000000], 13);
                positionCircle.setLatLng([52.50878887072891, 13.419099222740215])
                    .bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>118 kb Online-Traffic</p>').openPopup();
            }
            if (mapSliderValue == '3:') {
                             map.setView([52.50878887072891, 13.419099222740215 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([52.50878887072891, 13.419099222740215]);
            }
            if (mapSliderValue == '4:') {
                             map.setView([52.50878887072891, 13.419099222740215 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([52.50878887072891, 13.419099222740215]);
            }
            if (mapSliderValue == '5:') {
                             map.setView([52.50878887072891, 13.419099222740215 - .028500000000000], 13);
                positionCircle.setLatLng([52.50878887072891, 13.419099222740215])
                    .bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>48 kb Online-Traffic</p>').openPopup();
            }
            if (mapSliderValue == '6:') {
                             map.setView([52.50878887072891, 13.419099222740215 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([52.50878887072891, 13.419099222740215]);
            }
            if (mapSliderValue == '7:') {
                             map.setView([52.50878887072891, 13.419099222740215 - .028500000000000], 13);
                positionCircle.setLatLng([52.50878887072891, 13.419099222740215])
                    .bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>26 kb Online-Traffic</p>').openPopup();
            }
            if (mapSliderValue == '8:') {
                             map.setView([52.50915454897445, 13.404937159141582 - .028500000000000], 13);
                positionCircle.setLatLng([52.50915454897445, 13.404937159141582])
                    .bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>1 ausgehender Anruf<br><i class="icon angle right"></i>26 kb Online-Traffic</p>').openPopup();
            }
            if (mapSliderValue == '9:') {
                             map.setView([52.50669922238705, 13.388629328331035 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([52.50669922238705, 13.388629328331035]);
            }
            if (mapSliderValue == '10') {
                             map.setView([52.495465660351186, 13.382792841514629 - .028500000000000], 13);
                positionCircle.setLatLng([52.495465660351186, 13.382792841514629])
                    .bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>3 eingehende Anrufe<br><i class="icon angle right"></i>1 ausgehender Anruf<br><i class="icon angle right"></i>368 kb Online-Traffic</p>').openPopup();
            }
            if (mapSliderValue == '11') {
                positionCircle.setLatLng([52.495465660351186, 13.382792841514629]);
                             map.setView([52.495465660351186, 13.382792841514629 - .028500000000000], 13).closePopup();
            }
            if (mapSliderValue == '12') {
                             map.setView([52.495465660351186, 13.382792841514629 - .028500000000000], 13);
                positionCircle.setLatLng([52.495465660351186, 13.382792841514629])
                    .bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>1 eingehende Anrufe<br><i class="icon angle right"></i>1 ausgehender Anruf<br><i class="icon angle right"></i>26 kb Online-Traffic</p>').openPopup();
            }
            if (mapSliderValue == '13') {
                             map.setView([52.495465660351186, 13.392792841514629 - .028500000000000], 13);
                positionCircle.setLatLng([52.495465660351186, 13.392792841514629])
                    .bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>-8.90€<br><i class="icon angle right"></i>26 kb Online-Traffic</p>').openPopup();
            }
            if (mapSliderValue == '14') {
                             map.setView([52.495465660351186, 13.382792841514629 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([52.495465660351186, 13.382792841514629]);
            }
            if (mapSliderValue == '15') {
                             map.setView([52.495465660351186, 13.382792841514629 - .028500000000000], 13);
                positionCircle.setLatLng([52.495465660351186, 13.382792841514629])
                    .bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>1 eingehender Anruf<br><i class="icon angle right"></i>26 kb Online-Traffic</p>').openPopup();
            }
            if (mapSliderValue == '16') {
                             map.setView([52.495465660351186, 13.382792841514629 - .028500000000000], 13);
                positionCircle.setLatLng([52.495465660351186, 13.382792841514629])
                    .bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>278 kb Online-Traffic</p>').openPopup();
            }
            if (mapSliderValue == '17') {
                             map.setView([52.495465660351186, 13.382792841514629 - .028500000000000], 13);
                positionCircle.setLatLng([52.495465660351186, 13.382792841514629])
                    .bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>2 eingehender Anruf<br><i class="icon angle right"></i>748 kb Online-Traffic</p>').openPopup();
            }
            if (mapSliderValue == '18') {
                             map.setView([52.52920995160755, 13.385625254234355 - .028500000000000], 13);
                positionCircle.setLatLng([52.52920995160755, 13.385625254234355])
                    .bindPopup('<p><i class="icon cart large"></i> Einkauf im Supermarkt</p><p><i class="icon angle right"></i>-32,68€<br><i class="icon angle right"></i>49 kb Online-Traffic</p><p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>2 ausgehende Anrufe</p>').openPopup();
            }
            if (mapSliderValue == '19') {
                             map.setView([52.51087841972251, 13.451886545738262 - .028500000000000], 13);
                positionCircle.setLatLng([52.51087841972251, 13.451886545738262])
                    .bindPopup('<p><i class="icon money large"></i>Geldautomat in der Bankfiliale</p> <p>-150,00€</p>').openPopup()
            }
            if (mapSliderValue == '20') {
                             map.setView([52.495622427475745, 13.439612757286113], 14);
                positionCircle.setLatLng([52.495622427475745, 13.439612757286113])
                    .bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>1 eingehender Anruf<br><i class="icon angle right"></i>129 kb Online-Traffic</p>').openPopup();
            }
            if (mapSliderValue == '21') {
                             map.setView([52.50878887072891, 13.419099222740215 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([52.50878887072891, 13.419099222740215])
                    .bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>2 eingehender Anruf<br><i class="icon angle right"></i>3.5 mb Online-Traffic</p>').openPopup();
            }
            if (mapSliderValue == '22') {
                positionCircle.setLatLng([52.50878887072891, 13.419099222740215]);
                             map.setView([52.50878887072891, 13.419099222740215 - .028500000000000], 13).closePopup();
            }
            if (mapSliderValue == '23') {
                positionCircle.setLatLng([52.50878887072891, 13.419099222740215]);
                             map.setView([52.50878887072891, 13.419099222740215 - .028500000000000], 13).closePopup();
            }
            if (mapSliderValue == '24') {
                positionCircle.setLatLng([52.50878887072891, 13.419099222740215]);
                             map.setView([52.50878887072891, 13.419099222740215 - .028500000000000], 13).closePopup();
            }
    }


    $('#map-slider').noUiSlider({
        start: [ 12 ],
        step: 1,
        range: {
            'min': [  1 ],
            'max': [ 23 ]
        },
        format: wNumb({
            decimals: 2,
            mark: ':',
            postfix: ' Uhr',
        })
    }).on({
        set: function(){
            if (Modernizr.touch) {
                mapSliderUpdate();
            }
        },
        slide: function(){
            if (!Modernizr.touch) {
                mapSliderUpdate();
            }
        },
        change: function(){

        }
    });
    $('#map-slider').Link('lower').to($('#map-slider-value'));

    $('#map-slider').noUiSlider_pips({
        mode: 'range',
        density: 4,
        format: wNumb({
            decimals: 2,
            postfix: ' Uhr',
            mark: ':'
        })
    });



    // Sigma - Network Chart
    // -------------------------------------- //

    // Add a method to the graph model that returns an
    // object with every neighbors of a node inside:
    sigma.classes.graph.addMethod('neighbors', function(nodeId) {
        var k,
            neighbors = {},
            index = this.allNeighborsIndex[nodeId] || {};

        for (k in index)
          neighbors[k] = this.nodesIndex[k];

        return neighbors;
    });

    sigma.parsers.gexf(
        'json/lehrerin.gexf',
        {
          container: 'network-container'
        },
        function(s) {
          // We first need to save the original colors of our
          // nodes and edges, like this:
          s.graph.nodes().forEach(function(n) {
            n.originalColor = n.color;
          });
          s.graph.edges().forEach(function(e) {
            e.originalColor = e.color;
          });

          // When a node is clicked, we check for each node
          // if it is a neighbor of the clicked one. If not,
          // we set its color as grey, and else, it takes its
          // original color.
          // We do the same for the edges, and we only keep
          // edges that have both extremities colored.
          s.bind('clickNode', function(e) {
            var nodeId = e.data.node.id,
                toKeep = s.graph.neighbors(nodeId);
            toKeep[nodeId] = e.data.node;

            s.graph.nodes().forEach(function(n) {
              if (toKeep[n.id])
                n.color = n.originalColor;
              else
                n.color = '#eee';
            });

            s.graph.edges().forEach(function(e) {
              if (toKeep[e.source] && toKeep[e.target])
                e.color = e.originalColor;
              else
                e.color = '#eee';
            });

            // Since the data has been modified, we need to
            // call the refresh method to make the colors
            // update effective.
            s.refresh();
          });

          // When the stage is clicked, we just color each
          // node and edge with its original color.
          s.bind('clickStage', function(e) {
            s.graph.nodes().forEach(function(n) {
              n.color = n.originalColor;
            });

            s.graph.edges().forEach(function(e) {
              e.color = e.originalColor;
            });

            // Same as in the previous event:
            s.refresh();
          });
        }
    );
    // Circles
    // -------------------------------------- //

    $('#circle-zahnarzt').circleProgress({
        value: .85,
        size: 120,
        lineCap: 'round',
        fill: {
            color: "#333"
        }
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').text(String(stepValue.toFixed(2).substr(2)) + '%');
    });
    $('#circle-krebs').circleProgress({
        value: .75,
        size: 120,
        lineCap: 'round',
        fill: {
            color: "#333"
        }
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').text(String(stepValue.toFixed(2).substr(2)) + '%');
    });

    // Chart.js
    // -------------------------------------- //

    var radarChartData = {
        labels: [ "Konservativ", "Liberal", "Rechts", "Passiv", "Radikal", "Aktiv", "Links", "Kommunismus"],
        datasets: [
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [8,22,7,24,6,14,54,33]
            }
        ]
    };

    var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
    var lineChartData = {
        labels: ["1. January", "15. January", "1. February","15. February", "1. March", "15. March","1. April", "15. April","1. May", "15. May","1. June", "15. June","1. July", "15. July"],
        datasets : [
            {
                label: "My First dataset",
                fillColor : "rgba(151,187,205,0.2)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(151,187,205,1)",
                data : ['2138.35','152.28','2048.18','231.28','2138.35','437.84','2138.35','480.35','2138.35','152.54','1865.35','207.78','1986.48','354.68']
            },
            {
                label: "My Second dataset",
                fillColor : "rgba(220,220,220,0.2)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(220,220,220,1)",
                data : ['340','340','360','360','380','380','400','400','420','420','440','440','460','460']
            }
        ]

    }
    window.onload = function(){

        // Initialize banking statistics only when visible
        $('#canvas-konto').visibility({
            onTopVisible: function() {
                var ctx = document.getElementById("canvas-konto").getContext("2d");
                window.myLine = new Chart(ctx).Line(lineChartData, {
                    responsive: true,
                    showScale: true,
                    scaleShowLine: false,
                    scaleShowLabels : false,
                    pointLabelFontSize : 8,
                    scaleFontSize : 0,
                    scaleIntegersOnly: true
                });
            }
        });

        // Initialize personal statistics only when visible
        $('.spider-chart').visibility({
            onTopVisible: function() {
                window.myRadar = new Chart(document.getElementById("canvas").getContext("2d")).Radar(radarChartData, {
                    responsive: true,
                    offset: 20
                });
            }
        });
    }


});
