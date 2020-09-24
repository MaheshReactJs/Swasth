import React from 'react'
import {
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../src/Screens/Login'
import Otps from '../src/Screens/Otps'
import Lab from '../src/Screens/Lab'
import Pmr from '../src/Screens/Pmr'
import Labs from '../src/Screens/Labs'
import Documents from '../src/Screens/Document'
import Library from '../src/Screens/Library'
import AddToLabs from '../src/Screens/AddToLabs'
import Questioner from '../src/Screens/Questioner'
import Updatequestioner from '../src/Screens/Updatequestioner'
import Covid from '../src/Screens/Covid'
import Detailinfo from '../src/Screens/Detailinfo'
import CovidDetails from '../src/Screens/CovidDetails'
import Coviddescription from '../src/Screens/Coviddescription'
import Coviddocuments from '../src/Screens/Coviddocuments'
import UpdateDocs from '../src/Screens/UpdateDocs'

import Labsgallery from '../src/Screens/Labsgallery'


export const AppNavigator = createStackNavigator({
Login: {screen:Login,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
    mode: 'none',
  },

  Otps:{screen:Otps,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },

Pmr:{screen:Pmr,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
 
 
  Library:{screen:Library,
  navigationOptions: ({ navigation }) => ({
    header: null,
  }),
  },

  Labsgallery:{screen:Labsgallery,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },

AddToLabs:{screen:AddToLabs,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },

Questioner:{screen:Questioner,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },

Updatequestioner:{screen:Updatequestioner,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
Covid:{screen:Covid,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },

CovidDetails:{screen:CovidDetails,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },

Coviddocuments:{screen:Coviddocuments,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },

   Coviddescription:{screen:Coviddescription,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),

    },
   
 Detailinfo:{screen:Detailinfo,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
Documents:{screen:Documents,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
   },
  Lab:{screen:Lab,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
   },
  Labs:{screen:Labs,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
   },
  UpdateDocs:{screen:UpdateDocs,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
   },
  
  

}, {
 
  initialRouteName: 'Login',
  // initialRouteName: 'Questioner'
 
});

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer;