const app = require('fastify')({
    logger: true
})

app.get('/products', async (request, reply) => {
    const searchTerm = request.query['search']
    const products = require('./products.json')

    if(!searchTerm) return products

    const filteredProducts = []
    for(product of products) {
        if (product.name.includes(searchTerm)){
            filteredProducts.push(product)
        }
    }
    return filteredProducts
})

app.listen(3000, async (err, address) => {
    if(err){
        app.log.error(1)
    }
    app.log.info('server listening on ${address}')
})
