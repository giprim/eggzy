
import { createThemeBuilder } from '@tamagui/theme-builder'

const palettes = {
  
      "light": ['hsla(222, 36%, 84%, 1)','hsla(240, 20%, 99%, 0)','hsla(240, 20%, 99%, 0.25)','hsla(240, 20%, 99%, 0.5)','hsla(240, 20%, 99%, 0.75)','hsla(227, 20%, 99%, 1)','hsla(229, 24%, 94%, 1)','hsla(230, 29%, 89%, 1)','hsla(232, 33%, 85%, 1)','hsla(233, 37%, 80%, 1)','hsla(235, 42%, 75%, 1)','hsla(236, 46%, 70%, 1)','hsla(238, 50%, 66%, 1)','hsla(239, 55%, 61%, 1)','hsla(241, 59%, 56%, 1)','hsla(260, 60%, 73%, 1)','hsla(260, 60%, 51%, 1)','hsla(260, 60%, 51%, 0.75)','hsla(260, 60%, 51%, 0.5)','hsla(260, 60%, 51%, 0.25)','hsla(260, 60%, 51%, 0)','hsla(227, 23%, 58%, 1)']
    ,
      "dark": ['hsla(229, 22%, 52%, 1)','hsla(235, 61%, 8%, 0)','hsla(235, 61%, 8%, 0.25)','hsla(235, 61%, 8%, 0.5)','hsla(235, 61%, 8%, 0.75)','hsla(235, 60%, 8%, 1)','hsla(233, 58%, 15%, 1)','hsla(232, 56%, 22%, 1)','hsla(230, 54%, 29%, 1)','hsla(229, 52%, 35%, 1)','hsla(227, 49%, 42%, 1)','hsla(225, 47%, 49%, 1)','hsla(224, 45%, 56%, 1)','hsla(222, 43%, 63%, 1)','hsla(220, 41%, 70%, 1)','hsla(260, 60%, 93%, 1)','hsla(260, 60%, 95%, 1)','hsla(260, 60%, 95%, 0.75)','hsla(260, 60%, 95%, 0.5)','hsla(260, 60%, 95%, 0.25)','hsla(260, 60%, 95%, 0)','hsla(236, 34%, 31%, 1)']
    ,
      "light_accent": ['hsla(232, 33%, 85%, 1)','hsla(0, 0%, 100%, 0)','hsla(0, 0%, 100%, 0.25)','hsla(0, 0%, 100%, 0.5)','hsla(0, 0%, 100%, 0.75)','hsla(219, 44%, 100%, 1)','hsla(220, 41%, 95%, 1)','hsla(221, 39%, 90%, 1)','hsla(222, 36%, 84%, 1)','hsla(223, 33%, 79%, 1)','hsla(224, 31%, 74%, 1)','hsla(225, 28%, 69%, 1)','hsla(226, 25%, 63%, 1)','hsla(227, 23%, 58%, 1)','hsla(228, 20%, 53%, 1)','hsla(230, 69%, 73%, 1)','hsla(219, 67%, 60%, 1)','hsla(219, 67%, 60%, 0.75)','hsla(219, 67%, 60%, 0.5)','hsla(219, 67%, 60%, 0.25)','hsla(219, 67%, 60%, 0)','hsla(239, 55%, 61%, 1)']
    ,
      "dark_accent": ['hsla(222, 43%, 63%, 1)','hsla(240, 41%, 18%, 0)','hsla(240, 41%, 18%, 0.25)','hsla(240, 41%, 18%, 0.5)','hsla(240, 41%, 18%, 0.75)','hsla(240, 41%, 18%, 1)','hsla(239, 38%, 22%, 1)','hsla(237, 36%, 26%, 1)','hsla(236, 34%, 31%, 1)','hsla(235, 31%, 35%, 1)','hsla(233, 29%, 39%, 1)','hsla(232, 27%, 43%, 1)','hsla(231, 25%, 48%, 1)','hsla(229, 22%, 52%, 1)','hsla(228, 20%, 56%, 1)','hsla(205, 69%, 90%, 1)','hsla(219, 67%, 95%, 1)','hsla(219, 68%, 95%, 0.75)','hsla(219, 68%, 95%, 0.5)','hsla(219, 68%, 95%, 0.25)','hsla(219, 68%, 95%, 0)','hsla(230, 54%, 29%, 1)']
    
}
const templates = {
  
      "light_base": {"accentBackground":0,"accentColor":0,"background0":1,"background025":2,"background05":3,"background075":4,"color1":5,"color2":6,"color3":7,"color4":8,"color5":9,"color6":10,"color7":11,"color8":12,"color9":13,"color10":14,"color11":15,"color12":16,"color0":-1,"color025":-2,"color05":-3,"color075":-4,"background":5,"backgroundHover":4,"backgroundPress":6,"backgroundFocus":6,"borderColor":8,"borderColorHover":7,"borderColorPress":9,"borderColorFocus":8,"color":-5,"colorHover":-6,"colorPress":-5,"colorFocus":-6,"colorTransparent":-1,"placeholderColor":-8,"outlineColor":-2}
    ,
      "light_alt1": {"color":-6,"colorHover":-7,"colorPress":-6,"colorFocus":-7}
    ,
      "light_alt2": {"color":-7,"colorHover":-8,"colorPress":-7,"colorFocus":-8}
    ,
      "light_surface1": {"background":6,"backgroundHover":5,"backgroundPress":7,"backgroundFocus":7,"borderColor":9,"borderColorHover":8,"borderColorFocus":9,"borderColorPress":10}
    ,
      "light_surface2": {"background":7,"backgroundHover":6,"backgroundPress":8,"backgroundFocus":8,"borderColor":10,"borderColorHover":9,"borderColorFocus":10,"borderColorPress":11}
    ,
      "light_surface3": {"background":8,"backgroundHover":7,"backgroundPress":9,"backgroundFocus":9,"borderColor":11,"borderColorHover":10,"borderColorFocus":11,"borderColorPress":12}
    ,
      "light_inverseSurface1": {"color":6,"colorHover":5,"colorPress":7,"colorFocus":7,"background":-5,"backgroundHover":-6,"backgroundPress":-5,"backgroundFocus":-6,"borderColor":-7,"borderColorHover":-8,"borderColorFocus":-9,"borderColorPress":-10}
    ,
      "light_inverseActive": {"color":6,"colorHover":5,"colorPress":7,"colorFocus":7,"background":-7,"backgroundHover":-8,"backgroundPress":-7,"backgroundFocus":-8,"borderColor":-9,"borderColorHover":-10,"borderColorFocus":-11,"borderColorPress":-12}
    ,
      "light_surfaceActive": {"background":10,"backgroundHover":10,"backgroundPress":11,"backgroundFocus":11,"borderColor":10,"borderColorHover":10,"borderColorFocus":11,"borderColorPress":11}
    ,
      "dark_base": {"accentBackground":0,"accentColor":0,"background0":1,"background025":2,"background05":3,"background075":4,"color1":5,"color2":6,"color3":7,"color4":8,"color5":9,"color6":10,"color7":11,"color8":12,"color9":13,"color10":14,"color11":15,"color12":16,"color0":-1,"color025":-2,"color05":-3,"color075":-4,"background":5,"backgroundHover":6,"backgroundPress":4,"backgroundFocus":4,"borderColor":8,"borderColorHover":9,"borderColorPress":7,"borderColorFocus":8,"color":-5,"colorHover":-6,"colorPress":-5,"colorFocus":-6,"colorTransparent":-1,"placeholderColor":-8,"outlineColor":-2}
    ,
      "dark_alt1": {"color":-6,"colorHover":-7,"colorPress":-6,"colorFocus":-7}
    ,
      "dark_alt2": {"color":-7,"colorHover":-8,"colorPress":-7,"colorFocus":-8}
    ,
      "dark_surface1": {"background":6,"backgroundHover":7,"backgroundPress":5,"backgroundFocus":5,"borderColor":9,"borderColorHover":10,"borderColorFocus":9,"borderColorPress":8}
    ,
      "dark_surface2": {"background":7,"backgroundHover":8,"backgroundPress":6,"backgroundFocus":6,"borderColor":10,"borderColorHover":11,"borderColorFocus":10,"borderColorPress":9}
    ,
      "dark_surface3": {"background":8,"backgroundHover":9,"backgroundPress":7,"backgroundFocus":7,"borderColor":11,"borderColorHover":12,"borderColorFocus":11,"borderColorPress":10}
    ,
      "dark_inverseSurface1": {"color":6,"colorHover":7,"colorPress":5,"colorFocus":5,"background":-5,"backgroundHover":-6,"backgroundPress":-5,"backgroundFocus":-6,"borderColor":-7,"borderColorHover":-8,"borderColorFocus":-9,"borderColorPress":-10}
    ,
      "dark_inverseActive": {"color":6,"colorHover":7,"colorPress":5,"colorFocus":5,"background":-7,"backgroundHover":-8,"backgroundPress":-7,"backgroundFocus":-8,"borderColor":-9,"borderColorHover":-10,"borderColorFocus":-11,"borderColorPress":-12}
    ,
      "dark_surfaceActive": {"background":10,"backgroundHover":10,"backgroundPress":9,"backgroundFocus":9,"borderColor":10,"borderColorHover":10,"borderColorFocus":9,"borderColorPress":9}
    
}

export const themes = createThemeBuilder()
  .addPalettes(palettes)
  .addTemplates(templates)
  .addThemes({
    light: {
      template: 'base',
      palette: 'light',
    },
    dark: {
      template: 'base',
      palette: 'dark',
    },
  })
  .addChildThemes(
    palettes.light_accent
      ? {
          accent: [
            {
              parent: 'light',
              template: 'base',
              palette: 'light_accent',
            },
            {
              parent: 'dark',
              template: 'base',
              palette: 'dark_accent',
            },
          ],
        }
      : {}
  )
  
  .build()
