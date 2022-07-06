function Product(props) {
    return (
        <div className="product">
            <div id="imgContainer">
                <img className="productImg" src={props.src} alt={props.name} />
            </div>
            <h3>{props.name}</h3>
            <p>${(props.price).toFixed(2)}</p>
        </div>
    );
}

export default Product;