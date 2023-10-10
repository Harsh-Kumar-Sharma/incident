const bcrypt = require('bcryptjs');
const { db } = require('../models');
const { log } = require('winston');

const validateLogin = async ({ username, password }) => {
  const loginRes = await db.tms_logins.findOne({ where: { username } });
  if (loginRes == null) {
    throw new Error('Account with the username does not exist');
  }
  const login = loginRes.dataValues;

  const isPasswordCorrect = await bcrypt.compare(password, login.password);
  if (!isPasswordCorrect) {
    throw new Error('Incorrect Password');
  }

  // Retrieve user based on user_id from logins table
  const userRes = await db.tms_users.findOne({ where: { id: login.user_id } });
  if (userRes == null) {
    throw new Error('User not found');
  }

  const user = userRes.dataValues;
  user.username = login.username;

  // Retrieve role_id from the user object
  const { role_id } = user;

  // Retrieve role details based on role_id
  const roleRes = await db.tms_master_roles.findOne({ where: { id: role_id } });
  if (roleRes == null) {
    throw new Error('Role not found');
  }

  // Update login status
  await db.tms_logins.update({ is_active: true, updated_at: new Date().toISOString() }, { where: { user_id: user.id } });

  return user;
};

/**
 * Logout user
 * @param {*} userId
 * @returns
 */
const logoutUser = async (userId) => {
  await db.tms_logins.update({ is_active: false, updated_at: new Date().toISOString() }, { where: { user_id: userId } });
  return true;
};

module.exports = {
  validateLogin,
  logoutUser,
};
