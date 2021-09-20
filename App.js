import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import api from './utilities/api.js';


//import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


//This file was originally from App.js. It does not work as intended. 

/*

RESOURCES

https://blog.expo.dev/expo-react-native-nasa-apis-9b37ad03626e
https://reactnative.dev/docs/network
created new folder 'utilities' to hold api key -- not used in this example

https://reactnativeelements.com/docs/searchbar/

https://stackoverflow.com/questions/44545148/basic-flatlist-code-throws-warning-react-native

*/

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/


//testing tab based navigation
class HomeScreen extends React.Component{
  render(){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home YEA!!</Text>
    </View>
    );
  }

}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!!!!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

// main App display 
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


/* temp comment -- this is the main API call
//initial state before api fetch
export default class App extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {
      data: [],
      characterFirstName: "Vedna",
      characterLastName: "No'lute",
      characterServer: "midgardsormr",
      characterDataCenter: "NA",
      isLoading: true
    };
  }

  async getFflogs(){
    try {
      //const url = "https://www.fflogs.com:443/v1/parses/character/Vedna%20No'lute/midgardsormr/NA?zone=38&metric=dps&partition=1&timeframe=historical&api_key=8fb4d4d54bc4fca5944e561afffafbb9";
      const {characterFirstName, characterLastName, characterServer, characterDataCenter} = this.state;
      const url = `https://www.fflogs.com:443/v1/parses/character/${characterFirstName}%20${characterLastName}/${characterServer}/${characterDataCenter}?zone=38&metric=dps&partition=1&timeframe=historical&api_key=8fb4d4d54bc4fca5944e561afffafbb9`;
      console.log(url);
      const response = await fetch(url);
      const json = await response.json();
      this.setState({data: json})
    } catch(error){
      console.log(error);
    } finally {
      this.setState({isLoading: false});
    }
  }

  componentDidMount(){
    this.getFflogs();
  }

  render(){
    const {data, isLoading} = this.state;
    //console.log(isLoading);

    //if isLoading, display circular loading icon, else : display results of API fetch 
    return(
      <View style={styles.container}>
        <Text>{"\n"}</Text>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            //keyExtractor={reportID => reportID}
            renderItem={({item}) => (
              <Text> {item.encounterName}, {item.spec} , {Math.floor(item.percentile)}, {item.total}</Text>
            )}
            //reportID doesn't have unique identifier (aka primary keys, so using an integer count instead)
            keyExtractor={(item, index) => index.toString()}

          />
        )}
      <StatusBar style="auto" />
      </View> 
    );
  }

}

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
