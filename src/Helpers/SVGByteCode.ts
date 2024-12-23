import {SCREEN_HEIGHT, SCREEN_WIDTH} from './Responsive'
const AUTH_HEIGHT = SCREEN_HEIGHT * 0.5

export default {
  auth_back: `
      <svg width="${SCREEN_WIDTH}" height="${AUTH_HEIGHT}" viewBox="0 0 ${SCREEN_WIDTH} ${AUTH_HEIGHT}" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#a)">
          <path fill="#0F172A" d="M0 0h${SCREEN_WIDTH}v${AUTH_HEIGHT}H0z"/>
          <circle opacity=".5" cy="94" r="350" fill="#1E293B"/>
          <circle opacity=".5" cy="94" r="246" fill="#334155"/>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h${SCREEN_WIDTH}v${AUTH_HEIGHT}H0z"/>
          </clipPath>
        </defs>
      </svg>
    `
}
