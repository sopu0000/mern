import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import GoalInput from "./Components/GoalInput";
import GoalItem from "./Components/GoalItem";


const App = () => {
  const [SaveText, SetSaveText] = useState([]);

  // useEffect(()=>{
  //      fetch("https://jsonplaceholder.typicode.com/comments")
  //      .then(response =>response.json())
  //      .then(json=>SetTexto(json))
  // },[])

  const onPressHandler = (changeText) => {
    SetSaveText((SaveText) => [...SaveText, {key:Math.random().toString() , value:changeText}]);
  };

  console.log(SaveText);

  return (
    <View style={{ flex: 1 }}> 
             <GoalInput onButtonPress={onPressHandler}   />
      <View>
        
        <FlatList
          data={SaveText}
          keyExtractor={item=>item.key}
          renderItem={(itemData) => (
                    <GoalItem value={itemData.item.value}/>
          )}
        />
      </View>
    </View>
  );
};

export default App;
