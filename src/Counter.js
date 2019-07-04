import React from 'react'
import CounterDisplay from './CounterDisplay'
import { connect } from 'react-redux'
import './Counter.css'
import { addAction } from './redux/actions'

class Counter extends React.Component {

  componentDidMount() {
  }

  onIncrementClicked = event => {
    this.props.dispatch(addAction(1))
  }

  onDecrementClicked = event => {
    this.props.dispatch(addAction(-1))
  }

  render() {
    return (
      <div className="counter">
        <CounterDisplay count={this.props.count} />
        <div className="buttons">
          <div>
            <button onClick={this.onIncrementClicked}>
              <i className="fa fa-plus" />
            </button>
          </div>
          <div>
            <button onClick={this.onDecrementClicked}>
              <i className="fa fa-minus" />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter)
