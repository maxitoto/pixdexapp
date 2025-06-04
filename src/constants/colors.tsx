export const colors = {
    fondo: "#1A1F2C",
    purpura: "#6E59A5",
    purpuraOscuro: "#4A3D70",
    purpuraClaro: "#9B87F5",
    verde: "#5FD068",
    grisOscuro: "#403E43",
    darkGreen: "#3A8041",
    red: "#EA384C",
    darkRed: "#B8212F",
    blue: "#33C3F0",
    darkBlue: "#1EAEDB",
    gray: "#8E9196",
    lightGray: "#F6F6F7",
} as const;

export type ColorName = keyof typeof colors;

