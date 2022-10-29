window.onload = (event) => {
    draw();
  };



  var canvas = document.getElementById('blokzCanva');
  var heightRatio = 0.5;

  canvas.height = canvas.width * heightRatio;
          function draw() {
          if (canvas.getContext) {
            const ctx = canvas.getContext("2d");
  
            ctx.fillStyle = "rgb(200, 0, 0)";
            ctx.fillRect(10, 10, 50, 50);
  
            ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
            ctx.fillRect(30, 30, 50, 50);
          }
        }



        