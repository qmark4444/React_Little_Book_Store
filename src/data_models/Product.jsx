class Product {
    constructor(id, src, title, url){
        this.id = id;
        this.src = src;
        this.title = title;
        this.url = url;
    }
}

//products should be in another file, keep it here for now
const products = [
    new Product(0, '/images/proexpress-cover.jpg', 'Pro Express.js', 'http://amzn.to/1D6qiqk' ),
    new Product(1, '/images/practicalnode-cover.jpeg', 'Practical Node.js', 'http://amzn.to/NuQ0fM' ),
    new Product(2, '/images/expressapiref-cover.jpg', 'Express API Reference', 'http://amzn.to/1xcHanf' ),
    new Product(3, '/images/reactquickly-cover.jpg', 'React Quickly', 'https://www.manning.com/books/react-quickly'),
    new Product(4, '/images/fullstack-cover.png', 'Full Stack JavaScript', 'http://www.apress.com/9781484217504')
];

export {Product, products}