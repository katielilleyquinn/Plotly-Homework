d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
console.log(metadata)

var sample = data.samples;

var sample_value = data.samples[0].samples.values.slice[0,10].reverse();
console.log(sample_value)

var id = data.samples[0].otu_ids;
console.log(id)

var label = data.samples[0].otu_labels.slice(0,10);
console.log(label)

var top_OTU = (data.samples[0].otu_ids.slice(0,10)).reverse();
console.log(top_OTU)

//bar chart

var trace = {
    x: sample_value,
    y: id,
    text: label,
    marker: {
        color: 'blue'},
    type: "bar",
    orientation: "h",
    };

});


var barchart = [trace];

    Plotly.newPlot("bar", barchart);

    var barlayout = {
        title: "Top 10 OTUs",
        yaxis: {
            tickmode: "linear",
        },



    }
};

Plotly.newPlot("bar", barchart, barlayout);


// bubble 

var bubble = {
    x: samples.otu_ids,
    y: samples.sample_values,
    mode: "markers",
    marker: {
        size: samples.sample_values,
        color: samples.otu_ids
    }
    text: samples.otu_labels

};

var bubble_layout = {
    xaxis:{ title: "OTU ID"},
};

var bubble_data = [bubble];

Plotly.newPlot("bubble", bubble, bubble_layout);

// display sample metadata


// key-value pairs

// update anytime new is selected






