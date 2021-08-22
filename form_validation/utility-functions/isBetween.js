//checking whether the length of the field is between min and max
const isBetween = (length,min,max) => length < min || length > max ? false : true;

export default isBetween;