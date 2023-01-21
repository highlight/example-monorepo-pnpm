import { Box } from "./box"

export const add = function(a: Box, b: Box) {
    return {
        width: a.width + b.width, 
        height: a.height + b.height
    } as Box
}