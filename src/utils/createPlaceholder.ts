import placeholderImage from "../assets/placeholderImage.png"

export const createPlaceholder = (image:string) => {
    if(image === "N/A") return placeholderImage
    else return image
}