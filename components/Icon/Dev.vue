<template>
  <div>
    <!-- JavaScript -->
    <svg
      v-if="isSame('JavaScript')"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="#EFD81D"
    >
      <path
        d="M0 0v512h512V0H0zm274.286 397.714c0 49.84-29.44 74.137-72.057 74.137-38.492 0-60.835-19.931-72.172-43.988l39.177-23.714c7.555 13.405 13.292 24.742 29.783 24.742 13.714 0 24.983-6.182 24.983-30.24V237.714h50.286v160zm113.543 72.995c-44.675 0-73.543-20.16-87.635-48L339.429 400c10.285 16.846 23.714 28.069 47.428 28.069 19.932 0 31.509-8.823 31.509-22.572 0-16.491-11.92-22.331-33.92-32l-12.023-5.166c-34.72-14.765-57.737-33.325-57.737-72.514 0-36.08 27.485-62.434 70.445-62.434 30.595 0 52.572 9.508 68.4 37.348L416 294.857c-8.251-14.777-17.143-20.571-30.926-20.571-14.091 0-23.028 8.937-23.028 20.571 0 14.434 8.937 20.274 29.554 29.212l12.023 5.154c40.903 17.531 63.931 35.428 63.931 75.611.012 43.315-34.011 65.875-79.725 65.875z"
      />
    </svg>

    <!-- TypeScript -->
    <svg
      v-else-if="isSame('TypeScript')"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0V0z" fill="#fff" />
      <path
        d="M0 12v12h24V0H0v12zm19.34-.956c.61.152 1.075.423 1.502.865.221.236.549.667.575.77.008.03-1.036.73-1.669 1.123-.022.015-.114-.083-.217-.236-.309-.45-.632-.644-1.128-.678-.727-.05-1.2.332-1.192.967a.88.88 0 00.103.45c.16.332.457.53 1.39.934 1.718.739 2.453 1.226 2.91 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.171-1.878-.647-2.442-1.272-.221-.244-.651-.88-.625-.926.011-.015.11-.076.221-.141l.892-.514.69-.4.145.213c.201.31.643.732.91.873.766.404 1.817.346 2.335-.118.221-.202.312-.412.312-.72 0-.279-.033-.4-.178-.61-.187-.266-.568-.49-1.65-.96-1.239-.533-1.772-.864-2.26-1.39a3.167 3.167 0 01-.659-1.2c-.091-.34-.114-1.189-.042-1.531.255-1.2 1.158-2.031 2.462-2.279.422-.08 1.406-.05 1.82.054v-.002zm-5.633 1.001l.007.983H10.59v8.876H8.381v-8.876H5.257v-.964l.027-.99c.01-.015 1.912-.022 4.217-.019l4.194.012.012.978z"
        fill="#007ACC"
      />
    </svg>

    <!-- Vue.js -->
    <svg v-else-if="isSame('Vue.js')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M256 144.03l-55.49-96.11h-79.43L256 281.61 390.92 47.92h-79.43L256 144.03z"
        fill="#35495E"
      />
      <path
        d="M409.4 47.92L256 313.61 102.6 47.92H15.74L256 464.08 496.26 47.92H409.4z"
        fill="#41B883"
      />
    </svg>

    <!-- C# -->
    <!-- https://icons8.com/icons/set/csharp-->
    <svg
      v-else-if="isSame('C#')"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <path
        fill="#37474f"
        fill-rule="evenodd"
        d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
        clip-rule="evenodd"
      />
      <path
        fill="#546e7a"
        fill-rule="evenodd"
        d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
        clip-rule="evenodd"
      />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
        clip-rule="evenodd"
      />
      <path
        fill="#455a64"
        fill-rule="evenodd"
        d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
        clip-rule="evenodd"
      />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M34 20H35V28H34zM37 20H38V28H37z"
        clip-rule="evenodd"
      />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M32 25H40V26H32zM32 22H40V23H32z"
        clip-rule="evenodd"
      />
    </svg>

    <!-- Swift -->
    <!-- https://icons8.com/icons/set/swift -->
    <svg v-else-if="isSame('Swift')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <path
        fill="#FF6D00"
        d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.208-1.791,4-4,4H10c-2.209,0-4-1.792-4-4V10z"
      />
      <path
        fill="#E64A19"
        d="M6,10v11.967l4,4c0,0,11.153,12.881,20,4.033s-3.981-19-3.981-19l-5.005-5H10C7.791,6,6,7.79,6,10z"
      />
      <path
        fill="#FFF"
        d="M26.019,11c11.429,7.698,7.732,16.187,7.732,16.187s3.25,3.634,1.936,6.813c0,0-1.34-2.226-3.588-2.226c-2.166,0-3.44,2.226-7.8,2.226C14.591,34,10,25.967,10,25.967c8.747,5.7,14.719,1.663,14.719,1.663C20.778,25.364,12,14,12,14c7.299,6.155,11,8,11,8c-1.882-1.542-8-9-8-9c4.224,4.238,13.307,10.378,13.307,10.378C30.691,16.834,26.019,11,26.019,11z"
      />
    </svg>

    <!-- SwiftUI -->
    <!-- https://icons8.com/icons/set/swiftui -->
    <svg v-else-if="isSame('SwiftUI')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <path
        fill="#0d47a1"
        d="M34.249,42H13.751C9.47,42,6,38.53,6,34.249V13.751C6,9.47,9.47,6,13.751,6h20.497 C38.53,6,42,9.47,42,13.751v20.497C42,38.53,38.53,42,34.249,42z"
      />
      <path
        fill="#1565c0"
        d="M42,13.751C42,9.47,38.53,6,34.249,6H13.751C9.47,6,6,9.47,6,13.751v9.028 c3,3.221,8.502,7.14,13.646,7.106C26.494,29.84,36.654,27.166,42,21.407V13.751z"
      />
      <path
        fill="#1e88e5"
        d="M42,13.751C42,9.47,38.53,6,34.249,6H13.751C9.47,6,6,9.47,6,13.751v8.75 c3,3.499,7.219,4.858,13.694,4.905C30.143,27.482,38.328,22.577,42,17.992V13.751z"
      />
      <path
        fill="#29b6f6"
        d="M42,13.751C42,9.47,38.53,6,34.249,6H13.751C9.47,6,6,9.47,6,13.751v8.18 c4.408,2.669,9.077,3.262,12.674,3.336C29.161,25.327,38.611,20.031,42,13.869V13.751z"
      />
      <path
        fill="#00e5ff"
        d="M34.249,6H13.751C9.47,6,6,9.47,6,13.751v5.98c4.167,2.708,8.472,3.482,12.917,3.446 c7.194,0,18.718-3.832,22.265-12.878C39.911,7.753,37.288,6,34.249,6z"
      />
      <path
        fill="#18ffff"
        d="M34.249,6H13.751C9.47,6,6,9.47,6,13.751v3.691c4.748,3.197,10.543,4.603,17.778,2.867 c8.943-2.146,14.011-6.927,15.83-12.149C38.216,6.825,36.33,6,34.249,6z"
      />
      <path
        fill="#448aff"
        d="M20.535,6h-6.784C9.47,6,6,9.47,6,13.751v9.534l0.063,0.089c4.25,6,14.75,9.875,21.625,3.563 c4-5,1.688-13.188-1.313-15.875C24.868,9.712,22.51,7.684,20.535,6z"
      />
      <path
        fill="#40c4ff"
        d="M20.973,6h-7.222C9.47,6,6,9.47,6,13.751v9.718c5.079,3.953,13.005,5.51,18.563,0.406 c4-5,1.688-13.188-1.313-15.875C22.613,7.43,21.821,6.735,20.973,6z"
      />
      <path
        fill="#00e5ff"
        d="M13.751,6C9.47,6,6,9.47,6,13.751v7.932c4.686,1.975,10.315,1.966,14.563-1.933 C23.787,15.72,22.908,9.622,20.875,6H13.751z"
      />
      <path
        fill="#18ffff"
        d="M13.751,6C9.47,6,6,9.47,6,13.751v4.726c3.476,0.382,7.055-0.459,9.979-3.144 C18.098,12.684,18.439,9.145,17.85,6H13.751z"
      />
      <path
        fill="#212121"
        d="M12.608,14.87c0,0,6.833,10.327,12.578,13.82c-2.174,0.699-6.894,3.555-15.124-1.492 c2.096,2.873,5.807,8.635,14.891,8.092c3.183-0.155,5.124-1.165,6.91-1.863s3.494-0.621,4.969,2.019 c0.311-2.407,0.388-4.659-2.096-7.221c0,0,2.456-9.363-8.001-16.751c2.174,4.348,3.433,6.8,2.411,12.791 c-2.329-1.553-10.931-8.48-12.872-10.732c1.398,2.485,5.419,7.936,6.816,9.334C20.606,21.159,12.608,14.87,12.608,14.87z"
      />
    </svg>

    <!-- Flutter -->
    <!-- https://icons8.com/icons/set/flutter -->
    <svg v-else-if="isSame('Flutter')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <polygon fill="#40c4ff" points="26,4 6,24 12,30 38,4" />
      <polygon fill="#40c4ff" points="38,22 27,33 21,27 26,22" />
      <rect
        width="8.485"
        height="8.485"
        x="16.757"
        y="28.757"
        fill="#03a9f4"
        transform="rotate(-45.001 21 33)"
      />
      <polygon fill="#01579b" points="38,44 26,44 21,39 27,33" />
      <polygon fill="#084994" points="21,39 30,36 27,33" />
    </svg>

    <!-- Dart -->
    <!-- https://icons8.com/icons/set/dart -->
    <svg v-else-if="isSame('Dart')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <path
        fill="#1565c0"
        d="M10,12l3,25l-8.019-8.019c-1.189-1.189-1.508-2.996-0.796-4.52L10,12z"
      />
      <path
        fill="#42a5f5"
        d="M27.319,6.319C26.474,5.474,25.329,5,24.135,5c-0.745,0-1.479,0.185-2.135,0.538L10,12v20.343 c0,1.061,0.421,2.078,1.172,2.828L13,37h22v-5l7-11L27.319,6.319z"
      />
      <path fill="#1565c0" d="M10,12h21.343c1.061,0,2.078,0.421,2.828,1.172L42,21v16h-7L10,12z" />
      <polygon fill="#85cbf8" points="35,37 13,37 19,43 35,43" />
    </svg>

    <!-- ECharts -->
    <svg
      v-else-if="isSame('ECharts')"
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 225.000000 225.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M982 2240 c-262 -37 -482 -149 -662 -337 -95 -98 -139 -158 -196 -270 -83 -163 -118 -313 -118 -508 0 -323 113 -588 346 -811 163 -155 337 -245 573 -295 91 -20 323 -17 425 5 377 80 686 343 824 702 52 137 70 237 70 399 0 195 -35 345 -118 508 -57 112 -101 172 -196 270 -157 164 -343 269 -560 318 -99 22 -297 32 -388 19z m247 -515 c144 -46 260 -144 327 -277 85 -168 86 -337 3 -515 -17 -38 -35 -81 -39 -96 -25 -82 83 -172 159 -133 40 21 81 73 81 102 0 43 -27 91 -65 117 l-37 25 26 17 c62 41 156 -8 178 -93 9 -37 17 -46 53 -63 79 -37 111 -148 57 -202 -20 -19 -20 -19 -32 17 -16 51 -62 86 -111 86 -48 0 -58 -5 -145 -71 -146 -111 -287 -159 -464 -159 -185 0 -329 52 -464 168 -164 141 -257 334 -259 537 -1 159 52 286 167 401 114 115 229 162 393 163 72 1 109 -5 172 -24z"
        />
      </g>
    </svg>

    <!-- Vite -->
    <!-- https://icons8.com/icons/set/vite -->
    <svg
      v-else-if="isSame('Vite')"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      baseProfile="basic"
    >
      <linearGradient
        id="oOTIjsOjTqJdvfy5S4iCZa"
        x1="13.315"
        x2="38.005"
        y1="514.906"
        y2="481.377"
        gradientTransform="matrix(1 0 0 -1 0 514)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#41d1ff" />
        <stop offset="1" stop-color="#9231be" />
      </linearGradient>
      <path
        fill="url(#oOTIjsOjTqJdvfy5S4iCZa)"
        d="M44.86,9.976L25.023,45.448c-0.41,0.732-1.462,0.737-1.878,0.008L2.915,9.979 C2.462,9.185,3.141,8.223,4.041,8.384l19.859,3.55c0.127,0.023,0.256,0.022,0.383-0.001l19.443-3.544 C44.623,8.225,45.305,9.18,44.86,9.976z"
      />
      <linearGradient
        id="oOTIjsOjTqJdvfy5S4iCZb"
        x1="25.502"
        x2="37.131"
        y1="508.764"
        y2="428.99"
        gradientTransform="matrix(1 0 0 -1 0 514)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#fed100" />
        <stop offset="1" stop-color="#e36001" />
      </linearGradient>
      <path
        fill="url(#oOTIjsOjTqJdvfy5S4iCZb)"
        d="M33.574,3.01L19.019,5.862c-0.239,0.047-0.416,0.25-0.431,0.493l-0.895,15.121 c-0.021,0.356,0.306,0.633,0.654,0.552l4.052-0.935c0.379-0.087,0.722,0.246,0.644,0.628l-1.204,5.895 c-0.081,0.397,0.291,0.736,0.679,0.618l2.503-0.76c0.388-0.118,0.761,0.222,0.679,0.62l-1.913,9.26 c-0.12,0.579,0.651,0.895,0.972,0.398l0.215-0.332l11.86-23.669c0.199-0.396-0.144-0.848-0.579-0.764l-4.171,0.805 c-0.392,0.076-0.725-0.289-0.615-0.673l2.722-9.438C34.301,3.299,33.967,2.933,33.574,3.01z"
      />
    </svg>

    <!-- Webpack -->
    <!-- https://icons8.com/icons/set/webpack -->
    <svg v-else-if="isSame('Webpack')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <polygon points="2.371,6.006 2.372,6.005 2.371,6.005" />
      <polygon fill="#1B75BB" points="12.434,18.74 18.513,15.452 18.513,8.939 12.434,12.391" />
      <polygon fill="#8AD0F3" points="23,6.39 19.381,8.444 19.381,15.839 23,17.896" />
      <polygon fill="#1B75BB" points="18.105,8.185 12.002,4.883 5.899,8.185 12.002,11.65" />
      <polygon fill="#8AD0F3" points="18.597,16.38 12.434,19.714 12.434,24 22.324,18.498" />
      <polygon fill="#8AD0F3" points="11.567,19.714 5.405,16.38 1.677,18.498 11.567,24" />
      <polygon fill="#8AD0F3" points="1,17.896 4.619,15.839 4.619,8.444 1,6.39" />
      <polygon fill="#8AD0F3" points="5.019,7.686 11.566,4.144 11.566,0 1.424,5.644" />
      <polygon fill="#1B75BB" points="11.567,12.391 5.488,8.939 5.488,15.452 11.567,18.74" />
      <polygon fill="#8AD0F3" points="12.434,4.144 18.981,7.687 22.577,5.644 12.434,0" />
    </svg>

    <!-- Tailwind CSS -->
    <svg
      v-else-if="isSame('Tailwind CSS')"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.333 9.933C7.088 6.911 8.978 5.4 12 5.4c4.533 0 5.1 3.4 7.367 3.967 1.511.377 2.833-.189 3.966-1.7-.755 3.022-2.644 4.533-5.666 4.533-4.534 0-5.1-3.4-7.367-3.967-1.511-.378-2.833.189-3.967 1.7zm-5.666 6.8C1.422 13.711 3.31 12.2 6.333 12.2c4.534 0 5.1 3.4 7.367 3.967 1.51.377 2.833-.19 3.967-1.7C16.91 17.489 15.022 19 12 19c-4.533 0-5.1-3.4-7.367-3.967-1.511-.378-2.833.189-3.966 1.7z"
        fill="url(#prefix__paint0_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1=".667"
          y1="-6.689"
          x2="23.333"
          y2="31.089"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2383AE" />
          <stop offset="1" stop-color="#6DD7B9" />
        </linearGradient>
      </defs>
    </svg>

    <!-- Vuetify -->
    <!-- https://cdn.vuetifyjs.com/docs/images/brand-kit/v-logo.svg -->
    <svg
      v-else-if="isSame('Vuetify')"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      fill="none"
    >
      <path
        d="M203.087 130.155L144.963 230.852L200 326.236L272.896 199.975L345.758 73.7152H235.651L203.087 130.155Z"
        fill="#1697F6"
      />
      <path
        d="M127.137 199.975L130.955 206.615L185.328 112.393L207.668 73.7152H200H54.2415L127.137 199.975Z"
        fill="#AEDDFF"
      />
      <path
        d="M235.651 73.7152C263.203 164.385 200 326.236 200 326.236L144.963 230.852L235.651 73.7152Z"
        fill="#1867C0"
      />
      <path
        d="M207.668 73.7152C91.586 73.7152 130.955 206.615 130.955 206.615L207.668 73.7152Z"
        fill="#7BC6FF"
      />
    </svg>

    <!-- Nuxt.js -->
    <svg
      v-else-if="isSame('Nuxt.js')"
      viewBox="0 0 124 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M55.75 27.155c-3.222-5.54-11.278-5.54-14.5 0L6.134 87.535C2.912 93.075 6.94 100 13.384 100h27.413c-2.753-2.407-3.773-6.57-1.69-10.142L65.704 44.27 55.75 27.155z"
        fill="#80EEC0"
      />
      <path
        d="M78 40.4c2.667-4.533 9.333-4.533 12 0L119.06 89.8c2.667 4.533-.666 10.199-5.999 10.199H54.938c-5.333 0-8.666-5.666-6-10.199L78 40.4z"
        fill="#00DC82"
      />
    </svg>

    <!-- Unity -->
    <!-- https://icons8.com/icons/set/unity -->
    <svg v-else-if="isSame('Unity')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <polygon fill="#fff" points="33.78,8.995 19.872,12.482 9.76,22.502 25.768,22.502" />
      <polygon fill="#fff" points="9.793,25.503 19.873,35.446 33.82,38.933 25.804,25.503" />
      <polygon fill="#fff" points="36.433,10.528 28.447,24.001 36.433,37.434 40.294,24.001" />
      <polygon
        fill="none"
        stroke="#000"
        stroke-miterlimit="10"
        points="20.126,12.934 32.738,9.771 25.483,22.002 10.975,22.002"
        opacity=".07"
      />
      <polygon
        fill="none"
        stroke="#1d1d1b"
        stroke-width="2"
        points="20.126,12.934 32.738,9.771 25.483,22.002 10.975,22.002"
        opacity=".05"
      />
      <polygon
        fill="none"
        stroke="#000"
        points="20.126,12.934 32.738,9.771 25.483,22.002 10.975,22.002"
        opacity=".07"
      />
      <polygon
        fill="none"
        stroke="#000"
        stroke-miterlimit="10"
        points="36.272,36.185 29.029,24.001 36.272,11.78 39.774,24.001"
        opacity=".07"
      />
      <polygon
        fill="none"
        stroke="#000"
        stroke-miterlimit="10"
        points="20.126,34.994 11.012,26.003 25.52,26.003 32.775,38.156"
        opacity=".07"
      />
      <polygon
        fill="none"
        stroke="#1d1d1b"
        stroke-width="2"
        points="36.272,36.185 29.029,24.001 36.272,11.78 39.774,24.001"
        opacity=".05"
      />
      <polygon
        fill="none"
        stroke="#000"
        points="36.272,36.185 29.029,24.001 36.272,11.78 39.774,24.001"
        opacity=".07"
      />
      <g>
        <polygon
          fill="none"
          stroke="#1d1d1b"
          stroke-width="2"
          points="20.126,34.994 11.012,26.003 25.52,26.003 32.775,38.156"
          opacity=".05"
        />
        <polygon
          fill="none"
          stroke="#000"
          points="20.126,34.994 11.012,26.003 25.52,26.003 32.775,38.156"
          opacity=".07"
        />
      </g>
      <linearGradient
        id="_SHrDBwHedFQ~y1bkV39Ka"
        x1="16.008"
        x2="39.945"
        y1="6.199"
        y2="45.892"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#636363" />
        <stop offset="1" stop-color="#444" />
      </linearGradient>
      <path
        fill="url(#_SHrDBwHedFQ~y1bkV39Ka)"
        d="M36.272,36.185l-7.243-12.184l7.243-12.221l3.502,12.221L36.272,36.185z M20.126,34.994 l-9.115-8.991H25.52l7.254,12.153L20.126,34.994z M20.126,12.934l12.611-3.162l-7.254,12.231H10.975L20.126,12.934z M37.687,4.033 L22.579,7.955c-0.26,0.068-0.483,0.236-0.619,0.469l-2.243,3.841l-4.533-0.034c-0.266-0.002-0.521,0.101-0.712,0.286L3.39,23.275 c-0.409,0.398-0.409,1.055,0.001,1.452l11.081,10.724c0.19,0.184,0.446,0.286,0.711,0.284l4.534-0.034l2.244,3.842 c0.135,0.232,0.357,0.4,0.617,0.468l15.108,3.956c0.536,0.14,1.085-0.177,1.231-0.711l4.047-14.789 c0.074-0.269,0.033-0.557-0.113-0.795l-2.249-3.667l2.249-3.674c0.146-0.238,0.187-0.526,0.113-0.795L38.916,4.744 C38.77,4.211,38.222,3.894,37.687,4.033z"
      />
    </svg>

    <!-- Figma -->
    <svg
      v-else-if="isSame('Figma')"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.25 19c1.794 0 3.25-1.344 3.25-3v-3H7.25c-1.793 0-3.249 1.344-3.249 3s1.456 3 3.25 3z"
        fill="#0ACF83"
      />
      <path
        d="M4.001 10c0-1.656 1.456-3 3.25-3H10.5v6H7.25c-1.793 0-3.249-1.344-3.249-3z"
        fill="#A259FF"
      />
      <path d="M4.002 4c0-1.656 1.455-3 3.249-3h3.25v6H7.25C5.457 7 4 5.656 4 4z" fill="#F24E1E" />
      <path d="M10.5 1h3.25c1.793 0 3.249 1.344 3.249 3s-1.456 3-3.25 3H10.5V1z" fill="#FF7262" />
      <path
        d="M16.999 10c0 1.656-1.456 3-3.25 3-1.793 0-3.249-1.344-3.249-3s1.456-3 3.25-3c1.793 0 3.249 1.344 3.249 3z"
        fill="#1ABCFE"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  brand: {
    type: String,
    required: true,
    default: ''
  }
})

/**
 * Checks if passed value matches with the prop value.
 * @param {string} value
 * @returns {boolean}
 */
const isSame = (value: string): boolean => {
  return props.brand?.toLowerCase() === value?.toLowerCase()
}
</script>
