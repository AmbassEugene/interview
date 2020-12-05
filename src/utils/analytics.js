import analytics from '@react-native-firebase/analytics';

/**
 *
 * @param {Object} event has $name and $description as properties
 */
export const logEvent = async (event) => {
  try {
    return await analytics().logEvent(`${event.name}`, {
      ...event.description,
    });
  } catch (error) {
    console.log('Error while logging event', error);
  }
};
