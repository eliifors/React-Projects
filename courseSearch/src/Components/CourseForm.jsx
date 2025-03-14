import React, { use } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeName,
  changeDescription,
  changeCost,
} from "../store/Slices/formSlice";
import { addCourse } from "../store/Slices/courseSlice";

function CourseForm() {
  const dispatch = useDispatch();
  const { name, description, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      description: state.form.description,
      cost: state.form.cost,
    };
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCourse({ name, description, cost }));
  };
  console.log(name, description, cost);

  return (
    <div className="courseForm panel">
      <h4 className="title is-2 is-spaced">KURS EKLE</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Ad</label>
            <input
              className="input is-expanded"
              onChange={(event) => {
                dispatch(changeName(event.target.value));
              }}
              value={name}
            />
          </div>
          <div className="field">
            <label className="label">Açıklama</label>
            <textarea
              className="input is-expanded"
              onChange={(event) => {
                dispatch(changeDescription(event.target.value));
              }}
              value={description}
            />
          </div>
          <div className="field">
            <label className="label">Fiyat</label>
            <input
              className="input is-expanded"
              typeof="number"
              onChange={(event) => {
                dispatch(changeCost(parseInt(event.target.value)));
              }}
              value={cost}
            />
          </div>
          <div className="field">
            <button className="button is-danger is-dark">Kaydet</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CourseForm;
