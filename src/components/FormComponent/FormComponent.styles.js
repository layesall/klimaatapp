import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    with: '100%',
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input:{
    width: '90%',
    height: '100%',
    paddingHorizontal: 10,
    borderColor: colors.primary,
    borderWidth: 2,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  submit:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
    height: '100%',
    backgroundColor: colors.primary,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
