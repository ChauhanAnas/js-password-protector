const crypto = require('crypto');

const SALT_LENGTH = 16;
const HASH_ALGORITHM = 'sha256';
const ITERATIONS = 10000;
const KEY_LENGTH = 64;

const generateSalt = () => {
  return crypto.randomBytes(SALT_LENGTH).toString('hex');
}

const hashPassword = (password, salt) => {
  const hash = crypto.pbkdf2Sync(password, salt, ITERATIONS, KEY_LENGTH, HASH_ALGORITHM);
  return hash.toString('hex');
}

const getPasswordHash = (password) => {
  const salt = generateSalt();
  const hashedPassword = hashPassword(password, salt);
  return `${salt}:${hashedPassword}`;
}

const verifyPassword = (password, hashedPassword) => {
  const [salt, originalHash] = hashedPassword.split(':');
  const hash = hashPassword(password, salt);
  return hash === originalHash;
}

module.exports = {
    getPasswordHash,
    verifyPassword,
};