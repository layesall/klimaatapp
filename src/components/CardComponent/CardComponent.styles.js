import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 10,
  },
  infoPrimeContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
    padding: 10,
  },
  city:{
    fontSize: 20
  },
  temperature:{
    fontSize: 70,
    fontWeight: 'bold',
  },
  infoSecondContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    padding: 10,
  },
  info:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 100,
    backgroundColor: colors.primary,
    color: colors.secondary,
    margin: 10,
  }
});
