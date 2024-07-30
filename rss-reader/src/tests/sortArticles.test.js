import { describe, it, expect } from 'vitest';
import sortArticles from '../functions/sortArticles.js';
const articles = [
    { title: 'B', author: 'John', pubDate: '2023-01-01' },
    { title: 'A', author: 'Alice', pubDate: '2023-01-02' },
    { title: 'C', author: 'Bob', pubDate: '2022-12-31' },
];

describe('sortArticles', () => {
    it('should sort articles by date in ascending order by default', () => {
        const sorted = sortArticles(articles, 'date');
        expect(sorted).toEqual([
            { title: 'C', author: 'Bob', pubDate: '2022-12-31' },
            { title: 'B', author: 'John', pubDate: '2023-01-01' },
            { title: 'A', author: 'Alice', pubDate: '2023-01-02' },
        ]);
    });

    it('should sort articles by date in descending order', () => {
        const sorted = sortArticles(articles, 'date', 'descending');
        expect(sorted).toEqual([
            { title: 'A', author: 'Alice', pubDate: '2023-01-02' },
            { title: 'B', author: 'John', pubDate: '2023-01-01' },
            { title: 'C', author: 'Bob', pubDate: '2022-12-31' },
        ]);
    });

    it('should sort articles by title in ascending order', () => {
        const sorted = sortArticles(articles, 'title');
        expect(sorted).toEqual([
            { title: 'A', author: 'Alice', pubDate: '2023-01-02' },
            { title: 'B', author: 'John', pubDate: '2023-01-01' },
            { title: 'C', author: 'Bob', pubDate: '2022-12-31' },
        ]);
    });

    it('should sort articles by title in descending order', () => {
        const sorted = sortArticles(articles, 'title', 'descending');
        expect(sorted).toEqual([
            { title: 'C', author: 'Bob', pubDate: '2022-12-31' },
            { title: 'B', author: 'John', pubDate: '2023-01-01' },
            { title: 'A', author: 'Alice', pubDate: '2023-01-02' },
        ]);
    });

    it('should sort articles by author in ascending order', () => {
        const sorted = sortArticles(articles, 'author');
        expect(sorted).toEqual([
            { title: 'A', author: 'Alice', pubDate: '2023-01-02' },
            { title: 'C', author: 'Bob', pubDate: '2022-12-31' },
            { title: 'B', author: 'John', pubDate: '2023-01-01' },
        ]);
    });

    it('should sort articles by author in descending order', () => {
        const sorted = sortArticles(articles, 'author', 'descending');
        expect(sorted).toEqual([
            { title: 'B', author: 'John', pubDate: '2023-01-01' },
            { title: 'C', author: 'Bob', pubDate: '2022-12-31' },
            { title: 'A', author: 'Alice', pubDate: '2023-01-02' },
        ]);
    });

    it('should return the original array when sortBy is unknown', () => {
        const sorted = sortArticles(articles, 'unknown');
        expect(sorted).toEqual(articles);
    });
});
