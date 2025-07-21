import arcjet, { tokenBucket } from "@arcjet/next";

const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics: ["userId"], // track userid for limiting daily trasaction limit 
    rules : [
        tokenBucket({
            mode: "LIVE",
            refillRate: 8,
            interval: 3600,
            capacity : 8,
        })
    ]
});
export default aj;