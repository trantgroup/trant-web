window.onload = function () {
  var paper = Raphael("holder", 680, 540), angle = 0, strokeWidth = 6;
  var Sectors = [
    {name: 'PRO', image: "img/process.jpg"},
    {name: 'CON', image: "img/control.jpg"},
    {name: 'INT', image: "img/international.jpg"},
    {name: 'ENE', image: "img/energy.jpg"},
    {name: 'WAT', image: "img/water-engineering.jpg"},
    {name: 'OIL', image: "img/oil-and-gas.jpg"},
  ]

  var epc = paper.set();

  paper.circle(340,270, 210).attr({
    "stroke": "#fff",
    "stroke-width": strokeWidth
  });


  paper.circle(340,270, 90).attr({
    "fill": "#004731",
    "stroke": "#fff",
    "stroke-width": strokeWidth
  });

  paper.text(340, 220, "EPC").attr({"fill": "#fff", "font-family": "Oswald", "font-size": 30});
  var epc_text = paper.set();
  epc_text.push(paper.text(340, 260, "ENGINEERING"));
  epc_text.push(paper.text(340, 290, "PROCUREMENT &"));
  epc_text.push(paper.text(340, 320, "CONSTRUCTION"));
  epc_text.attr({"fill": "#fff", "font-family": "Oswald", "font-size": 18});


  for (var i = Sectors.length - 1; i >= 0; i--) {
    (function(transform, colour, image) {
        paper.path("m250,270 L130,270").attr({
          transform: transform,
          "stroke": "#fff",
          "stroke-width": 6,
        });

      epc.push(
        paper.circle(130,270, 80).attr({
          "transform": transform,
          "fill": colour,
          "stroke": "#fff",
          "stroke-width": strokeWidth,
        }).data("image", image).click(function () {
        }).mouseover(function () {
          this.animate({transform: transform + " s1.085"}, 1000, "elastic");
          document.getElementById("slider").style.backgroundImage = "url(" + this.data('image') + ")";
        }).mouseout(function () {
          this.animate({transform: transform + " s1"}, 1000, "elastic");
        })
      );
    })("r" + angle + " 340 270", "#feb900", Sectors[i]['image']);
    angle += 60;
  };

  var titles = paper.set();
  titles.push(paper.text(130, 270, "OIL & GAS"));
  titles.push(paper.text(235, 88.13, "WATER /\nWASTEWATER"));
  titles.push(paper.text(235, 451.87, "PROCESS"));
  titles.push(paper.text(445, 88.13, "ENERGY"));
  titles.push(paper.text(445, 451.87, "CONTROL & \nAUTOMATION"));
  titles.push(paper.text(550, 270, "INTERNATIONAL"));
  titles.attr({"fill": "#333", "font-family": "Oswald", "font-size": 18, "cursor": "pointer"});

};
