import styles from "../style/preview.module.scss"

export default function Preview() {
    return (
        <div className={styles.preview}>
            <h2>预告片</h2>
            <div className={styles.media}>
                <video
                    controls
                    controlsList="nodownload"
                    className={styles.player}
                    src="http://vjs.zencdn.net/v/oceans.mp4"
                ></video>
            </div>
        </div>
    )
}
