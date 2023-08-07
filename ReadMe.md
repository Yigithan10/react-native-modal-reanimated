This is a custom modal with reanimated.
My build versions:
1- react-native-reanimated: 2.14.4

## Installation

```bash
  npm install react-native-modal-reanimated
```

## Doc

[react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)

## Usage

```js
    import React, { useState } from "react";
    import { SafeAreaView, Button } from "react-native";
    import Modal from "react-native-modal-reanimated";

    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleOpen = () => {
        setIsOpen(true);
    };

    const okButtonOnPress = () => {
        console.log("ok button pressed!");
        setIsOpen(false);
    };

    const noButtonOnPress = () => {
        console.log("no button pressed!");
        setIsOpen(false);
    };

    const yesButtonOnPress = () => {
        console.log("yes button pressed!");
        setIsOpen(false);
    };

    <SafeAreaView style={{ flex: 1 }}>
        <Button title="Open Modal" onPress={handleOpen} />

        <Modal
            isOpen={isOpen}
            onPress={handleClose}
            from="top"
            damping={true}
            duration={300}
            type="success" // success - info - warning - error
            title="Modal Title!"
            text="Modal Text."
            okButtonText={"Ok"}
            noButtonText={"No"}
            yesButtonText={"Yes"}
            openModalBgColor="gray"
            backgroundOpacity={0.5}
            twoButton={true}
            width="80%"
            height="35%"
            //containerBgColor="#DEF1D7" Automatically gives its own color for each type
            //containerBorderColor="#1F8722" Automatically gives its own color for each type
            containerBorderWidth={1}
            containerBorderRadius={15}
            containerPadding={10}
            containerIconSize={80}
            okButtonBgColor={"gray"}
            noButtonBgColor={"gray"}
            yesButtonBgColor={"gray"}
            buttonMinWidth={"30%"}
            buttonHeight={35}
            buttonBorderRadius={10}
            titleColor={"black"}
            titleSize={15}
            textColor={"black"}
            textSize={13}
            buttonTextColor={"white"}
            buttonTextSize={14}
            buttonTextBold={true}
            okButtonOnPress={okButtonOnPress}
            noButtonOnPress={noButtonOnPress}
            yesButtonOnPress={yesButtonOnPress}
        />
    </SafeAreaView>;
```

## API

| prop                    | type      | description               | default   |
| :---------------------- | :-------- | :------------------------ | :-------- |
| `isOpen`                | `Boolean` | Modal show.               | false     |
| `onPress`               | `Func`    | Modal close onPress.      | null      |
| `from`                  | `String`  | Modal from.               | "top"     |
| `damping`               | `Boolean` | Modal damping.            | true      |
| `duration`              | `Number`  | Modal duration.           | 300       |
| `type`                  | `String`  | Modal type.               | "success" |
| `title`                 | `String`  | Modal title.              | "Non"     |
| `text`                  | `String`  | Modal text.               | "Non"     |
| `okButtonText`          | `String`  | Modal okButtonText.       | "Non"     |
| `noButtonText`          | `String`  | Modal noButtonText.       | "Non"     |
| `yesButtonText`         | `String`  | Modal yesButtonText.      | "Non"     |
| `openModalBgColor`      | `String`  | Modal bg color            | "gray"    |
| `backgroundOpacity`     | `Number`  | Modal background opacity. | 0.5       |
| `twoButton`             | `Boolean` | Modal one or two button.  | true      |
| `width`                 | `String`  | Modal width.              | "80%"     |
| `height`                | `String`  | Modal height.             | "35%"     |
| `containerBgColor`      | `String`  | Modal bg color.           | "#DEF1D7" |
| `containerBorderColor`  | `String`  | Modal border color.       | "#1F8722" |
| `containerBorderWidth`  | `Number`  | Modal border width.       | 1         |
| `containerBorderRadius` | `Number`  | Modal border radius.      | 15        |
| `containerPadding`      | `Number`  | Modal padding.            | 10        |
| `containerIconSize`     | `Number`  | Modal icon size.          | 80        |
| `okButtonBgColor`       | `String`  | Modal btn bg color.       | "gray"    |
| `noButtonBgColor`       | `String`  | Modal btn bg color.       | "gray"    |
| `yesButtonBgColor`      | `String`  | Modal btn bg color.       | "gray"    |
| `buttonMinWidth`        | `String`  | Modal btn min width.      | "30%"     |
| `buttonHeight`          | `Number`  | Modal btn height.         | 35        |
| `buttonBorderRadius`    | `Number`  | Modal btn border radius.  | 10        |
| `titleColor`            | `String`  | Modal title color.        | "black"   |
| `titleSize`             | `Number`  | Modal title size.         | 15        |
| `textColor`             | `String`  | Modal text color.         | "black"   |
| `textSize`              | `Number`  | Modal text size.          | 13        |
| `buttonTextColor`       | `String`  | Modal text color.         | "white"   |
| `buttonTextSize`        | `Number`  | Modal text size.          | 14        |
| `buttonTextBold`        | `Boolean` | Modal text bold.          | true      |
| `okButtonOnPress`       | `Func`    | Modal ok btn onPress.     | null      |
| `noButtonOnPress`       | `Func`    | Modal no btn onPress.     | null      |
| `yesButtonOnPress`      | `Func`    | Modal yes btn onPress.    | null      |
