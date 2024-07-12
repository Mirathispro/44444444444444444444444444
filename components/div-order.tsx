import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./div-order.module.css";

export type DivOrderType = {
  className?: string;
  generativeAIIPMonetizatio?: string;
  utilityCreationBuysellThr?: string;
  peerToPeerZeroKnowledgeVa?: string;

  /** Style props */
  propMinHeight?: CSSProperties["minHeight"];
};

const DivOrder: NextPage<DivOrderType> = ({
  className = "",
  generativeAIIPMonetizatio,
  utilityCreationBuysellThr,
  peerToPeerZeroKnowledgeVa,
  propMinHeight,
}) => {
  const divOrder1Style: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div
      className={[styles.divOrder1, className].join(" ")}
      style={divOrder1Style}
    >
      <div className={styles.divMtAuto}>
        <div className={styles.generativeAi}>{generativeAIIPMonetizatio}</div>
        <div className={styles.utilityCreationContainer}>
          <span className={styles.utilityCreationContainer1}>
            <ul className={styles.utilityCreationBuysellTh}>
              <li>{utilityCreationBuysellThr}</li>
            </ul>
          </span>
        </div>
        <div className={styles.peerToPeerZeroKnowledgeContainer}>
          <ul className={styles.peerToPeerZeroKnowledgeVa}>
            <li>{peerToPeerZeroKnowledgeVa}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DivOrder;
