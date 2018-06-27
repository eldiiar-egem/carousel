import React, {Component} from 'react';

class Image extends Component {

  state = {
    images: []
  };

  async componentDidMount() {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/${this.props.match.params.number}`);
      const images = await res.json();
      this.setState({
        images: images
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const items = this.state.images;
    console.log(items, '--------------------------------');
    return (

      <div>
        <ul className="messages">
          {
            items.map(this.mapItems)
          }
        </ul>
      </div>
    );
  }

  mapItems = (item, index) => {
    console.log(item.location, item, '<<<<<<<<<<<<<<<<<<<<<<<<');
    return <div key={index}>
      <a><img src={item.location} alt="photo"/></a>
    </div>
  }
}

export default Image;