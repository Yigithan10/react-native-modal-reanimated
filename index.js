import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { height, width } from "./components/Dimensions";

const Modal = (props) => {
  let isOpen = props.isOpen;
  let onPress = props.onPress;
  let from = props.from;
  let damping = props.damping;
  let duration = props.duration;
  let type = props.type;
  let title = props.title;
  let text = props.text;
  let openModalBgColor = props.openModalBgColor;
  let backgroundOpacityP = props.backgroundOpacity;
  let twoButton = props.twoButton;
  let widthh = props.width;
  let heightt = props.height;
  let containerBgColor = props.containerBgColor;
  let containerBorderColor = props.containerBorderColor;
  let containerBorderWidth = props.containerBorderWidth;
  let containerBorderRadius = props.containerBorderRadius;
  let containerPadding = props.containerPadding;
  let containerIconSize = props.containerIconSize;
  let okButtonBgColor = props.okButtonBgColor;
  let noButtonBgColor = props.noButtonBgColor;
  let yesButtonBgColor = props.yesButtonBgColor;
  let buttonMinWidth = props.buttonMinWidth;
  let buttonHeight = props.buttonHeight;
  let buttonBorderRadius = props.buttonBorderRadius;
  let titleColor = props.titleColor;
  let titleSize = props.titleSize;
  let textColor = props.textColor;
  let textSize = props.textSize;
  let buttonTextColor = props.buttonTextColor;
  let buttonTextSize = props.buttonTextSize;
  let buttonTextBold = props.buttonTextBold;
  let okButtonOnPress = props.okButtonOnPress;
  let noButtonOnPress = props.noButtonOnPress;
  let yesButtonOnPress = props.yesButtonOnPress;
  let okButtonText = props.okButtonText;
  let noButtonText = props.noButtonText;
  let yesButtonText = props.yesButtonText;

  if (from === undefined) {
    from = "top";
  }

  if (damping === undefined) {
    damping = true;
  }

  if (duration === undefined) {
    duration = 300;
  }

  if (type === undefined) {
    type = "success";
  }

  if (title === undefined) {
    title = "Non";
  }

  if (text === undefined) {
    text = "Non";
  }

  if (okButtonText === undefined) {
    okButtonText = "Non";
  }

  if (noButtonText === undefined) {
    noButtonText = "Non";
  }

  if (yesButtonText === undefined) {
    yesButtonText = "Non";
  }

  if (openModalBgColor === undefined) {
    openModalBgColor = "gray";
  }

  if (backgroundOpacityP === undefined) {
    backgroundOpacityP = 0.5;
  }

  if (twoButton === undefined) {
    twoButton = true;
  }

  if (widthh === undefined) {
    widthh = "80%";
  }

  if (heightt === undefined) {
    heightt = "35%";
  }

  if (containerBgColor === undefined) {
    if (type == "success") {
      containerBgColor = "#DEF1D7";
    } else if (type == "info") {
      containerBgColor = "#ECF4FE";
    } else if (type == "warning") {
      containerBgColor = "#FEF7EC";
    } else if (type == "error") {
      containerBgColor = "#FAE1DB";
    }
  }

  if (containerBorderColor === undefined) {
    if (type == "success") {
      containerBorderColor = "#1F8722";
    } else if (type == "info") {
      containerBorderColor = "#1F5F87";
    } else if (type == "warning") {
      containerBorderColor = "#F08135";
    } else if (type == "error") {
      containerBorderColor = "#D9100A";
    }
  }

  if (containerBorderWidth === undefined) {
    containerBorderWidth = 1;
  }

  if (containerBorderRadius === undefined) {
    containerBorderRadius = 15;
  }

  if (containerPadding === undefined) {
    containerPadding = 10;
  }

  if (containerIconSize === undefined) {
    containerIconSize = 80;
  }

  if (okButtonBgColor === undefined) {
    okButtonBgColor = "gray";
  }

  if (noButtonBgColor === undefined) {
    noButtonBgColor = "gray";
  }

  if (yesButtonBgColor === undefined) {
    yesButtonBgColor = "gray";
  }

  if (buttonMinWidth === undefined) {
    buttonMinWidth = "30%";
  }

  if (buttonHeight === undefined) {
    buttonHeight = 35;
  }

  if (buttonBorderRadius === undefined) {
    buttonBorderRadius = 10;
  }

  if (titleColor === undefined) {
    titleColor = "black";
  }

  if (titleSize === undefined) {
    titleSize = 15;
  }

  if (textColor === undefined) {
    textColor = "black";
  }

  if (textSize === undefined) {
    textSize = 13;
  }

  if (buttonTextColor === undefined) {
    buttonTextColor = "white";
  }

  if (buttonTextSize === undefined) {
    buttonTextSize = 14;
  }

  if (buttonTextBold === undefined) {
    buttonTextBold = true;
  }

  if (okButtonOnPress === undefined) {
    okButtonOnPress = null;
  }

  if (noButtonOnPress === undefined) {
    noButtonOnPress = null;
  }

  if (yesButtonOnPress === undefined) {
    yesButtonOnPress = null;
  }

  const translateY = useSharedValue(
    from === "top" ? -height : from === "bottom" ? height : 0
  );
  const translateX = useSharedValue(
    from === "left" ? -width : from === "right" ? width : 0
  );

  const backgroundOpacity = useSharedValue(0);

  const generateBackgroundOpacity = () => {
    backgroundOpacity.value = withTiming(isOpen ? backgroundOpacityP : 0, {
      duration: duration,
      easing: Easing.inOut(Easing.ease),
    });
  };

  useEffect(() => {
    generateBackgroundOpacity();
  }, [isOpen]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: translateY.value },
        { translateX: translateX.value },
      ],
    };
  });

  const backgroundAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: backgroundOpacity.value,
    };
  });

  useEffect(() => {
    if (isOpen) {
      startAnimation(0);
    } else {
      startAnimation(
        from === "top"
          ? -height
          : from === "bottom"
          ? height
          : from === "left"
          ? -width
          : from === "right"
          ? width
          : -width
      );
    }
  }, [isOpen]);

  const startAnimation = (toValue) => {
    if (damping) {
      if (from == "top" || from == "bottom") {
        translateY.value = withSpring(toValue, {
          duration: duration,
          easing: Easing.inOut(Easing.ease),
        });
      } else {
        translateX.value = withSpring(toValue, {
          duration: duration,
          easing: Easing.inOut(Easing.ease),
        });
      }
      //   translateY.value = withSpring(toValue, {
      //     damping: 10,
      //     mass: 0.5,
      //     stiffness: 100,
      //     overshootClamping: false,
      //   });
    } else {
      if (from == "top" || from == "bottom") {
        translateY.value = withTiming(toValue, {
          duration: duration,
          easing: Easing.inOut(Easing.ease),
        });
      } else {
        translateX.value = withTiming(toValue, {
          duration: duration,
          easing: Easing.inOut(Easing.ease),
        });
      }
    }
  };

  return (
    <>
      <Animated.View
        style={[
          styles.outContain,
          backgroundAnimatedStyle,
          {
            backgroundColor: openModalBgColor,
          },
        ]}
        pointerEvents="none"
      />
      <Animated.View style={[styles.container, animatedStyle]}>
        <View
          style={[
            styles.contain,
            {
              width: widthh,
              height: heightt,
              backgroundColor: containerBgColor,
              borderColor: containerBorderColor,
              borderWidth: containerBorderWidth,
              borderRadius: containerBorderRadius,
              padding: containerPadding,
            },
          ]}
        >
          <View style={styles.flexImage}>
            <Image
              style={[
                styles.image,
                {
                  width: containerIconSize,
                  height: containerIconSize,
                },
              ]}
              source={
                type === "success"
                  ? require("./assets/success.png")
                  : type === "info"
                  ? require("./assets/info.png")
                  : type === "warning"
                  ? require("./assets/warning.png")
                  : require("./assets/error.png")
              }
            />

            <View style={styles.flexTitle}>
              <Text
                style={{
                  color: titleColor,
                  fontSize: titleSize,
                }}
              >
                {title.length > 30 ? title.substring(0, 30) + ".." : title}
              </Text>
            </View>
            <View style={styles.flexText}>
              <Text
                style={{
                  color: textColor,
                  fontSize: textSize,
                }}
              >
                {text.length > 60 ? text.substring(0, 60) + ".." : text}
              </Text>
            </View>
          </View>

          {twoButton ? (
            <View style={styles.flexTwoButton}>
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    backgroundColor: noButtonBgColor,
                    minWidth: buttonMinWidth,
                    height: buttonHeight,
                    borderRadius: buttonBorderRadius,
                  },
                ]}
                activeOpacity={0.8}
                onPress={noButtonOnPress}
              >
                <Text
                  style={{
                    color: buttonTextColor,
                    fontSize: buttonTextSize,
                    fontWeight: buttonTextBold ? "bold" : "normal",
                  }}
                >
                  {noButtonText}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={yesButtonOnPress}
                style={[
                  styles.button,
                  {
                    backgroundColor: yesButtonBgColor,
                    minWidth: buttonMinWidth,
                    height: buttonHeight,
                    borderRadius: buttonBorderRadius,
                  },
                ]}
                activeOpacity={0.8}
              >
                <Text
                  style={{
                    color: buttonTextColor,
                    fontSize: buttonTextSize,
                    fontWeight: buttonTextBold ? "bold" : "normal",
                  }}
                >
                  {yesButtonText}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: okButtonBgColor,
                  minWidth: buttonMinWidth,
                  height: buttonHeight,
                  borderRadius: buttonBorderRadius,
                },
              ]}
              activeOpacity={0.8}
              onPress={okButtonOnPress}
            >
              <Text
                style={{
                  color: buttonTextColor,
                  fontSize: buttonTextSize,
                  fontWeight: buttonTextBold ? "bold" : "normal",
                }}
              >
                {okButtonText}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  contain: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  outContain: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "contain",
  },
  flexImage: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  flexTitle: {
    margin: 5,
    marginTop: 16,
  },
  flexText: {
    margin: 5,
  },
  flexTwoButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    padding: 5,
  },
});

export default Modal;
