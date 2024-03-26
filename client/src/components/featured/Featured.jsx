import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const {data,loading,error} = useFetch("/vehicles/countByEdition?editions=Classic,Sports,OffRoad")
  

  return (
    <div className="featured">
     {loading? ("Loading please wait") : 
     <>  
     <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1579211897956-297c1150469a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Classic</h1>
          <h3>{data[0]} available</h3>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Sports</h1>
          <h3>{data[1]} available</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1585688458395-51aa0a34e9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Off Road</h1>
          <h3>{data[2]} available</h3>
        </div>
      </div></>}
    </div>
  );
};

export default Featured;
