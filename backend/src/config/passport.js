// const jwtVerify = async (payload, done) => {
//     try {
//       const res = await sequelize.query(
//         `SELECT role_name AS role FROM tms_master_roles r
//          INNER JOIN tms_user_role_mappings urm on urm.role_id = r.id
//          WHERE urm.user_id = ${payload.sub}`,
//         db.MASTER_ROLES,
//         { raw: false }
//       );
  
//       if (!res || !res[0] || !res[0][0]) {
//         return done(null, false);
//       }
  
//       done(null, res[0][0].role);
//     } catch (error) {
//       done(error, false);
//     }
//   };
  
  // const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);
  
  // module.exports = {
  //   jwtStrategy,
  // };