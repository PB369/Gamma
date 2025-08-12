import styles from'./css/PlaylistPage.module.scss'

const PlaylistPage = () => {
    return (
        <div className={styles.playlistPageContainer}>
            <p>Connect to your Spotify Account</p>
            <button>Let's begin</button>
        </div>
    )
}

export default PlaylistPage