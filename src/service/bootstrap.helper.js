import * as Font from 'expo-font';
import { DB } from "./db.service";

export async function bootstrap() {
  try {
    await Font.loadAsync({
      'open-bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
      'open-regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
    })

    await DB.init()
    console.log('DB started...');
  } catch(e) {
    console.log(e);
  }
}