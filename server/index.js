const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Master Data
let Rooms = [];

// Rolling Multiple Dice
function EmitData(roomName, name) {
  //number generator
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min) / 2;
  }
  // generates Random Values
  const rotater = () => {
    const ran0 = randomIntFromInterval(0, 3);
    const ran1 = randomIntFromInterval(0, 3);
    const ran2 = randomIntFromInterval(0, 3);
    const ran3 = randomIntFromInterval(0, 3);
    const ran4 = randomIntFromInterval(0, 3);
    const ran5 = randomIntFromInterval(0, 3);
    const ran6 = randomIntFromInterval(0, 3);
    const ran7 = randomIntFromInterval(0, 3);
    const ran8 = randomIntFromInterval(0, 3);
    const ran9 = randomIntFromInterval(0, 3);
    const ran10 = randomIntFromInterval(0, 3);
    const ran11 = randomIntFromInterval(0, 3);
    const ran12 = randomIntFromInterval(0, 3);
    const ran13 = randomIntFromInterval(0, 3);
    const ran14 = randomIntFromInterval(0, 3);

    let newNumber = ran0 * Math.PI;
    let newNumber1 = ran1 * Math.PI;
    let newNumber2 = ran2 * Math.PI;
    let newNumber3 = ran3 * Math.PI;
    let newNumber4 = ran4 * Math.PI;
    let newNumber5 = ran5 * Math.PI;
    let newNumber6 = ran6 * Math.PI;
    let newNumber7 = ran7 * Math.PI;
    let newNumber8 = ran8 * Math.PI;
    let newNumber9 = ran9 * Math.PI;
    let newNumber10 = ran10 * Math.PI;
    let newNumber11 = ran11 * Math.PI;
    let newNumber12 = ran12 * Math.PI;
    let newNumber13 = ran13 * Math.PI;
    let newNumber14 = ran14 * Math.PI;

    const NumberChecker = (x, y, z) => {
      let TopNumber = 2;
      let frontNumber = 3;
      // let x = "0";
      if (x === 0 && y === 0 && z === 0) {
        TopNumber = 2;
        frontNumber = 3;
        console.log(TopNumber, "topnumber");
      } else if (x === 0 && y === 0 && z === 0.5) {
        TopNumber = 6;
        frontNumber = 3;
      } else if (x === 0 && y === 0 && z === 1) {
        TopNumber = 4;
        frontNumber = 3;
      } else if (x === 0 && y === 0 && z === 1.5) {
        TopNumber = 5;
        frontNumber = 3;
      } else if (x === 0 && y === 0.5 && z === 0) {
        TopNumber = 2;
        frontNumber = 5;
      } else if (x === 0 && y === 1 && z === 0) {
        TopNumber = 2;
        frontNumber = 1;
      } else if (x === 0 && y === 1.5 && z === 0) {
        TopNumber = 2;
        frontNumber = 6;
      } else if (x === 0 && y === 1.5 && z === 0.5) {
        TopNumber = 6;
        frontNumber = 4;
      } else if (x === 0 && y === 1.5 && z === 1) {
        TopNumber = 4;
        frontNumber = 5;
      } else if (x === 0 && y === 1.5 && z === 1.5) {
        TopNumber = 5;
        frontNumber = 2;
      } else if (x === 0 && y === 0.5 && z === 0.5) {
        TopNumber = 6;
        frontNumber = 2;
      } else if (x === 0 && y === 0.5 && z === 1) {
        TopNumber = 4;
        frontNumber = 6;
      } else if (x === 0 && y === 0.5 && z === 1.5) {
        TopNumber = 5;
        frontNumber = 4;
      } else if (x === 0 && y === 1 && z === 1.5) {
        TopNumber = 5;
        frontNumber = 1;
      } else if (x === 0 && y === 1 && z === 1) {
        TopNumber = 4;
        frontNumber = 1;
      } else if (x === 0 && y === 1 && z === 0.5) {
        TopNumber = 6;
        frontNumber = 1;
      } else if (x === 0 && y === 0.5 && z === 0) {
        TopNumber = 6;
        frontNumber = 1;
      } else if (x === 0.5 && y === 0 && z === 0) {
        TopNumber = 1;
        frontNumber = 2;
      } else if (x === 0.5 && y === 0 && z === 0.5) {
        TopNumber = 1;
        frontNumber = 6;
      } else if (x === 0.5 && y === 0 && z === 1) {
        TopNumber = 1;
        frontNumber = 4;
      } else if (x === 0.5 && y === 0 && z === 1.5) {
        TopNumber = 1;
        frontNumber = 5;
      } else if (x === 0.5 && y === 0.5 && z === 0) {
        TopNumber = 6;
        frontNumber = 2;
      } else if (x === 0.5 && y === 0.5 && z === 1) {
        TopNumber = 5;
        frontNumber = 4;
      } else if (x === 0.5 && y === 0.5 && z === 1.5) {
        TopNumber = 2;
        frontNumber = 5;
      } else if (x === 0.5 && y === 1 && z === 1.5) {
        TopNumber = 3;
        frontNumber = 5;
      } else if (x === 0.5 && y === 1 && z === 1) {
        TopNumber = 3;
        frontNumber = 4;
      } else if (x === 0.5 && y === 0.5 && z === 0.5) {
        TopNumber = 4;
        frontNumber = 6;
      } else if (x === 0.5 && y === 1.5 && z === 0) {
        TopNumber = 5;
        frontNumber = 2;
      } else if (x === 0.5 && y === 1.5 && z === 0.5) {
        TopNumber = 2;
        frontNumber = 6;
      } else if (x === 0.5 && y === 1.5 && z === 1) {
        TopNumber = 6;
        frontNumber = 4;
      } else if (x === 0.5 && y === 1.5 && z === 1.5) {
        TopNumber = 4;
        frontNumber = 5;
      } else if (x === 1 && y === 0 && z === 0) {
        TopNumber = 4;
        frontNumber = 1;
      } else if (x === 1 && y === 0 && z === 0.5) {
        TopNumber = 5;
        frontNumber = 1;
      } else if (x === 1 && y === 0 && z === 1) {
        TopNumber = 2;
        frontNumber = 1;
      } else if (x === 1 && y === 0 && z === 1.5) {
        TopNumber = 6;
        frontNumber = 1;
      } else if (x === 1 && y === 0.5 && z === 0) {
        TopNumber = 4;
        frontNumber = 6;
      } else if (x === 1 && y === 0.5 && z === 0.5) {
        TopNumber = 5;
        frontNumber = 4;
      } else if (x === 1 && y === 0.5 && z === 1) {
        TopNumber = 2;
        frontNumber = 5;
      } else if (x === 1 && y === 0.5 && z === 1) {
        TopNumber = 2;
        frontNumber = 5;
      } else if (x === 1 && y === 0.5 && z === 1.5) {
        TopNumber = 6;
        frontNumber = 2;
      } else if (x === 1 && y === 0.5 && z === 1.5) {
        TopNumber = 6;
        frontNumber = 2;
      } else if (x === 1 && y === 1 && z === 0) {
        TopNumber = 4;
        frontNumber = 3;
      } else if (x === 1 && y === 1 && z === 0.5) {
        TopNumber = 5;
        frontNumber = 3;
      } else if (x === 1 && y === 1 && z === 1) {
        TopNumber = 2;
        frontNumber = 3;
      } else if (x === 1 && y === 1 && z === 1.5) {
        TopNumber = 5;
        frontNumber = 3;
      } else if (x === 1 && y === 1.5 && z === 0) {
        TopNumber = 4;
        frontNumber = 5;
      } else if (x === 1 && y === 1.5 && z === 0.5) {
        TopNumber = 5;
        frontNumber = 2;
      } else if (x === 1 && y === 1.5 && z === 1) {
        TopNumber = 2;
        frontNumber = 6;
      } else if (x === 1 && y === 1.5 && z === 1.5) {
        TopNumber = 6;
        frontNumber = 4;
      } else if (x === 1.5 && y === 0 && z === 0) {
        TopNumber = 3;
        frontNumber = 4;
      } else if (x === 1.5 && y === 0 && z === 0.5) {
        TopNumber = 3;
        frontNumber = 5;
      } else if (x === 1.5 && y === 0 && z === 1) {
        TopNumber = 3;
        frontNumber = 2;
      } else if (x === 1.5 && y === 0 && z === 1.5) {
        TopNumber = 3;
        frontNumber = 6;
      } else if (x === 1.5 && y === 0.5 && z === 0) {
        TopNumber = 5;
        frontNumber = 4;
      } else if (x === 1.5 && y === 0.5 && z === 0.5) {
        TopNumber = 2;
        frontNumber = 5;
      } else if (x === 1.5 && y === 0.5 && z === 1) {
        TopNumber = 6;
        frontNumber = 2;
      } else if (x === 1.5 && y === 0.5 && z === 1.5) {
        TopNumber = 4;
        frontNumber = 6;
      } else if (x === 1.5 && y === 1 && z === 0) {
        TopNumber = 1;
        frontNumber = 4;
      } else if (x === 1.5 && y === 1 && z === 0.5) {
        TopNumber = 1;
        frontNumber = 5;
      } else if (x === 1.5 && y === 1 && z === 1) {
        TopNumber = 1;
        frontNumber = 2;
      } else if (x === 1.5 && y === 1 && z === 1.5) {
        TopNumber = 1;
        frontNumber = 6;
      } else if (x === 1.5 && y === 1.5 && z === 0) {
        TopNumber = 6;
        frontNumber = 4;
      } else if (x === 1.5 && y === 1.5 && z === 0.5) {
        TopNumber = 4;
        frontNumber = 5;
      } else if (x === 1.5 && y === 1.5 && z === 1) {
        TopNumber = 5;
        frontNumber = 2;
      } else if (x === 1.5 && y === 1.5 && z === 1.5) {
        TopNumber = 2;
        frontNumber = 8;
      }

      return [frontNumber, TopNumber];
    };
    let Dice0Number = NumberChecker(ran0, ran1, ran2);
    let Dice1Number = NumberChecker(ran3, ran4, ran5);
    let Dice2Number = NumberChecker(ran6, ran7, ran8);
    let Dice3Number = NumberChecker(ran9, ran10, ran11);
    let Dice4Number = NumberChecker(ran12, ran13, ran14);
    let diceObject = {
      dice0: [newNumber, newNumber1, newNumber2],
      dice1: [newNumber3, newNumber4, newNumber5],
      dice2: [newNumber6, newNumber7, newNumber8],
      dice3: [newNumber9, newNumber10, newNumber11],
      dice4: [newNumber12, newNumber13, newNumber14],
      // Numbers: NumberChecker(ran0, ran1, ran2),
      Numbers: [
        Dice0Number,
        Dice1Number,
        Dice2Number,
        Dice3Number,
        Dice4Number,
      ],
      ran: [ran0, ran1, ran2],
    };

    return diceObject;
  };

  const MultiPlayers = () => {
    let Data = [];
    for (let i = 0; i < 4; i++) {
      Data.push(rotater());
    }
    const key = "Numbers";
    const DiceValues = Data.map((obj) => {
      if (obj.hasOwnProperty(key)) {
        return obj[key];
      }
    });

    let flatDice = DiceValues.flat(1);
    const allnumbers = flatDice.map(function (x) {
      return x[0];
    });

    let numberOf1 = allnumbers.filter((x) => x === 1).length;
    let numberOf2 = allnumbers.filter((x) => x === 2).length;
    let numberOf3 = allnumbers.filter((x) => x === 3).length;
    let numberOf4 = allnumbers.filter((x) => x === 4).length;
    let numberOf5 = allnumbers.filter((x) => x === 5).length;
    let numberOf6 = allnumbers.filter((x) => x === 6).length;

    const numberState = {
      one: numberOf1,
      two: numberOf2,
      three: numberOf3,
      four: numberOf4,
      five: numberOf5,
      six: numberOf6,
    };

    let FilteredRoom = Rooms.filter(function (obj) {
      return obj.room === roomName;
    });

    FilteredRoom[0].numberState = numberState;

    let PlayerInfo = FilteredRoom[0].playerInfo;

    async function updateRotation() {
      const updatedUsers = Rooms.map((e) =>
        e.room === roomName ? { ...e, playersTurn: name } : Rooms
      );
      Rooms = updatedUsers;

      for (const property in PlayerInfo) {
        // let playerRotation = PlayerInfo[property].rotation;
        // let FrontNumber = PlayerInfo[property].rotation.Numbers;

        let playerNumber = PlayerInfo[property].playerNumber;

        FilteredRoom[0].playerInfo[property].rotation = Data[playerNumber];
      }
    }
    function sendRotation() {
      const playerList = Rooms.map((e) => {
        if (e.room === roomName) {
          return e.roomList;
        }
      });
      console.log(playerList, "first player");
      for (const property in PlayerInfo) {
        let eachPlayerId = PlayerInfo[property].id;
        const playerData = PlayerInfo[property];

        // working deposit
        // io.to(eachPlayerId).emit("gamestarted", PlayerInfo[property]);

        io.to(eachPlayerId).emit("gamestarted", {
          playerData: playerData,
          playerList:playerList ,
        });
      }
    }

    updateRotation().then(() => {
      sendRotation();
    });
  };
  MultiPlayers();
  const updatePlayerStart = () => {
    const firstPlayerUpdate = Rooms.map((e) =>
      e.room === roomName ? { ...e, playersTurn: name } : Rooms
    );
    Rooms = firstPlayerUpdate;
    let FilteredRoom = Rooms.filter(function (obj) {
      return obj.room === roomName;
    });
    console.log(FilteredRoom[0].playersTurn, "players turn");
    io.to(roomName).emit("playerup", FilteredRoom.playersTurn);

    // let FilteredRoom = Rooms.filter(function (obj) {
    //   return obj.room === room;
    // });
    // console.log(FilteredRoom, "the filtered Room");
    // let roomIndex = Rooms.findIndex((obj) => obj.room == room);
    // let TargetRoom = Rooms[roomIndex];

    // const new_obj = { ...TargetRoom, number: number, value: value };
    // console.log(new_obj, "new object");
  };
  // updatePlayerStart();
}

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("joinroom", (data) => {
    socket.join(data.room, "the room");
 

    let roomDestination = Rooms.find((obj) => obj.room === data.room);
    console.log(data.id, "the socket.id");
    if (roomDestination !== undefined) {
      console.log("room exists");
      let numberOfPlayers = Object.keys(roomDestination.playerInfo).length;
   let player =   Object.keys(roomDestination.roomList).length;
   let playerNumber = player +1;

   roomDestination.roomList[data.name] = playerNumber
   console.log(playerNumber, "playernumber")
// roomDestination.roomList.push(data.name);
      roomDestination.playerInfo[data.name] = {
        rotation: {},
        numberOfDice: 5,
        diceNumberStatement: 0,
        diceAmountStatement: 0,
        id: data.id,
        playerNumber: numberOfPlayers,
      };
      // console.log(roomDestination.playerInfo[data.name], "payload");
      console.log(Rooms, "room destingation")
      let result = Rooms.find(obj => {
        return obj.room === data.room
      })
      io.to(data.room).emit("initialstate", result.roomList);
    } else {
      console.log("room does not exist");
      
      Rooms.push({
        room: data.room,
        numberState: {},
        started: false,
        playersTurn: 0,
        number: null,
        value: null,
        roomList: {[data.name]:1},
        playerInfo: {
          [data.name]: {
            rotation: {},
            numberOfDice: 5,
            diceNumberStatement: 0,
            diceAmountStatement: 0,
            playerNumber: 0,
            id: data.id,
          },
         
        },
      });
      let result = Rooms.find(obj => {
        return obj.room === data.room
      })
      console.log(result, "%%%")
      io.to(data.room).emit("initialstate", result.roomList);
    }
    // console.log(Rooms);
    FilteredRoom = Rooms.filter(function (obj) {
      return obj.room === data.room;
    });
  });
  socket.on("startgame", (data) => {
    console.log("game has started");

    EmitData(data.room, data.name);
  });
  const updateStatement = (room, number, value) => {
    const updatedUsers = Rooms.map((e) =>
      e.room === room ? { ...e, number: number, value: value } : Rooms
    );
    Rooms = updatedStatement;
    console.log(updatedUsers, "updated users");
    let packet = { number: number, value: value };
    io.to(room).emit("updatestatement", packet);
  };

  socket.on("sendstatement", (data) => {
    // console.log(data, "data");
    updateStatement(data.room, data.number, data.value);
    // let packet = { number: data.number, value: data.value };
    // io.to(data.room).emit("updatestatement", packet);
    // console.log(Rooms[0].playerInfo, "the rooms")
  });

  // socket.on("send_message", (data) => {
  //   socket.to(data.room).emit("receive_message", data);
  // });

  const sendPosition = () => {};
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
