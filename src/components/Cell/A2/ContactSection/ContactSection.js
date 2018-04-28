import React from 'react';

import classes from './ContactSection.css'
import Aux from '../../../../hoc/AuxComponent/AuxComponent'

const contactSection = (props) => {

    const iPhone = (
        <svg width='100%' height='100%' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg' strokeLinejoin='round' strokeMiterlimit='1.414'>
            <path className={classes.p0} d='M19.494,0L7.948,0C6.843,0 5.951,0.896 5.951,1.999L5.951,25.445C5.951,26.547 6.843,27.442 7.948,27.442L19.494,27.442C20.597,27.442 21.491,26.547 21.491,25.445L21.491,1.999C21.491,0.896 20.597,0 19.494,0ZM10.872,1.214L16.572,1.214C16.716,1.214 16.833,1.429 16.833,1.695C16.833,1.961 16.716,2.177 16.572,2.177L10.872,2.177C10.727,2.177 10.612,1.961 10.612,1.695C10.612,1.429 10.727,1.214 10.872,1.214ZM13.722,25.469C13.019,25.469 12.447,24.897 12.447,24.193C12.447,23.489 13.019,22.919 13.722,22.919C14.423,22.919 14.995,23.489 14.995,24.193C14.995,24.897 14.423,25.469 13.722,25.469ZM19.995,21.1L7.448,21.1L7.448,3.373L19.995,3.373L19.995,21.1Z'
                  fillRule='nonzero' />
            <path className={classes.p1} d='M150.37,130.25C147.92,135.91 145.02,141.12 141.66,145.91C137.08,152.44 133.33,156.96 130.44,159.47C125.96,163.59 121.16,165.7 116.02,165.82C112.33,165.82 107.88,164.77 102.7,162.64C97.503,160.52 92.727,159.47 88.36,159.47C83.78,159.47 78.868,160.52 73.614,162.64C68.352,164.77 64.113,165.88 60.872,165.99C55.943,166.2 51.03,164.03 46.126,159.47C42.996,156.74 39.081,152.06 34.391,145.43C29.359,138.35 25.222,130.14 21.981,120.78C18.51,110.67 16.77,100.88 16.77,91.402C16.77,80.545 19.116,71.181 23.815,63.334C27.508,57.031 32.421,52.059 38.57,48.409C44.719,44.759 51.363,42.899 58.518,42.78C62.433,42.78 67.567,43.991 73.947,46.371C80.309,48.759 84.394,49.97 86.185,49.97C87.524,49.97 92.062,48.554 99.755,45.731C107.03,43.113 113.17,42.029 118.2,42.456C131.83,43.556 142.07,48.929 148.88,58.609C136.69,65.995 130.66,76.34 130.78,89.611C130.89,99.948 134.64,108.55 142.01,115.38C145.35,118.55 149.08,121 153.23,122.74C152.33,125.35 151.38,127.85 150.37,130.25ZM119.11,7.24C119.11,15.342 116.15,22.907 110.25,29.909C103.13,38.233 94.518,43.043 85.179,42.284C85.06,41.312 84.991,40.289 84.991,39.214C84.991,31.436 88.377,23.112 94.39,16.306C97.392,12.86 101.21,9.995 105.84,7.709C110.46,5.457 114.83,4.212 118.94,3.999C119.06,5.082 119.11,6.165 119.11,7.24L119.11,7.24Z'
                  fillRule='nonzero' transform='matrix(.02931 0 0 .0294 11.23 8.842)' />
        </svg>
    );

    const mail = (
        <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.012 31.012'>
            <path d='M25.109,21.51c-0.123,0-0.246-0.045-0.342-0.136l-5.754-5.398c-0.201-0.188-0.211-0.505-0.022-0.706 c0.189-0.203,0.504-0.212,0.707-0.022l5.754,5.398c0.201,0.188,0.211,0.505,0.022,0.706C25.375,21.457,25.243,21.51,25.109,21.51z'/>
            <path d='M5.902,21.51c-0.133,0-0.266-0.053-0.365-0.158c-0.189-0.201-0.179-0.518,0.022-0.706l5.756-5.398 c0.202-0.188,0.519-0.18,0.707,0.022c0.189,0.201,0.179,0.518-0.022,0.706l-5.756,5.398C6.148,21.465,6.025,21.51,5.902,21.51z'/>
            <path d='M28.512,26.529H2.5c-1.378,0-2.5-1.121-2.5-2.5V6.982c0-1.379,1.122-2.5,2.5-2.5h26.012c1.378,0,2.5,1.121,2.5,2.5v17.047 C31.012,25.408,29.89,26.529,28.512,26.529z M2.5,5.482c-0.827,0-1.5,0.673-1.5,1.5v17.047c0,0.827,0.673,1.5,1.5,1.5h26.012 c0.827,0,1.5-0.673,1.5-1.5V6.982c0-0.827-0.673-1.5-1.5-1.5H2.5z'/>
            <path d='M15.506,18.018c-0.665,0-1.33-0.221-1.836-0.662L0.83,6.155C0.622,5.974,0.6,5.658,0.781,5.449 c0.183-0.208,0.498-0.227,0.706-0.048l12.84,11.2c0.639,0.557,1.719,0.557,2.357,0L29.508,5.419 c0.207-0.181,0.522-0.161,0.706,0.048c0.181,0.209,0.16,0.524-0.048,0.706L17.342,17.355 C16.835,17.797,16.171,18.018,15.506,18.018z'/>
        </svg>
    );

    const linkedIn = (
        <svg viewBox='0 0 479 479' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd'
             clipRule='evenodd' strokeLinejoin='round' strokeMiterlimit='1.414'>
            <path className={classes.l0} fill='transparent' d='M478.165,290.794L478.165,467.536L375.638,467.536L375.638,302.549C375.638,261.068 360.855,232.876 323.757,232.876C295.386,232.876 278.65,251.963 271.179,270.332C268.489,276.947 267.672,286.211 267.672,295.356L267.672,467.515L165.246,467.515C165.246,467.515 166.621,188.187 165.246,159.258L267.693,159.258L267.693,202.95C267.554,203.309 267.255,203.607 267.115,204.006L267.693,204.006L267.693,202.95C281.38,181.951 305.627,152.025 360.078,152.025C427.659,152.026 478.165,196.077 478.165,290.794ZM57.997,10.629C22.952,10.629 0,33.621 0,63.945C0,93.452 22.275,117.221 56.682,117.221L57.3,117.221C93.122,117.221 115.317,93.452 115.317,63.945C114.62,33.621 93.123,10.629 57.997,10.629ZM6.117,467.535L108.584,467.535L108.584,159.239L6.117,159.239L6.117,467.535Z'
                  fillRule='nonzero' transform='matrix(.97289 0 0 .97358 6.482 6.317)'
            />
        </svg>
    );

    const slack = (
        <svg viewBox='0 0 270 270' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd'
             clipRule='evenodd' strokeLinejoin='round' strokeMiterlimit='1.414' width='100%' height='100%'>

            <g fill='transparent' className={classes.slackG}>
                <path className={classes.s0} d='M154.3,87.1C152.4,81.4 146.3,78.3 140.6,80.1C134.9,82 131.8,88.1 133.6,93.8L161.7,180.2C163.6,185.5 169.4,188.5 174.9,186.9C180.7,185.2 184.2,179.1 182.3,173.5C182.3,173.3 154.3,87.1 154.3,87.1Z'
                      stroke='white' transform='matrix(2.17317 0 0 2.17496 -161.074 -170.602)'
                />
                <path className={classes.s1} d='M110.8,101.2C108.9,95.5 102.8,92.4 97.1,94.2C91.4,96.1 88.3,102.2 90.1,107.9L118.2,194.3C120.1,199.6 125.9,202.6 131.4,201C137.2,199.3 140.7,193.2 138.8,187.6C138.8,187.4 110.8,101.2 110.8,101.2Z'
                      stroke='white' transform='matrix(2.17317 0 0 2.17496 -161.074 -170.602)'
                />
                <path className={classes.s2} d='M189.7,158.6C195.4,156.7 198.5,150.6 196.7,144.9C194.8,139.2 188.7,136.1 183,137.9L96.5,166.1C91.2,168 88.2,173.8 89.8,179.3C91.5,185.1 97.6,188.6 103.2,186.7C103.4,186.7 189.7,158.6 189.7,158.6Z'
                      stroke='white' transform='matrix(2.17317 0 0 2.17496 -161.074 -170.602)'
                />
                <path className={classes.s3} d='M114.5,183.1C120.1,181.3 127.4,178.9 135.2,176.4C133.4,170.8 131,163.5 128.5,155.7L107.8,162.4L114.5,183.1Z'
                      stroke='#5B789D' transform='matrix(2.17317 0 0 2.17496 -161.074 -170.602)'
                />
                <path className={classes.s4} d='M158.1,168.9C165.9,166.4 173.2,164 178.8,162.2C177,156.6 174.6,149.3 172.1,141.5L151.4,148.2L158.1,168.9Z'
                      stroke='#5B789D' transform='matrix(2.17317 0 0 2.17496 -161.074 -170.602)'
                />
                <path className={classes.s5} d='M175.5,115.1C181.2,113.2 184.3,107.1 182.5,101.4C180.6,95.7 174.5,92.6 168.8,94.4L82.4,122.5C77.1,124.4 74.1,130.2 75.7,135.7C77.4,141.5 83.5,145 89.1,143.1C89.3,143.1 175.5,115.1 175.5,115.1Z'
                      stroke='white' transform='matrix(2.17317 0 0 2.17496 -161.074 -170.602)'
                />
                <path className={classes.s6} d='M100.4,139.5C106,137.7 113.3,135.3 121.1,132.8C118.6,125 116.2,117.7 114.4,112.1L93.7,118.8L100.4,139.5Z'
                      stroke='#5B789D' transform='matrix(2.17317 0 0 2.17496 -161.074 -170.602)'
                />
                <path className={classes.s7} d='M143.9,125.4C151.7,122.9 159,120.5 164.6,118.7C162.1,110.9 159.7,103.6 157.9,98L137.2,104.7L143.9,125.4Z'
                      stroke='#5B789D' transform='matrix(2.17317 0 0 2.17496 -161.074 -170.602)'
                />
            </g>
        </svg>
    );

    let gridClasses = [classes.Wrapper, classes.GridWrapperInv].join(' ')
    let buttonClasses = classes.WrapperOffset
    let slackClass = [props.socials.slack === '-' ? classes.SlackLeavingDisabled : classes.SlackLeaving, classes.Slack].join(' ')
    let phoneClass = [props.socials.phone === '-' ? classes.PhoneLeavingDisabled : classes.PhoneLeaving, classes.Phone].join(' ')
    let mailClass = [props.socials.mail === '-' ? classes.MailLeavingDisabled : classes.MailLeaving, classes.Mail].join(' ')
    let linkedInClass = [props.socials.linkedIn === '-' ? classes.LinkedInLeavingDisabled : classes.LinkedInLeaving, classes.LinkedIn].join(' ')
    if (props.grid){
        gridClasses = classes.Wrapper
        buttonClasses= [classes.Wrapper, classes.ButtonWrapper].join(' ')
        slackClass = [props.socials.slack === '-' ? classes.SlackAppearingDisabled : classes.SlackAppearing, classes.Slack].join(' ')
        phoneClass = [props.socials.phone === '-' ? classes.PhoneAppearingDisabled :classes.PhoneAppearing, classes.Phone].join(' ')
        mailClass = [props.socials.mail === '-' ? classes.MailAppearingDisabled : classes.MailAppearing, classes.Mail].join(' ')
        linkedInClass = [props.socials.linkedIn === '-' ? classes.LinkedInAppearingDisabled : classes.LinkedInAppearing, classes.LinkedIn].join(' ')
    }
    return (
        <Aux>
            <div className={buttonClasses}>
                <div className={classes.AspectRatio}>
                    <div className={classes.ContactButton} onMouseEnter={props.open}>
                        <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 473.932 473.932'>
                            <path className={classes.Connect} d='M385.513,301.214c-27.438,0-51.64,13.072-67.452,33.09l-146.66-75.002 c1.92-7.161,3.3-14.56,3.3-22.347c0-8.477-1.639-16.458-3.926-24.224l146.013-74.656c15.725,20.924,40.553,34.6,68.746,34.6 c47.758,0,86.391-38.633,86.391-86.348C471.926,38.655,433.292,0,385.535,0c-47.65,0-86.326,38.655-86.326,86.326 c0,7.809,1.381,15.229,3.322,22.412L155.892,183.74c-15.833-20.039-40.079-33.154-67.56-33.154 c-47.715,0-86.326,38.676-86.326,86.369s38.612,86.348,86.326,86.348c28.236,0,53.043-13.719,68.832-34.664l145.948,74.656 c-2.287,7.744-3.947,15.79-3.947,24.289c0,47.693,38.676,86.348,86.326,86.348c47.758,0,86.391-38.655,86.391-86.348 C471.904,339.848,433.271,301.214,385.513,301.214z'
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className={gridClasses}>
                <div className={classes.Box}>
                    <a href={props.socials.slack}  className={slackClass} >{slack}</a>
                    <a onClick={props.backdrop}  className={phoneClass} >{iPhone}</a>
                    <a href={'mailto:' + props.socials.mail} className={mailClass} >{mail}</a>
                    <a href={props.socials.linkedIn} className={linkedInClass} >{linkedIn}</a>
                </div>
            </div>
        </Aux>
)

};

export default contactSection;