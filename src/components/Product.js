function Product(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <label htmlFor="itemAmount">Amount: </label>
            <input type="text" id="itemAmount" />
            <button>Increment</button>
            <button onClick={() => props.addToCart(props)}>Add to cart</button>
        </div>
    );
}

export default Product;