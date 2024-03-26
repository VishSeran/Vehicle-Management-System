import "./searchItem.css";
import {Link} from "react-router-dom"

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.edition}</span>
        <span className="siTaxiOp">6cyl 3.0L Turbo Petrol</span>
        <span className="siSubtitle">
        1996 Series II 2JZ-GTE Twin Turbo Automatic 

        </span>
        <span className="siFeatures">
        {item.desc}
        </span>
        <span className="siCancelOp">Add to Wishlist </span>
        <span className="siCancelOpSubtitle">
        This Toyota Supra is in excellent condition, very clean and has been well looked after.
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">US ${item.price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/vehicle/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
