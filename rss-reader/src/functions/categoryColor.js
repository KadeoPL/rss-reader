export default function categoryColor(category) {
    
    let color = ''
    
    switch (category) {
        case 'Business':
            color = 'bg-red-500'
            break;

        case 'Politics':
            color = 'bg-green-500'
            break;

        case 'Gear':
            color = 'bg-purple-700'
            break;
        
        case 'Security':
            color = 'bg-blue-500'
            break;
            
        case 'Culture':
            color = 'bg-rose-700'
            break;
            
        case 'Science':
            color = 'bg-cyan-700'
            break;
                                          
        default:
            color = 'bg-black'
            break;
    }
    
    return color
}