module.exports = {
    pages: {
        'index': {
            entry: 'src/pages/Home/main.js',
            template: 'public/index.html',
            title: 'Home',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        'catalog': {
            entry: 'src/pages/Catalog/main.js',
            template: 'public/index.html',
            title: 'Catalog',
            chunks: ['chunk-vendors', 'chunk-common', 'catalog']
        }
    }
}