import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'rgba(0,0,0,0.3)',
    borderWidth: 0.4,
    padding: 10,
  },
  logo: {
    marginRight: 10,
    marginTop: 5,
    height: 35,
    width: 35,
    borderRadius: 35,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 18,
    marginTop: 4,
    color: '#fff',
  },
  detailsWrap: {
    marginRight: 10,
    flex: 2,
  },
  preference: {
    textTransform: 'capitalize',
    opacity: 0.8,
  },
  name: {
    fontSize: 17,
  },
  actions: {
    alignItems: 'center',
  },
  actionText: {
    fontSize: 12,
    opacity: 0.7,
  },
  icon: {
    marginTop: 20,
    opacity: 0.8,
  },
});
