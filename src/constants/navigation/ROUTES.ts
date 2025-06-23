import { Href } from "expo-router";

export type Route = keyof typeof ROUTES;

export const ROUTES: Record<string, Href> = {
    HOME: "/",
    DETAIL: "/detail/",
    GAMES: "/games/",
    HANGMAN: "/games/hangman/",
    PIXELREVEAL: "/games/pixelreveal/",
};