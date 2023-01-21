import type { Box } from "second/src/box";
import { add } from "../../second/src/lib";

export const magic = function(a: Box, b: Box) {
    return add({
        width: a.width, height: b.height
    } as Box, {
        width: a.width - b.width,
        height: a.height - b.height
    } as Box)
}
