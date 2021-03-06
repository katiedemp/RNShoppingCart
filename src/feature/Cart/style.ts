import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  list: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottom: {
    flex: 0,
    paddingBottom: 5,
    width: '100%',
  },
  text: {
    textAlign: 'center',
  },
});

export default styles;
