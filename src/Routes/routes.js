import { HomePage, RoomPage, FavoritesPage, PostRommiePage } from '../Pages';

export const routes = [
    {
        id: 1,
        path: '/',
        Component: HomePage
    },
    {
        id: 2,
        path: 'rooms/:id',
        Component: RoomPage
    },
    {
        id: 3,
        path: 'favorites',
        Component: FavoritesPage
    },
    {
        id: 4,
        path: 'post',
        Component: PostRommiePage
    }
]