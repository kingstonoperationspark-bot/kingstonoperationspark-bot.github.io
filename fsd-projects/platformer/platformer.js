$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(200, 720, 200, 20, "navy")
    createPlatform(400, 700, 500, 50, "navy");
    createPlatform(900, 650, 500, 100, "navy")
    createPlatform(300, 530, 400, 10, "navy")
    createPlatform(0, 400, 300, 10, "navy")
    createPlatform(300,400, 10, 140, "navy")
    createPlatform(450, 300, 500, 10, "navy")
    createPlatform(1050, 200, 3, 200, "navy")
    createPlatform(1350, 400, 5, 100, "navy")
    createPlatform(100, 170, 300, 10, "rgb(33, 118, 255)")
    createBadPlatform(1200, 300, 2, 100, "navy")
    // TODO 3 - Create Collectables
    createCollectable("Knight", 1350, 350)
    createCollectable("Uncomfortable", 100, 625)
    createCollectable("Hornet", 100, 100)
    // TODO 4 - Create Cannons
    createCannon("top", 300, 600)
    createCannon("right", 625, 1000)
    createCannon("bottom", 700, 1000, 20, 30, 100, 1300, 5)

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
