//   LOGIN
router.post('/login', async (req, res) => {
    try {
      const result  = await loginSchema.validateAsync(req.body);
  
      const user = await UserModel.findOne({ email: result.email });
      if (!user || !(await bcrypt.compare(result.password, user.password))) {
        return res.status(400).json(`Invalid email or password`);
      }
      
      //Token
      const token = jwt.sign(user.toJSON(), "privateKey");//put private key in a .env
      if (!token) throw Error('Could not sign the token');
      
      res.status(200).json({
        accessToken: token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        },
        message:`Welcome ${user.name}`
      });
  
    } catch (error) {
      res.status(422).json({
          error:error
    })
    }
  });
  
  
  export default router