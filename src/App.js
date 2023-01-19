import { Container, Calc, Row } from './styles'
import Input from './components/Input'
import Button from './components/Button'
import { useState } from 'react'

function App() {
const [currentNumber, setCurrentNumber] = useState('0')
const [operation, setOperation] = useState('')
const [firstPart, setFirstPart] = useState('0')
const hanleAddToView = (number) => {
  setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
}

const handleClearMemory = () => {
  setCurrentNumber('0')
  setFirstPart('0')
  setOperation('')
}

const handleAdd = () => {
  if (firstPart === '0') {
    setOperation('+')
    setFirstPart(currentNumber)
    setCurrentNumber('0')
  } else {
    const sum = Number(firstPart) + Number(currentNumber)
    return sum.toString()
  }
}

const handleSubtraction = () => {
  if (firstPart === '0') {
    setOperation('-')
    setFirstPart(currentNumber)
    setCurrentNumber('0')
  } else {
    const difference = Number(firstPart) - Number(currentNumber)
    return difference.toString()
  }
}

const handleDivision = () => {
  if (firstPart === '0') {
    setOperation('/')
    setFirstPart(currentNumber)
    setCurrentNumber('0')
  } else {
      const quotient = Number(firstPart) / Number(currentNumber)
      return quotient.toString()
  }
}

const handleMultiplication = () => {
  if (firstPart === '0') {
    setOperation('x')
    setFirstPart(currentNumber)
    setCurrentNumber('0')
  } else {
    const product = Number(firstPart) * Number(currentNumber)
    return product.toString()
  }
}

const handleEquals = () => {
  if (firstPart === '0') {
    return
  } else {
    switch (operation) {
      case '+':
        setCurrentNumber(handleAdd());
        break;
      case '-':
        setCurrentNumber(handleSubtraction())
        break;
      case '/':
        setCurrentNumber(handleDivision())
        break;
      case 'x':
        setCurrentNumber(handleMultiplication())
        break;
      default:
        break;
    }
    setFirstPart('0')
  }   
}

const handleBackspace = () => {
  if (currentNumber === '0') {
    return
  } else {
    setCurrentNumber(prev => `${prev.length == 1 ? '0' : prev.slice(0, prev.length-1)}`)
  }
}

  return (
    <>
    <Container>
      <Calc>
        <Input value={currentNumber} label={firstPart == '0' ? '' : firstPart + operation} />
        <Row>
          <Button label="x" onClick={handleMultiplication}/>
          <Button label="/" onClick={handleDivision}/>
          <Button label="C" onClick={handleClearMemory}/>
          <Button label="⌫" onClick={handleBackspace}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => {hanleAddToView('7')}}/>
          <Button label="8" onClick={() => {hanleAddToView('8')}}/>
          <Button label="9" onClick={() => {hanleAddToView('9')}}/>
          <Button label="-" onClick={handleSubtraction}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => {hanleAddToView('4')}}/>
          <Button label="5" onClick={() => {hanleAddToView('5')}}/>
          <Button label="6" onClick={() => {hanleAddToView('6')}}/>
          <Button label="+" onClick={handleAdd}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => {hanleAddToView('1')}}/>
          <Button label="2" onClick={() => {hanleAddToView('2')}}/>
          <Button label="3" onClick={() => {hanleAddToView('3')}}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => {hanleAddToView('0')}}/>
        </Row>
      </Calc>
    </Container>
    </>
  )
}

export default App;
