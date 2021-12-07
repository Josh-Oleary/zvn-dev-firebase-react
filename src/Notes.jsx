import React from "react";
import { doc, deleteDoc, collection, updateDoc, deleteField } from 'firebase/firestore';
import { db } from './webConfig';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Note = ({ data }) => {
  const { todo, id } = data;

  const onDelete = async (id) => {
      const todoRef = doc(db, 'notes', id)

      await updateDoc(todoRef, {
        todo: deleteField()
      })
      await deleteDoc(doc(db, 'notes', id))
  }

  return (
    <View style={styles.note}>
      <Text style={styles.noteText}>{todo}</Text>
      <TouchableOpacity style={styles.noteDelete} >
        <Text style={styles.noteDeleteText} onPress={() => {onDelete(id)}}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#3d3d3d',
    fontSize: 24,
  },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eb3148',
    padding: 20,
    top: 10,
    bottom: 10,
    right: 10,
  },
  noteDeleteText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 24,
  }
}

export default Note;