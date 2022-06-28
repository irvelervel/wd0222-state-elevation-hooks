import { ListGroup } from 'react-bootstrap'

const Table = ({ selected, changeSelected }) => {
  // state = {
  //   selected: undefined, // can be undefined, 'First', 'Second' or 'Third'
  // }

  // now Table is getting this.props.changeSelected (which is a function)
  // capable of changing that state of the parent! (App.jsx)

  const checkSelected = (value) => (value === selected ? 'selected' : '')
  // the 'selected' css class changes the text color to red

  return (
    <>
      <ListGroup>
        <ListGroup.Item
          onClick={(e) => changeSelected('First')}
          className={checkSelected('First')}
        >
          First
        </ListGroup.Item>
        <ListGroup.Item
          onClick={(e) => changeSelected('Second')}
          className={checkSelected('Second')}
        >
          Second
        </ListGroup.Item>
        <ListGroup.Item
          onClick={(e) => changeSelected('Third')}
          className={checkSelected('Third')}
        >
          Third
        </ListGroup.Item>
      </ListGroup>
      <p className="mt-3">App's state is {selected || 'undefined'}</p>
    </>
  )
}

export default Table
