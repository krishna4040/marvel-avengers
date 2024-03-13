export function checkImageNotAvailable(link: string): boolean {
    const pattern = /image_not_available/i;
    const match = pattern.test(link);
    return match;
}