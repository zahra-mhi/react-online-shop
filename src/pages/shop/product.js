
export const Product = (props) => {
  return (

        <div className="col-4">
          <div className="m-3">
            <img className="w-100" src={props.data.productImage} alt="" />
            <h3>{props.data.productName}</h3>
            <h6>price: {props.data.price}$</h6>
            <button className="btn btn-sm btn-primary">+</button>
            <span className="mx-1">0</span>
            <button className="btn btn-sm btn-primary">-</button>
          </div>
        </div>
    
  );
};
