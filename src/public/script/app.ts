let treeData

class App {
  public drawTree

  constructor(drawTree) {
    this.drawTree = drawTree
  }

  getData() {
    const request = new XMLHttpRequest()
    request.open('GET', '/turn', true)
    request.onload = ()=>{
      if(request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText)
        this.drawTree(data['tree'],clickNode,hoverNode)
      }
    }
    request.send()
  }
}

function hoverNode(d) {
  let score = d.name
  let state = d.state
  let playerId = d.player
  $('#board').html('')
  for(let i in state.board) {
    let row = state.board[i]
    for(let j in row) {
      printTile(row[j])
    }
    $('#board').append(`<br>`)
  }
  if(score != undefined) {
    $('#board').append(`Player Score: ${score}<br>`)
  }
  $('#board').append(`Player Health: ${state.snakes[playerId].health}`)
}

function clickNode(d) {

}

function printTile(tile) {
  let className = 'empty'
  switch(tile) {
    case 1:
      className = 'body'
      break
    case 2:
      className = 'food'
      break
    case 3:
      className = 'head'
      break
    case 4:
      className = 'tail'
      break
    default:
      break
  }
  $('#board').append(`<div class="tile ${className}"></div>`)
}