import React, { useState } from 'react';
import { TextInput, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { appStyles as styles} from './styles';

export default function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(["Learn React Native"]);

  const handleAddTaskPress = () =>{
    setTasks([...tasks, text]);
    setText("");
  };
  const handleDeleteTaskPress = (index) =>{
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <SafeAreaView style= {{ flex:1 }}>
      <View style= { styles.container }>
        <Text style = {styles.title}>My Tasks </Text>
        <Text style = {styles.subtitle}>Enter Your Tasks</Text>
        <TextInput 
          style = {styles.input}
          placeholder='Enter Your Task Here'
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style= { styles.buttonContainer } onPress={handleAddTaskPress}>
          <Text style= { styles.buttonText }>Add Task</Text>
        </TouchableOpacity>
        <View style = {styles.divider}/>
        <FlatList
          data={tasks}
          renderItem={({ item, index }) => 
            <View style = {styles.taskContainer}>
              <Text style = {styles.taskText}>{ item }</Text>
              <TouchableOpacity 
                onPress={() => handleDeleteTaskPress(index)}
                style = {styles.taskDelete}
              >
                <Text style = {styles.taskDeleteText}>X</Text>
              </TouchableOpacity>
            </View>
          }
          keyExtractor={(item) => item + Date.now() + Math.random()}
        />
      </View>
    </SafeAreaView>
  );
}
