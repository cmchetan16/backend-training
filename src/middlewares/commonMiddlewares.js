
const mid1= function ( req, res, next) {
    let head = req.headers;
    
    if (!head.isfreeappuser) {
        return res.send({ msg: "missing a mandatory header" });
      }
    next()
}

module.exports.mid1= mid1
