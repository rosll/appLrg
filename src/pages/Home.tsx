import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Container, Title, Greeting, Input } from './styles'
import { Button } from '../components/Button/Button';
import { SkillCard } from '../components/SkillCard/SkillCard';

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

  useEffect(() => {
    async function loadData() {
      const storagedSkills = await AsyncStorage.getItem('@myskills:skills')
      if (storagedSkills) {
        setMySkills(JSON.parse(storagedSkills))
      } 
    }
    loadData()

    // async function removeAll() {
    //   await AsyncStorage.removeItem('@myskills:skills')
    // }
  }, [])

  useEffect(() => {
    async function saveData() {
      await AsyncStorage.setItem('@myskills:skills', JSON.stringify(mySkills))
    }
    saveData()
  }, [mySkills])

  return (
    <>
      <Container>
        <Title>Bem vindo, Romulo</Title>
        
        <Greeting>
          {greeting}
        </Greeting>

        <Input  
          placeholder='New Skill'
          placeholderTextColor='#555'
          value={newSkill}
          onChangeText={value => setNewSkill(value)}
        />

        <Button 
          title="Add"
          onPress={handleAddNewSkill}
        />

        <Title style={{marginVertical: 20}}>
          My Skills
        </Title>

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

      </Container>
    </>
  );
}
