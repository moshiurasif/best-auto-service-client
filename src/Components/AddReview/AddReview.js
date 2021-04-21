import React, { useState } from 'react';
import Sidebar from '../OrderPage/Sidebar/Sidebar';

const AddReview = () => {
   const [info,setInfo] =useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e =>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
      const formData = new FormData()
      console.log(info);
      formData.append('file', file); 
      formData.append('name', info.name);
      formData.append('companyName', info.companyName);
      formData.append('customerOpinion', info.customerOpinion);

      fetch('https://whispering-springs-55108.herokuapp.com/addReview', {
          method: 'POST',
          body: formData
      })
          .then(response => response.json())
          .then(data => {
              console.log(data)
          })
          .catch(error => {
              console.error(error)
          })
  }
    return (
      <section className="add-review">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
              <h3>Add A Review</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Name</label>
                  <input
                    onBlur={handleBlur}
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Company Name</label>
                  <input
                    onBlur={handleBlur}
                    type="text"
                    className="form-control"
                    name="companyName"
                    placeholder="Company Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">
                    Customer Opinion
                  </label>
                  <input
                    onBlur={handleBlur}
                    type="text"
                    className="form-control"
                    name="customerOpinion"
                    placeholder="Customer Opinion"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Upload a image</label>
                  <input
                    onChange={handleFileChange}
                    type="file"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Picture"
                  />
                </div>

                <button type="submit" className="btn btn-warning">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AddReview;