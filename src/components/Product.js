function Product(props) {
    let amount;
    return (
        <div>
            <h3>{props.name}</h3>
            <label htmlFor="itemAmount">Amount: </label>
            <input type="number" 
                id="itemAmount" 
                min="0" 
                // value="1" 
                onChange={(e) => {
                    amount = e.target.value;
                }} 
            />
            <button>Increment</button>
            <button onClick={() => props.addToCart(props, amount)}>Add to cart</button>
        </div>
    );
}

export default Product;