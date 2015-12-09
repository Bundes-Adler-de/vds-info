$(document).ready(function() {
    // Map Integration
    // -------------------------------------- //

    var map = L.map('head-map', {
        zoomControl: false
    }).setView([52.497451335964826, 13.325543772300762], 1);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'examples.map-i875mjb7'
    }).addTo(map);



    L.control.zoom({
        position: 'topright'
    }).addTo(map);

    function mapSliderUpdate() {
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


    // Circles
    // -------------------------------------- //

    $('#circle-zahnarzt').circleProgress({
        value: .75,
        size: 40,
        lineCap: 'round',
        fill: {
            color: "#333"
        }
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').text(String(stepValue.toFixed(2).substr(2)) + '%');
    });
    $('#circle-krebs').circleProgress({
        value: .25,
        size: 40,
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
                data: [0,0,0,0,0,0,0,0]
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
                data : ['0','0','0','0','0','0','0','0','0','0','0','0','0','0']
            },
            {
                label: "My Second dataset",
                fillColor : "rgba(220,220,220,0.2)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(220,220,220,1)",
                data : ['0','0','0','0','0','0','0','0','0','0','0','0','0','0']
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
