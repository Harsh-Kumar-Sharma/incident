const roles = ["Superadmin", "Admin"];

const roleRights = new Map();

// Superadmin permissions
roleRights.set(roles[0], ["auth"]);

// Admin permissions
roleRights.set(roles[1], ["auth"]);

module.exports = {
  roles,
  roleRights,
};