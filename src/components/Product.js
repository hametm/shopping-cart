function Product(props) {
    let amount;
    return (
        <div className="product">
            <img className="productImg" src={props.src} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <label htmlFor="itemAmount">Amount: </label>
            <input type="number" 
                id="itemAmount"
                min="0"
                onChange={(e) => {
                    amount = e.target.value;
                }} 
            />
            <button className="addBtn" onClick={() => props.addToCart(props, amount)}>Add to cart</button>
        </div>
    );
}

export default Product;