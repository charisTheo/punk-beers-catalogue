import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Loader } from '../../StyledComponents/global';
import Beer from './Beer';
import { getBeerAction } from '../../store/actions/beers';
import Nav from './../Nav/Nav';

export class BeerPage extends Component {
  constructor(props) {
    super(props);
    this.beer = null;
  }

  componentWillMount() {
    const {match} = this.props;
    const beerId = match.params.id;
    this.props.getBeer(beerId);
  }

  componentWillUpdate() {
    const {match} = this.props;
    const beerId = parseInt(match.params.id);
    // get from state
    // const beer = this.props.beers.find(beer => beer.id === beerId);
  
    if (!this.props.requestedBeer || this.props.requestedBeer.id !== beerId) {
      console.log("BeerPage.componentDidMount: beer not found in redux store and was not previously fetched. Calling the API...");
      this.props.getBeer(beerId);
    } 
  }

  render() {
    const { requestedBeer, isLoading } = this.props;

    return (
      <Layout>
        <Nav />

        {requestedBeer ? 
          <Beer expanded={true} beer={requestedBeer}/> : 
          'Sorry, the beer you are looking for has evaporated :/'
        }

        <Loader show={isLoading}/>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  beers: state.beers.beersArr,
  requestedBeer: state.beers.requestedBeer,
  isLoading: state.ui.isLoading
});

const mapDispatchToProps = dispatch => ({
  getBeer: (id) => dispatch(getBeerAction(id))
});

export default BeerPage = connect(mapStateToProps, mapDispatchToProps)(BeerPage);
