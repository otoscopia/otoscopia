import React, { useState, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import storage from '@react-native-firebase/storage';

export const PostContext = createContext();

export default function PostProvider({ children }) {
  const [isPassed, setIsPassed] = useState(false);

  async function uploadRecordings(videoURI) {
    const reference = storage().ref('camera/screened/test.mp4');
    await reference.putFile(videoURI).then(data => {
      if (data.state === 'success') {
        setIsPassed(true);
      }
    });
  }

  const contextValue = useMemo(
    () => ({ isPassed, uploadRecordings }),
    [isPassed],
  );
  return (
    <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
  );
}

PostProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
