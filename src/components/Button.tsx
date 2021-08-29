import React from 'react';
import { 
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

export function Button() {
  return (
    <TouchableOpacity 
      style={styles.button}
      activeOpacity={0.8}
      //onPress={handleAddNewSkill}
    > 
      <Text style={styles.buttonText}>Add</Text>
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