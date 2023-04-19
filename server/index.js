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

let EmitTimer = 0;


let random1;
let random2;
let randomrotate = [0,0,0]
function EmitData() {

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)/2
  }
   const rotater = ()=> {
    const ran0 = randomIntFromInterval(0, 3)
    const ran1 = randomIntFromInterval(0, 3)
    const ran3 = randomIntFromInterval(0, 3)
    
   
    let newNumber = ran0 * Math.PI
    let newNumber1 = ran1 * Math.PI
    let newNumber2 = ran3 * Math.PI

    console.log(ran0,ran1, "!!!!")
    console.log(randomrotate, "random rotate")
    
randomrotate = [newNumber1,newNumber, newNumber2]

}
rotater();
}
setInterval(EmitData, 3000);


io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  const sendingRandom = ()=> {
  socket.emit("random", randomrotate);

}
setInterval(sendingRandom, 500)

  socket.on("join_room", (data) => {
    socket.join(data);
  });
  

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
 
  // socket.emit("random", [random1,random2]);
  const sendPosition = ()=> {
    
}
// setInterval(sendPosition, 3000);
});




server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});