import React from 'react';
import VideoGrid from 'components/VideoGrid';
import PropTypes from 'prop-types';

function HomePage({isLightTheme}) {
  return (
    <VideoGrid isLightTheme={isLightTheme} />
  );
}

HomePage.propTypes = {
  isLightTheme: PropTypes.string,
};

export default HomePage;
