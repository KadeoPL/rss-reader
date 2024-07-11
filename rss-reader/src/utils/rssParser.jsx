import axios from 'axios';

export default async function RSSParser(){
    const url = 'https://corsproxy.io/?' + encodeURIComponent('https://www.wired.com/feed/rss');
    try {
        const response = await axios.get(url);
        const data = new window.DOMParser().parseFromString(response.data, 'text/xml')
        
        const items = Array.from(data.querySelectorAll("item")).map(item => ({
            title: item.querySelector("title").textContent,
            link: item.querySelector("link").textContent,
            description: item.querySelector("description").textContent,
            pubDate: item.querySelector("pubDate").textContent,
            category: Array.from(item.querySelectorAll("category")).map(category => category.textContent),
        }));
        
      return items;
    } catch (e) {
        console.error(e);
    }
}