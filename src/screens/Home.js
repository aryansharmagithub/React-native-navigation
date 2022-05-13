import React from 'react'
import { List } from 'react-native-paper';
import { StyleSheet, View } from 'react-native'

const Home = ({ navigation }) => {

  const navigate = (route) => navigation.navigate(route)
  return (
    <View styles={{ flex: 1 }}>
      <List.Accordion
        title="Exercise"
        left={props => <List.Icon {...props} icon="run-fast" />}>
        <List.Item title="Tab" onPress={() => navigate('Tab2')} />
      </List.Accordion>
      <List.Accordion
        title="Device"
        left={props => <List.Icon {...props} icon="devices" />}>
        <List.Item title="Tab" onPress={() => navigate('Contacts')} />
      </List.Accordion>
      <List.Accordion
        title="Health"
        left={props => <List.Icon {...props} icon="hand-heart" />}>
        <List.Item title="Tab" onPress={() => navigate('Products')} />
      </List.Accordion>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
