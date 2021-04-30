import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'

const Chat = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 32 32">
    <g clipPath="url(#clip0)">
      <path
        d="M16 3.99998C23.352 3.99998 29.3333 8.78931 29.3333 14.676C29.3333 21.232 22.4733 25.2906 16.12 25.2906C13.5373 25.2906 11.6093 24.7613 10.2613 24.432C8.928 25.2493 8.13467 25.8146 4.56533 26.8586C5.27867 25.028 5.52933 23.1946 5.368 21.172C4.25067 19.8386 2.668 17.972 2.668 14.676C2.66667 8.78931 8.648 3.99998 16 3.99998ZM16 1.33331C7.54933 1.33331 0 6.96798 0 14.676C0 17.4093 0.984 20.0933 2.72933 22.176C2.80267 24.616 1.36533 28.1173 0.072 30.6666C3.54133 30.04 8.47333 28.656 10.7093 27.2853C12.6 27.7453 14.4093 27.956 16.1213 27.956C25.5667 27.956 32.0013 21.5066 32.0013 14.6746C32 6.92665 24.3987 1.33331 16 1.33331ZM16 20H9.33333V18.6666H16V20ZM22.6667 16H9.33333V14.6666H22.6667V16ZM22.6667 12H9.33333V10.6666H22.6667V12Z"
        fill="#52D06E"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </SvgIcon>
)

export default Chat
