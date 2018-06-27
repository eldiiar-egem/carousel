import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Col, NavItem, Row} from "reactstrap";
import {Link} from "react-router-dom";

class Carousels extends Component {

  state = {
    carousels: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const carousels = await res.json();
      this.setState({
        carousels: carousels
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const items = this.state.carousels;
    return (<div>
        <ul className="messages">
          {
            items.map(this.mapItems)
          }
        </ul>
      </div>
    );
  }

  mapItems = (item, index) => {
    return <Carousel key={index} match={this.props.match} item={item}/>
  }
}

class Carousel extends Component {
  static propTypes = {
    match: PropTypes.any.isRequired,
    item: PropTypes.any.isRequired,
  };

  render() {
    let {match, item} = this.props;

    return (<NavItem
      className={`message`}>
      <Link to={`${match.url}/${item.id}`}>
        <Row>
          <Col>
            <span className={'message-title'}>{item.title}
            </span>
          </Col>
        </Row>
        <i>{item.description}</i>
      </Link>
    </NavItem>);
  }
}

export default Carousels;