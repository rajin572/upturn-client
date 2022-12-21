import React from "react";
import toast from "react-hot-toast";

const AddServices = () => {
  const handlePlaceServices = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const price = form.price.value;
    const img = form.photoUrl.value;
    const description = form.description.value;

    const service = {
      title,
      price,
      img,
      description,
    };

    fetch("https://upturn-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Add Services Successfully!");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <div>
      <h1 className="text-center">Add Service</h1>
      <div className="addReview">
      <form onSubmit={handlePlaceServices}>
        <div className="reviewInput">
          <div>
            <label className="d-block" htmlFor="title">
              Title Name
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Title Name"
              required
            />
          </div>
          <div>
            <label className="d-block" htmlFor="price">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="text"
              placeholder="Price"
              required
            />
          </div>
          <div className="photourl">
            <label className="d-block" htmlFor="photoUrl">
              Photo URL
            </label>
            <input
              id="photoUrl"
              name="photoUrl"
              type="text"
              placeholder="Photo URL"
              required
            />
          </div>
        </div>
        <textarea
          name="description"
          className="textarea"
          placeholder="Description"
          required
        ></textarea>

        <div>
          <button className="submitBtn" type="submit">
            Add Your Service
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddServices;
