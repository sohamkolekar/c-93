import React from 'react'
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import firebase from 'firebase';
import db from '../config'
import Db from '../db';
import {Audio} from 'expo-av'

export default class MyCalendar extends React.Component{
    constructor(){
        super()
        var tod=new Date()
        this.state={
         default:true,
         defaultMonth:tod.getMonth()+1
        }
    }
    playSound = async () => {
        await Audio.Sound.createAsync(
          { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
          { shouldPlay: true }
        );
    }
    showDay=(month)=>{
        var today=new Date();
        
        today.setMonth(month-1)
        today.setDate(1)
       
        
       
        var day=today.toDateString().split(' ')[0]
      console.log(today)
        var Matrix=Db[day][0]
        var spacing=Db[day][1]
        console.log(spacing)
        return(
            <View>
                {this.loop(31,Matrix,spacing)}
            </View>
            
        )
       
    }
    loop=(Button,Matrix,spacing)=>{
        var r=Math.ceil(Button/7)
        var loopResult=[]
        var y=0;
       
        console.log(Matrix)
            loopResult.push(
                <View key={0}>
            <View style={{ flexDirection:'row',marginStart:spacing }}>
                {this.renderButton(Button,Matrix)[0]}
            </View>
            <View style={{flexDirection:'row' }}>
                {this.renderButton(Button,Matrix)[1]}
            </View>
            <View style={{flexDirection:'row' }}>
            {this.renderButton(Button,Matrix)[2]}
            </View>
             <View style={{flexDirection:'row' }}>
             {this.renderButton(Button,Matrix)[3]}
             </View>
             <View style={{flexDirection:'row' }}>
             {this.renderButton(Button,Matrix)[4]}
             </View>
             <View style={{flexDirection:'row' }}>
             {this.renderButton(Button,Matrix)[5]}
             </View>
             
</View>
            )
            
        
        return loopResult
    }
    
    renderButton=(NoOfButton,matrix)=>{
        
        var button=[[],[],[],[],[],[],[],[],[]]
         var r=Math.ceil(NoOfButton/7)
         //[0,1,8,15,22,29,31]
         //[0,2,9,16,23,30,31]
         //[0,3,10,17,24,31]
         
         // [0,4,11,18,25,31]
         //[0,5,12,19,26,31]
         //[0,6,13,20,27,31]
         //
         //var matrix=[0,3,10,17,24,31]
         x=20
       console.log(matrix[3])
         for(let k=0;k<r+1;k++){
             start=matrix[k]
             x=x+1*k
             for(let i=start;i<matrix[k+1];i++){
                   
                 button[k].push(
                    
                     <View style={{marginTop:x}} key={i+1}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=>{
                                console.log(i+1)
                                this.props.navigation.navigate("todoEntryScreen")
                            }}
                            >
                                <Text
                                style={{fontSize:20,padding:10}}>
                                    {i+1}
                                </Text>
                        </TouchableOpacity>
                     </View>
                   
                    
                 )
                 
             }
        }   
            
           
        return button
     }
     renderRemainderButton=(NoOfButton)=>{

        var r=Math.ceil(NoOfButton/7)
        const remainder=NoOfButton%7
       var remainderArray=[]
       var remainderButton=[[],[],[],[]]
       var o      
        for(var h=(r-1)*7+1;h<=NoOfButton;h++){
        remainderArray.push(h)
       }
     const remainderHeight=30
        for(let g=0;g<remainder;g++){
            
            remainderButton.push(
                <View style={{marginTop:remainderHeight}}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>{
                                console.log(remainderArray[g])
                        }}>
                          <Text
                            style={{fontSize:20,padding:10}}>
                                {remainderArray[g]}
                            </Text>
                    </TouchableOpacity>
                </View>
            )

        }
        return remainderButton
     }
    render(){
        return(
           <View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
                 <MyHeader/>

               <View style={styles.daysRow}>        
               <Text style={{ fontSize:24,  marginStart:0}}>Mon</Text>
               <Text style={{ fontSize:24,  marginStart:13}}>Tue</Text>
               <Text style={{ fontSize:24,  marginStart:13}}>Wed</Text>
               <Text style={{ fontSize:24,  marginStart:13}}>Thu</Text>
               <Text style={{ fontSize:24,  marginStart:13}}>Fri</Text>
               <Text style={{ fontSize:24,  marginStart:13}}>Sat</Text>
               <Text style={{ fontSize:24,  marginStart:13}}>Sun</Text>
               </View>
            <View style={styles.container}>
             
                {console.log(this.state.defaultMonth)}
                {this.showDay(this.state.defaultMonth)}
             
               
             
               
                
               
               
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity style={{backgroundColor:'red',width:100,height:50,alignItems:'center'}}
                onPress={()=>{
                    this.setState({
                        defaultMonth:this.state.defaultMonth+1,
                        default:false,
                        
                    })
                   }}>
                    <Text>Button</Text>
                </TouchableOpacity>
            </View>

            </View>
        )
    }
}

var x=20,start=1
/*<View style={{flexDirection:'row' }}>
             {this.renderRemainderButton(Button)}
             </View>*/
const styles=StyleSheet.create({
    button:{
        backgroundColor:'yellow',
        width:50,
        height:50,
        borderWidth:1,
        marginStart:0
     
        
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignSelf:'center',
        flexDirection:'row',
        marginTop:0,   
       
        
        
        
    },
    daysRow:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'space-between',
        marginTop:20
       
    },
    box:{
          
    },
    mainContainer:{
        
        
    }

})