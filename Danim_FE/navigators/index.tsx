import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../views/Login';
import Main from '../views/Main';
import Register from '../views/Register';
import RegisterWait from '../views/RegisterWait';
import MyPage from '../views/Mypage';
import EditProfile from '../views/EditProfile';
import Search from '../views/SearchMain';
import ReservationList from '../views/ReservationList';
import Favorites from '../views/FavoritesMain';
import EditRegistration from '../views/EditRegistration';
import WriteReview from '../views/WriteReview';
import Reservation from '../views/Reservation';

export enum HomeScreens {
  Login = 'Login',
  Main = 'Main',
  Register = 'Register',
  RegisterWait = 'RegisterWait',
  MyPage = 'MyPage',
  EditProfile = 'EditProfile',
  EditRegistration = 'EditRegistration',
  WriteReview = 'WriteReview',
  TabNavigator = 'TabNavigator',
  Reservation = 'Reservation',
}

export type HomeStackParamList = {
  Login: any;
  Main: any;
  Register: any;
  RegisterWait: any;
  MyPage: any;
  EditProfile: any;
  EditRegistration: any;
  WriteReview: any;
  TabNavigator: any;
  names: any;
  Reservation: any;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

const Tab = createBottomTabNavigator();

const TabNavigator: React.FunctionComponent = ({route}: any) => {
  // 로그인 시 사용한 휴대전화 번호 가져오기
  const {userPhone} = route.params;
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName = '';
          if (route.name === '현재위치') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === '예약내역') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === '즐겨찾기') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === '내정보') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === '검색') {
            iconName = focused ? 'search' : 'search-outline';
          }
          return <Ionicons name={iconName} size={25} color={'#2C3E50'} />;
        },
      })}>
      <Tab.Screen name="현재위치" component={Main} />
      <Tab.Screen name="검색" component={Search} />
      <Tab.Screen
        name="예약내역"
        component={ReservationList}
        initialParams={{userPhone: userPhone}}
      />
      <Tab.Screen
        name="즐겨찾기"
        component={Favorites}
        initialParams={{userPhone: userPhone}}
      />
      <Tab.Screen
        name="내정보"
        component={MyPage}
        initialParams={{userPhone: userPhone}}
      />
    </Tab.Navigator>
  );
};

const HomeStackNavigator: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name={HomeScreens.Login} component={Login} />
        <HomeStack.Screen
          name={HomeScreens.TabNavigator}
          component={TabNavigator}
        />
        <HomeStack.Screen name={HomeScreens.Main} component={Main} />
        <HomeStack.Screen name={HomeScreens.Register} component={Register} />
        <HomeStack.Screen
          name={HomeScreens.RegisterWait}
          component={RegisterWait}
        />
        <HomeStack.Screen name={HomeScreens.MyPage} component={MyPage} />
        <HomeStack.Screen
          name={HomeScreens.EditProfile}
          component={EditProfile}
        />
        <HomeStack.Screen
          name={HomeScreens.EditRegistration}
          component={EditRegistration}
        />
        <HomeStack.Screen
          name={HomeScreens.WriteReview}
          component={WriteReview}
        />
        <HomeStack.Screen
          name={HomeScreens.Reservation}
          component={Reservation}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStackNavigator;
