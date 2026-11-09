import type Post from './Post';
export default interface User {
    id: number;
    name: string;
    username: string;
    password: string;
    photo: string;
    post?: Post[] | null;
}