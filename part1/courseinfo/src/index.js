import React from 'react'
import ReactDOM from 'react-dom'


/* Ejercicio
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}  */


// Ejercisio parte 1
const App = () => {  
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  //Funsiones flecha 
  const Header = ({course}) => <h1>{course}</h1>;
  const Content = ({part, exercises}) => <p>{part} {exercises}</p>;
  const Total = ({children, exercises}) => <p>{children} {exercises}</p>;

  /* Otra manera de crear una funcion con props: 
  const Header = (props) => {
    return <h1>{props.course}</h1>
  }  */

  return (
    <>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total children={'Number of exercises'} exercises={exercises1 + exercises2 + exercises3} />
    </>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root'))
