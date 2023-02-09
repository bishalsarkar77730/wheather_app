import User from "../Models/users.js";

export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const dataupdate = {
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        city: req.body.city,
      };
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          ...dataupdate,
        },
        { new: true }
      );
      const { password, ...others } = updatedUser._doc;
      res.status(200).json(others);
    } catch (error) {
      next(error);
    }
  } else {
    return res.status(200).json({
      message: "You can update only your account!",
      success: false,
    });
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been Deleted");
    } catch (error) {
      next(error);
    }
  } else {
    return res.status(200).json({
      message: "You can Delete only your account!",
      success: false,
    });
  }
};

export const getUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      next(err);
    }
  } else {
    return res.status(200).json({
      message: "You can access only your account!",
      success: false,
    });
  }
};

export const getAllusers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
