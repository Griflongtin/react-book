import React from 'react';
import PropTypes from 'prop-types';

function Article(props){
  return(
    <div>
      <img src={props.profilePhoto} width="150px"></img>
      <h3>{props.name}</h3>
      <p>{props.article}</p>
    </div>
  );
}

Article.propType = {
  profilePhoto: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  article: PropTypes.string.isRequired
};

export default Article;
