import { useState } from "react";
import { Link } from "react-router-dom";

function addProduct() {
  const categorey = [
    "categorey1",
    "categorey1",
    "categorey1",
    "categorey1",
    "categorey1",
  ];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, setFormData] = useState({
    name: "",
    typeuse: "",
    categorey: "",
    desc: "",
    loc: "",
    image: [],
  });
  const handleImageUpload = (event) => {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageSrc = e.target.result;

        setFormData((prevFormData) => ({
          ...prevFormData,
          image: [...prevFormData.image, imageSrc],
        }));
      };

      reader.readAsDataURL(files[i]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className="w-full max-w-7xl mt-10">
      <div className="w-full pl-3">
        <Link
          to="/product"
          className="bg-jade-600 text-white rounded-md px-3 py-2"
        >
          Products
        </Link>
      </div>
      {/* --------------------------------Form--------------------------------- */}
      <form onSubmit={handleSubmit} className="w-full">
        <section className="w-[90%] md:w-[45%] flex flex-col items-center justify-center m-auto p-3 pb-0">
          {/* --------------------------------Product name--------------------------------- */}
          <div className="w-full pl-2 mt-4">
            <h1 className="text-slate-700 m-1 font-bold">Product Name</h1>
            <input
              required={true}
              name="name"
              onKeyUp={handleFormData}
              type="text"
              className="w-full border rounded-md outline-none h-9"
            />
          </div>
          {/* -------------------------------category---------------------------------- */}
          <div className="w-full pl-2 mt-4">
            <h1 className="text-slate-700 m-1 font-bold">Category</h1>
            <select
              onChange={handleFormData}
              name="categorey"
              className="w-full border rounded-md outline-none h-9"
            >
              <option>select categore</option>
              {categorey.map((value, index) => {
                return <option key={index}>{value}</option>;
              })}
            </select>
          </div>
          {/* -----------------------------address------------------------------------ */}
          <div className="w-full pl-2 mt-4">
            <h1 className="text-slate-700 m-1 font-bold">Address</h1>
            <input
              required={true}
              name="loc"
              onKeyUp={handleFormData}
              type="text"
              className="w-full border rounded-md outline-none h-9"
            />
          </div>
          {/* -----------------------------description------------------------------------ */}
          <div className="w-full pl-2 mt-4">
            <h1 className="text-slate-700 m-1 font-bold">Description</h1>
            <textarea
              required={true}
              name="desc"
              onKeyUp={handleFormData}
              type="text"
              className="w-full border rounded-md outline-none h-20"
            ></textarea>
          </div>
          {/* -----------------------------image upload------------------------------------ */}
          <div className="w-full pl-2 mt-4">
            <h1 className="text-slate-700 m-1 font-bold">Images</h1>
            <div
              className="w-full border rounded-md outline-none p-1 flex flex-wrap
             justify-start gap-1"
            >
              {formData.image.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="w-16 h-16 rounded-md"
                  alt={`Image ${index}`}
                />
              ))}
            </div>
            <input
              onChange={handleImageUpload}
              type="file"
              name="image"
              className="w-full bg-slate-200 rounded-md my-2 overflow-hidden border-[2px] border-slate-400"
            />
          </div>
          {/* ----------------------------- submit ------------------------------------ */}
          <div className="w-full pl-2">
            <button className="w-full bg-jade-600 text-white text-lg rounded-md my-2 py-2 ">
              Add
            </button>
          </div>
          {/* ----------------------------------------------------------------- */}
        </section>
      </form>
    </section>
  );
}

export default addProduct;
