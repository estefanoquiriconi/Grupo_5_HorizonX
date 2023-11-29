const controller = {

    detail: (req, res)=>{
        res.render("products/Detail");
    },

    productCart: (req, res)=>{
        res.render("products/productCart");
    }

}

module.exports = controller;