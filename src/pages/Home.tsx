import React, { useState, useEffect } from 'react';
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
  const [greeting, setGreeting] = useState('')

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills([...mySkills, data])
    setNewSkill('')
  }

  function handleRemoveSkill(id: string) {
    setMySkills(mySkills => mySkills.filter(skill => skill.id !== id))
  }

  useEffect(() => {
    const currentHour = new Date().getHours()
    if (currentHour < 12) {
      setGreeting('Bom dia')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Boa tarde')
    } else {
      setGreeting('Boa noite')
    }
  }, [])

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Bem vindo, Romulo</Text>
        
        <Text style={styles.greetings}>
          {greeting}
        </Text>

        <TextInput 
          style={styles.input} 
          placeholder='New Skill'
          placeholderTextColor='#555'
          value={newSkill}
          onChangeText={value => setNewSkill(value)}
        />

        <Button 
          title="Add"
          onPress={handleAddNewSkill}
        />

        <Text style={[styles.title, {marginVertical: 20}]}>
          My Skills
        </Text>

        <FlatList 
          showsVerticalScrollIndicator={false}
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SkillCard 
              skill={item.name}
              onPress={() => handleRemoveSkill(item.id)}
            />
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

  greetings: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  }

})