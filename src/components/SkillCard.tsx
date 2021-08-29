import React from 'react';
import { 
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList
} from 'react-native'

export function SkillCard() {
  return (
    <TouchableOpacity style={[styles.buttonSkill, {marginBottom: 10}]}>
      <Text style={styles.textSkill}>Test</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center'
  },

  textSkill: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  }
})