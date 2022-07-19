import { HomePage, RoomPage, FavoritesPage, PostRommiePage } from '../Pages';
import { MainAdmin } from '../Pages/MainAdmin';
import { MyPostRoomie } from '../Pages/MyPostRoomie';
import { MyRooms } from '../Pages/MyRooms';
import { NewRoom } from '../Pages/NewRoom';

export const routes = {
    publics: [
        // {
        //     id: 1,
        //     path: '/',
        //     Component: HomePage
        // },
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
            {
                id: 6,
                path: 'newroom',
                Component: NewRoom
            },
            {
                id: 7,
                path: 'myrooms',
                Component: MyRooms
            }
        ],
        arrendante: [
            {
                id: 4,
                path: 'favorites',
                Component: FavoritesPage
            },
            {
                id: 8,
                path: 'myposts',
                Component: MyPostRoomie
            }
            
        ],
        admin: [
            {
                id: 5,
                path: '',
                Component: MainAdmin
            }
        ]
    }
}