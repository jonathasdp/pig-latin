function translatePigLatin(str) {
  return /^[aeiou]/.test(str)
    ? str.concat("way")
    : str.replace(/([^aeiou]+)(\w*)/, "$2$1ay");
}
