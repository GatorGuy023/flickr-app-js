//takes input from the search bar and returns it as a comma seperated string
export const formatTags = (tagsString) => {
    const returnStr = tagsString
        .split(" ")
        .filter((value) => value)
        .join(",");

    return returnStr;
};

//Returns a formatted url supported by flickr to display stored images
export const getImageUrl = (image) => {
    return `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
};
