const express = require('express')
// const cluster = require('cluster')
// const os = require('os')
// cluster.schedulingPolicy = cluster.SCHED_RR

const app = express()

function delay(duration) {
  const startTime = Date.now()
  while (Date.now() - startTime < duration) {
    // event loop is blocked
  }
}

app.get('/', (req, res) => {
  res.send(`Performance Example: ${process.pid}`)
})

app.get('/timer', (req, res) => {
  // delay the response
  delay(4000)
  res.send(`Beep beep beep! ${process.pid}`)
})

/* ---- PM2 DOES THIS ---- */
// if (cluster.isMaster) {
//   console.log('Master has been started...')

//   const NUM_WORKERS = os.cpus().length

//   for (let i = 0; i < NUM_WORKERS; i++) cluster.fork()
// } else {
//   console.log('Worker process has started')
//   app.listen(3000)
// }

console.log(`Worker process started`)
app.listen(3000, () => console.log(`Running server.js on port: 3000`))

// round robin: load balancing
// distributing set of tasks to a set of resources
