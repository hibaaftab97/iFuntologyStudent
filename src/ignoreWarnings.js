

import { LogBox } from "react-native";

if (__DEV__) {
  const ignoreWarns = [
    "EventEmitter.removeListener",
    "exported from 'deprecated-react-native-prop-types'",
    "[fuego-swr-keys-from-collection-path]",
    "Setting a timer for a long period of time",
    "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
    "AsyncStorage has been extracted from react-native",
    "exported from 'deprecated-react-native-prop-types'.",
    "Non-serializable values were found in the navigation state.",
    "VirtualizedLists should never be nested inside plain ScrollViews",
  ];

  const warn = console.warn;
  console.warn = (...arg) => {
    for (const warning of ignoreWarns) {
      if (arg[0].startsWith(warning)) {
        return;
      }
    }
    warn(...arg);
  };

  LogBox.ignoreLogs(ignoreWarns);
}