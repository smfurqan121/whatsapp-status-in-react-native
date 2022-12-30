// import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { ActivityIndicator, TextInput, TouchableOpacity, Switch, FlatList, Image, Button, StyleSheet, Text, View, } from 'react-native';
import { Camera, CameraType } from 'expo-camera';


export default function App() {
  // const [type, setType] = useState(CameraType.back);
  // const [permission, requestPermission] = Camera.useCameraPermissions();
  // const [currentImage, setCurrentImage] = useState()

  // if (!permission) {
  //   // Camera permissions are still loading
  //   return <View />;
  // }

  // if (!permission.granted) {
  //   // Camera permissions are not granted yet
  //   return (
  //     <View style={styles.container}>
  //       <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
  //       <Button onPress={requestPermission} title="grant permission" />
  //     </View>
  //   );
  // }
  // async function takePicture() {
  //   if (camera) {
  //     const options = { quality: 0.5 };
  //     const data = await camera.takePictureAsync(options);
  //     console.log(data.uri);
  //     setCurrentImage(data.uri)
  //   }
  // }

  // function toggleCameraType() {
  //   setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  // }





  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.head1}>
          <View><Text style={styles.whatsapp}>WhatsApp</Text></View>
          <View style={{ flexDirection: 'row', marginTop: 7, }}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/685/685655.png' }}
              style={{ width: 20, height: 20, marginRight: 25, }} />
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/54/54481.png' }}
              style={{ width: 20, height: 20, marginRight: 18, }} />
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2311/2311524.png' }}
              style={{ width: 20, height: 20 }} />
          </View>
        </View>
        <View style={styles.head2}>
          <View style={styles.groups}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/6910/6910775.png' }}
              style={{ width: 40, height: 40 }} />
          </View>
          <View style={styles.chats}>
            <Text style={{ color: '#8dcec3', fontSize: 15, marginTop: 10, marginRight: 5 }}>Chats</Text>
          </View>
          <View style={styles.status}>
            <Text style={{ color: '#e9f2f6', fontWeight: 'bold', fontSize: 15, marginTop: 10 }}>Status</Text>
          </View>
          <View style={styles.calls}>
            <Text style={{ color: '#8dcec3', fontSize: 15, marginTop: 10, marginLeft: 1 }}>Calls</Text>
          </View>

        </View>
      </View>
      <View style={styles.myStatus}>
        <View style={styles.profile}>
          <Image source={{ uri: 'https://pps.whatsapp.net/v/t61.24694-24/287330502_630420141820318_1203963895883701090_n.jpg?ccb=11-4&oh=01_AdSgkgBTbIJ4J-LP9eTyfuWsvi8jX2MFvDynUJdB_UnAMg&oe=63BB396D' }}
            style={{ width: 50, height: 50, borderRadius:25, }} />
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/148/148764.png' }}
            style={{ width: 25, height:25, position:'absolute', top:25, left:30,}} />

        </View>
        <View style={{marginLeft:18,marginTop:5,}}>
          <Text style={{fontWeight:'bold',fontSize:15,}}>My status</Text>
          <Text style={{color:'#999da1'}}>Tap to add status update</Text>
        </View>
      </View>
      <View style={styles.info}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25239.png' }}
                    style={{ width: 10, height:10, marginTop:4}} />
                    <Text style={{marginLeft:5,color:'#999da1', fontSize:12,}}>Your status update are end-to-end encrypted</Text>
      </View>
      <View style={styles.bottom}>
        <View>
          <View style={{width:50,height:50,borderRadius:25,backgroundColor:'#e9edf0',justifyContent:'center',alignItems:'center',marginRight:20,marginBottom:15}}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828911.png' }}
                    style={{ width:18, height:18,}} />
          </View>
          <View style={{width:50,height:50,borderRadius:25,backgroundColor:'#01a884',justifyContent:'center',alignItems:'center'}}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/45/45010.png' }}
                    style={{ width: 18, height:18,}} />
          </View>
        </View>
      </View>
      {/* {currentImage ?
        <View style={styles.camera}>
          <Image style={styles.camera} source={{ uri: currentImage }} />
          <Button title="Take new picture" onPress={() => setCurrentImage()} />
        </View>
        :
        <Camera ref={ref => camera = ref} style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Image
                style={styles.image}
                source={{ uri: 'https://static.thenounproject.com/png/99970-200.png' }} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Image
                style={styles.image}
                source={{ uri: 'https://expertizo.pk/img/logo-alt.png' }} />
            </TouchableOpacity>

            <View style={styles.button} />
          </View>
        </Camera>
      } */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    // marginTop: 50,
    flex: 1,
    alignItems: 'center',
    borderWidth:1,
  },
  header: {
    backgroundColor: '#008069',
    width: '100%',
    height: 130,
  },
  head1: {
    flexDirection: 'row',
    marginTop: 20,
    padding: 20,
    justifyContent: "space-between"


  },
  whatsapp: {
    color: 'white',
    fontSize: 20,
  },
  head2: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,

    flexDirection: 'row',
    width: '100%',
    justifyContent: "space-evenly",
  },
  groups: {
    marginLeft: -48,
  },
  status: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    width: 120,
    borderBottomColor: '#e7e9e8'
  },
  myStatus: {
    width: '100%',
    height: 85,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e4e7",
    padding:20,
    flexDirection:'row'
  },
  profile:{
    flexDirection:'row', 
  },
  info:{
    flexDirection:'row',
   marginTop:10,
  },
  bottom:{
    position:'absolute',
    width:'100%',
    alignItems:'flex-end',
    bottom:0,
    // borderWidth:2,
    marginBottom:18,
  }
  // camera: {
  //   flex: 1,
  // },
  // buttonContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'flex-end',
  //   marginBottom: 40
  // },
  // button: {
  //   flex: 1
  // },
  // text: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   color: 'white',
  // },
  // image: {
  //   width: 120,
  //   height: 80
  // }
});
