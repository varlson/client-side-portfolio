export function textSplitter(text, lim) {
  var newText = text.slice(0, lim);
  var index = lim;
  while (newText[newText.length - 1].localeCompare(" ") != 0) {
    newText = newText.concat(text[index]);
    index += 1;
  }

  newText = newText.concat("...");
  console.log(newText);
  return newText;
}
