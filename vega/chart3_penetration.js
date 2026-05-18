function createChart3() {

    const spec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

        "width": 320,
        "height": 240,

        "data": {
            "url": "data/telecommunications_statistics_malaysia.csv"
        },

        "mark": {
            "type": "line",
            "strokeWidth": 3,
            "color": "#2563eb",
            "point": true
        },

        "encoding": {
            "x": {
                "field": "year",
                "type": "ordinal"
            },

            "y": {
                "field": "penetration_rate",
                "type": "quantitative",
                "title": "Penetration (%)"
            }
        }
    };

    vegaEmbed('#chart3', spec, {actions:false});
}
