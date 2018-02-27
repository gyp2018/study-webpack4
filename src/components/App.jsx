import React from 'react'
import _ from 'lodash'
import { sum } from '../utils/sum'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{_.join(['Hello', 'webpack', sum(4)], ' ')}</h1>
      </div>
    )
  }
}

export default App
