import { StyleSheet } from 'react-native'
import colors from '../../theme/colors'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
  },
  logoText: {
    color: colors.secondary,
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
  }
})