
const mockData: IProduct[] = [
    {
        id: 'test',
        title: 'test',
        description: 'test',
        imgUrl: 'test',
        thumbUrl: 'test',
        quantity: 1,
        price: 1,
        provider: 'test',
        publisher: 'test',
        stock: 1,
        category: 'test',
        author: 'test'
    }
]

export const getProductList = (): Promise<IResponseGetProductApi> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    products: mockData,
                },
                message:'Ok',
                code:200,
                status:'Ok'
            })
        }, 1000)
        if(!resolve) reject()
    })
}
