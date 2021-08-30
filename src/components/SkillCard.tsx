import React from 'react';
import { 
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity 
      style={[styles.buttonSkill, {marginBottom: 10}]}
      {...rest}
    >
      <Text style={styles.textSkill}>
        {skill}
      </Text>
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