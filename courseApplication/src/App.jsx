import "./App.css";
import Navbar from "./Components/Navbar";
import CourseList from "./Components/CourseList";
import { useEffect } from "react";
import { calculateTotal } from "./Control/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch(() => {});
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <div>
      <Navbar />
      <CourseList />
    </div>
  );
}

export default App;
