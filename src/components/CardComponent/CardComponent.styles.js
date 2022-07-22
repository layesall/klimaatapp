import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
  },
  infoPrimeContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
    padding: 10,
  },
  temperature:{
    fontSize: 70,
    fontWeight: 'bold',
  },
  city:{
    fontSize: 20
  },
  description:{
    fontSize: 15,
    color: colors.gray,
    marginVertical: 10,
  },
  infoSecondContainer:{
    padding: 10,
  },
  info:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "100%",
    height: 50,
    backgroundColor: colors.secondary,
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
  },
  infoText:{
    color: colors.dark,
  }
});
