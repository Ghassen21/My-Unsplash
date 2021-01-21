
const MyUnsplashDB_Image_table_register = require("../models/Registe imgtable");
const cloud = require('../middleware/cloudinaryConfig')

exports.fetchAll = async (req, res) => {
  try {
    const Allimages = await MyUnsplashDB_Image_table_register.findAll();
    res.status(200).json({ message: "Fetched from dabaBase successfully", Allimages });
  } catch (err) {
    res.status(500).json({ errorFetchingfromDB: err.message });
  }

}
exports.images = async (req, res) => {
  try {
    const result = await cloud.uploads(req.files[0].path)
    console.log("resultfromcloudnery", result)
    const imageDetails = {
      label: req.files[0].originalname,
      ImageUrl: result.ImageUrl
    }
    const SavedImages = await MyUnsplashDB_Image_table_register.create(imageDetails)
    res.status(200).json({ msgfile: "Images Saved ", SavedImages })
  } catch (err) {
    res.status(500).json({ errorSavingintoDB: err.message });
  }
}
/*exports.delelte= async (req, res) => {
  try {
    // Find image by id
    let imagefoundbyid = await MyUnsplashDB_Image_table_register.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(user.cloudinary_id);
    // Delete user from db
    await user.remove();
    reres.status(200).json({ messagedeleting: "deleting  from dabaBase successfully", imgaedeleted})
  } catch (err) {
    res.status(500).json({ errordeletingfromDB: err.message });
  }
  
};*/




/*exports.signup = async (req, res) => {
  const errors = validationResult(req);
  console.log("erro:", errors);
  console.log("post on /register", req.body);
  if (!errors.isEmpty()) return;
  try {
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const Password = req.body.Password;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(Password, salt);

    //Insert into table
    var result = await User_table_register.create({
      FirstName,
      LastName,
      Email,
      Password: hashedPassword,
    });
    res.status(201).json({ message: "User registered!", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};*/

