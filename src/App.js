import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import Table from './components/Table'
import Detail from './components/Detail'
import { useState } from 'react'

const App = () => {
  // move the state here! since App is a functional component,
  // it cannot have a state object
  // the first step will be to convert this functional component into a class based one!

  // state = {
  //   selected: undefined, // can be undefined, 'First', 'Second' or 'Third'
  // }

  const [selected, setSelected] = useState(undefined)

  const changeSelected = (newValue) => {
    // this.setState({
    //   selected: newValue,
    // })
    setSelected(newValue)
  }
  // changeSelected is a function living in the App component
  // because it's invoking this.setState(), changeSelected has the power
  // of changing the state of App!

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <Table
                // changeSelected is the red arrow in the graph
                changeSelected={changeSelected}
                selected={selected}
              />
              {/* Table still wants to change the state clicking on the ListGroup.Items */}
            </Col>
            <Col className="my-auto">
              <Detail selected={selected} />
              {/* the 'selected' prop is the blue arrow in the graph! */}
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default App
