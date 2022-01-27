import React from "react";
import {View , Text} from "react-native" ; 

const GoalItem =(props)=>{
    return(
        
    <View
        style={{
          padding: 10,
          backgroundColor: "grey",
          borderColor: "black",
          borderWidth: 1,
          margin: 5,
          alignItems: "center",
        }}
      >
        <Text>{props.value}</Text>
    </View>

    )
}

export default GoalItem;