import React from "react";

const FavEntry = ({favdog}) => {
  return(
    <div className="fav-entry">
      <h3>Favorite Dog 1 Photo</h3>
      <div className="fav-photo">
        <img src={'hold'} />
      </div>
      <button>Remove from Favorites</button>
    </div>
  )
}

export default FavEntry;