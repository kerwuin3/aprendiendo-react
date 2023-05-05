import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  const Header = ({course}) => <h1>{course}</h1>;
  const Content = ({part1, part2, part3, exercises1, exercises2, exercises3}) => <p>{part1}{part2}{part3}{exercises1}{exercises2}{exercises3}</p>;
  const Total = ({exercises1, exercise2, exercise3}) => <p>{exercises1} {exercise2} {exercise3}</p>;



  return (
    <>
      <Header course={course} />
      <p>
        <Content part1={part1} exercises1={exercises1} />
      </p>
      <p>
        <Content part2={part2} exercises2={exercises2} />
      </p>
      <p>
        <Content part3={part3} exercises3={exercises3} />
      </p>
      <p>        
        <Total Number of exercises exercises1={exercises1 + exercises2 + exercises3} />
      </p>
    </>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))