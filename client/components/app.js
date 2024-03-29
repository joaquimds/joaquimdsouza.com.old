import React from 'react'
import ConnectedJoaquim from '../containers/connectedJoaquim'
import ConnectedWalkieTalkie from '../containers/connectedWalkieTalkie'

const App = () => (
  <div className="container p-t-1 p-b-1">
    <h1>Welcome to joaquimdsouza.com.</h1>
    <h2>This site works best on Google Chrome or Firefox with the sound turned up.</h2>
    <ConnectedJoaquim />
    <h1>Web Walkie-Talkie</h1>
    <h2>Hit connect to switch on your walkie-talkie</h2>
    <ConnectedWalkieTalkie />
    <a href="https://github.com/joaquimds/joaquimdsouza.com">
      <img className="github-ribbon" src="https://camo.githubusercontent.com/82b228a3648bf44fc1163ef44c62fcc60081495e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_red_aa0000.png" />
    </a>
  </div>
)

export default App
