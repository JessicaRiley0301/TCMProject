module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        josefin : "'Josefin Sans', sans-serif",
        amatic: "'Amatic SC', cursive",
        gentium: "'Gentium Basic', serif",
        apple: "'Homemade Apple', cursive",
        imenglish: "'Im Fell English', serif"
      },
      backgroundImage: {
        'homeimage': "url('./Images/booktea.jpg')",
        'papertea': "url('./Images/papertea.jpg')",
        'booktea': "url('./Images/booktea.jpg')",
        'bamboo': "url('./Images/bamboo.jpg')",
        'stones': "url('./Images/stones.jpg')",
        'bambooforest': "url('./Images/bambooforest.jpg')",
        'zenstones': "url('./Images/zenstones.jpg')",
        'zenstones2': "url('./Images/zenstones2.jpg')",
        'chineseherbs': "url('./Images/chineseherbs.jpg')",
        'acupuncture': "url('./Images/acupuncture.jpg')",
        'mortarpestle': "url('./Images/mortarpestle.jpg')",
        'papero': "url('./Images/papero.png')",
        'zenrockso': "url('./Images/zenrockso.png')",
        'bookteao': "url('./Images/bookteao.png')",
        'chineseherbso': "url('./Images/chineseherbso.png')",
        'paperteao': "url('./Images/paperteao.png')",
        'bookstoreo': "url('./Images/bookstoreo.png')",
        'storeo': "url('./Images/storeo.png')",
        'chiropractorchome1': "url('./Images/chiropractorhome1.jpg')",
        'acumassagehome': "url('./Images/acumassagehome.jpg')",
        'flowerbackground': "url('./Images/flowerbackground.jpg')",
        'booksbackground': "url('./Images/booksbackground.jpg')",
        'souloftaiji': "url('./Images/souloftaiji.jpg')",
        'qigongbook': "url('./Images/qigongbook.jpg')",
        'qigongjourney': "url('./Images/qigongjourney.jpg')",
        'lightingeyedragon': "url('./Images/lightingeyedragon.jpg')",
        'immortalsword': "url('./Images/immortalsword.jpg')",
        'cloudbackground2': "url('./Images/cloudbackground2.jpg')",
        'cherrybackground': "url('./Images/cherrybackground.jpg')",
        'jess': "url('./Images/jess.jpeg')",
        'classback': "url('./Images/classback.jpg')",
        'teabackground': "url('./Images/teabackground.jpg')",
        'clinic': "url('./Images/clinic.jpeg')",
        'aboutbackground2': "url('./Images/aboutbackground2.jpg')",
        'whiteflowerback': "url('./Images/whiteflowerback.jpg')",
        'spicebackground': "url('./Images/spicebackground.jpg')",
        'flowerbackground5': "url('./Images/flowerbackground5.jpg')",
        'lotusbackground': "url('./Images/lotusbackground1.jpg')",
        'rainy': "url('./Images/rainy.gif')",
        'store': "url('./Images/booksbackground.jpg')",
        'services': "url('./Images/bookstoreo.png')",


      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
