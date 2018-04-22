var DEBIG = true;
var codeNum = [54,55,56,57,58,59];

window.onload = function() {
    if(DEBIG){
        d3.selectAll(".line").remove();
    }
    d3.csv("data/awards.csv",function(dataSet){
//        console.log(dataSet);
        nestDataSet = d3.nest().key(function(d){
            return d.type
        }).entries(dataSet);
//        console.log(nestDataSet);
        
        d3.selectAll("a-scene>a-marker")
        .data(nestDataSet)
        
        level_1_entity = d3.selectAll("a-scene>a-marker")
                        .append("a-entity").attr({
                            rotation: "0 0 0",
                            position: "0 0 0",
                            scale: "0.4 0.4 0.4",
                            "animation__pos": {
                                "property": "position",
                                "dir": "alternate",
                                "dur": "5000",
                                "delay": random(0,2000).toString(),
                                "easing": "easeInOutCubic",
                                "to": "-2 1 1",
                                "loop": true
                              },
                            "animation__rot": {
                                "property": "rotation",
                                "dir": "alternate",
                                "dur": "5000",
                                "delay": random(0,2000).toString(),
                                "easing": "easeInOutCubic",
                                "to": "25 0 0",
                                "loop": true
                              }
                        });
        
        console.log(d3.selectAll("a-scene>a-marker"));
        
        level_1_entity.append("a-cylinder").attr({
            position: "0 1 0",
            height:"10",
            radius:"0.03",
            color:"#6b6b6b"
        }).classed("line",true);
        level_1_entity.append("a-cylinder").attr({
            position: "0 5 0",
            height:"2",
            radius:"1",
            color:"#007bff",
            "animation__rot": {
                "property": "rotation",
                "dir": "alternate",
                "dur": "5000",
                "delay": random(0,2000).toString(),
                "easing": "easeInOutCubic",
                "to": "-50 0 50",
                "loop": true
              }
        }).classed("node",true);
        
    })
}

function random(n,m){
    return Math.floor(Math.random()*(m-n)+n);
}