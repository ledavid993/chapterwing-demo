export default function ellipsisString(maxLength: number, string: string) {
  if (string.length > maxLength) {
    return string.slice(0, maxLength) + "...";
  }
  return string;
}
