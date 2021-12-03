import React from 'react';
import FavEntry from './FavEntry';

const Favorites = ({favList}) => {
  const favEntry = favList.map(favDog => <FavEntry favDog={favDog}/> )
  return (
    <div class="fav-cont">
  <h3 class="title">Favorites List</h3>
  <div class="fav-list">
    {favEntry}
  </div>
  </div>
  )
}

export default Favorites;
