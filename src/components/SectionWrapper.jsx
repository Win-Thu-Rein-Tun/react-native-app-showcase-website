import React from 'react'
import styles from '../styles/Global'
import Button from './Button'
import assets from '../assets'

const SectionWrapper = ({ title, description, mockupImg, banner, showBtn, reverse }) => (
  <div className={`min-h-screen ${styles.section} ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}>
    <div className={`flex items-center ${reverse ? styles.boxReverseClass : styles.boxClass} w-11/12 sm:w-full minmd:w-3/4`}>
      <div className={`${styles.descDiv} ${reverse ? "fadeRightMini" : "fadeLeftMini"} ${reverse ? styles.textRight : styles.textLeft}`}>
        <h1 className={`${styles.h1Text} ${reverse ? styles.blackText : styles.whiteText}`} >{title}</h1>
        <h1 className={`${styles.descriptionText}`}>{description}</h1>
        {showBtn && (
          <Button
            assetUrl={assets.expo}
            link="deployed nft marketplace rn"
          />
        )}
      </div>

      <div className={`flex-1 ${styles.flexCenter} padding-8 sm:px-0`}>
      <img src={mockupImg} alt="mockimg" className={`${styles.sectionImg} ${reverse ? "fadeLeftMini" : "fadeRightMini"}`} />
      </div>

    </div>
  </div>
)

export default SectionWrapper