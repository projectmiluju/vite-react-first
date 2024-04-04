import Item from './Item'

export default function PackingList() {

    const PackingList = [
        'Space Suit',
        'Helmet with a golden leaf',
        'Photo of Tam'
    ];

    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item name={packingList[0]} />
                <Item name={packingList[1]} />
                <Item name={packingList[2]} />
            </ul>
        </section>
    )
}