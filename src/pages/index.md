<center>

# Welcome
<canvas id="blokzCanva"></canvas>
  
</center>

<script>
window.onload = (event) => {
  draw();
};

        function draw() {
        const canvas = document.getElementById("blokzCanva");
        if (canvas.getContext) {
          const ctx = canvas.getContext("2d");

          ctx.fillStyle = "rgb(200, 0, 0)";
          ctx.fillRect(10, 10, 50, 50);

          ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
          ctx.fillRect(30, 30, 50, 50);
        }
      }
</script>  

to sn0n.com. The personal website of Rob Foraker, erm,... sn0n.

## Interests

##### General

learning\
personal development & self-help (midlife crisis of a mess)\
avoiding 

##### Programming

Web & Javascript Things

##### Tinkering (or playing)

Magic: The Gathering\
Terraria\
Ingress\
Final Fantasy 1\
Pokemon\
Chess\
more...

# useful tips 
when you see 
<img onclick="javascript:location.href='#'" src="../images/puffboy.gif" height="30px" width="30px"> down below you can click him to goto the ^ top of the page.

<a class="topOfPage" href="#top" title="Go to the top of this page">^ TOP</a>
