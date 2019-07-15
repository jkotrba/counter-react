import React from 'react'
import CounterDisplay from './CounterDisplay'
import { connect } from 'react-redux'
import './Counter.css'
import { addAction, addActionAsync } from './redux/actions'

class Counter extends React.Component {

  render() {
    return (
      <div className="counter">
        <CounterDisplay count={this.props.count} />
        <div className="buttons">
          <div>
            <button onClick={this.props.onIncrementClicked}>
              <i className="fa fa-plus" />
            </button>
            <button onClick={this.props.onIncrementAsyncClicked}>
              <i className="fa fa-plus" />
            </button>
          </div>
          <div>
            <button onClick={() => this.props.onDecrementClicked(this.props.count)}>
              <i className="fa fa-minus" />
            </button>
            <button onClick={this.props.onDecrementAsyncClicked}>
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncrementClicked: () => dispatch(addAction(1)),
    onDecrementClicked: (count) => {
      if (ownProps.allowDecrement && (count > 0 || ownProps.allowNegative)) {
        dispatch(addAction(-1))
      }
    },
    onIncrementAsyncClicked: () => dispatch(addActionAsync(1)),
    onDecrementAsyncClicked: () => dispatch(addActionAsync(-1))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
