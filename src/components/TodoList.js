export default function TodoList() {
    const list = [
        {name: 'item 1', id: '1'}, 
        {name: 'item 2', id: '2'}, 
        {name: 'item 3', id: '3'}, 

    ];
    return (
        <ul>
            {list.map(listItem =><li key={listItem.id}>{listItem.name}</li>)}
        </ul>
    )
}
