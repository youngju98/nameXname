const BASE = '가'.charCodeAt(0); // 한글 코드 시작: 44032

const INITIALS = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const MEDIALS = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
const FINALES = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

const STROKES = {
  '': 0, ㄱ: 2, ㄲ: 4, ㄴ: 2, ㄷ: 3, ㄸ: 6, ㄹ: 5, ㅁ: 4, ㅂ: 4, ㅃ: 8, ㅅ: 2, ㅆ: 4, ㅇ: 1, ㅈ: 3, ㅉ: 6, ㅊ: 4, ㅋ: 3, ㅌ: 4, ㅍ: 4, ㅎ: 3, ㄳ: 4, ㄵ: 5, ㄶ: 5, ㄺ: 7, ㄻ: 9, ㄼ: 9, ㄽ: 7, ㄾ: 9, ㄿ: 9, ㅀ: 8, ㅄ: 6, ㅏ: 2, ㅐ: 3, ㅑ: 3, ㅒ: 4, ㅓ: 2, ㅔ: 3, ㅕ: 3, ㅖ: 4, ㅗ: 2, ㅘ: 4, ㅙ: 5, ㅚ: 3, ㅛ: 3, ㅜ: 2, ㅝ: 4, ㅞ: 5, ㅟ: 3, ㅠ: 3, ㅡ: 1, ㅢ: 2, ㅣ: 1,
};

function scoreCal(char) {
  if (!char.match(/[ㄱ-ㅎ가-힣]/)) {
    return false;
  }
  let initial = '';
  let medial = '';
  let finale = '';
  if (char.match(/[ㄱ-ㅎ]/)) {
    initial = char;
  } else {
    const tmp = char.charCodeAt(0) - BASE;
    const finaleOffset = tmp % FINALES.length;
    const medialOffset = ((tmp - finaleOffset) / FINALES.length) % MEDIALS.length;
    const initialOffset = ((tmp - finaleOffset) / FINALES.length - medialOffset) / MEDIALS.length;
    initial = INITIALS[initialOffset];
    medial = MEDIALS[medialOffset];
    finale = FINALES[finaleOffset];
  }
  const initialStrokes = STROKES[initial];
  const medialStrokes = STROKES[medial];
  const finaleStrokes = STROKES[finale];
  return { numOfStrokes: initialStrokes + medialStrokes + finaleStrokes };
}

function nameScoreCal(name1, name2) {
  
  return nameScoreCal;
}

function totalScore(nameData) {
  const scoreList = [];
  for (let i = 0; i < nameData.length; i += 1) {
    for (let j = i + 1; j < nameData.length; j += 1) {
      scoreList.push();
    }
  }
}
export default scoreCal;
