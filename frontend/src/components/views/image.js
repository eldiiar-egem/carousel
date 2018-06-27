import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';
import PropTypes from 'prop-types';

class Image extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      showSlideModal: false,
      images: []
    };
  }

  toggleSlideModal = () => {
    this.setState({showSlideModal: !this.state.showSlideModal});
  };


  componentWillReceiveProps(props) {
    if (!this.props.isOpen && props.isOpen && props.photoIndex !== this.state.photoIndex) {
      this.setState({photoIndex: props.photoIndex});
    }
  }

  mapFilesBase = (f, i) => {
    return (
      <a onClick={() => this.setCurrentImageState(f)} key={i}
         target={'_blank'}>
        <img src={f} width={'25%'} height={'100%'}/>
      </a>
    );
  };

  setCurrentImageState(preview) {
    const index = this.state.images.findIndex(im => typeof im === "string" ? im === preview : im.location === preview);
    this.setState({currentImageIndex: index});
    this.toggleSlideModal();
  }

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
    const images = this.state.images.map((el) => el.location);
    return [
      <div key={'gallery'} className="responsive">
        <div className={"gallery"}>
          {images.map(this.mapFilesBase)}
        </div>
      </div>,
      <LightBoxGallery key={'light-box-gallery'} isOpen={this.state.showSlideModal}
                       images={images}
                       photoIndex={this.state.currentImageIndex}
                       onCloseCallBack={this.toggleSlideModal}
      />
    ]

  }
}


class LightBoxGallery extends React.Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    isOpen: PropTypes.bool,
    photoIndex: PropTypes.number.isRequired,
    onCloseCallBack: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {photoIndex: this.props.photoIndex};
  }

  componentWillReceiveProps(props) {
    if (!this.props.isOpen && props.isOpen && props.photoIndex !== this.state.photoIndex) {
      this.setState({photoIndex: props.photoIndex});
    }
  }

  toggleIsOpen = () => {
    return this.props.onCloseCallBack()
  };

  render() {
    const {images, isOpen} = this.props;
    const {photoIndex} = this.state;
    return isOpen && (
      <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        onCloseRequest={this.toggleIsOpen}
        onMovePrevRequest={() =>
          this.setState({
            photoIndex: (photoIndex + images.length - 1) % images.length,
          })
        }
        onMoveNextRequest={() =>
          this.setState({
            photoIndex: (photoIndex + 1) % images.length,
          })
        }
      />
    );
  }
}


export default Image;