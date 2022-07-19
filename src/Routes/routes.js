import { HomePage, RoomPage, FavoritesPage, PostRommiePage } from '../Pages';
import { MainAdmin } from '../Pages/MainAdmin';

export const routes = {
    publics: [
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
            path: 'post',
            Component: PostRommiePage
        }
    ],
    privates: {
        arrendatario: [

        ],
        arrendante: [
            {
                id: 4,
                path: 'favorites',
                Component: FavoritesPage
            },
        ]
    }
}

export const routesAdmin = [
    {
        id: 5,
        path: '',
        Component: MainAdmin
    }
]