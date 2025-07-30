export default function Album ({album}) {
    console.log(album);
    const {title} = album;
    return (
        <div className="card">
            <h3>Album: {album.title}</h3>
        </div>
    )
}