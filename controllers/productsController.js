const controller = {

    detail: (req, res)=>{
        res.render("products/Detail");
    },

    productCart: (req, res)=>{
        res.render("products/productCart");
    },

    create: (req, res)=>{
        res.render("products/create");
    },

    edit: (req, res)=>{
        res.render("products/edit");
    }


}

module.exports = controller;