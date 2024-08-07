const generateAlphabet = (length) => {
  let i;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let character = "";
  const charLength = characters.length;
  for (i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charLength);
    character += characters.charAt(randomIndex);
  }

  return character;
};

const generateRandomNumber = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

export const generatePnrNumber = () => {
  return `BTBTN${generateAlphabet(4)}${generateRandomNumber()}`;
};
