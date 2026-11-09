import type Theme from './Theme';
import type User from './User';

export default interface Post {
    id: number;
    title: string;
    date: string;
    theme: Theme | null;
    user: User | null;
}