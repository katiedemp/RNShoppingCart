import { StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight || 0,
  },
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  bottom: {
    flex: 3,
  },
  text: {
    textAlign: 'center',
  },
});

export default styles;
