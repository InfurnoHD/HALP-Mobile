import { CustomTheme } from "../types/theme";

export const theme: CustomTheme = {
    light: {
        text: "#000000",
        outline: {
           outlineColor: "#201C24",
           activeOutlineColor: "#201C24"
        },
        background: "#E0EEF7",
        boxes: {
            backgroundColor: "#FFFFFF",
        },
        buttons: {
            backgroundColor: "#94CCFF",
            queueButton: "#90CAF9"
        },
        textButton: {
            color: "#686464",
        },
        listItem_light: {
            backgroundColor: "#FFFFFF",
        },
        listItem_dark: {
            backgroundColor: "#94CCFF",
        },
        iconColor: '#201C24',
        checkUncheck: '#0079C0'

    },

    dark: {
        text: "#FFFFFF",
        outline:{
            outlineColor: '#FFFFFF',
            activeOutlineColor: '#0070C0'
        } ,
        background: "#004082",
        boxes: {
            backgroundColor: "#0070C0",
          },
        buttons: {
            backgroundColor: "#0070C0",
            queueButton: "#004082"
        },
        textButton: {
            color: "#E0E0E0",
        },

        listItem_light: {
            backgroundColor: "#94CCFF"
        },
        listItem_dark: {
            backgroundColor: "#004082",
        },
        iconColor: '#E0E0E0',
        checkUncheck: '#FFFFFF'
        
    }
}