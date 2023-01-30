import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View , Button, FlatList, ActivityIndicator} from "react-native";
import axios from "axios";



const App = () => {
  /*function fetchData(){
    const response = axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }*/
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  async function fetchData(){

    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    setLoading(false);

    setData(response.data);
  }


  useEffect(() => {
    fetchData();
  }, []);

  function dataDelete(){
    setData([]);
  }

  const renderItem = ({item}) => {
    return(
      <View style={{borderRadius: 8,padding: 8,backgroundColor: '#ddd',margin: 25, alignItems: 'center'}}>
         <Text style={{fontWeight:'bold'}}>
            {item.name}
         </Text>
         <View style={{backgroundColor:'#0666c2',marginTop: 8 ,borderRadius: 5,padding: 8,alignItems: 'center'}}>
          <Text style={{color:'#fff', fontWeight: 'bold', fontSize: 15}}>
            {item.username}
          </Text>
          <Text style={{color:'#fff', fontWeight: 'bold', fontSize: 15}}>
            {item.email}
          </Text>
         </View>
      </View>
    );
  }


  return(
    <SafeAreaView>
      <View>
        <Button title="Fetch Data" onPress={fetchData} />
        <Button title="Delete Data" onPress={dataDelete} />


        {
          loading ? <ActivityIndicator style={{margin: 50,justifyContent:'center'}} size="large"/>
          :
          <FlatList
          data={data}
           renderItem={renderItem}

         />
        }
      </View>
    </SafeAreaView>
  );
};


export default App;
