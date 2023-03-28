import { createStackNavigator } from "@react-navigation/stack";

import Title from "../Components/Login/TitleScreen";
import Register from "../Components/Login/RegisterScreen";
import Login from "../Components/Login/LoginScreen";
import Intro from "../Components/Login/IntroPopupScreen";

export default function LoginNavigation() {
	const LoginStack = createStackNavigator();
	return (
		<LoginStack.Navigator>
			<LoginStack.Screen name="Title" component={Title} />
			<LoginStack.Screen name="Register" component={Register} />
			<LoginStack.Screen name="Login" component={Login} />
			<LoginStack.Screen name="Intro" component={Intro} />
		</LoginStack.Navigator>
	);
}
