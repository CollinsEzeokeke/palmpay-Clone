import { Stack } from 'expo-router';

import { 
    // StyleSheet,
     Text
    // , View
 } from 'react-native';

// import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Hi, Collins welcome to palmpay clone 2.0' }} />
      <Text>Hello world</Text>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//   },
// });
