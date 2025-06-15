export const Task1 = () => {
    const photos= [
        {
            "albumId": 1,
            "id": 1,
            "title": "green",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
            "albumId": 1,
            "id": 2,
            "title": "purple",
            "url": "https://via.placeholder.com/600/771796",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
    ]

    return (
        <ul style={{listStyle: 'none', display: 'flex', gap: 20}}>
            {photos.map((photo) => (
                <li
                    key={photo.id}
                    style={{listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10}}
                >
                    <img src={photo.url} alt={photo.title} />
                    <span>AlbumId: {photo.albumId}</span>
                    <span>Title: {photo.title}</span>
                </li>
            ))}
        </ul>
    )
}
