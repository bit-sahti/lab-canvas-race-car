class RaceRoad {
  constructor() {
    this.context = document.getElementById('canvas').getContext('2d');
    this.width = 500;
    this.height = 700;
    this.background = new Image();
    this.car = new Image();
    // this.interval = setInterval(this.updateGame, 200);

    this.background.src = 'images/road.png';
    this.car.src = 'images/car.png';
  }

  drawBackground() {
    this.context.drawImage(this.background, 0, 0, 500, 700);
  }

  drawCar(player) {
    this.context.drawImage(this.car, player.x, player.y, player.width, player.height)
  }

  clear() {
    this.context.clearRect(0, 0, this.width, this.height)
  }

  // updateGame(player) {
  //   this.drawBackground();
  //   this.drawCar(player)

  // }

  startGame(player) {
    setInterval(() => {
      this.drawBackground();
      this.drawCar(player);
      // console.log(player.x)
    }, 10);
    
    // console.log(this)
    // setInterval(this.updateGame(this, player), 20)
    
  }


}

class Player {
  constructor() {
    this.width = 50;
    this.height = 100;
    this.x = 225;
    this.y = 600;
    this.speed = 7;
  }

  moveLeft() {
    if (this.x >= 5) {
      this.x -= this.speed;
    }
  }

  moveRight() {
    if (this.x <= 445) {
      this.x += this.speed;
    }
  }

  moveUp(){
    if (this.y >= 0) {
      this.y -= this.speed;
    }
  }

  moveDown(){
    if (this.y <= 599) {
      this.y += this.speed;
    }
  }
}


window.onload = () => {
  const road = new RaceRoad();
  const player = new Player();

  document.getElementById('start-button').onclick = () => {
    document.querySelector('canvas').scrollIntoView(false)
    road.startGame(player);
  };

  window.onkeydown = (event) => {
    console.log(event.key)
    switch(event.key) {
      case 'ArrowLeft':
        player.moveLeft();
        break;
      case 'ArrowRight':
        player.moveRight();
        break;
      case 'ArrowUp':
        if (player.y > 0) {
          event.preventDefault();
        }
        player.moveUp();
        break;
      case 'ArrowDown':
        if (player.y < 550) {
          event.preventDefault();

        }
        player.moveDown();
    }
  }
}
