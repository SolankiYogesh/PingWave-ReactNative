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
    `,
  email: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.242 2.969H1.758A1.76 1.76 0 0 0 0 4.727v10.546a1.76 1.76 0 0 0 1.758 1.758h16.484A1.76 1.76 0 0 0 20 15.273V4.727a1.76 1.76 0 0 0-1.758-1.758m-.246 1.172-6.753 6.717a1.75 1.75 0 0 1-1.243.515c-.47 0-.91-.183-1.244-.516L2.004 4.141zM1.172 15.035V4.965l5.064 5.038zm.833.824 5.062-5.03.861.858a2.9 2.9 0 0 0 2.072.858 2.9 2.9 0 0 0 2.07-.857l.863-.858 5.062 5.03zm16.823-.824-5.064-5.032 5.064-5.037z" fill="#2563EB"/>
</svg>
`,
  lock: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 .588a5.27 5.27 0 0 0-5.294 5.294v2.353c-1 0-1.765.765-1.765 1.765v7.647c0 1 .765 1.765 1.765 1.765h10.588c1 0 1.765-.765 1.765-1.765V10c0-1-.765-1.765-1.765-1.765V5.882A5.27 5.27 0 0 0 10 .588M15.882 10v7.647c0 .353-.235.588-.588.588H4.706c-.353 0-.588-.235-.588-.588V10c0-.353.235-.588.588-.588h10.588c.353 0 .588.235.588.588m-10-1.765V5.882A4.09 4.09 0 0 1 10 1.765a4.09 4.09 0 0 1 4.118 4.117v2.353z" fill="#2563EB"/>
  <path d="M10 11.177c-1 0-1.765.764-1.765 1.764 0 .765.47 1.412 1.177 1.647v1.294c0 .353.235.589.588.589s.588-.236.588-.589v-1.294a1.71 1.71 0 0 0 1.177-1.647c0-1-.765-1.764-1.765-1.764m0 2.352c-.353 0-.588-.235-.588-.588s.235-.588.588-.588.588.235.588.588-.235.588-.588.588" fill="#2563EB"/>
</svg>
`,
  user: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.857 9.634c1.324 0 2.47-.475 3.407-1.411.936-.937 1.41-2.082 1.41-3.406 0-1.323-.474-2.47-1.41-3.406C12.326.475 11.18 0 9.856 0S7.388.475 6.452 1.411c-.937.937-1.412 2.082-1.412 3.406s.475 2.47 1.412 3.406 2.082 1.411 3.405 1.411M7.28 2.24C8 1.52 8.842 1.172 9.857 1.172c1.016 0 1.859.35 2.578 1.068s1.068 1.562 1.068 2.577c0 1.016-.35 1.858-1.068 2.577s-1.562 1.068-2.578 1.068S8 8.112 7.28 7.394 6.212 5.833 6.212 4.817c0-1.015.35-1.858 1.068-2.577m11.006 13.139c-.027-.39-.081-.815-.162-1.264a10 10 0 0 0-.31-1.27 6.3 6.3 0 0 0-.523-1.185 4.5 4.5 0 0 0-.788-1.027 3.5 3.5 0 0 0-1.131-.71 3.9 3.9 0 0 0-1.444-.262c-.205 0-.402.084-.783.332-.235.153-.51.33-.816.526-.262.167-.617.323-1.055.465a4.2 4.2 0 0 1-1.29.208c-.43 0-.864-.07-1.292-.208-.438-.142-.793-.298-1.054-.465q-.457-.292-.817-.526c-.38-.248-.578-.332-.782-.332-.52 0-1.006.088-1.444.261a3.5 3.5 0 0 0-1.132.711c-.297.285-.562.63-.787 1.027-.218.382-.393.78-.523 1.185-.125.39-.23.818-.31 1.27-.08.449-.135.874-.162 1.265a17 17 0 0 0-.04 1.18c0 1.045.331 1.89.986 2.513.646.615 1.501.927 2.542.927h9.63c1.04 0 1.895-.312 2.541-.927.655-.623.987-1.468.987-2.513 0-.403-.014-.8-.04-1.181m-1.754 2.845c-.427.406-.994.604-1.733.604H5.17c-.74 0-1.307-.198-1.734-.604-.419-.399-.622-.943-.622-1.663 0-.375.012-.745.037-1.1.024-.349.073-.732.146-1.139.072-.401.164-.778.273-1.12a5 5 0 0 1 .426-.963 3.3 3.3 0 0 1 .578-.759c.201-.192.455-.35.753-.468q.416-.165.923-.178c.041.022.114.064.233.14.24.158.518.337.825.533.346.22.792.42 1.325.592.544.176 1.1.265 1.651.265s1.107-.09 1.651-.265c.534-.172.98-.371 1.326-.592.314-.201.584-.375.825-.532.118-.077.191-.12.232-.141q.507.014.924.178.449.178.752.468.324.31.579.759c.177.312.32.636.425.963.11.342.202.719.274 1.12q.11.614.146 1.139c.025.354.037.724.038 1.1 0 .72-.204 1.264-.623 1.663" fill="#2563EB"/>
</svg>
`
}
