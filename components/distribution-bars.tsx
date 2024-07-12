import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./distribution-bars.module.css";

export type DistributionBarsType = {
  className?: string;
  group?: string;
  marketing?: string;
  marketingName?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propPadding?: CSSProperties["padding"];
};

const DistributionBars: NextPage<DistributionBarsType> = ({
  className = "",
  group,
  marketing,
  marketingName,
  propLeft,
  propPadding,
}) => {
  const distributionBarsStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      padding: propPadding,
    };
  }, [propLeft, propPadding]);

  return (
    <div
      className={[styles.distributionBars, className].join(" ")}
      style={distributionBarsStyle}
    >
      <div className={styles.divOrder1}>
        <div className={styles.divMtAuto}>
          <div className={styles.wrapperGroup}>
            <img className={styles.groupIcon} alt="" src={group} />
          </div>
          <div className={styles.marketing}>{marketing}</div>
          <div className={styles.marketingName}>{marketingName}</div>
        </div>
      </div>
    </div>
  );
};

export default DistributionBars;
