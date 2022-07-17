
import { FontAwesome } from '@expo/vector-icons'

export const getIcon = (name, color, size) => {
  return (
    <FontAwesome name={name} color={color} size={size} />
  )
}