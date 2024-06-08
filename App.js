import { View } from "react-native";
import Card from "./src/type-weather/pages/dash/components/Card";

export default function App() {
  return (
    <View style={{display: "flex", justifyContent: "center", alignItems: "center", height: 500}}>
      <Card />
    </View>
  )
}
