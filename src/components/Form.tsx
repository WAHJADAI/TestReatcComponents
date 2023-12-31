import React, { FormEvent, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...(register("name"), { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...(register("age"), { required: true })}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button  className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
