import React,{useState} from "react";
import { View,TextInput , Button} from "react-native";

const GoalInput = (props) => {
 const [changeText , SetchangeText] = useState("");
  return (
    <View
      style={{
        marginTop: 60,
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-between",
        
      }}
    >
      <TextInput
        placeholder="Goals Appke"
        style={{
          borderBottomColor: "black",
          width: "75%",
          borderWidth: 1,
          padding: 5,
        }}
        onChangeText={(changeText) => SetchangeText(changeText)}
        value={changeText}
      />
      <Button
        style={{ alignItems: "center", justifyContent: "center" }}
        title="Add"
        onPress={props.onButtonPress.bind(this, changeText)}
      />
    </View>
  );
};

export default GoalInput;
