export default function (app) {
    app.get('/', (req, res) => {
        return res.json({
            hello: 'world'
        })
    })
}
