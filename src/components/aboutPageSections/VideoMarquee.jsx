

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import DBFAbout from '../../assets/videos/DBFAbout.mp4'
const videos = [
    DBFAbout,
    DBFAbout,
    DBFAbout,
];

function VideoMarquee() {
    const marqueeRef = useRef(null);
    const marqueeAnim = useRef(null);
    const videoRefs = useRef([]);

    useEffect(() => {
        const el = marqueeRef.current;
        if (!el) return;

        const totalWidth = el.scrollWidth / 2.3;
        if (marqueeAnim.current) gsap.killTweensOf(el);

        marqueeAnim.current = gsap.fromTo(
            el,
            { x: 0 },
            {
                x: -totalWidth,
                duration: 20,
                ease: "linear",
                repeat: -1,
            }
        );
    }, []);

    // Set each video to start at a random time
    const handleLoadedMetadata = (idx) => {
        const video = videoRefs.current[idx];
        if (video && video.duration) {
            // Random time between 0 and (duration - 1)
            const randomTime = Math.random() * (video.duration - 1);
            video.currentTime = randomTime;
        }
    };

    return (
        <div
            className="w-full overflow-hidden bg-black py-6 cursor-pointer"
            onMouseEnter={() => marqueeAnim.current?.pause()}
            onMouseLeave={() => marqueeAnim.current?.resume()}
        >
            <div
                className="flex gap-4 md:gap-6 flex-nowrap w-fit"
                ref={marqueeRef}
            >
                {[...videos, ...videos, ...videos].map((src, idx) => (
                    <video
                        key={idx}
                        src={src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        ref={el => (videoRefs.current[idx] = el)}
                        onLoadedMetadata={() => handleLoadedMetadata(idx)}
                        className="w-[60vw] md:w-[30vw] max-w-[400px] flex-shrink-0 rounded-lg shadow-lg"
                    />
                ))}
            </div>
        </div>
    );
}

export default VideoMarquee;
