import React from "react";
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from './webConfig';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Note = ({ data }) => {

  const { todo, id } = data;

  const onDelete = async (id) => {
    // const todoDoc = doc(db, 'notes', id.todo);
    // await deleteDoc(todoDoc);
  }

  return (
    <View style={styles.note}>
      <Text style={styles.noteText}>{todo}</Text>

      <TouchableOpacity style={styles.noteDelete} onPress={onDelete(id)}>
        <Text style={styles.noteDeleteText}>X</Text>
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
    colro: 'white',
    fontWeight: '700',
    fontSize: 24,
  }
}

export default Note;