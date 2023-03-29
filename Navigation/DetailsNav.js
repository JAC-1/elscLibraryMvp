import { createStackNavigator } from "@react-navigation/stack";

import Details from "../Components/Home/Details";
import BooksOut from "../Components/Home/BooksOut";
import History from "../Components/Home/History";

export default function DetailsNav() {
  const DetailsStack = createStackNavigator();
  return (
    <DetailsStack.Navigator>
      <DetailsStack.Screen name="Details" component={Details} options={{ headerShown: false }} />
      <DetailsStack.Screen name="BooksOut" component={BooksOut} />
      <DetailsStack.Screen name="History" component={History} />
    </DetailsStack.Navigator>
  );
}
