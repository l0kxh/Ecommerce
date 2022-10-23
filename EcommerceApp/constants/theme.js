export const COLORS = {
    primary: "#2df3c3",
    secondary: "#4D626C",

    white: "#FFF",
    gray: "#74858C",
};

export const SIZES = {
    base: 8,
    small: 10,
    font: 14,
    medium: 16,
    large: 18,
    extraLarge: 24,
};

export const FONTS = {
    bold: "PoppinsBold",
    semiBold: "PoppinsSemiBold",
    medium: "PoppinsMedium",
    regular: "PoppinsRegular",
    light: "PoppinsLight",
};

export const SHADOWS = {
    light: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    medium: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    dark: {
        shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 12,
        },
        shadowOpacity: 1,
        shadowRadius: 14,

        elevation: 30,
    },
};
