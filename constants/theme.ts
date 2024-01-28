import {
  MD3LightTheme as DefaultTheme,
  MD3Theme,
  adaptNavigationTheme,
  configureFonts,
} from "react-native-paper";

import {
  DefaultTheme as NavigationDefault,
  DarkTheme as NavigationDefaultDark,
} from "@react-navigation/native";

const fonts = configureFonts({
  config: { fontFamily: "RobotoRegular" },
  isV3: true,
});

const LightTheme: MD3Theme = {
  ...DefaultTheme,
  colors: {
    primary: "rgb(29, 95, 166)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(212, 227, 255)",
    onPrimaryContainer: "rgb(0, 28, 58)",
    secondary: "rgb(148, 74, 1)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(255, 220, 198)",
    onSecondaryContainer: "rgb(48, 20, 0)",
    tertiary: "rgb(45, 93, 167)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(215, 226, 255)",
    onTertiaryContainer: "rgb(0, 27, 63)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(253, 252, 255)",
    onBackground: "rgb(26, 28, 30)",
    surface: "rgb(253, 252, 255)",
    onSurface: "rgb(26, 28, 30)",
    surfaceVariant: "rgb(224, 226, 236)",
    onSurfaceVariant: "rgb(67, 71, 78)",
    outline: "rgb(116, 119, 127)",
    outlineVariant: "rgb(195, 198, 207)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(47, 48, 51)",
    inverseOnSurface: "rgb(241, 240, 244)",
    inversePrimary: "rgb(165, 200, 255)",
    elevation: {
      level0: "transparent",
      level1: "rgb(242, 244, 251)",
      level2: "rgb(235, 239, 248)",
      level3: "rgb(228, 235, 245)",
      level4: "rgb(226, 233, 244)",
      level5: "rgb(222, 230, 243)",
    },
    surfaceDisabled: "rgba(26, 28, 30, 0.12)",
    onSurfaceDisabled: "rgba(26, 28, 30, 0.38)",
    backdrop: "rgba(45, 49, 56, 0.4)",
  },
  fonts,
};

const DarkTheme: MD3Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(165, 200, 255)",
    onPrimary: "rgb(0, 49, 94)",
    primaryContainer: "rgb(0, 71, 133)",
    onPrimaryContainer: "rgb(212, 227, 255)",
    secondary: "rgb(255, 183, 132)",
    onSecondary: "rgb(80, 37, 0)",
    secondaryContainer: "rgb(113, 55, 0)",
    onSecondaryContainer: "rgb(255, 220, 198)",
    tertiary: "rgb(171, 199, 255)",
    onTertiary: "rgb(0, 47, 102)",
    tertiaryContainer: "rgb(6, 69, 142)",
    onTertiaryContainer: "rgb(215, 226, 255)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(26, 28, 30)",
    onBackground: "rgb(227, 226, 230)",
    surface: "rgb(26, 28, 30)",
    onSurface: "rgb(227, 226, 230)",
    surfaceVariant: "rgb(67, 71, 78)",
    onSurfaceVariant: "rgb(195, 198, 207)",
    outline: "rgb(141, 145, 153)",
    outlineVariant: "rgb(67, 71, 78)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(227, 226, 230)",
    inverseOnSurface: "rgb(47, 48, 51)",
    inversePrimary: "rgb(29, 95, 166)",
    elevation: {
      level0: "transparent",
      level1: "rgb(33, 37, 41)",
      level2: "rgb(37, 42, 48)",
      level3: "rgb(41, 47, 55)",
      level4: "rgb(43, 49, 57)",
      level5: "rgb(46, 52, 62)",
    },
    surfaceDisabled: "rgba(227, 226, 230, 0.12)",
    onSurfaceDisabled: "rgba(227, 226, 230, 0.38)",
    backdrop: "rgba(45, 49, 56, 0.4)",
  },
  fonts,
};

const { LightTheme: NavigationLightTheme, DarkTheme: NavigationDarkTheme } =
  adaptNavigationTheme({
    materialLight: LightTheme,
    materialDark: DarkTheme,
    reactNavigationLight: NavigationDefault,
    reactNavigationDark: NavigationDefaultDark,
  });

export { LightTheme, DarkTheme, NavigationLightTheme, NavigationDarkTheme };
