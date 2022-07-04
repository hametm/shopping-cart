function Product() {
    return (
        <div>
            <h3>Product Name</h3>
            <label htmlFor="itemAmount">Amount: </label>
            <input type="text" id="itemAmount" />
            <button>Increment/decrement</button>
            <button>Add to cart</button>
        </div>
    );
}

export default Product;