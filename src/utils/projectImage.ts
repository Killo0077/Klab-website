// Builds src/srcset/size attributes for a catalogue image.
// Large images get a 640px-wide "-640.webp" sibling for card-sized display.
const SMALL = 640;

export function projectImage(image: string, width?: number, height?: number) {
    const src = encodeURI(image);
    if (!width || !height || width <= SMALL) return { src, width, height };
    const small = encodeURI(image.replace(/\.webp$/, `-${SMALL}.webp`));
    return {
        src,
        srcset: `${small} ${SMALL}w, ${src} ${width}w`,
        width,
        height,
    };
}

export const CARD_SIZES = "(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 400px";
