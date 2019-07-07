import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBeersAction } from './../../store/actions/actions';

import Beer from './../Beer/Beer';
import Sort from './Sort';

import { BeersList } from "./../../StyledComponents/HomePage";
import { Layout, Title, SortDropDown, Loader } from "./../../StyledComponents/global";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: null,
      order: null
    };
  }

  handleSortDropdownChange = (event) => {
    event.preventDefault();
    let options = event.target.value.split('-');
    let sortBy = options[0];
    let order = options[1];

    this.setState({
      sortBy,
      order
    })
  }

  componentDidMount() {
    // console.log("TCL: HomePage -> componentDidMount -> this.props", this.props)
    const { beers } = this.props;

    // if there are no beers inside the redux store fetch and save them
    if (!beers.length) {
      // will cause re-render
      this.props.getBeers();
    }
  }

  render() {
    const { beers, isLoading } = this.props;
    const { sortBy, order } = this.state;

    return (
      <Layout>
        <Title>Punk Beers</Title>
      
        <SortDropDown>
          <label>
            Sort by:
            <select name="sortBy" onChange={this.handleSortDropdownChange}>
              <option value="">-- Select an option --</option>
              <option value="name-asc">Beer name &#8595;</option>
              <option value="abv-asc">ABV &#8595;</option>
              <option value="name-dsc">Beer name &#8593;</option>
              <option value="abv-dsc">ABV &#8593;</option>
            </select>
          </label>
        </SortDropDown>

        {(beers && beers.length) ?
          <BeersList>
            <Sort sortBy={sortBy} order={order}>
            {beers.map(beer => (
                <li 
                  key={beer.id} 
                  name={beer.name} 
                  abv={beer.abv}
                >
                  <Beer beer={beer} />
                </li>
              ))}
            </Sort>
          </BeersList> :
          'Sorry, it looks like the barrels are empty for the moment!'
        }
        <Loader show={isLoading}/>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  beers: state.beers.beersArr,
  isLoading: state.ui.isLoading
});

const mapDispatchToProps = dispatch => ({
  getBeers: () => dispatch(getBeersAction())
});

export default HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
