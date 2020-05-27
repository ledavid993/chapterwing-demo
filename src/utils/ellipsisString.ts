export default function ellipsisString(maxLength: number, text: string) {
  if (text.length > maxLength) {
    return `${text.slice(0, maxLength)}...`;
  }
  return text;
}
