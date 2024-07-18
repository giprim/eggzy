type Theme = {
  accentBackground: string;
  accentColor: string;
  background0: string;
  background025: string;
  background05: string;
  background075: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  color0: string;
  color025: string;
  color05: string;
  color075: string;
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  borderColor: string;
  borderColorHover: string;
  borderColorPress: string;
  borderColorFocus: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  placeholderColor: string;
  outlineColor: string;

}

function t(a: [number, number][]) {
  let res: Record<string,string> = {}
  for (const [ki, vi] of a) {
    res[ks[ki] as string] = vs[vi] as string
  }
  return res as Theme
}
const vs = [
  'hsla(222, 36%, 84%, 1)',
  'hsla(240, 20%, 99%, 0)',
  'hsla(240, 20%, 99%, 0.25)',
  'hsla(240, 20%, 99%, 0.5)',
  'hsla(240, 20%, 99%, 0.75)',
  'hsla(227, 20%, 99%, 1)',
  'hsla(229, 24%, 94%, 1)',
  'hsla(230, 29%, 89%, 1)',
  'hsla(232, 33%, 85%, 1)',
  'hsla(233, 37%, 80%, 1)',
  'hsla(235, 42%, 75%, 1)',
  'hsla(236, 46%, 70%, 1)',
  'hsla(238, 50%, 66%, 1)',
  'hsla(239, 55%, 61%, 1)',
  'hsla(241, 59%, 56%, 1)',
  'hsla(260, 60%, 73%, 1)',
  'hsla(260, 60%, 51%, 1)',
  'hsla(260, 60%, 51%, 0)',
  'hsla(260, 60%, 51%, 0.25)',
  'hsla(260, 60%, 51%, 0.5)',
  'hsla(260, 60%, 51%, 0.75)',
  'hsla(229, 22%, 52%, 1)',
  'hsla(235, 61%, 8%, 0)',
  'hsla(235, 61%, 8%, 0.25)',
  'hsla(235, 61%, 8%, 0.5)',
  'hsla(235, 61%, 8%, 0.75)',
  'hsla(235, 60%, 8%, 1)',
  'hsla(233, 58%, 15%, 1)',
  'hsla(232, 56%, 22%, 1)',
  'hsla(230, 54%, 29%, 1)',
  'hsla(229, 52%, 35%, 1)',
  'hsla(227, 49%, 42%, 1)',
  'hsla(225, 47%, 49%, 1)',
  'hsla(224, 45%, 56%, 1)',
  'hsla(222, 43%, 63%, 1)',
  'hsla(220, 41%, 70%, 1)',
  'hsla(260, 60%, 93%, 1)',
  'hsla(260, 60%, 95%, 1)',
  'hsla(260, 60%, 95%, 0)',
  'hsla(260, 60%, 95%, 0.25)',
  'hsla(260, 60%, 95%, 0.5)',
  'hsla(260, 60%, 95%, 0.75)',
  'hsla(0, 0%, 100%, 0)',
  'hsla(0, 0%, 100%, 0.25)',
  'hsla(0, 0%, 100%, 0.5)',
  'hsla(0, 0%, 100%, 0.75)',
  'hsla(219, 44%, 100%, 1)',
  'hsla(220, 41%, 95%, 1)',
  'hsla(221, 39%, 90%, 1)',
  'hsla(223, 33%, 79%, 1)',
  'hsla(224, 31%, 74%, 1)',
  'hsla(225, 28%, 69%, 1)',
  'hsla(226, 25%, 63%, 1)',
  'hsla(227, 23%, 58%, 1)',
  'hsla(228, 20%, 53%, 1)',
  'hsla(230, 69%, 73%, 1)',
  'hsla(219, 67%, 60%, 1)',
  'hsla(219, 67%, 60%, 0)',
  'hsla(219, 67%, 60%, 0.25)',
  'hsla(219, 67%, 60%, 0.5)',
  'hsla(219, 67%, 60%, 0.75)',
  'hsla(240, 41%, 18%, 0)',
  'hsla(240, 41%, 18%, 0.25)',
  'hsla(240, 41%, 18%, 0.5)',
  'hsla(240, 41%, 18%, 0.75)',
  'hsla(240, 41%, 18%, 1)',
  'hsla(239, 38%, 22%, 1)',
  'hsla(237, 36%, 26%, 1)',
  'hsla(236, 34%, 31%, 1)',
  'hsla(235, 31%, 35%, 1)',
  'hsla(233, 29%, 39%, 1)',
  'hsla(232, 27%, 43%, 1)',
  'hsla(231, 25%, 48%, 1)',
  'hsla(228, 20%, 56%, 1)',
  'hsla(205, 69%, 90%, 1)',
  'hsla(219, 67%, 95%, 1)',
  'hsla(219, 68%, 95%, 0)',
  'hsla(219, 68%, 95%, 0.25)',
  'hsla(219, 68%, 95%, 0.5)',
  'hsla(219, 68%, 95%, 0.75)',
]

