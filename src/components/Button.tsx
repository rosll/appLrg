import React from 'react';
import { 
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from 'react-native'

//type ButtonProps = TouchableOpacityProps

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={styles.button}
      activeOpacity={0.8}
      {...rest}
    > 
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 10,
  },
  
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
})