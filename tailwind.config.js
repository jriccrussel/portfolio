module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      krona: ["Krona One", "sans-serif"],
      karla: ["Karla", "sans-serif"],
    },
    colors: {
      wht: "#f8f8f8",
      whtOne: "#FFFFFF",
      blk: "#141414",
      blkOne: "#333333",
    },
    extend: {
      screens: {
        'pcxlg': { 'max': '1920px' },
        'pclg': { 'max': '1536px' },
        'pcmd': { 'max': '1440px' },
        'pcsm': { 'max': '1367px' },
        'tbxxlg': { 'max': '1025px' },
        'tbxlg': { 'max': '907px' },
        'tblg': { 'max': '835px' },
        'tbmd': { 'max': '800px' },
        'tbsm': { 'max': '768px' },
        'slg': { 'max': '492px' },
        'smd': { 'max': '428px' },
        'ssm': { 'max': '412px' },
        'sp': { 'max': '412px' },
        'xs': { 'max': '391px' },
        'xxs': { 'max': '375px' }, 
      },
      width: {
        23: "23%",
        28: "28%",
        30: "30%",
        32: "32%",
        48: "48%",
      },
    },
  },
  plugins: [],
}