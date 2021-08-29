import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput,
  Platform,
  FlatList
} from 'react-native'
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface ISkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<ISkillData[]>([])

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills([...mySkills, data])
    setNewSkill('')
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Bem Vindo, Romulo</Text>
        <TextInput 
          style={styles.input} 
          placeholder='New Skill'
          placeholderTextColor='#555'
          value={newSkill}
          onChangeText={value => setNewSkill(value)}
        />

        <Button />

        <Text style={[styles.title, {marginVertical: 20}]}>
          My Skills
        </Text>

        <FlatList 
          showsVerticalScrollIndicator={false}
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SkillCard />
          )}
        />

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },

  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  input: {
    padding: Platform.OS === 'ios' ? 15 : 6,
    backgroundColor: 'grey',
    borderRadius: 7,
    fontSize: 18,
    marginTop: 20,    
  },

})