const ks = [
'accentBackground',
'accentColor',
'background0',
'background025',
'background05',
'background075',
'color1',
'color2',
'color3',
'color4',
'color5',
'color6',
'color7',
'color8',
'color9',
'color10',
'color11',
'color12',
'color0',
'color025',
'color05',
'color075',
'background',
'backgroundHover',
'backgroundPress',
'backgroundFocus',
'borderColor',
'borderColorHover',
'borderColorPress',
'borderColorFocus',
'color',
'colorHover',
'colorPress',
'colorFocus',
'colorTransparent',
'placeholderColor',
'outlineColor']


const n1 = t([[0, 0],[1, 0],[2, 1],[3, 2],[4, 3],[5, 4],[6, 5],[7, 6],[8, 7],[9, 8],[10, 9],[11, 10],[12, 11],[13, 12],[14, 13],[15, 14],[16, 15],[17, 16],[18, 17],[19, 18],[20, 19],[21, 20],[22, 5],[23, 4],[24, 6],[25, 6],[26, 8],[27, 7],[28, 9],[29, 8],[30, 16],[31, 15],[32, 16],[33, 15],[34, 17],[35, 13],[36, 18]])

export const light = n1
const n2 = t([[0, 21],[1, 21],[2, 22],[3, 23],[4, 24],[5, 25],[6, 26],[7, 27],[8, 28],[9, 29],[10, 30],[11, 31],[12, 32],[13, 33],[14, 34],[15, 35],[16, 36],[17, 37],[18, 38],[19, 39],[20, 40],[21, 41],[22, 26],[23, 27],[24, 25],[25, 25],[26, 29],[27, 30],[28, 28],[29, 29],[30, 37],[31, 36],[32, 37],[33, 36],[34, 38],[35, 34],[36, 39]])

export const dark = n2
const n3 = t([[0, 8],[1, 8],[2, 42],[3, 43],[4, 44],[5, 45],[6, 46],[7, 47],[8, 48],[9, 0],[10, 49],[11, 50],[12, 51],[13, 52],[14, 53],[15, 54],[16, 55],[17, 56],[18, 57],[19, 58],[20, 59],[21, 60],[22, 46],[23, 45],[24, 47],[25, 47],[26, 0],[27, 48],[28, 49],[29, 0],[30, 56],[31, 55],[32, 56],[33, 55],[34, 57],[35, 53],[36, 58]])

export const light_accent = n3
const n4 = t([[0, 34],[1, 34],[2, 61],[3, 62],[4, 63],[5, 64],[6, 65],[7, 66],[8, 67],[9, 68],[10, 69],[11, 70],[12, 71],[13, 72],[14, 21],[15, 73],[16, 74],[17, 75],[18, 76],[19, 77],[20, 78],[21, 79],[22, 65],[23, 66],[24, 64],[25, 64],[26, 68],[27, 69],[28, 67],[29, 68],[30, 75],[31, 74],[32, 75],[33, 74],[34, 76],[35, 21],[36, 77]])

export const dark_accent = n4