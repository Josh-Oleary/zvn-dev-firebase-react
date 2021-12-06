import React, { useState, useCallback, useEffect } from 'react'
import Note from './Notes'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { db } from './webConfig';
import { collection, getDocs, addDoc, deleteDoc, doc, Firestore } from 'firebase/firestore';

const Main = () => {

  const [notes, setNotes ] = useState([]);
  const [inputVal, setInputVal ] = useState('');
  const notesCollectionRef = collection(db, 'notes');

  useEffect(() => {

    const getNotes = async () => {
      const data = await getDocs(notesCollectionRef);
      setNotes(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }
    getNotes()
  }, [notes])

  const addTodo = async () => {
    // let id = 1;
    await addDoc(notesCollectionRef, { todo: inputVal });
    // increaseID(id);
  }

  // const increaseID = (id) => {
  //   return id++;
  // }



  return(

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Todos  </Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {notes.map((item, i) => (
          <Note data={item} key={i} />
        ))}
      </ScrollView>
    <View style={styles.footer}>
      <TextInput
        onChangeText={(userInput) => setInputVal(userInput)}
        value={inputVal}
        style={styles.textInput}
        placeholder='> Add todo'
        placeholderTextColor='#eee'
        underlineColorAndroid='transparent'>
      </TextInput>
    </View>
    <TouchableOpacity onPress={addTodo} style={styles.addButton}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#3d3d3d',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
    paddingTop: 10,
  },
  headerText: {
    color: '#ffd700',
    fontSize: 36,
    padding: 26,
    fontWeight: '500'
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#ffd700',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
    fontSize: 32,
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 100,
    backgroundColor: '#3d3d3d',
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#ffd700',
    fontSize: 26,
    fontWeight: '700',
  }
});

export default Main;