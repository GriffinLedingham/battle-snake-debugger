import * as path from 'path'
import * as express from 'express'

const app = express()
const port: number = 3002

let turnData

var io = require('socket.io')(3003)
io.on('connection', function(socket: any){
  console.log('Debugger connected...');
  // whenever we receive a 'message' we log it out
  socket.on('move_data', function(data: any){
    turnData = data
  })
})

function getTurn() {
  let response = turnData
  return response
}

app.use(express.static(path.join(process.cwd(), 'dist/public')));
app.get('/turn', (req, res) => res.json(getTurn()))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
