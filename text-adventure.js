// function that starts game and give first choice
function startGame() {
  alert(
    "A notice on the adventuring board back in town read; Massive reward for a Dragon Scale! You made your way into the mountains where the Dragon's cave is said to be!"
  );
  firstChoice();
}

function firstChoice() {
  let choice = prompt("Before you stands a massive cave opening! Do you 'enter' or 'go home'?").toLowerCase();
  if (choice === null) {
    alert("Game aborted. Loser.");
    return;
  } else if (choice !== "enter" && choice !== "go home") {
    alert("That's not a choice, silly boy!");
    firstChoice();
  } else if (choice === "enter") {
    enterCave();
  } else if (choice === "go home") {
    alert("You ran home like the coward you are.");
    return;
  }
}

// function that runs once you enter the cave
function enterCave() {
  let choice = prompt(
    "You enter the cave. It's a massive, damp, bowl-shaped room. You can 'read' a sign in the center. There's also a tunnel to the 'east' and a tunnel to the 'west'."
  ).toLowerCase();
  if (choice === null) {
    alert("Game aborted. Loser.");
  } else if (choice !== "read" && choice !== "east" && choice !== "west") {
    alert("That's not a choice, silly boy!");
    enterCave();
  } else if (choice === "read") {
    alert("The sign says 'DANGER! Dragon's cave! Enter at your own risk!'");
    enterCave();
  } else if (choice === "east") {
    eastTunnel();
  } else if (choice === "west") {
    alert(
      "You begin walking down the west tunnel when suddenly you hear an earth trembling ROOOOOOOAR!! The whole tunnel begins to shake!"
    );
    westTunnel();
  }
}

//function for west tunnel
function westTunnel() {
  let choice = prompt(
    "In front of you the tunnel begins to collapse! Do you 'run' back or 'face' the incoming rocks?"
  ).toLowerCase();
  if (choice === null) {
    alert("Game aborted. Loser.");
  } else if (choice !== "run" && choice !== "face") {
    alert("That's not a choice, silly boy!");
    westTunnel();
  } else if (choice === "run") {
    alert(
      "You break into a dead sprint back the way you came! The rocks barely miss you as the tunnel crumbles around you! You run so fast you dart straight into the east tunnel!"
    );
    eastTunnel();
  } else if (choice === "face") {
    alert("Obviously you get crushed, you big dummy. YOU DIED!!");
    return;
  }
}

// function for east tunnel
function eastTunnel() {
  let choice = prompt(
    "You head down the east tunnel. It winds deeper and deeper into the cave until it stops at a smaller opening. You see the tunnel 'continues' but the ground 'looks' odd."
  ).toLowerCase();
  if (choice === null) {
    alert("Game aborted. Loser.");
    return;
  } else if (choice !== "continues" && choice !== "looks") {
    alert("That's not a choice, silly boy!");
    eastTunnel();
  } else if (choice === "continues") {
    alert(
      "You step on one of the odd stones and feel your foot sink into the ground! Suddenly you hear rumbling from above you. You look up just in time to see a massive boulder fall from the ceiling crushing you! YOU DIED!!"
    );
    return;
  } else if (choice === "looks") {
    traps();
  }
}

// function for traps
function traps() {
  let choice = prompt(
    "You notice some of the stones on the ground seem to be unnaturally placed. A trap! Do you move through 'slowly' or try a mad 'dash'?"
  ).toLowerCase();
  if (choice === null) {
    alert("Game aborted. Loser.");
    return;
  } else if (choice !== "slowly" && choice !== "dash") {
    alert("That's not a choice, silly boy!");
    return traps();
  } else if (choice === "slowly") {
    alert(
      "You carefully navigate the unnatural stones. Delicately dancing from safe space to safe space and make your way to where the tunnel continues! You begin walking down the tunnel."
    );
    alert(
      "The tunnel continues even deeper into the belly of the cave. At the end of the trail, it opens to the largest underground cave you've ever seen! You stand on the edge of a cliff as the cave stretches for miles and miles and miles."
    );
    alert(
      "The cave is dark but sunlight seeping through cracks in the ceiling slightly illuminates the cave, but suddenly the light is blocked as a massive figure covers the cracks. You look up to see a gigantic dragon fly across the cave!!"
    );
    eastTunnelPrt2();
  } else if (choice === "dash") {
    alert(
      "You begin sprinting through the opening, but with your speed, you clumsily slam your foot into one of the false stones! You look up just in time to see a massive boulder fall from the ceiling crushing you! YOU DIED!!"
    );
    return;
  }
}

// function for second part of east tunnel
function eastTunnelPrt2() {
  let choice = prompt("Do you duck and 'hide' or 'watch' the dragon?").toLowerCase();
  if (choice === null) {
    alert("Game aborted. Loser.");
    return;
  } else if (choice !== "hide" && choice !== "watch") {
    alert("That's not a choice, silly boy!");
    return eastTunnelPrt2();
  } else if (choice === "watch") {
    alert(
      "You watch the dragon but the dragon also watches you! Faster than you can react the massive beast whips around and dives bombs directly at you! In one massive chomp the dragon eats half of the cliffside and you with it. YOU DIED!!"
    );
    return;
  } else if (choice === "hide") {
    alert(
      "You dart back into the tunnel and hide against the wall. Perfect timing because the dragon spins around and begins heading for exactly where you were standing! It takes a massive chomp out of the cliffside!"
    );
    alert(
      "The dragon heads towards the back of the cave where it lands. It curls into a scaley ball and seems to fall asleep."
    );
    alert(
      "The chomp the dragon left creates a rocky ramp down to the cave floor. You slide down and see the dragon asleep a mere 200 feet in front of you!"
    );
    caveFloor();
  }
}

// function for cave floor
function caveFloor() {
  
}
