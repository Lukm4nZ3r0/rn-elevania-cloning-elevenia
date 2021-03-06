import React, {Component} from 'react'
import {View, Text, TouchableOpacity, ScrollView} from 'react-native'

class Notifications extends Component{
    constructor(props){
        super(props)
        this.state = {
            currentButton:[
                {
                    key:0,
                    label:'Notifications'
                },
                {
                    key:1,
                    label:'History'
                }
            ],
            currentScreen:0
        }
    }
    static navigationOptions = ({navigation}) => {
        return {
            headerStyle: {
                backgroundColor : '#ff8040',
                elevation:0
            },
            headerTintColor: 'white',
            headerTitle: <Text style={{color:'white', fontWeight:'bold', fontSize:20}}>Notifications</Text>
            
        }
    }
    render(){
        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <View style={{flex:1, flexDirection:'row', elevation:5, backgroundColor:'white'}}>
                    {this.state.currentButton.map((button,i)=>
                    <TouchableOpacity onPress={()=>this.setState({currentScreen:button.key})} key={button.key} style={{flex:1, alignItems:'center', justifyContent:'center',}}>
                        <View style={{flex:6, alignItems:'center', justifyContent:'center'}}><Text style={{color: i == this.state.currentScreen ?'orange' : 'black'}}>{button.label}</Text></View>
                        <View style={{flex:1, backgroundColor: i == this.state.currentScreen ? 'orange' : 'white', width:'100%'}} />
                    </TouchableOpacity>
                    )}
                </View>
                <View style={{flex:10, width:'100%', backgroundColor:'#e8eaed'}}>
                    {this.state.currentScreen == 0 ? <Notification /> : <History />}
                </View>
            </View>
        )
    }
}

class Notification extends Component{
    render(){
        return(
            <ScrollView style={{flex:1, width:'100%', padding:10}}>
                <TouchableOpacity style={{flex:1, backgroundColor:'white', marginBottom:10, borderRadius:10, padding:10, width:'100%'}}>
                    <View style={{flex:1, position:'absolute', right:10, top:10}}>
                        <Text style={{color:'orange', fontSize:11}}>2 Juni 2019</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{color:'orange', fontWeight:'bold', fontSize:17}}>Order ID : 3AJB240</Text>
                        <Text>Anda memesan 'Kuaci' di Toko Cahaya Abadi</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, backgroundColor:'white', marginBottom:10, borderRadius:10, padding:10, width:'100%'}}>
                    <View style={{flex:1, position:'absolute', right:10, top:10}}>
                        <Text style={{color:'orange', fontSize:11}}>2 Juni 2019</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{color:'orange', fontWeight:'bold', fontSize:17}}>Order ID : 3AJB240</Text>
                        <Text>Anda memesan 'Kuaci' di Toko Cahaya Abadi</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

class History extends Component{
    render(){
        return(
            <ScrollView style={{flex:1, width:'100%', padding:10}}>
                <TouchableOpacity style={{flex:1, backgroundColor:'white', marginBottom:10, borderRadius:10, padding:10, width:'100%'}}>
                    <View style={{flex:1, position:'absolute', right:10, top:10}}>
                        <Text style={{color:'orange', fontSize:11}}>2 Juni 2019</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{color:'orange', fontWeight:'bold', fontSize:17}}>Order ID : 3AJB240</Text>
                        <Text>Pesanan 'Kuaci' anda sudah sampai.</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, backgroundColor:'white', marginBottom:10, borderRadius:10, padding:10, width:'100%'}}>
                    <View style={{flex:1, position:'absolute', right:10, top:10}}>
                        <Text style={{color:'orange', fontSize:11}}>2 Juni 2019</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{color:'orange', fontWeight:'bold', fontSize:17}}>Order ID : 3AJB240</Text>
                        <Text>Pesanan 'Kuaci' anda sudah sampai.</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

export default Notifications