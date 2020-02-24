var map = document.getElementById('map');
function Snake()
    {
      var score = 0;
      this.width = 10;
      this.height = 10;
      this.direction = 'right';
      this.body = [
        {x:2, y:0},
        {x:1, y:0},
        {x:0, y:0}
      ];

      // Snake
      this.display = function() {
        for (var i=0; i<this.body.length; i++) {
          if (this.body[i].x != null) {
            var s = document.createElement('div');
            this.body[i].flag = s;
            s.style.width = this.width + 'px';
            s.style.height = this.height + 'px';
            s.style.background = "black";
            s.style.position = 'absolute';
            s.style.left = this.body[i].x * this.width + 'px';
            s.style.top = this.body[i].y * this.height + 'px';
            map.appendChild(s);
          }
        }
      };

      this.run = function() {

        for (var i=this.body.length-1; i>0; i--) {
          this.body[i].x = this.body[i-1].x;
          this.body[i].y = this.body[i-1].y;
        }

        switch(this.direction)
        {
          case "left":
            this.body[0].x -= 1;
            break;
          case "right":
            this.body[0].x += 1;
            break;
          case "up":
            this.body[0].y -= 1;
            break;
          case "down":
            this.body[0].y += 1;
            break;
        }

        if (this.body[0].x < 0 || this.body[0].x > 79 || this.body[0].y < 0 || this.body[0].y > 39) {
          clearInterval(timer);
          alert("你死了\n分数："+ score);
          score = 0;
          document.getElementById("score").innerHTML = 0;
          document.getElementById("begin").style.visibility = "visible";
          document.getElementById("difficulty").disabled = false;
          for (var i=0; i<this.body.length; i++) {
            if (this.body[i].flag != null) {
              map.removeChild(this.body[i].flag);
            }
          }
          this.body = [
            {x:2, y:0},
            {x:1, y:0},
            {x:0, y:0}
          ];
          this.direction = 'right';
          this.display();
          return false;
        }

        if (this.body[0].x == food.x && this.body[0].y == food.y) { //eat food
          this.body.push({x:null, y:null, flag: null});
          score++;
          document.getElementById("score").innerHTML = score;
          map.removeChild(food.flag);
          food.display();
        }

        for (var i=4; i<this.body.length; i++) {
          if (this.body[0].x == this.body[i].x && this.body[0].y == this.body[i].y) {
            clearInterval(timer);
            alert("你死了\n分数："+ score);
            score = 0;
            document.getElementById("score").innerHTML = 0;
            document.getElementById("begin").style.visibility = "visible";
            document.getElementById("difficulty").disabled = false;
            for (var i=0; i<this.body.length; i++) {
              if (this.body[i].flag != null) {
                map.removeChild(this.body[i].flag);
              }
            }
            this.body = [
              {x:2, y:0},
              {x:1, y:0},
              {x:0, y:0}
            ];
            this.direction = 'right';
            this.display();
            return false;
          }
        }

        for (var i=0; i<this.body.length; i++) {
          if (this.body[i].flag != null) {
            map.removeChild(this.body[i].flag);
          }
        }

        this.display();
      }
}

    // Food
function Food() {
      this.width = 10;
      this.height = 10;
      this.display = function() {
        var f = document.createElement('div');
        this.flag = f;
        f.style.width = '6px';
        f.style.height = '6px';
        f.style.background = 'red';
        f.style.borderRadius = '50%';
        f.style.position = 'absolute';
        this.x = Math.floor(Math.random()*80);
        this.y = Math.floor(Math.random()*40);
        f.style.left = this.x * this.width + 'px';
        f.style.top = this.y * this.height + 'px';
        map.appendChild(f);
      }
    }

    var snake = new Snake();
    var food = new Food();
    snake.display();
    food.display();
    document.body.onkeydown = function(e) {
      var ev = e || window.event;
      switch(ev.keyCode)
      {
        case 38:
          if (snake.direction != 'down') {
            snake.direction = "up";
          }
          break;
        case 40:
          if (snake.direction != "up") {
            snake.direction = "down";
          }
          break;
        case 37:
          if (snake.direction != "right") {
            snake.direction = "left";
          }
          break;
        case 39:
          if (snake.direction != "left") {
            snake.direction = "right";
          }
          break;
      }
};

// Start Game
var begin = document.getElementById('begin');
var timer;
begin.onclick = function() {
      var dfy = document.getElementById("difficulty").value;
      var speed;
      if(dfy == "0") {
        speed = 250;
      } else if(dfy == "1") {
        speed = 200;
      } else if(dfy == "2") {
        speed = 150;
      } else if(dfy == "3") {
        speed = 100;
      }
      clearInterval(timer);
      begin.style.visibility = "hidden";
      document.getElementById("difficulty").disabled = true;
      timer = setInterval("snake.run()", speed);
};
