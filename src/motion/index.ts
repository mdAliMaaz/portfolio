
export const navVariants = {
    hidden: {
        opacity: 0,
        y: -50,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            delay: 1,
        },
    },
};


export const imageVariants = {


};

export const slideIn = (direction: string, type: string, delay: number, duration: number) => ({
    hidden: {
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
        y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
        x: 0,
        y: 0,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

// MINE
export const slideInV2 = (direction: string, type: string, delay: number, duration: number) => ({
    hidden: {
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
        y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
        opacity: 0
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

// export const staggerContainer = (staggerChildren: string, delayChildren: number) => ({
//     hidden: {},
//     show: {
//         transition: {
//             staggerChildren,
//             delayChildren,
//         },
//     },
// });

// export const textVariant = (delay) => ({
//     hidden: {
//         y: 50,
//         opacity: 0,
//     },
//     show: {
//         y: 0,
//         opacity: 1,
//         transition: {
//             type: 'spring',
//             duration: 1.25,
//             delay,
//         },
//     },
// });

export const textContainer = {
    hidden: {
        opacity: 0,
    },
    show: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
};
// MINE
// export const textContainerV2 = (delay: number, direction: string) => ({
//     hidden: {
//         x: direction === 'left' ? '-50%' : direction === 'right' ? '50%' : 0,
//         opacity: 0,
//     },
//     show: {
//         x: 0,
//         opacity: 1,
//         transition: {
//             type: 'spring',
//             duration: 1.25,
//             delay
//         },
//     }
// });




export const textVariant2 = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
            ease: 'easeIn',
        },
    },
};

export const fadeIn = (direction: string, type: string, delay: number, duration: number) => ({
    hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

export const planetVariants = (direction: string, delay: number) => ({
    hidden: {
        y: direction === 'left' ? '-50%' : '50%',
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1,
            delay
        },
    },
});

export const zoomIn = (delay: number, duration: number) => ({
    hidden: {
        scale: 0,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring',
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

export const footerVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            delay: 0.5,
        },
    },
};
