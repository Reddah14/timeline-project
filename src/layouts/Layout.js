const My_BG_Image = 'https://cdn.pixabay.com/photo/2020/01/11/13/22/woman-4757533_960_720.jpg';

export default {
  data() {
    return {
      title: 'Test Frontend',
      author: 'Salvador'
    }
  },
  computed: {
    styles() {
        return {
          'background-image': `url(${ My_BG_Image })`,
          'background-repeat': 'no-repeat',
          'background-size': 'cover'
        }
    }
  },
  components: {
    'my-header' : require('src/components/My_Header').default,
    'my-footer' : require('src/components/My_Footer').default
  }
}