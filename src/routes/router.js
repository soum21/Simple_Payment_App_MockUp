import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from '../components/pages/auth/login';
import Dash from '../components/pages/dashboard/dashboard';
import OwnAcc from '../components/pages/ownAccountTransfer/ownAccount';
import Desc from '../components/pages/description/description';
import Con from '../components/pages/confirm/confirm';
import Done from '../components/pages/done/done';

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

console.disableYellowBox = true;

const RouterComponent = () => {
    return (
        <Router navigationBarStyle={{ backgroundColor: 'transparent' }} >
            <Scene key="root">
                <Scene
                    key="Login"
                    component={Login}
                    title="Login"
                    tintColor="white"
                    hideNavBar={true}
                />
                <Scene
                    key="Dash"
                    component={Dash}
                    title="Transfer"
                    tintColor="white"
                    navTransparent={true}
                    renderBackButton={() => (null)}
                    hideBackImage
                />
                <Scene
                    key="OwnAcc"
                    component={OwnAcc}
                    title="Own Account Transfer"
                    tintColor="white"
                    navTransparent={true}
                />
                <Scene
                    key="Desc"
                    component={Desc}
                    title="Own Account Transfer"
                    tintColor="white"
                    navTransparent={true}
                />
                 <Scene
                    key="Con"
                    component={Con}
                    title="Own Account Transfer"
                    tintColor="white"
                    navTransparent={true}
                />
                <Scene
                    key="Done"
                    component={Done}
                    title="Own Account Transfer"
                    tintColor="white"
                    navTransparent={true}
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
