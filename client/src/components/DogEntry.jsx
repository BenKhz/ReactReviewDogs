// LESS INFO
import React, {Component} from "react";

class DogEntry extends Component {
  constructor(props) {
    super();
    this.state = {
      moreInfo: false
    }
  }
  render() {
    if (this.state.moreInfo) {
      return (
        <div class="list-entry">
          <div class="info">
            <h3>Dog Entry Name</h3>
            <div>Origin: Dog Entry Origin</div>
            <div>Bred For: Dog Entry Bred For</div>
            <div>Temperament: Dog Entry Temperament</div>
            <button>Add to Favorites</button>
            <button onClick={() => { this.setState({ moreInfo: !this.state.moreInfo }) }}>Less info</button>
          </div>
          <div class="photo">
            <img src={''} />
          </div>
        </div>
      )
    } else {
      return (
        <div className="list-entry">
          <div className="info">
            <h3>{this.props.dog.name}</h3>
            <button onClick={() => { this.props.handleFavorite(this.props.dog) }}>Add to Favorites</button>
            <button onClick={() => { this.setState({ moreInfo: !this.state.moreInfo }) }}>More info</button>
          </div>
          <div className="photo">
            <img src={this.props.dog.image.url} />
          </div>
        </div>
      )
    }
  }
}


export default DogEntry;