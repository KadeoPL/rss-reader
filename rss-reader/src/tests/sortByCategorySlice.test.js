import { describe, it, expect } from 'vitest';
import sortByCategoryReducer, {
    selectCategory,
    diselectCategory,
    getCategoryToSort
} from '../redux/slices/sortByCategory.js';


const initialState = {
    category: {
        category: "all",
        color: "",
    },
};

describe('sortByCategory slice', () => {
    it('should return the initial state', () => {
        expect(sortByCategoryReducer(undefined, { type: undefined })).toEqual(initialState);
    });

    it('should handle selectCategory', () => {
        const action = {
            type: selectCategory.type,
            payload: { category: 'sports', color: 'blue' }
        };
        const expectedState = {
            category: {
                category: 'sports',
                color: 'blue'
            }
        };
        expect(sortByCategoryReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle diselectCategory', () => {
        const currentState = {
            category: {
                category: 'sports',
                color: 'blue'
            }
        };
        const action = { type: diselectCategory.type };
        const expectedState = {
            category: {
                category: 'all',
                color: 'bg-black'
            }
        };
        expect(sortByCategoryReducer(currentState, action)).toEqual(expectedState);
    });

    it('should return the correct category with getCategoryToSort selector', () => {
        const state = {
            sortByCategory: {
                category: {
                    category: 'sports',
                    color: 'blue'
                }
            }
        };
        expect(getCategoryToSort(state)).toEqual({ category: 'sports', color: 'blue' });
    });
});
