$(document).ready(function() {
    // Map Integration
    // -------------------------------------- //

    var map = L.map('head-map', {
        zoomControl: false
    }).setView([51.2144630725053,6.830790499902378 - .028500000000000], 13);

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
    var positionCircle = L.circle([51.2144630725053,6.830790499902378], 800, positionCircleOptions).addTo(map).bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>2 eingehende Anrufe<br><i class="icon angle right"></i>1 ausgehender Anruf</p>').openPopup();


    function mapSliderUpdate() {
        var mapSliderValue = $('#map-slider').val().substr(0, 2);
            console.log(mapSliderValue);
            if (mapSliderValue == '1:') {
                             map.setView([51.2128709098241,6.781315500769097 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.2128709098241,6.781315500769097]);
            }
            if (mapSliderValue == '2:') {
                             map.setView([51.2128709098241,6.781315500769097 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.2128709098241,6.781315500769097]);
            }
            if (mapSliderValue == '3:') {
                             map.setView([51.2128709098241,6.781315500769097 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.2128709098241,6.781315500769097]);
            }
            if (mapSliderValue == '4:') {
                             map.setView([51.2128709098241,6.781315500769097 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.2128709098241,6.781315500769097]);
            }
            if (mapSliderValue == '5:') {
                             map.setView([51.2128709098241,6.781315500769097 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.2128709098241,6.781315500769097]);
            }
            if (mapSliderValue == '6:') {
                             map.setView([51.2128709098241,6.781315500769097 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.2128709098241,6.781315500769097]);
            }
            if (mapSliderValue == '7:') {
                             map.setView([51.2128709098241,6.781315500769097 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.2128709098241,6.781315500769097]);
            }
            if (mapSliderValue == '8:') {
                             map.setView([51.23601776989801,6.7831544677978854 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.23601776989801,6.7831544677978854])
                    .bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>1 ausgehender Anruf</p>').openPopup();
            }
            if (mapSliderValue == '9:') {
                             map.setView([51.23857033845579,6.791651705957065 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.23857033845579,6.791651705957065]).closePopup().bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>2 ausgehende Anrufe<br><i class="icon angle right"></i>822 kb Online-Traffic</p>').openPopup();
            }
            if (mapSliderValue == '10') {
                             map.setView([51.22972978643348,6.812594393945346 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.22972978643348,6.812594393945346])
                    .bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>2 eingehende Anrufe<br><i class="icon angle right"></i>1 ausgehender Anruf<br><i class="icon angle right"></i>368 kb Online-Traffic</p>').openPopup();
            }
            if (mapSliderValue == '11') {
                             map.setView([51.22927293364021,6.813731650567661 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.22927293364021,6.813731650567661]);
            }
            if (mapSliderValue == '12') {
                             map.setView([51.2144630725053,6.830790499902378 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.2144630725053,6.830790499902378])
                    .bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>2 eingehende Anrufe<br><i class="icon angle right"></i>1 ausgehender Anruf</p>').openPopup();
            }
            if (mapSliderValue == '13') {
                             map.setView([51.210968218152956,6.836326579309116 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.210968218152956,6.836326579309116])
                    .bindPopup('<p><i class="icon cart large"></i> Essen im Restaurant</p><p><i class="icon angle right"></i>-8.90€</p><p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>1 ausgehender Anruf<br><i class="icon angle right"></i>248 kb Online-Traffic</p>').openPopup();
            }
            if (mapSliderValue == '14') {
                             map.setView([51.21313237077351,6.807702044702182 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.21313237077351,6.807702044702182])
                    .bindPopup('<p><i class="icon money large"></i>Geldautomat in der Bankfiliale</p> <p>-250,00€</p>').openPopup();
            }
            if (mapSliderValue == '15') {
                             map.setView([51.22065906600379,6.787960986352573 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.22065906600379,6.787960986352573])
                    .bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>2 ausgehende Anrufe<br><i class="icon angle right"></i>1 eingehender Anruf</p>').openPopup();
            }
            if (mapSliderValue == '16') {
                             map.setView([51.369796685588504,6.7726036858887255 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.369796685588504,6.7726036858887255])
                    .bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>1 eingehender Anruf</p>').openPopup();
            }
            if (mapSliderValue == '17') {
                             map.setView([51.4300383, 6.749429400000054 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.4300383, 6.749429400000054])
                    .bindPopup('<p><i class="icon cart large"></i> Einkauf in der Tankstelle</p><p><i class="icon angle right"></i>-49.68€</p>').openPopup();
            }
            if (mapSliderValue == '18') {
                             map.setView([51.4300383, 6.749429400000054 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.4300383, 6.749429400000054]);
            }
            if (mapSliderValue == '19') {
                             map.setView([51.38067281732634,6.774835283789116 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.38067281732634,6.774835283789116])
                    .bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>1 Anruf in Abwesenheit</p>').openPopup();
            }
            if (mapSliderValue == '20') {
                             map.setView([51.214215060423946,6.772775347265679], 13).closePopup();
                positionCircle.setLatLng([51.214215060423946,6.772775347265679])
                    .bindPopup('<p><i class="icon mobile large"></i> Mobiltelefon</p><p><i class="icon angle right"></i>1 eingehender Anruf</p>').openPopup();
            }
            if (mapSliderValue == '21') {
                             map.setView([51.2128709098241,6.781315500769097 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.2128709098241,6.781315500769097]);
            }
            if (mapSliderValue == '22') {
                             map.setView([51.2128709098241,6.781315500769097 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.2128709098241,6.781315500769097]);
            }
            if (mapSliderValue == '23') {
                             map.setView([51.2128709098241,6.781315500769097 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.2128709098241,6.781315500769097]);
            }
            if (mapSliderValue == '24') {
                             map.setView([51.2128709098241,6.781315500769097 - .028500000000000], 13).closePopup();
                positionCircle.setLatLng([51.2128709098241,6.781315500769097]);
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
        'json/les-miserables.gexf',
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
        value: .75,
        size: 120,
        lineCap: 'round',
        fill: {
            color: "#333"
        }
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').text(String(stepValue.toFixed(2).substr(2)) + '%');
    });
    $('#circle-krebs').circleProgress({
        value: .80,
        size: 120,
        lineCap: 'round',
        fill: {
            color: "#d95c5c"
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
                data: [28,48,40,32,19,19,19,19]
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
                data : ['5138.35','2152.28','5048.18','2531.28','5138.35','2437.84','6138.35','1480.35','5138.35','2152.54','5865.35','1207.78','6986.48','1854.68']
            },
            {
                label: "My Second dataset",
                fillColor : "rgba(220,220,220,0.2)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(220,220,220,1)",
                data : ['48401','48401','50444','50484','52484','52484','54484','54484','56485','56485','58924','58924','59844','59844']
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
