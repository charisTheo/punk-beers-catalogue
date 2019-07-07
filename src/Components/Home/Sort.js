import React from 'react';

const Sort = ({children, sortBy, order}) => {

  const sortAsc = (a, b) => (
    a.props[sortBy] < b.props[sortBy] ? -1 : 1
  )

  const sortDsc = (a, b) => (
    a.props[sortBy] > b.props[sortBy] ? -1 : 1
  )

  // sorts React Children Components ascentingly
  return (
    <>
      {sortBy === "" ? 
        React.Children.toArray(children) :
        React.Children.toArray(children).sort(
            order === 'asc' ? sortAsc : sortDsc
          )
      }
    </>
  )
}

export default Sort;
