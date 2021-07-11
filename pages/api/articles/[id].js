import { articles } from '../../../data'

export default function handler({ query: {id} }, res) {
    const filtered = articles.filter((article) => article.id === id)

    if (filtered.lenght > 0){
        res.status(200).json(filtered[0])
    }
    else{
        res.status(404).json({
            message: `Article of id ${id} not found`
        })
    }
}