import React from 'react'
import { createFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {
  const handleChange = (event) => {
      const filter = event.target.value
      props.createFilter(filter)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  createFilter,
}

export default connect(null, mapDispatchToProps)(Filter)