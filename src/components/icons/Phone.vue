<template>
    <svg style="max-height: 60vh; margin-top: 10vh;" version="1.1" viewBox="0 0 655 393" xmlns="http://www.w3.org/2000/svg">
        <text id="sliderText" x="327.5" y="196.5" text-anchor="middle" dominant-baseline="middle" fill="cyan"
            font-size="1.5em">Deciphering Ancient Technology</text>
        <rect id="sliderBg" x="20%" y="30%" width="60%" height="9.8%" />
        <rect id="sliderLoaded" x="20%" y="30%" width="20%" height="10%" />
        <g transform="translate(-132 -2.18)">
            <g transform="translate(-6103 -5665)">
                <path fill="white"
                    d="m6890 5761c-.254-20.6-.761-40-1.14-43.2-2.03-16.8-8.76-30-19.2-37.9-5.46-4.12-13-7.68-19.9-9.26-5.27-1.27-7.87-1.4-34.6-1.65-23.4-.254-29.1-.444-30.1-1.21l-42.6.0635h-68.6c-1.14.825-25.1.952-197 1.14l-196 .127-5.39 1.46c-14.9 4-26.8 14.2-32.6 27.7-2.41 5.84-4.76 14.6-5.46 20.6-2.6 22.1-2.6 195 0 217 1.78 14.7 7.42 27.8 15.7 36 5.9 5.9 12.6 9.65 22 12.3l5.08 1.46 199 .19c176 .127 199 .254 200 1.08h43.5c1.14-.761 10-.952 61.6-1.14 65-.254 62.2-.0635 72.3-3.62 17.6-6.09 29.3-22.3 32-44.8.761-5.84 1.9-85.4 1.78-118-.0633-11.4-.317-37.5-.571-58.1zm-67.2 213c-.698 1.21-4.25 1.21-261 1.21-202 0-261-.19-261-.761-.571-.571-.761-34.1-.761-147 0-132 .127-147 1.02-147 .888-.952 25.4-1.02 261-1.02 143 0 260 .254 261 .508.381.254.888.888 1.08 1.4.698 1.84.508 292-.19 293z" />
            </g>
        </g>
    </svg>
</template>

<style scoped>
#sliderBg {
    stroke: darkcyan;
    stroke-dashoffset: 500;
    animation: sliderBgAnim 50s infinite;
    stroke-dasharray: 20px;
    /* fill: red; */
}

@keyframes sliderBgAnim {
    50% {
        stroke-dashoffset: 0;
        stroke-dasharray: 10px 5px;
    }
}

#sliderLoaded {
    fill: cyan;
    animation: sliderLoaded 200s infinite;
}

@keyframes sliderLoaded {
    50% {
        fill: darkcyan;
        width: 30%;
    }
}
</style>

