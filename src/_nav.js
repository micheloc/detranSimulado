export default {
  items: [
    {
      title: true,
      name: 'Produtos',
      icon: 'icon-folder',             
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}      // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: '',            // optional class names space delimited list for title item ex: "text-center"
    },

    {
      name: 'Simulado 1',
      url: '/nav/simulado1',
      icon: 'icon-pin',
    },


    {
      title: true,
      name: 'Cadastros',
      icon: 'icon-folder',             
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}      // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: '',            // optional class names space delimited list for title item ex: "text-center"
    },
  ],

};
