import { useForm } from "react-hook-form";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="h-full w-full">
      <h1 className="text-2xl font-bol text-center">Add Products</h1>
        <div className="w-full h-full">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:flex gap-8 w-full">
                    {/* Brand & Title */}
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input
                        type="text"
                        placeholder="Product Title"
                        className="w-full p-2 border border-black rounded-md"
                        {...register("title", { required: true })}
                        />
                        {errors.title && (
                        <p className="text-red-500 text-sm font-light">
                        Title is required
                        </p>
                        )}
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <input
                        type="text"
                        placeholder="Brand Name"
                        className="w-full p-2 border border-black rounded-md"
                        {...register("brand", { required: true })}
                        />
                        {errors.brand && (
                        <p className="text-red-500 text-sm font-light">
                        Brand is required
                        </p>
                        )}
                    </div>
                </div>
                <div className="lg:flex gap-8 w-full">
                    {/* Price & Stock */}
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                        type="number"
                        placeholder="Product Price"
                        className="w-full p-2 border border-black rounded-md"
                        {...register("price", { required: true })}
                        />
                        {errors.price && (
                        <p className="text-red-500 text-sm font-light">
                        Price is required
                        </p>
                        )}
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Stock</span>
                        </label>
                        <input
                        type="number"
                        placeholder="Stock Quantity"
                        className="w-full p-2 border border-black rounded-md"
                        {...register("stock", { required: true })}
                        />
                        {errors.stock && (
                        <p className="text-red-500 text-sm font-light">
                        Stock is required
                        </p>
                        )}
                    </div>
                </div>
                <div className="lg:flex gap-8 w-full">
                    {/* Category & SellerEmail */}
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input
                        type="text"
                        placeholder="Product Category"
                        className="w-full p-2 border border-black rounded-md"
                        {...register("category", { required: true })}
                        />
                        {errors.category && (
                        <p className="text-red-500 text-sm font-light">
                        Category is required
                        </p>
                        )}
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input
                        type="email"
                        placeholder="Seller Email"
                        className="w-full p-2 border border-black rounded-md"
                        {...register("sellerEmail", { required: true })}
                        />
                        {errors.sellerEmail && (
                        <p className="text-red-500 text-sm font-light">
                        Seller Email is required
                        </p>
                        )}
                    </div>
                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text">Product Description</span>
                    </label>
                    <textarea
                    type="text"
                    placeholder="Product Description"
                    className="w-full p-2 border border-black rounded-md"
                    {...register("description", { required: true })}
                    />
                    {errors.description && (
                    <p className="text-red-500 text-sm font-light">
                    Description is required
                    </p>
                    )}
                </div>
                <div className="my-8 flex justify-center">
                    <button type="submit" className="btn btn-outline w-full">Add Product</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default AddProducts;
