import React, { useContext, useEffect, useRef } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../OrderPage/Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const [loggedInUser] = useContext(UserContext);
  const nameRef = useRef();
  


  //  const handleSubmit = (e) =>{
  //    e.preventDefault();

  //   
  //  }
        const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
        } = useForm();
        const onSubmit = (data) => {
           fetch("https://whispering-springs-55108.herokuapp.com/admin", {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify(data)
            })
              .then((res) => res.json())
              .then((result) => {
                console.log(result);
              });
        };


    return (
      <section className="make-admin">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" name="email" placeholder="Enter Admin Email" {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}

                <input type="submit" />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default MakeAdmin;