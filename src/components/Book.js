import * as React from "react";
import { motion } from "framer-motion";


/* To change book background */

function Book({ color = "#E7BB7A", height = 400 }) {
  const prevColorRef = React.useRef();
  React.useEffect(() => {
    prevColorRef.current = color;
  });
  const prevColor = prevColorRef.current ?? color;

  return (
    <svg
      width={height * 0.7}
      height={height}
      viewBox="0 0 450 650"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#prefix__filter0_dd)">
        <motion.path
          d="M19 19h388c6.627 0 12 5.373 12 12v576c0 6.627-5.373 12-12 12H19V19z"
          animate={{ fill: [prevColor, color] }}
          transition={{
            duration: 0.3,
          }}
        />
      </g>
      <path
        d="M181.5 550h-1.092l-4.392-6.66V550h-1.092v-8.376h1.092l4.392 6.648v-6.648h1.092V550zM190.753 550.084c-.776 0-1.484-.18-2.124-.54a4.097 4.097 0 01-1.524-1.524c-.368-.656-.552-1.392-.552-2.208 0-.816.184-1.548.552-2.196a3.984 3.984 0 011.524-1.524 4.185 4.185 0 012.124-.552c.784 0 1.496.184 2.136.552.64.36 1.144.864 1.512 1.512.368.648.552 1.384.552 2.208 0 .824-.184 1.56-.552 2.208a4.01 4.01 0 01-1.512 1.524c-.64.36-1.352.54-2.136.54zm0-.948a3.05 3.05 0 001.572-.408 2.82 2.82 0 001.104-1.164c.272-.504.408-1.088.408-1.752 0-.672-.136-1.256-.408-1.752a2.844 2.844 0 00-1.092-1.164 3.073 3.073 0 00-1.584-.408c-.592 0-1.12.136-1.584.408-.464.272-.832.66-1.104 1.164-.264.496-.396 1.08-.396 1.752 0 .664.132 1.248.396 1.752.272.504.64.892 1.104 1.164.472.272 1 .408 1.584.408zM205.143 541.636v.888h-2.28V550h-1.092v-7.476h-2.292v-.888h5.664zM211.179 542.524v2.796h3.048v.9h-3.048v2.88h3.408v.9h-4.5v-8.376h4.5v.9h-3.408zM224.027 545.692c.304.048.58.172.828.372.256.2.456.448.6.744.152.296.228.612.228.948 0 .424-.108.808-.324 1.152-.216.336-.532.604-.948.804-.408.192-.892.288-1.452.288h-3.12v-8.364h3c.568 0 1.052.096 1.452.288.4.184.7.436.9.756.2.32.3.68.3 1.08 0 .496-.136.908-.408 1.236a2.23 2.23 0 01-1.056.696zm-3.096-.444h1.836c.512 0 .908-.12 1.188-.36.28-.24.42-.572.42-.996 0-.424-.14-.756-.42-.996-.28-.24-.684-.36-1.212-.36h-1.812v2.712zm1.932 3.852c.544 0 .968-.128 1.272-.384.304-.256.456-.612.456-1.068 0-.464-.16-.828-.48-1.092-.32-.272-.748-.408-1.284-.408h-1.896v2.952h1.932zM234.591 550.084c-.776 0-1.484-.18-2.124-.54a4.097 4.097 0 01-1.524-1.524c-.368-.656-.552-1.392-.552-2.208 0-.816.184-1.548.552-2.196a3.984 3.984 0 011.524-1.524 4.185 4.185 0 012.124-.552c.784 0 1.496.184 2.136.552.64.36 1.144.864 1.512 1.512.368.648.552 1.384.552 2.208 0 .824-.184 1.56-.552 2.208a4.01 4.01 0 01-1.512 1.524c-.64.36-1.352.54-2.136.54zm0-.948a3.05 3.05 0 001.572-.408 2.82 2.82 0 001.104-1.164c.272-.504.408-1.088.408-1.752 0-.672-.136-1.256-.408-1.752a2.844 2.844 0 00-1.092-1.164 3.073 3.073 0 00-1.584-.408c-.592 0-1.12.136-1.584.408-.464.272-.832.66-1.104 1.164-.264.496-.396 1.08-.396 1.752 0 .664.132 1.248.396 1.752.272.504.64.892 1.104 1.164.472.272 1 .408 1.584.408zM247.624 550.084c-.776 0-1.484-.18-2.124-.54a4.097 4.097 0 01-1.524-1.524c-.368-.656-.552-1.392-.552-2.208 0-.816.184-1.548.552-2.196a3.984 3.984 0 011.524-1.524 4.185 4.185 0 012.124-.552c.784 0 1.496.184 2.136.552.64.36 1.144.864 1.512 1.512.368.648.552 1.384.552 2.208 0 .824-.184 1.56-.552 2.208a4.01 4.01 0 01-1.512 1.524c-.64.36-1.352.54-2.136.54zm0-.948a3.05 3.05 0 001.572-.408 2.82 2.82 0 001.104-1.164c.272-.504.408-1.088.408-1.752 0-.672-.136-1.256-.408-1.752a2.844 2.844 0 00-1.092-1.164 3.073 3.073 0 00-1.584-.408c-.592 0-1.12.136-1.584.408-.464.272-.832.66-1.104 1.164-.264.496-.396 1.08-.396 1.752 0 .664.132 1.248.396 1.752.272.504.64.892 1.104 1.164.472.272 1 .408 1.584.408zM261.402 550l-3.444-3.816V550h-1.092v-8.364h1.092v3.876l3.456-3.876h1.38l-3.792 4.188L262.83 550h-1.428z"
        fill={color === "#373737" ? "white" : "#373737"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 29V19h1v10h-1zm0 40V49h1v20h-1zm0 40V89h1v20h-1zm0 40v-20h1v20h-1zm0 40v-20h1v20h-1zm0 40v-20h1v20h-1zm0 40v-20h1v20h-1zm0 40v-20h1v20h-1zm0 40v-20h1v20h-1zm0 40v-20h1v20h-1zm0 40v-20h1v20h-1zm0 40v-20h1v20h-1zm0 40v-20h1v20h-1zm0 40v-20h1v20h-1zm0 40v-20h1v20h-1zm0 30v-10h1v10h-1z"
        fill="#373737"
      />
      <path
        d="M19 27a8 8 0 018-8h380c6.627 0 12 5.373 12 12v576c0 6.627-5.373 12-12 12H27a8 8 0 01-8-8V27z"
        fill="url(#prefix__paint0_linear)"
        fillOpacity={0.2}
      />
      <g opacity={0.4} filter="url(#prefix__filter1_f)">
        <path
          d="M420 30.952s-.938-4.067-2.5-6.206C415.938 22.607 412 20 412 20v598s3.938-2.242 5.5-4.381c1.562-2.139 2.5-6.571 2.5-6.571V30.952z"
          fill="url(#prefix__paint1_linear)"
        />
      </g>
      <g opacity={0.4} filter="url(#prefix__filter2_f)">
        <path
          d="M19.001 29.49s.003-9.49 0-9.99c-.001-.5 8-.5 8-.5v599.5S19 619 19 618.5l.001-10.989V29.489z"
          fill="url(#prefix__paint2_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={419}
          y1={619}
          x2={-40.949}
          y2={76.871}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity={0.2} />
          <stop offset={0.339} stopOpacity={0} />
          <stop offset={0.63} stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.3} />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={412}
          y1={288.042}
          x2={420}
          y2={288.042}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBAEAE" stopOpacity={0.47} />
          <stop offset={0.615} stopColor="#857A7A" />
        </linearGradient>
        <linearGradient
          id="prefix__paint2_linear"
          x1={27}
          y1={287.938}
          x2={19}
          y2={287.938}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBAEAE" stopOpacity={0.51} />
          <stop offset={0.615} stopColor="#857A7A" />
        </linearGradient>
        <filter
          id="prefix__filter0_dd"
          x={0}
          y={0}
          width={450}
          height={650}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            radius={10}
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow"
          />
          <feOffset dx={6} dy={6} />
          <feGaussianBlur stdDeviation={7.5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
        </filter>
        <filter
          id="prefix__filter1_f"
          x={411.5}
          y={19.5}
          width={9}
          height={599}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation={0.25} result="effect1_foregroundBlur" />
        </filter>
        <filter
          id="prefix__filter2_f"
          x={18.5}
          y={18.5}
          width={9.001}
          height={600.722}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation={0.25} result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
}

export default Book;
