const multer = require("multer");
const path = require("path");

const userImageStore=multer.diskStorageStore({
    destination: function (req, file, cb) {
      cb(null, './userImages/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,__dirname, "../userImages")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

  const ProductImageStore=multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../uploads/productImages"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+path.extname(file.originalname));
    }
  })
  
  const userImags=multer({
    storage:userImageStore(),
    limits:{fileSize:5*1024*1024},
    fileFilter:(req, file, cb) => {
      const extension=path.extname(file.originalname).toLowerCase();
      const mimetype = file.mimetype;
      const allowdExtensions ={
        jpeg:true,
        png:true,
        jpg:true
      }
      constAllowedMimeType={
        'image/jpeg':true,
        'image/png':true,
        'image/jpg':true
      }
      if(!allowdExtensions[extension] ||!allowedMimeType[mimetype]){
        cb(new Error('Only .jpeg,.png,.jpg images are allowed!'))
      }else{
        cb(null, true)
      }
    }
  })

  const productImags=multer({
    storage:userImageStore(),
    limits:{fileSize:5*1024*1024},
    fileFilter:(req, file, cb) => {
      const extension=path.extname(file.originalname).toLowerCase();
      const mimetype = file.mimetype;
      const allowdExtensions ={
        jpeg:true,
        png:true,
        jpg:true
      }
      constAllowedMimeType={
        'image/jpeg':true,
        'image/png':true,
        'image/jpg':true
      }
      if(!allowdExtensions[extension] ||!allowedMimeType[mimetype]){
        cb(new Error('Only .jpeg,.png,.jpg images are allowed!'))
      }else{
        cb(null, true)
      }
    }
  })
  module.exports = userImags;