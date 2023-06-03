import { SvgIconProps } from './svgIconProps';

export function Pipeline(props: SvgIconProps) {
  const { size, color } = props;
  return <svg
    fill={color}
    version="1.1"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22,14H20V16H14V13H16V11H14V6A2,2 0 0,0 12,4H4V2H2V10H4V8H10V11H8V13H10V18A2,2 0 0,0 12,20H20V22H22" />
  </svg>
}