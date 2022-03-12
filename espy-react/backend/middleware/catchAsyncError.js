
// This is replacement for repeating of try catch in controllers
// Here theFunc accept function as try block and if it throws error it catches it and passes it to next 

module.exports = theFunc => (req,res, next)=>{

    Promise.resolve(theFunc(req,res,next))
    .catch(
        next
    )
}
