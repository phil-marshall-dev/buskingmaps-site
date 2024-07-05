import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { api } from './utils';

type IUser = {
    username: string | null;
    email: string | null
    id: number;
} | null;

export type IReview = {
    title: string;
    preview: string;
    text: string;
    date: string;
    author: {
        username: string;
    };
    location: {
        name: string;
    }
    id: number;
};
;

type State = {
    latestReviews: IReview[];
    review: IReview | null;
    user: IUser;
    loginUser: (username: string, password: string) => void;
    registerUser: (username: string, password: string, email: string) => void;
    logoutUser: () => void;
    fetchLatestReviews: () => void;
    fetchReview: (reviewId: string) => void;
};

const useStore = create<State>()(devtools((set) => ({
    latestReviews: [],
    review: null,
    fetchReview: (reviewId: string) => {
        api.get(`api/reviews/${reviewId}`)
            .then(response => {
                set((state) => ({ review: response.data }));
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    },
    fetchLatestReviews: () => {
        api.get('api/reviews/')
            .then(response => {
                set((state) => ({ latestReviews: response.data }));
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    },
    user: null,
    loginUser: async (username: string, password: string) => {
        const response = await api.post('appauth/login', { username, password })
        set((state) => {
            return {
                user: {
                    username: response.data.username,
                    email: response.data.username,
                    id: response.data.id,
                }
            }
        });
    },
    registerUser: async (username: string, password: string, email: string) => {
        const response = await api.post('appauth/register', { username, email, password })
        set((state) => {
            return {
                user: {
                    username: response.data.username,
                    email: response.data.username,
                    id: response.data.id,
                }
            }
        });
    },
    logoutUser: () => {
        api.post('appauth/logout')
            .then(response => {
                set((state) => ({ user: null }));
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    },
})));
// client.post(
//     "/api/login",
//     {
//       email: email,
//       password: password
//     }
//   ).then(function(res) {
//     setCurrentUser(true);
//   });
// }
export { useStore };

