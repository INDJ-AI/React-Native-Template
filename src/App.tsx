import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

import { Colors, Header, LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
import { SentryInit } from './configs/sentry';
import * as Sentry from '@sentry/react-native';

SentryInit();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Sentry.wrap(App);
