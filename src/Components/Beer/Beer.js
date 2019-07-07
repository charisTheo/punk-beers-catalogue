import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { 
  Image,
  Title,
  Subtitle,
  Card,
  Description,
  TagLine,
  Details 
} from "./../../StyledComponents/Beer";
import { Button } from './../../StyledComponents/global';

class Beer extends Component {
  
  render() {
    const { beer, expanded } = this.props;

    return (
      <Card isExpanded={expanded}>
        <Title isExpanded={expanded}>
          {beer.name}
        </Title>
        
        <Image 
          isExpanded={expanded}
          src={beer.image_url}
        />
        
        <Details isExpanded={expanded}>
          <Subtitle isExpanded={expanded}>
            ABV: {beer.abv}%
          </Subtitle>
          {expanded && 
            (
              <>
                <TagLine isExpanded={expanded}>
                  {beer.tagline}
                </TagLine>
                <Description isExpanded={expanded}>
                  {beer.description}
                </Description>
              </>
            )
          }
        </Details>

        {!expanded && 
          (
            <Link 
            to={`/beer/${beer.id}`}
            style={{order: 10}} 
            >
              <Button>More details</Button>
            </Link>
          )
        }

      </Card>
    )
  }
}

Beer.propTypes = {
  beer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    first_brewed: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    abv: PropTypes.number.isRequired, // percentage of alcohol by volume
  }),
  expanded: PropTypes.bool
};

export default Beer;
