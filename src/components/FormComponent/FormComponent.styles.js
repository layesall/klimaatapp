import {StyleSheet} from 'react-native';

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
    borderColor: '#2980B9',
    borderWidth: 2,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  submit:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
    height: '100%',
    backgroundColor: '#2980B9',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
