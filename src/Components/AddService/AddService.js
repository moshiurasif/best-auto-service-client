import React, { useState } from 'react';
import DashboardSidebar from '../Dashboard/DashboardSidebar/DashboardSidebar';

const AddService = () => {
       const [info, setInfo] = useState({});
       const [file, setFile] = useState(null);
       const handleBlur = (e) => {
         const newInfo = { ...info };
         newInfo[e.target.name] = e.target.value;
         setInfo(newInfo);
       };

       const handleFileChange = (e) => {
         const newFile = e.target.files[0];
         setFile(newFile);
       };

       const handleSubmit = () => {
         const formData = new FormData();
         console.log(info);
         formData.append("file", file);
         formData.append("serviceName", info.serviceName);
         formData.append("description", info.description);
         formData.append("price", info.price);

         fetch("https://whispering-springs-55108.herokuapp.com/addService", {
           method: "POST",
           body: formData,
         })
           .then((response) => response.json())
           .then((data) => {
             console.log(data);
           })
           .catch((error) => {
             console.error(error);
           });
       };
    return (
      <section className="add-service">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <DashboardSidebar></DashboardSidebar>
            </div>
            <div className="col-md-8">
              <h3>Add A Service</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Service Name</label>
                  <input
                    onBlur={handleBlur}
                    type="text"
                    className="form-control"
                    name="serviceName"
                    placeholder="Service Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Description</label>
                  <input
                    onBlur={handleBlur}
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="Description"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">
                    Price
                  </label>
                  <input
                    onBlur={handleBlur}
                    type="text"
                    className="form-control"
                    name="price"
                    placeholder="Price"
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

export default AddService;