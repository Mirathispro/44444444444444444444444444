import type { NextPage } from "next";
import styles from "./n-f-t-pic.module.css";

export type NFTPicType = {
  className?: string;
  nFTPicture?: string;
  favoriteSeparator?: string;
};

const NFTPic: NextPage<NFTPicType> = ({
  className = "",
  nFTPicture,
  favoriteSeparator,
}) => {
  return (
    <div className={[styles.nftPic, className].join(" ")}>
      <img className={styles.nftPictureIcon} alt="" src={nFTPicture} />
      <div className={styles.favorites}>
        <div className={styles.favoritesIconContainer}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.favoriteSeparator}>{favoriteSeparator}</div>
        </div>
      </div>
    </div>
  );
};

export default NFTPic;
