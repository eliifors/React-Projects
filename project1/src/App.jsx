import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Course from './Course';


function getRandomCourse(){
  const courseArray = ['Angular','Bootstrap','Ccsharp','KompleWeb'];
  return courseArray[Math.floor(Math.random()*courseArray.length)]
}


function App() {

  const [courses, setCourses] = useState([])

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()])
  };

  const courseList = courses.map((course, index) => {
     retun <Course key={index} courseName={course} />  ;
  });

  return (
     <div className="App">
       <button onClick={handleClick}>Kurs Ekle</button>
       <div>
        {courseList}
       </div>
     </div>
  );
}

export default App
