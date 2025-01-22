import Task1 from "./componet/task1";
import Task2 from "./componet/task2";
import Task3 from "./componet/task3";
import Task4 from "./componet/task4";
import Task5 from "./componet/task5";
import Task6 from "./componet/task6";
import Task7 from "./componet/task7";
import Task8 from "./componet/task8";
import Task9 from "./componet/task9";
import Task10 from "./componet/task10";
import Task11 from "./componet/task11";
// import Task12 from "./componet/task12";
// import Task13 from "./componet/task13";
function App() {
  return (
    <div>
      <h1>React tasks</h1>
      <Task1 name="user" />
      <hr />
      <Task2 label="click me" />
      <hr />
      <Task3 productName="apple" price="1.5jd" description="yumy" />
      <hr />
      <Task4 username="hamed" age="19" email="hamedkrishan@gmail.com" />
      <hr />
      <Task5
        avatar="https://via.placeholder.com/100"
        name="hamed"
        email="user@gamilcom "
      />
      <hr />
      <Task6 title="my website" hLink="home" aLink="about" ctLink="contact" />
      <hr />
      <Task7 label="onclick" />
      <Task8 />
      <Task9 />
      <Task10 />
      <Task11 />
      {/* 
      
      <Task12 />
      <Task13 /> */}
    </div>
  );
}
export default App;