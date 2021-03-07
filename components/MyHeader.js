import React from 'react';
import {View} from 'react-native'
import {Header, Icon} from 'react-native-elements'

export default class MyHeader extends React.Component{
    constructor(){
        super();
        this.state={
            states:''
        }

    }
    render(){
        return(   
           
                <Header
                leftComponent={<Icon name='bars' type='font-awesome' color='#588376' onPress={()=>this.function()}/>}
                centerComponent={{text:'Todo App',style:{color:'',fontSize:30,fontWeight:'400'}}}
                rightComponent={<Icon name='bars' type='font-awesome' color='#588376' onPress={()=>this.function()}/>}
                backgroundColor="#eaf8fe"
                />
            
        )
    }
}
