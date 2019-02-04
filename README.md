# battle-snake-debugger

A debugging tool for recursive lookahead strategies.

## Requirements

* Node 9.4.0+

## Setup

* `npm install`

## Usage

* `npm run dev`

Once running, the server will be accepting socket connections on port `3003`. Implement the [client class](https://github.com/GriffinLedingham/battle-snake-debugger/blob/master/client/debugger.ts) in to your battle snake server, and utilize the `wipe()`, `pushNode()` and `finalData()` hooks to compile your data for the debugger.


