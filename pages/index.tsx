import type { NextPage } from "next";
import DivOrder from "../components/div-order";
import NFTPic from "../components/n-f-t-pic";
import DistributionBars from "../components/distribution-bars";
import DivRelative from "../components/div-relative";
import styles from "./index.module.css";

const Screen1: NextPage = () => {
  return (
    <div className={styles.screen}>
      <main className={styles.divOverflowClip}>
        <section className={styles.frameParent}>
          <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
          <img
            className={styles.emptyContainerIcon}
            alt=""
            src="/frame-1@2x.png"
          />
          <textarea className={styles.divUserSelectNone} rows={10} cols={30} />
        </section>
        <section className={styles.frameGroup}>
          <div className={styles.frame}>
            <div className={styles.pageFooterParent}>
              <header className={styles.pageFooter}>
                <div className={styles.pageFooterInner}>
                  <div className={styles.frameContainer}>
                    <div className={styles.logoWrapper}>
                      <div className={styles.logo}>
                        <img
                          className={styles.logoShapeIcon}
                          loading="lazy"
                          alt=""
                          src="/rectangle-4@2x.png"
                        />
                        <a className={styles.hihami}>IDEA-ENGINE</a>
                      </div>
                    </div>
                    <div className={styles.listDLgFlex}>
                      <div className={styles.frameDiv}>
                        <div className={styles.divDInlineBlockWrapper}>
                          <div className={styles.divDInlineBlock} />
                        </div>
                        <a className={styles.whitePaper}>WHITE-PAPER</a>
                      </div>
                      <div className={styles.frameParent1}>
                        <div className={styles.divDInlineBlockContainer}>
                          <div className={styles.divDInlineBlock1} />
                        </div>
                        <a className={styles.visualNovel}>VISUAL NOVEL</a>
                      </div>
                      <div className={styles.listDLgFlexInner}>
                        <div className={styles.frameParent2}>
                          <div className={styles.divDInlineBlockFrame}>
                            <div className={styles.divDInlineBlock2} />
                          </div>
                          <a className={styles.demo}>DEMO</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.buttonGroup}>
                  <div className={styles.spanAbsolute} />
                  <div className={styles.spanAbsolute1} />
                  <div className={styles.divRelative}>
                    <a className={styles.connectWallet}>Connect Wallet</a>
                  </div>
                </div>
              </header>
              <div className={styles.frame1}>
                <div className={styles.frame2}>
                  <div className={styles.frame3}>
                    <div className={styles.aiWearableCryptoWrapper}>
                      <h1 className={styles.aiWearable}>
                        AI - WEARABLE CRYPTO
                      </h1>
                    </div>
                    <h1 className={styles.collectiblesEcosystem}>
                      COLLECTIBLES ECOSYSTEM
                    </h1>
                  </div>
                  <div className={styles.gamifiedDepinAiCompanionParent}>
                    <div className={styles.gamifiedDepin}>
                      Gamified DePin + AI companion System on wearable
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.buttonGroupParent}>
                        <div className={styles.buttonGroup1}>
                          <div className={styles.spanAbsolute2} />
                          <button className={styles.divRelative1}>
                            <div className={styles.privateSale}>
                              Private - Sale
                            </div>
                            <div className={styles.spanAbsolute3} />
                          </button>
                        </div>
                        <div className={styles.buttonGroup2}>
                          <div className={styles.spanAbsolute4} />
                          <div className={styles.divRelative2}>
                            <div className={styles.spanAbsolute5}>
                              <div className={styles.whitelist}>Whitelist</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.divPerspective1500px}>
                  <img
                    className={styles.divTsparticlesIcon}
                    alt=""
                    src="/div-tsparticles@2x.png"
                  />
                  <div className={styles.theIdeaEngineContainer}>
                    <span className={styles.theIdeaEngineContainer1}>
                      <span>
                        The IDEA Engine is built on the foundational principles
                        of decentralization, gamification, and personalized
                        AI-driven interactions. System is designed to act as a
                        personal mentor, guiding users through various aspects
                        of self-development. Wearable NFTs enable AI-automated
                        chatting with encrypted notes, trading ZK NFT bundles
                        and AI avatars via a smartwatch, and creating habit and
                        to-do lists. Users can set triggers, choose API models,
                        and create DAO pools for posting wearable ZK NFTs,
                        paying pool owners with ERC-20 tokens, including meme
                        coins.
                      </span>
                      <span className={styles.productArchitecture}>
                        {" "}
                        Product architecture leverages the power of WEB3
                      </span>
                    </span>
                  </div>
                  <div className={styles.divPerspective1500pxInner}>
                    <div className={styles.howIdeaEngineParent}>
                      <h1
                        className={styles.howIdeaEngine}
                      >{`How Idea-engine  `}</h1>
                      <h1 className={styles.works}>Works?</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divAbsolute}>
                <div className={styles.copyOfIdeaEngineEcosystem}>
                  <div className={styles.frameParent3}>
                    <img
                      className={styles.frameIcon1}
                      alt=""
                      src="/frame-2@2x.png"
                    />
                    <img
                      className={styles.frameIcon2}
                      alt=""
                      src="/frame-3.svg"
                    />
                    <img
                      className={styles.frameIcon3}
                      alt=""
                      src="/frame-4@2x.png"
                    />
                  </div>
                  <div className={styles.copyOfIdeaEngineEcosystemInner}>
                    <div className={styles.frameParent4}>
                      <div className={styles.divOrder1Wrapper}>
                        <button className={styles.divOrder1}>
                          <a className={styles.thought}>Thought</a>
                        </button>
                      </div>
                      <button className={styles.divOrder11}>
                        <div className={styles.imagination}>Imagination</div>
                      </button>
                    </div>
                  </div>
                  <div className={styles.nestedBeliefParent}>
                    <div className={styles.nestedBelief}>
                      <div className={styles.divOrder12}>
                        <div className={styles.aaa}>Action</div>
                      </div>
                      <img
                        className={styles.emptyNestedIcon}
                        alt=""
                        src="/frame-5@2x.png"
                      />
                      <div className={styles.innerBelief}>
                        <img
                          className={styles.deepNestedIcon}
                          alt=""
                          src="/frame-6@2x.png"
                        />
                        <div className={styles.deepBelief}>
                          <button className={styles.divOrder13}>
                            <div className={styles.emotion}>Emotion</div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={styles.outerBelief}>
                      <img
                        className={styles.outermostBeliefIcon}
                        alt=""
                        src="/frame-7@2x.png"
                      />
                      <div className={styles.divOrder14}>
                        <div className={styles.belief}>Belief</div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.emptyFooterOne}
                  alt=""
                  src="/frame-8.svg"
                />
                <div className={styles.divUserSelectNone1} />
                <div className={styles.utilityCreationBuysellThrParent}>
                  <img
                    className={styles.utilityCreationBuysellThr}
                    alt=""
                    src="/utility-creation--buysell-threads-as-nfts-with-desired-cryptocurrency-peertopeer-zero-knowledge-variable-exchange-with-ai-agents-5-2@2x.png"
                  />
                  <img
                    className={styles.iconMaskGroup}
                    alt=""
                    src="/icon-mask-group.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.frame4}>
                <div className={styles.nestedGames}>
                  <div className={styles.wrapperDivCol1}>
                    <img
                      className={styles.divCol1Icon}
                      loading="lazy"
                      alt=""
                      src="/div-col1.svg"
                    />
                  </div>
                  <div className={styles.spanTextZinc200}>
                    <div className={styles.frame5}>
                      <div className={styles.flexibleToolkit}>
                        flexible toolkit
                      </div>
                    </div>
                    <div className={styles.a}>{`a `}</div>
                  </div>
                  <div className={styles.miniGamesToLevelUpYourDeParent}>
                    <div className={styles.miniGamesToLevel}>
                      mini-games to level up your desired Identity on smartwatch
                    </div>
                    <h1 className={styles.gamifiedDepin1}>
                      Gamified DePin + AI
                    </h1>
                    <div className={styles.smartwatchDetails}>
                      <div className={styles.nestedFeature}>
                        <div className={styles.innerFeature}>
                          <div className={styles.divOrder15}>
                            <div className={styles.divMtAuto}>
                              <div className={styles.wrapperGroup}>
                                <img
                                  className={styles.groupIcon}
                                  loading="lazy"
                                  alt=""
                                  src="/group.svg"
                                />
                              </div>
                              <div className={styles.onSmartwatch}>
                                <span>On</span>
                                <span className={styles.span}>{` `}</span>
                                <span>Smartwatch</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.emptyFeatureIcon}
                          alt=""
                          src="/frame-9@2x.png"
                        />
                      </div>
                      <div className={styles.nFTDetails}>
                        <div className={styles.divOrder16}>
                          <div className={styles.divMtAuto1}>
                            <div className={styles.newTypeOf}>
                              New Type Of NFTS on smartwatch
                            </div>
                            <div className={styles.threadsTextImagesContainer}>
                              <ul className={styles.threadsTextImagesGifsA}>
                                <li>
                                  Threads (text, images, gifs, audio,) on the
                                  smartwatch.
                                </li>
                              </ul>
                            </div>
                            <div
                              className={
                                styles.aiNftsForSelfImprovementContainer
                              }
                            >
                              <ul className={styles.aiNftsForSelfImprovementA}>
                                <li>
                                  AI-NFTS for self-improvement and personal
                                  development.
                                </li>
                              </ul>
                            </div>
                            <div
                              className={styles.encryptedPrivateDataContainer}
                            >
                              <ul
                                className={styles.encryptedPrivateDataVariabl}
                              >
                                <li>
                                  Encrypted private data variables + AI prompts
                                  sharing platform
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.frameIcon4}
                          alt=""
                          src="/frame-10@2x.png"
                        />
                      </div>
                      <div className={styles.aIAvatar}>
                        <div className={styles.frame6}>
                          <div className={styles.frame7}>
                            <div className={styles.frame8}>
                              <div className={styles.divOrder17}>
                                <div className={styles.divMtAuto2}>
                                  <div className={styles.wrapperGroup1}>
                                    <img
                                      className={styles.groupIcon1}
                                      alt=""
                                      src="/group-1.svg"
                                    />
                                  </div>
                                  <div className={styles.aiAvatarSystem}>
                                    AI Avatar System
                                  </div>
                                </div>
                                <div className={styles.interactiveDevice}>
                                  <div
                                    className={
                                      styles.interactiveSelfDevelopment
                                    }
                                  >
                                    Interactive Self Development device
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              className={styles.frameIcon5}
                              alt=""
                              src="/frame-11@2x.png"
                            />
                          </div>
                          <div className={styles.frame9}>
                            <div className={styles.wrapperFrame}>
                              <img
                                className={styles.frameIcon6}
                                alt=""
                                src="/frame-12@2x.png"
                              />
                            </div>
                            <div className={styles.frame10}>
                              <img
                                className={styles.clipPathGroup}
                                loading="lazy"
                                alt=""
                                src="/clip-path-group@2x.png"
                              />
                              <div className={styles.divOrder18}>
                                <div className={styles.phoneControllerLabel}>
                                  <div className={styles.wrapperGroup2}>
                                    <img
                                      className={styles.groupIcon2}
                                      alt=""
                                      src="/group-1.svg"
                                    />
                                  </div>
                                </div>
                                <div className={styles.platformControllerOn}>
                                  Platform controller on phone
                                </div>
                              </div>
                              <div className={styles.frame11} />
                            </div>
                          </div>
                        </div>
                        <DivOrder
                          generativeAIIPMonetizatio={`Generative AI & IP monetization platform`}
                          utilityCreationBuysellThr=" Utility creation - buy/sell threads as NFTS with desired cryptocurrency."
                          peerToPeerZeroKnowledgeVa=" Peer-to-Peer Zero Knowledge Variable Exchange with AI agents"
                        />
                      </div>
                      <div className={styles.frame12} />
                    </div>
                  </div>
                </div>
                <div className={styles.frame13}>
                  <div className={styles.wrapperDivCol11}>
                    <img
                      className={styles.divCol1Icon1}
                      alt=""
                      src="/div-col1.svg"
                    />
                  </div>
                  <div className={styles.questNFTDetails}>
                    <div className={styles.frame14}>
                      <div className={styles.spanTextZinc2001}>
                        <div className={styles.frame15}>
                          <div className={styles.flexibleToolkit1}>
                            flexible toolkit
                          </div>
                        </div>
                        <div className={styles.a1}>{`a `}</div>
                      </div>
                      <div className={styles.questNFTContent}>
                        <h1 className={styles.questnftGames}>
                          Quest/NFT games
                        </h1>
                        <div className={styles.questNFTDescription}>
                          <div className={styles.miniGamesToLevel1}>
                            mini-games to level up your desired Identity on
                            smartwatch
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.frameIcon7}
                        alt=""
                        src="/frame-13@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frame16}>
                  <div className={styles.frame17}>
                    <h1 className={styles.swiftBlockchainRevolution}>
                      Swift Blockchain Revolution
                    </h1>
                    <div className={styles.frame18}>
                      <div className={styles.placeholder}>
                        <div className={styles.divUserSelectNone2} />
                      </div>
                      <div className={styles.frame19}>
                        <div className={styles.readyToEnergize}>
                          Ready to energize your life and turn it into earnings?
                          With Move to Earn, your steps hold real value. Simply
                          walk, run, or exercise to earn. Each step matters.
                        </div>
                        <div className={styles.frame20}>
                          <div className={styles.appLinks}>
                            <div className={styles.playstore}>
                              <div
                                className={
                                  styles.logoGooglePlaystoreSvgrepoParent
                                }
                              >
                                <img
                                  className={
                                    styles.logoGooglePlaystoreSvgrepoIcon
                                  }
                                  loading="lazy"
                                  alt=""
                                  src="/logogoogleplaystoresvgrepocom-1.svg"
                                />
                                <div className={styles.forAndroids}>
                                  For Androids
                                </div>
                              </div>
                            </div>
                            <button className={styles.appstore}>
                              <div className={styles.appleLogoBlack1Parent}>
                                <img
                                  className={styles.appleLogoBlack1Icon}
                                  alt=""
                                  src="/apple-logo-black-1.svg"
                                />
                                <div className={styles.forIos}>For IOS</div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.marketplace}>
                    <div className={styles.marketplaceDetails}>
                      <div className={styles.marketplaceContent}>
                        <div className={styles.roadmapContainer}>
                          <div className={styles.placeholder1}>
                            <div className={styles.wrapperDivMb4}>
                              <img
                                className={styles.divMb4Icon}
                                loading="lazy"
                                alt=""
                                src="/div-mb4.svg"
                              />
                            </div>
                            <div className={styles.marketplaceTitle}>
                              <div className={styles.divHomeCampaignGitLine} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.marketplaceDescription}>
                          <div className={styles.frame21}>
                            <h1 className={styles.collectiblesMarketplace}>
                              Collectibles Marketplace
                            </h1>
                            <div className={styles.placeholder2}>
                              <div className={styles.miniGamesToLevel2}>
                                mini-games to level up your desired Identity on
                                smartwatch
                              </div>
                            </div>
                          </div>
                          <div className={styles.divColSpanFull}>
                            <div className={styles.nFTCards}>
                              <div className={styles.pictureCard}>
                                <div className={styles.pictureCardChild} />
                                <div className={styles.frame22}>
                                  <div className={styles.details}>
                                    <div className={styles.information}>
                                      <img
                                        className={styles.nftPictureIcon}
                                        alt=""
                                        src="/nft-picture@2x.png"
                                      />
                                      <div className={styles.favorites}>
                                        <div className={styles.icon}>
                                          <img
                                            className={styles.vectorIcon}
                                            alt=""
                                            src="/vector.svg"
                                          />
                                        </div>
                                        <div
                                          className={styles.simpleCardFavorite}
                                        >
                                          241
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.creator}>
                                    <div className={styles.frame23}>
                                      <img
                                        className={styles.userProfileIcon}
                                        loading="lazy"
                                        alt=""
                                        src="/user-profile@2x.png"
                                      />
                                      <div className={styles.name}>
                                        <div className={styles.userName}>
                                          <div className={styles.flokiMentor}>
                                            Floki Mentor
                                          </div>
                                          <div className={styles.attribution}>
                                            <div className={styles.byUser}>
                                              By @ User
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className={styles.saleDetails}>
                                      <div className={styles.status}>
                                        <div className={styles.onSale}>
                                          <div className={styles.onSale1}>
                                            on sale
                                          </div>
                                          <img
                                            className={styles.fxemojifireIcon}
                                            alt=""
                                            src="/fxemojifire.svg"
                                          />
                                        </div>
                                        <div className={styles.frame24}>
                                          <div className={styles.ethValue}>
                                            <img
                                              className={styles.frameIcon8}
                                              alt=""
                                              src="/frame-14.svg"
                                            />
                                            <div className={styles.amount}>
                                              <div className={styles.eth}>
                                                4.89 ETH
                                              </div>
                                            </div>
                                          </div>
                                          <div className={styles.placeholder3}>
                                            <div
                                              className={styles.simpleCardPrice}
                                            >
                                              ($ 654,874.86)
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <button className={styles.placeABidCta}>
                                        <div className={styles.placeBidButton}>
                                          <div
                                            className={
                                              styles.placeBidBackground
                                            }
                                          />
                                          <div
                                            className={styles.buyNowContainer}
                                          >
                                            <div className={styles.buyNow}>
                                              buy now
                                            </div>
                                          </div>
                                        </div>
                                        <div className={styles.hoverState}>
                                          <div
                                            className={
                                              styles.placeBidBottomBorder
                                            }
                                          />
                                        </div>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.nFTCardTypes}>
                                <div className={styles.nftCardBackground} />
                                <NFTPic
                                  nFTPicture="/nft-picture-1@2x.png"
                                  favoriteSeparator="180"
                                />
                              </div>
                              <div className={styles.nFTCardTypes1}>
                                <div className={styles.nftCreator}>
                                  <div className={styles.nftCreatorDetails}>
                                    <div className={styles.nftCreatorProfile}>
                                      <img
                                        className={styles.userProfileIcon1}
                                        alt=""
                                        src="/user-profile-1@2x.png"
                                      />
                                      <div className={styles.mentorName}>
                                        <div
                                          className={
                                            styles.nftCreatorNameContainer
                                          }
                                        >
                                          <div className={styles.jesusMentor}>
                                            jesus Mentor
                                          </div>
                                          <div className={styles.userLabel}>
                                            <div className={styles.byUser1}>
                                              By @ User
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className={styles.saleDetails1}>
                                      <div className={styles.nftPriceContent}>
                                        <div className={styles.placeholder4}>
                                          <div className={styles.placeholder5}>
                                            <div className={styles.onSale2}>
                                              on sale
                                            </div>
                                            <img
                                              className={
                                                styles.fxemojifireIcon1
                                              }
                                              alt=""
                                              src="/fxemojifire.svg"
                                            />
                                          </div>
                                        </div>
                                        <div className={styles.priceDetails}>
                                          <div className={styles.placeholder6}>
                                            <img
                                              className={styles.emptyPriceLabel}
                                              alt=""
                                              src="/frame-15.svg"
                                            />
                                            <div className={styles.ethValue1}>
                                              <div className={styles.eth1}>
                                                4.89 ETH
                                              </div>
                                            </div>
                                          </div>
                                          <div className={styles.placeholder7}>
                                            <div
                                              className={
                                                styles.pricePlaceholder
                                              }
                                            >
                                              ($ 654,874.86)
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className={styles.placeABidCtaWrapper}>
                                      <div className={styles.placeABidCta1}>
                                        <div className={styles.placeBidButton1}>
                                          <div
                                            className={
                                              styles.placeBidBackground1
                                            }
                                          />
                                          <div className={styles.buyNowButton}>
                                            <div className={styles.buyNow1}>
                                              buy now
                                            </div>
                                            <div
                                              className={
                                                styles.buyNowBackground
                                              }
                                            />
                                          </div>
                                        </div>
                                        <div className={styles.buyButton}>
                                          <div
                                            className={
                                              styles.placeBidBottomBorder1
                                            }
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.nftCardBottomBorder} />
                                <NFTPic
                                  nFTPicture="/nft-picture-2@2x.png"
                                  favoriteSeparator="281"
                                />
                              </div>
                            </div>
                            <div className={styles.thirdNftDetails}>
                              <div className={styles.thirdNftDetailsContent}>
                                <div className={styles.info}>
                                  <img
                                    className={styles.userProfileIcon2}
                                    alt=""
                                    src="/user-profile-2@2x.png"
                                  />
                                  <div className={styles.username}>
                                    <div className={styles.name1}>
                                      <div className={styles.pepeMentor}>
                                        Pepe Mentor
                                      </div>
                                      <div className={styles.attribution1}>
                                        <div className={styles.byUser2}>
                                          By @ User
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.saleDetails2}>
                                  <img
                                    className={styles.fxemojifireIcon2}
                                    alt=""
                                    src="/fxemojifire.svg"
                                  />
                                  <div className={styles.thirdNftPriceDetails}>
                                    <div className={styles.status1}>
                                      <div className={styles.onSale3}>
                                        on sale
                                      </div>
                                    </div>
                                    <div className={styles.ethDetails}>
                                      <div className={styles.value}>
                                        <img
                                          className={styles.ethereumEthIcon}
                                          alt=""
                                          src="/ethereumeth.svg"
                                        />
                                        <div className={styles.eth2}>
                                          4.89 ETH
                                        </div>
                                      </div>
                                      <div className={styles.placeholder8}>
                                        <div className={styles.div}>
                                          ($ 654,874.86)
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.placeABidCta2}>
                                  <div
                                    className={
                                      styles.thirdNftPlaceBidBackground
                                    }
                                  />
                                  <div className={styles.buttonContent}>
                                    <div
                                      className={
                                        styles.thirdNftBuyNowBackground
                                      }
                                    />
                                    <div className={styles.rectangleParent}>
                                      <div className={styles.frameChild} />
                                      <div className={styles.buyNow2}>
                                        buy now
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.tokenomics}>
                        <div className={styles.tokenomicsContent}>
                          <h1 className={styles.tokenoMicsAndUtility}>
                            Tokeno﻿mics And Utility
                          </h1>
                          <div className={styles.miniGamesToLevel3}>
                            mini-games to level up your desired Identity on
                            smartwatch
                          </div>
                          <div className={styles.copyOfIdeaEngineEcosystem1}>
                            <DistributionBars
                              group="/group-3.svg"
                              marketing="Marketing"
                              marketingName="2%"
                            />
                            <div className={styles.divOrder19}>
                              <div className={styles.bar}>
                                <div className={styles.wrapperGroup3}>
                                  <img
                                    className={styles.groupIcon3}
                                    alt=""
                                    src="/group-3.svg"
                                  />
                                </div>
                              </div>
                              <div className={styles.publicSale}>
                                Public Sale
                              </div>
                              <div className={styles.percentage}>
                                <div className={styles.allocationPercentage}>
                                  10%
                                </div>
                                <div className={styles.divOrder1Container}>
                                  <div className={styles.divOrder110}>
                                    <div className={styles.kolsPercentage}>
                                      <div className={styles.wrapperGroup4}>
                                        <img
                                          className={styles.groupIcon4}
                                          alt=""
                                          src="/group-5.svg"
                                        />
                                      </div>
                                    </div>
                                    <div className={styles.kols}>KOLs</div>
                                    <input
                                      className={styles.allocationDescription}
                                      placeholder="4%"
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <DistributionBars
                              group="/group-5.svg"
                              marketing="Team"
                              marketingName="15%"
                              propLeft="554px"
                              propPadding="335.3px 0px 0px"
                            />
                            <DistributionBars
                              group="/group-3.svg"
                              marketing="Liquidity"
                              marketingName="10%"
                              propLeft="654px"
                              propPadding="479.3px 0px 0px"
                            />
                            <div className={styles.distributionBars}>
                              <div className={styles.divOrder111}>
                                <div className={styles.divMtAuto3}>
                                  <div className={styles.wrapperGroup5}>
                                    <img
                                      className={styles.groupIcon5}
                                      alt=""
                                      src="/group-5.svg"
                                    />
                                  </div>
                                  <div className={styles.communityRewards}>
                                    Community Rewards
                                  </div>
                                  <div className={styles.rewardsName}>25%</div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.salePeriod}>
                              <div className={styles.earlyPeriods}>
                                <img
                                  className={styles.emptySaleContainer}
                                  alt=""
                                  src="/frame-16.svg"
                                />
                                <img
                                  className={styles.emptySaleContainer1}
                                  alt=""
                                  src="/frame-17.svg"
                                />
                                <img
                                  className={styles.emptySaleContainer2}
                                  alt=""
                                  src="/frame-18.svg"
                                />
                              </div>
                              <div className={styles.emptySalePeriod}>
                                <img
                                  className={styles.privateSaleName}
                                  alt=""
                                  src="/frame-19.svg"
                                />
                                <div className={styles.privateSalePeriod}>
                                  <img
                                    className={styles.emptyPrivateName}
                                    alt=""
                                    src="/frame-20.svg"
                                  />
                                  <div className={styles.privateImageParent}>
                                    <img
                                      className={styles.privateImageIcon}
                                      alt=""
                                      src="/frame-21.svg"
                                    />
                                    <img
                                      className={styles.privateImageIcon1}
                                      alt=""
                                      src="/frame-22.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                              <img
                                className={styles.saleNameIcon}
                                alt=""
                                src="/frame-23@2x.png"
                              />
                              <img
                                className={styles.saleNameIcon1}
                                alt=""
                                src="/frame-24@2x.png"
                              />
                              <div className={styles.divOrder112}>
                                <div className={styles.wrapperGroup6}>
                                  <img
                                    className={styles.groupIcon6}
                                    alt=""
                                    src="/group-3.svg"
                                  />
                                </div>
                                <div className={styles.seedAndPrivate}>
                                  Seed and Private
                                </div>
                              </div>
                            </div>
                            <div className={styles.privateImageContainer}>
                              <img
                                className={styles.frameIcon9}
                                alt=""
                                src="/frame-25.svg"
                              />
                              <div className={styles.seedLabel}>20%</div>
                            </div>
                            <DistributionBars
                              group="/group-10.svg"
                              marketing="Treasury"
                              marketingName="14%"
                              propLeft="87px"
                              propPadding="488.3px 0px 0px"
                            />
                            <div className={styles.frame25} />
                          </div>
                          <div className={styles.tokenDetailsContainer}>
                            <div className={styles.tokenDetailsRow}>
                              <div className={styles.divOrder113}>
                                <div className={styles.divMtAuto4}>
                                  <div className={styles.wrapperGroup7}>
                                    <img
                                      className={styles.groupIcon7}
                                      alt=""
                                      src="/group-11.svg"
                                    />
                                  </div>
                                  <div className={styles.paragraphMaxWSm}>
                                    <div className={styles.tokenName}>
                                      1 .Token Name - INCENTIVES
                                    </div>
                                    <div className={styles.tokenType}>
                                      2. Token Type - ERC-20
                                    </div>
                                    <div className={styles.tokenSymbol}>
                                      3. Token Symbol - $IDEA
                                    </div>
                                    <div className={styles.tax4}>
                                      4. TAX - 4%
                                    </div>
                                    <div className={styles.idoListingPrice}>
                                      5. IDO Listing Price - $0.07
                                    </div>
                                    <div className={styles.totalSupply}>
                                      6. Total Supply - 100,000,000
                                    </div>
                                    <div className={styles.initialCircSupply}>
                                      7. Initial Circ. Supply - 13,000,000
                                    </div>
                                  </div>
                                  <div className={styles.tokenDetails}>
                                    Token Details
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.utilityRow}>
                              <div className={styles.divOrder114}>
                                <div className={styles.divMtAuto5}>
                                  <div className={styles.wrapperGroup8}>
                                    <img
                                      className={styles.groupIcon8}
                                      alt=""
                                      src="/group-12.svg"
                                    />
                                  </div>
                                  <div className={styles.utility}>Utility</div>
                                  <div className={styles.paragraphMaxWSm1}>
                                    <div className={styles.voting}>
                                      <ul className={styles.voting1}>
                                        <li>Voting</li>
                                      </ul>
                                    </div>
                                    <div className={styles.staking}>
                                      <ul className={styles.staking1}>
                                        <li>Staking</li>
                                      </ul>
                                    </div>
                                    <div className={styles.payments}>
                                      <ul className={styles.payments1}>
                                        <li>Payments</li>
                                      </ul>
                                    </div>
                                    <div className={styles.membership}>
                                      <ul className={styles.membership1}>
                                        <li>Membership­</li>
                                      </ul>
                                    </div>
                                    <div
                                      className={
                                        styles.permissionsauthcapabilities
                                      }
                                    >
                                      <ul
                                        className={
                                          styles.permissionsauthcapabilities1
                                        }
                                      >
                                        <li>Permissions/AuthCapabilities</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.roadmapContent}>
                          <div className={styles.spanTextZinc2002}>
                            <div className={styles.flexibleToolkit2}>
                              flexible toolkit
                            </div>
                            <div className={styles.a2}>{`a `}</div>
                          </div>
                          <div className={styles.roadmapTitle}>
                            <b className={styles.roadmap}>Roadmap</b>
                            <div className={styles.roadmapDescription}>
                              <div className={styles.miniGamesToLevel4}>
                                mini-games to level up your desired Identity on
                                smartwatch
                              </div>
                            </div>
                          </div>
                          <div className={styles.roadmapContentInner}>
                            <div className={styles.frameParent6}>
                              <div className={styles.divOrder1Frame}>
                                <div className={styles.divOrder115}>
                                  <div className={styles.divMtAuto6}>
                                    <div className={styles.softLaunch}>
                                      Soft launch
                                    </div>
                                    <div className={styles.q3}>2024 Q3</div>
                                    <div className={styles.paragraphMaxWSm2}>
                                      <div
                                        className={
                                          styles.incentivesTokenIcentivesContainer
                                        }
                                      >
                                        <ul
                                          className={
                                            styles.incentivesTokenIcentivesLa
                                          }
                                        >
                                          <li>
                                            Incentives Token $ICENTIVES launch
                                          </li>
                                        </ul>
                                      </div>
                                      <div
                                        className={
                                          styles.whitelistingEarlyAdoptersContainer
                                        }
                                      >
                                        <span
                                          className={
                                            styles.whitelistingEarlyAdoptersContainer1
                                          }
                                        >
                                          <ul
                                            className={
                                              styles.whitelistingEarlyAdopters
                                            }
                                          >
                                            <li>Whitelisting early adopters</li>
                                          </ul>
                                        </span>
                                      </div>
                                      <div
                                        className={
                                          styles.finalizingAndroidDevelopmentContainer
                                        }
                                      >
                                        <ul
                                          className={
                                            styles.finalizingAndroidDevelopment
                                          }
                                        >
                                          <li>
                                            Finalizing Android development
                                          </li>
                                        </ul>
                                      </div>
                                      <div
                                        className={
                                          styles.slowRolloutEarlyTestersContainer
                                        }
                                      >
                                        <ul
                                          className={
                                            styles.slowRolloutEarlyTesters
                                          }
                                        >
                                          <li>Slow-rollout early testers</li>
                                        </ul>
                                      </div>
                                      <div
                                        className={
                                          styles.companionAppDevelopmentContainer
                                        }
                                      >
                                        <ul
                                          className={
                                            styles.companionAppDevelopment
                                          }
                                        >
                                          <li>Companion app development</li>
                                        </ul>
                                      </div>
                                      <div className={styles.partnersListings}>
                                        <ul
                                          className={styles.partnersListings1}
                                        >
                                          <li>Partners listings</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  styles.utilityCreationBuysellThrGroup
                                }
                              >
                                <div
                                  className={styles.utilityCreationBuysellThr1}
                                >
                                  <img
                                    className={styles.vectorIcon1}
                                    alt=""
                                    src="/vector1.svg"
                                  />
                                  <img
                                    className={styles.maskGroupIcon}
                                    alt=""
                                    src="/mask-group@2x.png"
                                  />
                                  <img
                                    className={styles.maskGroupIcon1}
                                    alt=""
                                    src="/mask-group-1@2x.png"
                                  />
                                  <img
                                    className={styles.maskGroupIcon2}
                                    alt=""
                                    src="/mask-group-2@2x.png"
                                  />
                                  <img
                                    className={styles.maskGroupIcon3}
                                    alt=""
                                    src="/mask-group-3@2x.png"
                                  />
                                  <div
                                    className={styles.developmentIconsParent}
                                  >
                                    <div className={styles.developmentIcons}>
                                      <img
                                        className={styles.vectorIcon2}
                                        alt=""
                                        src="/vector-3.svg"
                                      />
                                      <img
                                        className={styles.vectorIcon3}
                                        alt=""
                                        src="/vector-4.svg"
                                      />
                                      <img
                                        className={styles.vectorIcon4}
                                        alt=""
                                        src="/vector-5.svg"
                                      />
                                      <img
                                        className={styles.roadmapElementsIcon}
                                        alt=""
                                        src="/vector-6.svg"
                                      />
                                      <img
                                        className={styles.clipPathGroup1}
                                        alt=""
                                        src="/clip-path-group-1@2x.png"
                                      />
                                      <img
                                        className={styles.clipPathGroup2}
                                        alt=""
                                        src="/clip-path-group-2@2x.png"
                                      />
                                      <img
                                        className={styles.clipPathGroup3}
                                        alt=""
                                        src="/clip-path-group-3@2x.png"
                                      />
                                      <img
                                        className={styles.vectorIcon5}
                                        alt=""
                                        src="/vector-7.svg"
                                      />
                                      <div
                                        className={styles.clipPathGroupParent}
                                      >
                                        <img
                                          className={styles.clipPathGroup4}
                                          alt=""
                                          src="/clip-path-group-4@2x.png"
                                        />
                                        <img
                                          className={styles.clipPathGroup5}
                                          alt=""
                                          src="/clip-path-group-5@2x.png"
                                        />
                                      </div>
                                      <div
                                        className={styles.clipPathGroupGroup}
                                      >
                                        <img
                                          className={styles.clipPathGroup6}
                                          alt=""
                                          src="/clip-path-group-6@2x.png"
                                        />
                                        <img
                                          className={styles.clipPathGroup7}
                                          alt=""
                                          src="/clip-path-group-7@2x.png"
                                        />
                                      </div>
                                      <img
                                        className={styles.vectorIcon6}
                                        alt=""
                                        src="/vector-8.svg"
                                      />
                                      <div
                                        className={
                                          styles.clipPathGroupContainer
                                        }
                                      >
                                        <img
                                          className={styles.clipPathGroup8}
                                          alt=""
                                          src="/clip-path-group-8@2x.png"
                                        />
                                        <img
                                          className={styles.clipPathGroup9}
                                          alt=""
                                          src="/clip-path-group-9@2x.png"
                                        />
                                      </div>
                                      <img
                                        className={styles.roadmapElementsIcon1}
                                        alt=""
                                        src="/vector-9.svg"
                                      />
                                      <img
                                        className={styles.clipPathGroup10}
                                        alt=""
                                        src="/clip-path-group-10@2x.png"
                                      />
                                      <img
                                        className={styles.clipPathGroup11}
                                        alt=""
                                        src="/clip-path-group-11@2x.png"
                                      />
                                      <div
                                        className={styles.clipPathGroupParent1}
                                      >
                                        <img
                                          className={styles.clipPathGroup12}
                                          alt=""
                                          src="/clip-path-group-12@2x.png"
                                        />
                                        <img
                                          className={styles.clipPathGroup13}
                                          alt=""
                                          src="/clip-path-group-13@2x.png"
                                        />
                                      </div>
                                    </div>
                                    <div className={styles.divOrder116}>
                                      <div className={styles.divMtAuto7}>
                                        <div className={styles.development}>
                                          Development
                                        </div>
                                        <div className={styles.q4}>2024 Q4</div>
                                        <div
                                          className={styles.paragraphMaxWSm3}
                                        >
                                          <div
                                            className={styles.iosDevelopment}
                                          >
                                            <ul
                                              className={styles.iosDevelopment1}
                                            >
                                              <li>iOS development</li>
                                            </ul>
                                          </div>
                                          <div
                                            className={
                                              styles.iosCompanionAppContainer
                                            }
                                          >
                                            <span
                                              className={
                                                styles.iosCompanionAppContainer1
                                              }
                                            >
                                              <ul
                                                className={
                                                  styles.iosCompanionAppDevelopment
                                                }
                                              >
                                                <li>
                                                  iOS Companion app development
                                                </li>
                                              </ul>
                                            </span>
                                          </div>
                                          <div className={styles.avatarCreator}>
                                            <ul
                                              className={styles.avatarCreator1}
                                            >
                                              <li>Avatar Creator</li>
                                            </ul>
                                          </div>
                                          <div
                                            className={
                                              styles.wearableAiNftCreatorContainer
                                            }
                                          >
                                            <ul
                                              className={
                                                styles.wearableAiNftCreator
                                              }
                                            >
                                              <li>Wearable AI-NFT Creator</li>
                                            </ul>
                                          </div>
                                          <div
                                            className={
                                              styles.educationalContentAndContainer
                                            }
                                          >
                                            <ul
                                              className={
                                                styles.educationalContentAndWorksh
                                              }
                                            >
                                              <li>
                                                Educational content and
                                                workshops
                                              </li>
                                            </ul>
                                          </div>
                                          <div
                                            className={
                                              styles.slowRolloutEarlyTestersContainer1
                                            }
                                          >
                                            <ul
                                              className={
                                                styles.slowRolloutEarlyTesters1
                                              }
                                            >
                                              <li>
                                                Slow-rollout early testers
                                              </li>
                                            </ul>
                                          </div>
                                          <div
                                            className={
                                              styles.balancingFixingBugsContainer
                                            }
                                          >
                                            <ul
                                              className={
                                                styles.balancingFixingBugsTestin
                                              }
                                            >
                                              <li>
                                                Balancing, fixing bugs, testing
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.divOrder117}>
                                    <div className={styles.divMtAuto8}>
                                      <div className={styles.openBeta}>
                                        Open Beta
                                      </div>
                                      <div
                                        className={styles.q2}
                                      >{`2025 Q2 `}</div>
                                      <div className={styles.paragraphMaxWSm4}>
                                        <div
                                          className={
                                            styles.publicLaunchBetaContainer
                                          }
                                        >
                                          <span
                                            className={
                                              styles.publicLaunchBetaContainer1
                                            }
                                          >
                                            <ul
                                              className={
                                                styles.publicLaunchBetaReleaseAc
                                              }
                                            >
                                              <li>
                                                Public launch: Beta release
                                                across platforms
                                              </li>
                                            </ul>
                                          </span>
                                        </div>
                                        <div
                                          className={
                                            styles.accessForEveryoneContainer
                                          }
                                        >
                                          <span
                                            className={
                                              styles.accessForEveryoneContainer1
                                            }
                                          >
                                            <ul
                                              className={
                                                styles.accessForEveryoneWithCrypt
                                              }
                                            >
                                              <li>
                                                Access for everyone with crypto
                                                wallets
                                              </li>
                                            </ul>
                                          </span>
                                        </div>
                                        <div
                                          className={
                                            styles.educationalContentAndContainer1
                                          }
                                        >
                                          <ul
                                            className={
                                              styles.educationalContentAndWorksh1
                                            }
                                          >
                                            <li>
                                              Educational content and Workshops
                                            </li>
                                          </ul>
                                        </div>
                                        <div
                                          className={
                                            styles.developersPublicAccessContainer
                                          }
                                        >
                                          <span
                                            className={
                                              styles.developersPublicAccessContainer1
                                            }
                                          >
                                            <ul
                                              className={
                                                styles.developersPublicAccessOfLi
                                              }
                                            >
                                              <li>
                                                Developers public access of
                                                listings with associated tokens
                                                and Wearable-NFTS
                                              </li>
                                            </ul>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.divOrder118}>
                                  <div className={styles.divMtAuto9}>
                                    <div className={styles.development1}>
                                      Development
                                    </div>
                                    <div
                                      className={styles.q1}
                                    >{`2025 Q1 `}</div>
                                    <div className={styles.paragraphMaxWSm5}>
                                      <div
                                        className={
                                          styles.webClientDevelopmentContainer
                                        }
                                      >
                                        <ul
                                          className={
                                            styles.webClientDevelopment
                                          }
                                        >
                                          <li>WEB client development</li>
                                        </ul>
                                      </div>
                                      <div
                                        className={
                                          styles.wearableAiNftCreatorContainer1
                                        }
                                      >
                                        <span
                                          className={
                                            styles.wearableAiNftCreatorContainer2
                                          }
                                        >
                                          <ul
                                            className={
                                              styles.wearableAiNftCreatorWebCl
                                            }
                                          >
                                            <li>
                                              Wearable AI-NFT Creator WEB client
                                              version
                                            </li>
                                          </ul>
                                        </span>
                                      </div>
                                      <div
                                        className={
                                          styles.partnersAiNftCollectionContainer
                                        }
                                      >
                                        <ul
                                          className={
                                            styles.partnersAiNftCollectionPub
                                          }
                                        >
                                          <li>
                                            Partners AI-NFT collection
                                            publishing
                                          </li>
                                        </ul>
                                      </div>
                                      <div
                                        className={
                                          styles.publicAccessToContainer
                                        }
                                      >
                                        <ul
                                          className={
                                            styles.publicAccessToWearableNfts
                                          }
                                        >
                                          <li>
                                            Public access to Wearable NFTS
                                            marketplace
                                          </li>
                                        </ul>
                                      </div>
                                      <div
                                        className={
                                          styles.limitedAccessOfContainer
                                        }
                                      >
                                        <ul
                                          className={
                                            styles.limitedAccessOfNftsOnWear
                                          }
                                        >
                                          <li>
                                            Limited access of NFTS on wearables
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pageFooter1}>
                <div className={styles.footerContent}>
                  <div className={styles.footerSeparator}>
                    <div className={styles.divUserSelectNone3} />
                  </div>
                  <div className={styles.socialMedia}>
                    <div className={styles.divUserSelectNone4} />
                    <img
                      className={styles.rightSpacerIcon}
                      alt=""
                      src="/frame-26.svg"
                    />
                  </div>
                </div>
                <div className={styles.frame26}>
                  <div className={styles.divHomeCampaignGitLine1} />
                  <div className={styles.frame27}>
                    <div className={styles.contactPosition}>
                      <div className={styles.wrapperDivPositionRelative}>
                        <img
                          className={styles.divPositionRelativeIcon}
                          loading="lazy"
                          alt=""
                          src="/div-positionrelative.svg"
                        />
                      </div>
                      <div className={styles.divUserSelectNone5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DivRelative />
        </section>
        <footer className={styles.divBorderT}>
          <div className={styles.copyright2024Container}>
            <span className={styles.copyright2024Container1}>
              {`Copyright © 2024 Incentives Incentives - AI Automations and blockchain `}
              <a
                className={styles.salesideaEngineai}
                href="mailto:sales@idea-engine.ai"
                target="_blank"
              >
                <span className={styles.salesideaEngineai1}>
                  sales@idea-engine.ai
                </span>
              </a>
            </span>
          </div>
          <div className={styles.divOrder119} />
          <div className={styles.incentivesIcon}>
            <img
              className={styles.icon1}
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
          </div>
          <img className={styles.icon2} alt="" src="/icon-1.svg" />
          <img className={styles.icon3} alt="" src="/icon-2.svg" />
        </footer>
      </main>
    </div>
  );
};

export default Screen1;
