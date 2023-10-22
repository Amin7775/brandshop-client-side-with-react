const AddProducts = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const type = form.type.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const short_description= form.short_description.value;

    const product = {
      name,
      brand,
      price,
      type,
      image,
      rating,
      short_description
    };
    // console.log(product);

    fetch('http://localhost:5000/products',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify((product))
    })
    .then(res=> res.json())
    .then(data=> {
        console.log(data);
    })
  };
  return (
    <div className="bg-[#f1f3f6]  py-10">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Add Products
        </h2>

        <form onSubmit={handleAddProduct}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Product Name
              </label>
              <input
                name="name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">Brand</label>

              <select
                name="brand"
                className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option value="A4tech">A4tech</option>
                <option value="Asus">Asus</option>
                <option value="Logitech">Logitech</option>
                <option value="Corsair">Corsair</option>
                <option value="Fantech">Fantech</option>
                <option value="MSI">MSI</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">Price</label>
              <input
                name="price"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Product Type
              </label>

              <select
                name="type"
                className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option value="keyboard">Keyboard</option>
                <option value="mouse">Mouse</option>
                <option value="headphone">Headphone</option>
                <option value="webcam">Webcam</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Product Image (URL)
              </label>
              <input
                name="image"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Product Rating
              </label>
              <select
                name="rating"
                className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="text-gray-700 dark:text-gray-200">
                Short Description
              </label>
              <textarea
                name="short_description"
                rows={5}
                placeholder="Write Here"
                className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                
              </textarea>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProducts;
