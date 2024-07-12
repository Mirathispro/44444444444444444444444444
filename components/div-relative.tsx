import type { NextPage } from "next";
import styles from "./div-relative.module.css";

export type DivRelativeType = {
  className?: string;
};

const DivRelative: NextPage<DivRelativeType> = ({ className = "" }) => {
  return (
    <div className={[styles.divRelative, className].join(" ")}>
      <img
        className={styles.iconMaskGroup}
        alt=""
        src="/icon-mask-group-1.svg"
      />
      <div className={styles.divMxAuto}>
        <div className={styles.h2BgGradientToBr}>
          <b className={styles.followOurJourney}>Follow Our Journey</b>
          <div className={styles.frame}>
            <b className={styles.takeYourBusiness}>take your business.</b>
          </div>
        </div>
        <div className={styles.theFirstFinancial}>
          The first financial tool you'll love. And the last one you'll ever
          need.
        </div>
      </div>
      <div className={styles.divDFlex}>
        <div className={styles.dlCol12}>
          <div className={styles.labelSrOnly}>
            <div className={styles.email}>{`Email `}</div>
            <div className={styles.address}>address</div>
          </div>
          <div className={styles.inputUserEmail}>
            <div className={styles.emailAddress}>Email address</div>
          </div>
        </div>
        <button className={styles.buttonBtnMktg}>
          <div className={styles.signUpFor}> Sign up for Whitelist</div>
        </button>
      </div>
      <div className={styles.divBorderTop} />
      <div className={styles.divAbsolute}>
        <div className={styles.divAspect1108632} />
      </div>
    </div>
  );
};

export default DivRelative;
